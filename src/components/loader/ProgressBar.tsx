import { LOADER_COLORS } from "./loader.constants";

interface ProgressBarProps {
  progress: number; // 0–100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className="krieto-progress-track krieto-gpu opacity-0"
      style={{ marginTop: "clamp(20px, 2.5vw, 32px)" }}
    >
      {/* Bar + percentage on the same row */}
      <div className="flex items-center gap-3">
        {/* Track */}
        <div
          className="relative overflow-hidden rounded-full bg-white/10"
          style={{ width: "clamp(120px, 16vw, 200px)", height: 2 }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${LOADER_COLORS.primary}, ${LOADER_COLORS.secondary})`,
              boxShadow: `0 0 8px ${LOADER_COLORS.primary}88`,
              transition: "width 0.15s linear",
            }}
          />
        </div>

        {/* Percentage label */}
        <span
          style={{
            fontFamily: "'Space Grotesk', 'Inter', monospace",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: `${LOADER_COLORS.white}70`,
            minWidth: "32px",
            tabularNums: true,
          } as React.CSSProperties}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
