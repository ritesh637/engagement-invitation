import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(340, 60%, 75%)",
      "hsl(345, 55%, 70%)",
      "hsl(350, 50%, 80%)",
      "hsl(40, 70%, 55%)",
    ];
    const generated: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 6 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal Horizental-full opacity-60"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 0.6,
            backgroundColor: petal.color,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            borderRadius: "50% 0 50% 0",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
