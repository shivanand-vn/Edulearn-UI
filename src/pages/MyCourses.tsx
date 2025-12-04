import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, BookOpen, Clock, Play, Star, X } from "lucide-react";

const myCourses = [
  {
    id: 1,
    title: "Introduction to React",
    instructor: "Dr. Sarah Miller",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    duration: "12h 30m",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    instructor: "Prof. John Davis",
    progress: 45,
    totalLessons: 30,
    completedLessons: 13,
    duration: "15h 45m",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    instructor: "Emily Chen",
    progress: 90,
    totalLessons: 18,
    completedLessons: 16,
    duration: "8h 15m",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Node.js Masterclass",
    instructor: "Michael Brown",
    progress: 20,
    totalLessons: 36,
    completedLessons: 7,
    duration: "20h 00m",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "SQL Fundamentals",
    instructor: "Dr. Lisa Wang",
    progress: 100,
    totalLessons: 20,
    completedLessons: 20,
    duration: "10h 30m",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
  },
];

const allCourses = [
  ...myCourses,
  {
    id: 6,
    title: "Python for Beginners",
    instructor: "Dr. Robert Taylor",
    progress: 0,
    totalLessons: 28,
    completedLessons: 0,
    duration: "14h 00m",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
  },
  {
    id: 7,
    title: "Machine Learning Basics",
    instructor: "Prof. Amanda Lee",
    progress: 0,
    totalLessons: 40,
    completedLessons: 0,
    duration: "22h 30m",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
  },
  {
    id: 8,
    title: "Docker & Kubernetes",
    instructor: "Kevin Hart",
    progress: 0,
    totalLessons: 32,
    completedLessons: 0,
    duration: "18h 45m",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
  },
  {
    id: 9,
    title: "AWS Cloud Practitioner",
    instructor: "Sarah Williams",
    progress: 0,
    totalLessons: 35,
    completedLessons: 0,
    duration: "16h 20m",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
  },
  {
    id: 10,
    title: "GraphQL Fundamentals",
    instructor: "Tom Anderson",
    progress: 0,
    totalLessons: 22,
    completedLessons: 0,
    duration: "11h 00m",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
  },
];

const MyCourses = () => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "inProgress" | "completed">("all");

  const filteredCourses = myCourses.filter((course) => {
    if (activeFilter === "inProgress") return course.progress > 0 && course.progress < 100;
    if (activeFilter === "completed") return course.progress === 100;
    return true;
  });

  return (
    <DashboardLayout userType="student" userName="Alex Johnson">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">My Courses</h1>
            <p className="text-muted-foreground">Continue learning from where you left off</p>
          </div>
          <Dialog open={isBrowseOpen} onOpenChange={setIsBrowseOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-primary-foreground">
                Browse All Courses
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>All Available Courses</DialogTitle>
              </DialogHeader>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {allCourses.filter(c => c.progress === 0).map((course) => (
                  <div
                    key={course.id}
                    className="bg-muted rounded-lg overflow-hidden hover:shadow-md transition-all"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 text-amber-500 mb-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-medium">{course.rating}</span>
                      </div>
                      <h3 className="font-medium text-sm mb-1">{course.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{course.instructor}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{course.duration}</span>
                        <Button size="sm" variant="outline" className="text-xs h-7">
                          Enroll
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search your courses..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("all")}
            >
              All
            </Button>
            <Button
              variant={activeFilter === "inProgress" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("inProgress")}
            >
              In Progress
            </Button>
            <Button
              variant={activeFilter === "completed" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("completed")}
            >
              Completed
            </Button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length === 0 ? (
            <div className="col-span-3 bg-card rounded-xl p-8 shadow-card text-center">
              <p className="text-muted-foreground">No courses found.</p>
            </div>
          ) : filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-card rounded-xl shadow-card overflow-hidden group hover:shadow-soft transition-all"
            >
              {/* Course Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button className="absolute bottom-3 right-3 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Play className="w-4 h-4" />
                </button>
              </div>

              {/* Course Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Enrolled Courses</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">74</p>
            <p className="text-sm text-muted-foreground">Lessons Completed</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">48h</p>
            <p className="text-sm text-muted-foreground">Total Learning</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">1</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyCourses;
