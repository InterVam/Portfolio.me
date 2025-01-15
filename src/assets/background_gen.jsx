import React, { useEffect, useRef } from "react";

const RetroBinaryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      // Set canvas dimensions to match the viewport
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Dynamically scale font size for responsiveness
      const fontSize = Math.max(window.innerWidth / 100, 30);
      const cols = Math.floor(canvas.width / fontSize) + 2;
      const rows = Math.floor(canvas.height / fontSize);

      // Predefined color palette for the numbers
      const colors = [
        "rgba(165, 243, 252, 1)", // Cyan
        "rgba(196, 181, 253, 1)", // Light Purple
        "rgba(110, 231, 183, 1)", // Neon Green
        "rgba(252, 252, 252, 1)", // Soft White
      ];

      // Generate matrix of random binary values and colors
      const binaryMatrix = Array.from({ length: cols }, () =>
        Array.from({ length: rows }, () => ({
          value: Math.random() > 0.5 ? "1" : "0",
          color: colors[Math.floor(Math.random() * colors.length)],
        }))
      );

      const draw = () => {
        // Clear the canvas to prevent dimming and overlapping frames
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
        // Reset global alpha to avoid stacking transparency
        ctx.globalAlpha = 0.1   ;
      
        // Set solid background color
        ctx.fillStyle = "#0E1B26"; // Deep teal background
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // Draw binary numbers
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const { value, color } = binaryMatrix[i][j];
      
            // Apply random color
            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;
            ctx.fillText(value, i * fontSize, j * fontSize + fontSize);
      
            // Update binary value and color randomly
            if (Math.random() > 0.9) {
              binaryMatrix[i][j] = {
                value: Math.random() > 0.5 ? "1" : "0",
                color: colors[Math.floor(Math.random() * colors.length)],
              };
            }
          }
        }
      
        requestAnimationFrame(draw);
      };
      
      // Start the animation
      requestAnimationFrame(draw);
    };

    // Initial setup
    resizeCanvas();

    // Re-adjust canvas on window resize
    window.addEventListener("resize", resizeCanvas);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100vh",
        background: "#0E1B26",
      }}
    ></canvas>
  );
};

export default RetroBinaryBackground;
