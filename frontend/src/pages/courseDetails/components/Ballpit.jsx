import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const DEFAULT_COLORS = ["#f1c025", "#cfab3b", "#a98d17"];

export default function Ballpit({
  count = 75,
  gravity = 0.5,
  friction = 0.9975,
  wallBounce = 0.95,
  followCursor = true,
  colors = DEFAULT_COLORS,
  minSize = 0.36,
  maxSize = 0.76,
}) {
  const containerRef = useRef(null);
  const colorsKey = Array.isArray(colors) ? colors.join(",") : "#f1c025,#cfab3b,#a98d17";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ballCount = Math.min(Math.max(16, count), 85);
    const scene = new THREE.Scene();

    const initW = Math.max(1, container.clientWidth || 600);
    const initH = Math.max(1, container.clientHeight || 440);

    const camera = new THREE.PerspectiveCamera(40, initW / initH, 0.1, 100);
    camera.position.set(0, 0, 15);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(initW, initH);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xfff4cc, 1.45);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffe484, 3.0);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xffb700, 3.6, 30);
    rimLight.position.set(-8, -5, 8);
    scene.add(rimLight);

    const cursorLight = new THREE.PointLight(0xfff1a8, 3.2, 16);
    cursorLight.position.set(0, 0, 5);
    scene.add(cursorLight);

    // 20x20 sphere segments cuts vertex overhead in half while remaining smooth
    const geometry = new THREE.SphereGeometry(1, 20, 20);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.2,
      metalness: 0.65,
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, ballCount);
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(instancedMesh);

    const parsedColors = colorsKey.split(",").map((c) => new THREE.Color(c.trim()));
    for (let i = 0; i < ballCount; i++) {
      instancedMesh.setColorAt(i, parsedColors[i % parsedColors.length]);
    }
    if (instancedMesh.instanceColor) {
      instancedMesh.instanceColor.needsUpdate = true;
    }

    const getBounds = (w, h) => {
      const aspect = Math.max(1, w) / Math.max(1, h);
      const halfH =
        Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
      const halfW = halfH * aspect;
      return { halfW: halfW * 0.96, halfH: halfH * 0.94 };
    };

    let bounds = getBounds(initW, initH);
    let cachedRect = container.getBoundingClientRect();

    const updateRect = () => {
      if (container) {
        cachedRect = container.getBoundingClientRect();
      }
    };

    const balls = Array.from({ length: ballCount }, (_, i) => {
      const r =
        i === 0 && followCursor
          ? maxSize * 1.12
          : minSize + Math.random() * (maxSize - minSize);
      return {
        x: (Math.random() * 2 - 1) * bounds.halfW * 0.85,
        y: (Math.random() * 2 - 1) * bounds.halfH * 0.85,
        z: (Math.random() * 2 - 1) * 1.4,
        vx: (Math.random() - 0.5) * 0.07,
        vy: (Math.random() - 0.5) * 0.07,
        vz: (Math.random() - 0.5) * 0.035,
        r,
      };
    });

    const pointer = {
      x: 0,
      y: 0,
      active: false,
    };

    let isVisible = true;
    let animId = null;

    const handlePointerMove = (e) => {
      if (!isVisible) return;
      const rect = cachedRect;
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      pointer.active = inside;
      if (inside) {
        const nx = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1;
        const ny = -((e.clientY - rect.top) / Math.max(1, rect.height)) * 2 + 1;
        pointer.x = nx * bounds.halfW;
        pointer.y = ny * bounds.halfH;
      }
    };

    const handleResize = () => {
      if (!container) return;
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      bounds = getBounds(w, h);
      updateRect();
    };

    const dummy = new THREE.Object3D();

    const animate = () => {
      if (!isVisible) {
        animId = null;
        return;
      }

      const g = gravity * 0.011;
      const now = performance.now();

      if (followCursor && balls.length > 0) {
        const leader = balls[0];
        const targetX = pointer.active
          ? pointer.x
          : Math.sin(now * 0.0014) * bounds.halfW * 0.42;
        const targetY = pointer.active
          ? pointer.y
          : Math.cos(now * 0.0019) * bounds.halfH * 0.32;
        leader.vx = (targetX - leader.x) * 0.16;
        leader.vy = (targetY - leader.y) * 0.16;
        leader.x += leader.vx;
        leader.y += leader.vy;
        leader.z += (0.5 - leader.z) * 0.14;
        cursorLight.position.set(leader.x, leader.y, 4.5);
      }

      for (let i = followCursor ? 1 : 0; i < ballCount; i++) {
        const b = balls[i];
        b.vy -= g;
        b.vx *= friction;
        b.vy *= friction;
        b.vz *= friction;

        b.x += b.vx;
        b.y += b.vy;
        b.z += b.vz;

        if (b.z > 1.8) {
          b.z = 1.8;
          b.vz *= -wallBounce;
        } else if (b.z < -1.8) {
          b.z = -1.8;
          b.vz *= -wallBounce;
        }

        if (b.x + b.r > bounds.halfW) {
          b.x = bounds.halfW - b.r;
          b.vx *= -wallBounce;
        } else if (b.x - b.r < -bounds.halfW) {
          b.x = -bounds.halfW + b.r;
          b.vx *= -wallBounce;
        }

        if (b.y - b.r < -bounds.halfH) {
          b.y = -bounds.halfH + b.r;
          b.vy *= -wallBounce;
        } else if (b.y + b.r > bounds.halfH) {
          b.y = bounds.halfH - b.r;
          b.vy *= -wallBounce;
        }
      }

      for (let i = 0; i < ballCount; i++) {
        const a = balls[i];
        for (let j = i + 1; j < ballCount; j++) {
          const b = balls[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dz = (b.z - a.z) * 0.5;
          const minDist = a.r + b.r;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < minDist * minDist && distSq > 0.00001) {
            const dist = Math.sqrt(distSq);
            const invDist = 1 / dist;
            const nx = dx * invDist;
            const ny = dy * invDist;
            const nz = dz * invDist;
            const overlap = minDist - dist;

            if (i === 0 && followCursor) {
              b.x += nx * overlap;
              b.y += ny * overlap;
              b.vx += nx * overlap * 0.3 + a.vx * 0.22;
              b.vy += ny * overlap * 0.3 + a.vy * 0.22;
            } else {
              const halfOverlap = overlap * 0.5;
              a.x -= nx * halfOverlap;
              a.y -= ny * halfOverlap;
              b.x += nx * halfOverlap;
              b.y += ny * halfOverlap;

              const rvx = b.vx - a.vx;
              const rvy = b.vy - a.vy;
              const rvz = b.vz - a.vz;
              const velAlongNormal = rvx * nx + rvy * ny + rvz * nz;

              if (velAlongNormal < 0) {
                const impulse = -(1 + wallBounce * 0.6) * velAlongNormal * 0.5;
                a.vx -= impulse * nx;
                a.vy -= impulse * ny;
                a.vz -= impulse * nz;
                b.vx += impulse * nx;
                b.vy += impulse * ny;
                b.vz += impulse * nz;
              }
            }
          }
        }
      }

      for (let i = 0; i < ballCount; i++) {
        const b = balls[i];
        dummy.position.set(b.x, b.y, b.z);
        dummy.scale.setScalar(b.r);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }
      instancedMesh.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    // Pause WebGL loop when section is scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updateRect();
          if (!animId) {
            animId = requestAnimationFrame(animate);
          }
        } else if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      },
      { threshold: 0.02 }
    );
    observer.observe(container);

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    animId = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [count, gravity, friction, wallBounce, followCursor, colorsKey, minSize, maxSize]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        contain: "strict",
      }}
    />
  );
}
