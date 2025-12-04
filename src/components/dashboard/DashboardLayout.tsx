import { useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "student" | "teacher";
  userName: string;
}

export function DashboardLayout({ children, userType, userName }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-30 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar - hidden on mobile by default */}
      <div className={cn(
        "md:block",
        isMobileSidebarOpen ? "block" : "hidden"
      )}>
        <DashboardSidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          userType={userType}
        />
      </div>

      {/* Main content */}
      <div
        className={cn(
          "transition-all duration-300",
          isSidebarCollapsed ? "md:ml-16" : "md:ml-64"
        )}
      >
        <DashboardHeader
          onMenuClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          userName={userName}
          userType={userType}
        />

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
