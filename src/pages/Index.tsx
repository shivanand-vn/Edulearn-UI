import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { BookAnimation } from "@/components/landing/BookAnimation";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
                Unlock Your{" "}
                <span className="text-gradient">Potential</span>{" "}
                Through Learning
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-400">
                Discover a world of knowledge with interactive courses, expert instructors, 
                and a supportive community. Start your learning journey today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
                <Link to="/login">
                  <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 group">
                    Get Started Free
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-8 animate-fade-up animation-delay-800">
                <p className="text-sm text-muted-foreground mb-3">Trusted by students worldwide</p>
                <div className="flex items-center justify-center lg:justify-start gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-background gradient-primary"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">4.9/5</span>
                    <span className="text-muted-foreground"> from 10k+ reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - Book Animation */}
            <div className="animate-fade-up animation-delay-400">
              <BookAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Join thousands of students already learning on EduLearn. 
                Get access to premium courses and expert instructors.
              </p>
              <Link to="/login">
                <Button size="lg" variant="secondary" className="group">
                  Create Free Account
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
