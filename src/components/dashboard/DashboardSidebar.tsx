import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
  ClipboardList,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  userType: "student" | "teacher";
}

const studentNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/student" },
  { icon: BookOpen, label: "My Courses", path: "/student/courses" },
  { icon: ClipboardList, label: "Assignments", path: "/student/assignments" },
  { icon: FileText, label: "Articles", path: "/student/articles" },
  { icon: User, label: "Profile", path: "/student/profile" },
  { icon: Settings, label: "Settings", path: "/student/settings" },
];

const teacherNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/teacher" },
  { icon: GraduationCap, label: "My Classes", path: "/teacher/classes" },
  { icon: ClipboardList, label: "Assignments", path: "/teacher/assignments" },
  { icon: FileText, label: "Articles", path: "/teacher/articles" },
  { icon: Users, label: "Students", path: "/teacher/students" },
  { icon: User, label: "Profile", path: "/teacher/profile" },
  { icon: Settings, label: "Settings", path: "/teacher/settings" },
];

export function DashboardSidebar({ isCollapsed, onToggle, userType }: DashboardSidebarProps) {
  const location = useLocation();
  const navItems = userType === "student" ? studentNavItems : teacherNavItems;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg gradient-primary">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold">EduLearn</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn("shrink-0", isCollapsed && "mx-auto")}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-primary")} />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 left-0 right-0 px-3">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-all"
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
}
