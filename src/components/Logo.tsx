import logo from "@/assets/midetoria-logo.svg";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "navy",
  className,
}: {
  variant?: "navy" | "white";
  className?: string;
}) {
  return (
    <img
      src={logo}
      alt="Midetoria Logistics"
      className={cn("h-11 w-auto", variant === "white" && "brightness-0 invert", className)}
    />
  );
}
