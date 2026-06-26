import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "premium";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-600 border border-gray-200",
    primary: "bg-cortex-500/10 text-cortex-600 border border-cortex-500/20",
    success: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
    premium:
      "bg-gradient-to-r from-cortex-500/20 to-accent-500/20 text-transparent bg-clip-text bg-gradient-to-r from-cortex-600 to-accent-600 border border-cortex-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
