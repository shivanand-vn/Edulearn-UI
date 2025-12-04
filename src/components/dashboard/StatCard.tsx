import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <div className={cn("bg-card rounded-xl p-6 shadow-card", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {trend && (
            <p
              className={cn(
                "text-xs mt-1",
                trend.isPositive ? "text-green-600" : "text-destructive"
              )}
            >
              {trend.isPositive ? "+" : ""}{trend.value}% from last month
            </p>
          )}
        </div>
        <div className="p-3 rounded-lg gradient-primary">
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
}
