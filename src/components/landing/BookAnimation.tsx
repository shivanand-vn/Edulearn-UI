import { useState, useEffect } from "react";
import { BookOpen, Sparkles, GraduationCap, Users } from "lucide-react";

export function BookAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto perspective-1000">
      {/* Book container */}
      <div className="relative h-80 flex items-center justify-center">
        {/* Left page */}
        <div
          className={`absolute w-40 h-56 md:w-52 md:h-72 rounded-l-md shadow-card transition-transform duration-1000 ease-out ${
            isOpen ? "animate-book-left" : ""
          }`}
          style={{
            background: "var(--gradient-primary)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-primary-foreground opacity-30" />
          </div>
          <div className="absolute inset-2 border border-primary-foreground/20 rounded-l-sm" />
        </div>

        {/* Right page */}
        <div
          className={`absolute w-40 h-56 md:w-52 md:h-72 rounded-r-md shadow-card transition-transform duration-1000 ease-out ${
            isOpen ? "animate-book-right" : ""
          }`}
          style={{
            background: "var(--gradient-secondary)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="w-16 h-16 text-secondary-foreground opacity-30" />
          </div>
          <div className="absolute inset-2 border border-secondary-foreground/20 rounded-r-sm" />
        </div>

        {/* Revealed content */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isOpen ? "opacity-100 delay-700" : "opacity-0"
          }`}
        >
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 animate-float">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="p-3 rounded-full bg-secondary/10 animate-float animation-delay-200">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div className="p-3 rounded-full bg-primary/10 animate-float animation-delay-400">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Your journey begins here
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
    </div>
  );
}
