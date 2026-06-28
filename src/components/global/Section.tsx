import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Extra tight padding for special sections */
  compact?: boolean;
}

/**
 * Reusable section wrapper.
 * Desktop: 120px vertical padding
 * Mobile:  72px vertical padding
 * Always centers content to max-w-[1280px]
 */
const Section = ({ children, className = "", id, compact }: SectionProps) => {
  return (
    <section
      id={id}
      className={`${compact ? "py-16 md:py-[72px]" : "py-[72px] lg:py-[120px]"} ${className}`}
    >
      {children}
    </section>
  );
};

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`max-w-[1280px] mx-auto px-6 lg:px-8 ${className}`}
  >
    {children}
  </div>
);

export default Section;