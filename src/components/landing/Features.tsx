import { BookOpen, Users, Award, Clock, BarChart, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Courses",
    description: "Engage with rich multimedia content designed to enhance your learning experience.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Connect with peers and instructors in real-time discussions and group projects.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn recognized certificates upon completion of courses and programs.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access content anytime, anywhere, and progress at your own comfortable speed.",
  },
  {
    icon: BarChart,
    title: "Track Progress",
    description: "Monitor your learning journey with detailed analytics and insights.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data is protected with enterprise-grade security measures.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">EduLearn</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make our platform the perfect choice for your educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-shadow">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
