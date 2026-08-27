import logoNavy from "@/assets/midetoria-logo.svg";
import logoWhite from "@/assets/midetoria-logo-white.png";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "navy",
  className,
}: {
  /** "navy" for white/light backgrounds, "white" for navy/dark backgrounds */
  variant?: "navy" | "white";
  className?: string;
}) {
  return (
    <img
      src={variant === "white" ? logoWhite : logoNavy}
      alt="Midetoria Logistics"
      className={cn("h-11 w-auto", className)}
    />
  );
}
