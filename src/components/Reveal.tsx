import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
  variant?: "up" | "fade" | "zoom" | "left" | "right";
};

export function Reveal({ children, className, delay = 0, as: Tag = "div", variant = "up" }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hidden =
    variant === "fade" ? "opacity-0" :
    variant === "zoom" ? "opacity-0 scale-95" :
    variant === "left" ? "opacity-0 -translate-x-8" :
    variant === "right" ? "opacity-0 translate-x-8" :
    "opacity-0 translate-y-8";

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : hidden,
        className
      )}
    >
      {children}
    </Tag>
  );
}