"use client";

import { useEffect, useRef } from "react";
import { Canvas as FabricCanvas, PencilBrush, util } from "fabric";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    console.log("useEffect RUNNING");

    const canvas = new FabricCanvas(el, {
      isDrawingMode: true,
      backgroundColor: "transparent",
    });

    // 🔥 FABRIC v6 — MANUAL BRUSH CREATION
    const brush = new PencilBrush(canvas);
    brush.width = 4;
    brush.color = "#525252";

    canvas.freeDrawingBrush = brush;

    console.log("drawing mode:", canvas.isDrawingMode);
    console.log("brush:", canvas.freeDrawingBrush);

    // Smooth fade-in animation
    canvas.on("path:created", (e) => {
      const path = e.path;
      if (!path) return;

      path.opacity = 0;
      util.animate({
        startValue: 0,
        endValue: 1,
        duration: 200,
        onChange: (v) => {
          path.opacity = v;
          canvas.requestRenderAll();
        },
      });
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="graph-paper -mx-4 flex justify-center">
      <canvas
        ref={canvasRef}
        height={200}
        width={768}
        className="bg-transparent"
        style={{ touchAction: "none" }}
      />
    </div>
  );
};

export default Canvas;
