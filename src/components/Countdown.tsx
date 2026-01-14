import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-02-13T18:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Tage" },
    { value: timeLeft.hours, label: "Stunden" },
    { value: timeLeft.minutes, label: "Minuten" },
    { value: timeLeft.seconds, label: "Sekunden" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeBlocks.map((block, index) => (
        <div
          key={block.label}
          className="flex flex-col items-center animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-card rounded-xl shadow-card flex items-center justify-center border-2 border-primary/20">
              <span className="font-display text-3xl md:text-5xl text-primary">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
            <div className="absolute -inset-1 gradient-festival rounded-xl opacity-20 -z-10 blur-sm" />
          </div>
          <span className="mt-2 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
