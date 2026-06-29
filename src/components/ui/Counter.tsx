import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const Counter = ({
  end,
  suffix = "",
  label,
  duration = 1800,
}: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    let animationFrame: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const current = Math.floor(progress * end);

      if (current !== start) {
        start = current;
        setCount(current);
      }

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <div
      ref={ref}
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/[0.02]
      backdrop-blur-xl
      p-10
      text-center
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#00B4D8]
      hover:shadow-[0_0_40px_rgba(0,180,216,0.15)]
      "
    >
      <h3
        className="
        font-heading
        font-bold
        text-[clamp(3rem,5vw,4rem)]
        text-[#00B4D8]
        leading-none
        "
      >
        {count}
        {suffix}
      </h3>

      <p className="mt-4 text-[#9CA3AF]">
        {label}
      </p>
    </div>
  );
};

export default Counter;