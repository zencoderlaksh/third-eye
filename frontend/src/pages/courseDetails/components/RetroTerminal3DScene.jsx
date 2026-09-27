import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  createScreenTexture,
  createMilestoneTexture,
  createCodeBadgeTexture,
  createGlyphTexture,
} from "./retro3DSceneHelpers";

export default function RetroTerminal3DScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 900;
    const height = container.clientHeight || 560;

    // Three.js Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 11.5);

    // High performance transparent WebGL Renderer
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

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0xfff5d6, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffe680, 3.2);
    keyLight.position.set(6, 8, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xf59e0b, 2.5);
    rimLight.position.set(-8, -4, -4);
    scene.add(rimLight);

    const goldPointLight = new THREE.PointLight(0xffd45a, 3.8, 14);
    goldPointLight.position.set(0, 1.0, 3.5);
    scene.add(goldPointLight);

    // Root Group for smooth Mouse Parallax Tilt
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ==========================================
    // A. CENTRAL RETRO CRT COMPUTER MONITOR
    // ==========================================
    const monitorGroup = new THREE.Group();
    rootGroup.add(monitorGroup);

    // Monitor Outer Body (Deep Matte Charcoal)
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x181a1f,
      roughness: 0.4,
      metalness: 0.25,
    });
    const bodyGeo = new THREE.BoxGeometry(3.8, 3.3, 2.6);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    monitorGroup.add(bodyMesh);

    // Front Bezel Frame (Signature Yellow / Gold Accent)
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0xdeb038,
      roughness: 0.35,
      metalness: 0.3,
    });
    const bezelGeo = new THREE.BoxGeometry(3.9, 3.4, 0.35);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.set(0, 0, 1.25);
    monitorGroup.add(bezelMesh);

    // Inner Recessed Screen Housing
    const innerScreenMat = new THREE.MeshStandardMaterial({
      color: 0x0a0c10,
      roughness: 0.8,
    });
    const innerScreenGeo = new THREE.BoxGeometry(3.3, 2.7, 0.15);
    const innerScreenMesh = new THREE.Mesh(innerScreenGeo, innerScreenMat);
    innerScreenMesh.position.set(0, 0, 1.38);
    monitorGroup.add(innerScreenMesh);

    // Glowing CRT Display Screen
    const { texture: screenTexture } = createScreenTexture();
    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTexture,
      emissiveMap: screenTexture,
      emissive: 0xffe066,
      emissiveIntensity: 0.88,
      roughness: 0.25,
    });
    const screenGeo = new THREE.PlaneGeometry(3.0, 2.4);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0, 1.46);
    monitorGroup.add(screenMesh);

    // Dials & Controls on Front Bezel
    const dialMat = new THREE.MeshStandardMaterial({
      color: 0x22262e,
      roughness: 0.2,
      metalness: 0.6,
    });
    const dialGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.14, 16);
    dialGeo.rotateX(Math.PI / 2);

    const dial1 = new THREE.Mesh(dialGeo, dialMat);
    dial1.position.set(1.5, -1.35, 1.45);
    monitorGroup.add(dial1);

    const dial2 = new THREE.Mesh(dialGeo, dialMat);
    dial2.position.set(1.2, -1.35, 1.45);
    monitorGroup.add(dial2);

    // Glowing Yellow LED Power Light
    const ledMat = new THREE.MeshBasicMaterial({ color: 0xffd45a });
    const ledMesh = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), ledMat);
    ledMesh.position.set(-1.5, -1.35, 1.45);
    monitorGroup.add(ledMesh);

    // Monitor Neck & Base Stand
    const neckMat = new THREE.MeshStandardMaterial({ color: 0x121418, roughness: 0.4 });
    const neckMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.6, 24), neckMat);
    neckMesh.position.set(0, -1.9, 0);
    monitorGroup.add(neckMesh);

    const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.28, 2.2), bodyMat);
    baseMesh.position.set(0, -2.25, 0);
    monitorGroup.add(baseMesh);

    // Keyboard in Front of Monitor
    const keyboardMat = new THREE.MeshStandardMaterial({
      color: 0x15171c,
      roughness: 0.5,
      metalness: 0.2,
    });
    const keyboardBase = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.16, 1.2), keyboardMat);
    keyboardBase.position.set(0, -2.28, 1.6);
    keyboardBase.rotation.x = -0.06;
    monitorGroup.add(keyboardBase);

    // Yellow Accent Keys on Keyboard
    const keysMat = new THREE.MeshStandardMaterial({
      color: 0xe5a93c,
      roughness: 0.35,
      metalness: 0.3,
    });
    const keysMesh = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.08, 0.95), keysMat);
    keysMesh.position.set(0, -2.18, 1.6);
    keysMesh.rotation.x = -0.06;
    monitorGroup.add(keysMesh);

    // Initial slight perspective tilt for monitor
    monitorGroup.rotation.y = 0.22;
    monitorGroup.rotation.x = 0.04;

    // ==========================================
    // B. FLOATING 3D DATABASE CYLINDER
    // ==========================================
    const databaseGroup = new THREE.Group();
    rootGroup.add(databaseGroup);
    databaseGroup.position.set(-3.7, -0.7, 0.8);

    const dbTierMat = new THREE.MeshStandardMaterial({
      color: 0x1e2229,
      roughness: 0.3,
      metalness: 0.5,
    });
    const dbRingMat = new THREE.MeshStandardMaterial({
      color: 0xffd45a,
      emissive: 0xffb700,
      emissiveIntensity: 1.2,
    });

    [-0.42, 0.0, 0.42].forEach((yPos) => {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.3, 28), dbTierMat);
      disc.position.y = yPos;
      databaseGroup.add(disc);

      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.032, 16, 32), dbRingMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = yPos;
      databaseGroup.add(ring);
    });

    // ==========================================
    // C. FLOATING 3D MECHANICAL GEAR (COGWHEEL)
    // ==========================================
    const gearGroup = new THREE.Group();
    rootGroup.add(gearGroup);
    gearGroup.position.set(3.8, -0.9, 0.7);

    const gearMat = new THREE.MeshStandardMaterial({
      color: 0xe5a93c,
      roughness: 0.3,
      metalness: 0.65,
    });

    // Main Cog Disc
    const gearCenter = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.22, 28), gearMat);
    gearCenter.rotation.x = Math.PI / 2;
    gearGroup.add(gearCenter);

    // Center Hub Hole (Axle)
    const hubMat = new THREE.MeshStandardMaterial({ color: 0x0f1115, roughness: 0.6 });
    const axleMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.24, 20), hubMat);
    axleMesh.rotation.x = Math.PI / 2;
    gearGroup.add(axleMesh);

    // 8 Radial Teeth
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.22, 0.22), gearMat);
      tooth.position.set(Math.cos(angle) * 0.84, Math.sin(angle) * 0.84, 0);
      tooth.rotation.z = angle;
      gearGroup.add(tooth);
    }

    // ==========================================
    // D. FLOATING 3D MILESTONE FLAG BADGE
    // ==========================================
    const milestoneGroup = new THREE.Group();
    rootGroup.add(milestoneGroup);
    milestoneGroup.position.set(-3.7, 2.1, 0.6);
    milestoneGroup.rotation.y = 0.25;
    milestoneGroup.rotation.z = 0.08;

    const milestoneTex = createMilestoneTexture();
    const milestoneMat = new THREE.MeshStandardMaterial({
      map: milestoneTex,
      roughness: 0.3,
      metalness: 0.2,
    });
    const milestoneMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.5, 0.14), milestoneMat);
    milestoneGroup.add(milestoneMesh);

    // ==========================================
    // E. FLOATING 3D <CODE/> BADGE
    // ==========================================
    const codeGroup = new THREE.Group();
    rootGroup.add(codeGroup);
    codeGroup.position.set(3.7, 2.2, 0.7);
    codeGroup.rotation.y = -0.22;
    codeGroup.rotation.z = -0.06;

    const codeTex = createCodeBadgeTexture();
    const codeMat = new THREE.MeshStandardMaterial({
      map: codeTex,
      roughness: 0.3,
      metalness: 0.2,
    });
    const codeMesh = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.05, 0.14), codeMat);
    codeGroup.add(codeMesh);

    // ==========================================
    // F. FLOATING 3D CPU CHIP
    // ==========================================
    const chipGroup = new THREE.Group();
    rootGroup.add(chipGroup);
    chipGroup.position.set(3.4, 0.5, 1.2);

    const chipMat = new THREE.MeshStandardMaterial({
      color: 0x1f2329,
      roughness: 0.4,
      metalness: 0.4,
    });
    const chipMesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.12), chipMat);
    chipGroup.add(chipMesh);

    // Golden Pins around Chip
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xffd45a,
      roughness: 0.2,
      metalness: 0.8,
    });
    for (let p = -0.25; p <= 0.25; p += 0.16) {
      const pinLeft = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.04), pinMat);
      pinLeft.position.set(-0.4, p, 0);
      chipGroup.add(pinLeft);

      const pinRight = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.04), pinMat);
      pinRight.position.set(0.4, p, 0);
      chipGroup.add(pinRight);
    }

    // ==========================================
    // G. FLOATING CODE BRACKETS { }, < >, [ ]
    // ==========================================
    const glyphs = [
      { char: "{ }", x: -4.8, y: 0.4, z: -0.4 },
      { char: "< >", x: -4.3, y: -1.0, z: 0.3 },
      { char: "[ ]", x: 4.8, y: 0.1, z: -0.4 },
      { char: "< >", x: 2.5, y: -2.0, z: 0.9 },
    ];
    const glyphMeshes = glyphs.map((g) => {
      const tex = createGlyphTexture(g.char);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.75,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.0), mat);
      mesh.position.set(g.x, g.y, g.z);
      rootGroup.add(mesh);
      return { mesh, baseY: g.y, speed: 1.2 + Math.random() * 0.5 };
    });

    // ==========================================
    // H. GOLDEN AMBIENT PARTICLES
    // ==========================================
    const particleCount = 65;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xffd45a,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ==========================================
    // I. INTERACTIVE MOUSE PARALLAX & ANIMATION LOOP
    // ==========================================
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let mouseCurrentX = 0;
    let mouseCurrentY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTargetX = normX * 0.35;
      mouseTargetY = normY * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseCurrentX += (mouseTargetX - mouseCurrentX) * 0.06;
      mouseCurrentY += (mouseTargetY - mouseCurrentY) * 0.06;

      rootGroup.rotation.y = mouseCurrentX;
      rootGroup.rotation.x = -mouseCurrentY;

      // 3D Objects Floating Motions
      databaseGroup.position.y = -0.7 + Math.sin(elapsed * 1.5) * 0.12;
      databaseGroup.rotation.y = elapsed * 0.45;

      gearGroup.rotation.z = elapsed * 0.7;
      gearGroup.position.y = -0.9 + Math.cos(elapsed * 1.6) * 0.1;

      milestoneGroup.position.y = 2.1 + Math.sin(elapsed * 1.3) * 0.14;
      milestoneGroup.rotation.z = 0.08 + Math.cos(elapsed * 1.1) * 0.03;

      codeGroup.position.y = 2.2 + Math.cos(elapsed * 1.4) * 0.14;
      codeGroup.rotation.z = -0.06 + Math.sin(elapsed * 1.2) * 0.03;

      chipGroup.position.y = 0.5 + Math.sin(elapsed * 1.8) * 0.1;
      chipGroup.rotation.y = Math.sin(elapsed * 0.8) * 0.35;
      chipGroup.rotation.x = Math.cos(elapsed * 0.6) * 0.25;

      glyphMeshes.forEach((g, idx) => {
        g.mesh.position.y = g.baseY + Math.sin(elapsed * g.speed + idx) * 0.12;
      });

      // Subtle particle drift
      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 900;
      const h = container.clientHeight || 560;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Cleanup
      scene.clear();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="retro-terminal-3d-canvas" />;
}
