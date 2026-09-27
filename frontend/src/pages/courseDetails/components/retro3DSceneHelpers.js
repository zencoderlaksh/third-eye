import * as THREE from "three";

// 1. Offscreen Canvas for CRT Monitor Screen (Glowing Schematic Flowchart)
export function createScreenTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");

  // Base CRT Dark Screen
  ctx.fillStyle = "#0c1015";
  ctx.fillRect(0, 0, 512, 400);

  // Subtle CRT Phosphor Grid
  ctx.strokeStyle = "rgba(246, 217, 107, 0.05)";
  ctx.lineWidth = 1;
  for (let x = 0; x < 512; x += 24) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 400);
    ctx.stroke();
  }
  for (let y = 0; y < 400; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(512, y);
    ctx.stroke();
  }

  // Outer Screen Border
  ctx.strokeStyle = "#ffd45a";
  ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, 488, 376);

  // Flowchart Node 1: [START]
  ctx.fillStyle = "rgba(255, 212, 90, 0.15)";
  ctx.strokeStyle = "#ffd45a";
  ctx.lineWidth = 2;
  ctx.roundRect(32, 40, 110, 48, 8);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ffd45a";
  ctx.font = "bold 20px monospace";
  ctx.textAlign = "center";
  ctx.fillText("[START]", 87, 71);

  // Down Arrow
  ctx.fillStyle = "#ffd45a";
  ctx.font = "bold 24px monospace";
  ctx.fillText("↓", 87, 120);

  // Node 2: CODE
  ctx.strokeStyle = "rgba(255, 212, 90, 0.8)";
  ctx.roundRect(36, 140, 102, 64, 8);
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 14px monospace";
  ctx.fillText("</> CODE", 87, 178);

  // Right Arrow
  ctx.fillText("➔", 160, 178);

  // Node 3: ALGORITHMS
  ctx.strokeStyle = "rgba(255, 212, 90, 0.8)";
  ctx.roundRect(185, 140, 115, 64, 8);
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 13px monospace";
  ctx.fillText("⚙ ALGO", 242, 178);

  // Right Arrow
  ctx.fillText("➔", 320, 178);

  // Destination Box: Big Tech
  ctx.fillStyle = "rgba(255, 212, 90, 0.08)";
  ctx.strokeStyle = "#38ef7d";
  ctx.lineWidth = 2.5;
  ctx.roundRect(345, 60, 140, 240, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = "11px sans-serif";
  ctx.fillText("CAREER TARGET:", 415, 88);

  ctx.fillStyle = "#38ef7d";
  ctx.font = "bold 18px sans-serif";
  ctx.fillText("Big Tech", 415, 116);

  // Tech Brand Icons inside Big Tech Box
  const brands = [
    { name: "Google", color: "#ffd45a", y: 154 },
    { name: "Apple", color: "#ffffff", y: 190 },
    { name: "Microsoft", color: "#60a5fa", y: 226 },
    { name: "Amazon", color: "#f97316", y: 262 },
  ];
  brands.forEach((b) => {
    ctx.fillStyle = b.color;
    ctx.font = "bold 15px sans-serif";
    ctx.fillText(b.name, 415, b.y);
  });

  // Bottom Status Bar
  ctx.fillStyle = "rgba(255, 212, 90, 0.4)";
  ctx.font = "12px monospace";
  ctx.textAlign = "left";
  ctx.fillText("SYS_READY // COMPILED 100% // 60 FPS", 32, 355);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return { texture: tex, canvas, ctx };
}

// 2. Offscreen Canvas for Milestone Flag Badge
export function createMilestoneTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 260;
  const ctx = canvas.getContext("2d");

  // Rounded pill background
  ctx.fillStyle = "#121418";
  ctx.roundRect(10, 10, 380, 240, 24);
  ctx.fill();

  ctx.strokeStyle = "rgba(246, 217, 107, 0.45)";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Flag & 75%
  ctx.fillStyle = "#ffd45a";
  ctx.font = "bold 44px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("🚩 75%", 36, 80);

  // Label
  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
  ctx.font = "bold 18px monospace";
  ctx.fillText("MILESTONE FLAG", 40, 126);

  // Progress Bar Track
  ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
  ctx.roundRect(40, 160, 320, 20, 10);
  ctx.fill();

  // Progress Bar Active Fill (75%)
  const grad = ctx.createLinearGradient(40, 0, 280, 0);
  grad.addColorStop(0, "#eab308");
  grad.addColorStop(1, "#fde047");
  ctx.fillStyle = grad;
  ctx.roundRect(40, 160, 240, 20, 10);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// 3. Offscreen Canvas for <CODE/> Badge
export function createCodeBadgeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 440;
  canvas.height = 180;
  const ctx = canvas.getContext("2d");

  // Rounded badge body
  ctx.fillStyle = "#121418";
  ctx.roundRect(10, 10, 420, 160, 32);
  ctx.fill();

  ctx.strokeStyle = "rgba(246, 217, 107, 0.5)";
  ctx.lineWidth = 3.5;
  ctx.stroke();

  // Glowing Text
  ctx.shadowColor = "#ffd45a";
  ctx.shadowBlur = 18;
  ctx.fillStyle = "#ffd45a";
  ctx.font = "bold 46px monospace";
  ctx.textAlign = "center";
  ctx.fillText("<> <CODE/>", 220, 106);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// 4. Offscreen Canvas for Floating 3D Code Glyphs
export function createGlyphTexture(symbol) {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext("2d");

  ctx.shadowColor = "#ffd45a";
  ctx.shadowBlur = 20;
  ctx.fillStyle = "#ffd45a";
  ctx.font = "bold 90px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(symbol, 100, 100);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
