import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  shape: "circle" | "square" | "triangle";
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(0, 85%, 50%)",    // Red
      "hsl(45, 100%, 50%)",  // Yellow
      "hsl(0, 0%, 8%)",      // Black
      "hsl(40, 90%, 55%)",   // Gold
      "hsl(0, 85%, 60%)",    // Light Red
    ];

    const shapes: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"];

    const newPieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    setPieces(newPieces);
  }, []);

  const getShapeStyle = (piece: ConfettiPiece) => {
    const baseStyle = {
      left: `${piece.left}%`,
      animationDelay: `${piece.delay}s`,
      animationDuration: `${piece.duration}s`,
      width: `${piece.size}px`,
      height: `${piece.size}px`,
      backgroundColor: piece.shape !== "triangle" ? piece.color : "transparent",
    };

    if (piece.shape === "triangle") {
      return {
        ...baseStyle,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderLeft: `${piece.size / 2}px solid transparent`,
        borderRight: `${piece.size / 2}px solid transparent`,
        borderBottom: `${piece.size}px solid ${piece.color}`,
      };
    }

    if (piece.shape === "circle") {
      return {
        ...baseStyle,
        borderRadius: "50%",
      };
    }

    return baseStyle;
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={getShapeStyle(piece)}
        />
      ))}
    </div>
  );
};

export default Confetti;
