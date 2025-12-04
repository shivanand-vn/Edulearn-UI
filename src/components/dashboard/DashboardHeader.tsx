import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DashboardHeaderProps {
  onMenuClick: () => void;
  userName: string;
  userType: "student" | "teacher";
}

export function DashboardHeader({ onMenuClick, userName, userType }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 md:px-6">
      {/* Mobile menu & Search */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>

        <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="border-0 bg-transparent h-8 w-64 focus-visible:ring-0"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        <div className="flex items-center gap-3">
          <Avatar className="w-9 h-9">
            <AvatarImage src="" />
            <AvatarFallback className="gradient-primary text-primary-foreground text-sm">
              {userName.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-muted-foreground capitalize">{userType}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
