import { useState, type ReactNode } from "react";
import Loader from "./Loader";

interface LoaderOverlayProps {
  logoSrc: string;
  logoAlt?: string;
  /** Called once the loader exit animation fully completes. */
  onComplete?: () => void;
  /** Rendered underneath the loader the whole time, so it's already mounted and ready to be revealed as the loader dissolves. */
  children: ReactNode;
}

/**
 * Mounts the hero content immediately (hidden behind the loader) so there's
 * no pop when the loader exits — only a crossfade. The loader unmounts
 * itself once its exit timeline completes.
 */
export default function LoaderOverlay({
  logoSrc,
  logoAlt,
  onComplete,
  children,
}: LoaderOverlayProps) {
  const [loaderVisible, setLoaderVisible] = useState(true);

  return (
    <>
      <div
        className="krieto-hero-slot"
        style={{
          opacity: loaderVisible ? 0 : 1,
          transition: "opacity 0.9s ease-out",
        }}
      >
        {children}
      </div>

      {loaderVisible && (
        <Loader
          logoSrc={logoSrc}
          logoAlt={logoAlt}
          onComplete={() => {
            setLoaderVisible(false);
            onComplete?.();
          }}
        />
      )}
    </>
  );
}
