import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, BookOpen, FileText, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

const courses = [
  { title: "Introduction to React", students: 156, rating: 4.8, revenue: "$2,450" },
  { title: "Advanced TypeScript", students: 89, rating: 4.9, revenue: "$1,780" },
  { title: "Node.js Masterclass", students: 234, rating: 4.7, revenue: "$3,510" },
];

const recentSubmissions = [
  { student: "Emily Davis", assignment: "React Project", course: "Introduction to React", time: "2h ago" },
  { student: "James Wilson", assignment: "TypeScript Quiz", course: "Advanced TypeScript", time: "4h ago" },
  { student: "Sophie Brown", assignment: "API Design", course: "Node.js Masterclass", time: "6h ago" },
];

const TeacherDashboard = () => {
  const [isCreateCourseOpen, setIsCreateCourseOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
    category: "",
  });

  const handleCreateCourse = () => {
    if (newCourse.title && newCourse.description) {
      toast({
        title: "Course Created!",
        description: `"${newCourse.title}" has been created successfully.`,
      });
      setNewCourse({ title: "", description: "", duration: "", category: "" });
      setIsCreateCourseOpen(false);
    }
  };

  return (
    <DashboardLayout userType="teacher" userName="Dr. Sarah Miller">
      <div className="space-y-6">
        {/* Welcome section */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Good morning, Dr. Miller! ☀️
              </h1>
              <p className="text-muted-foreground">
                You have 12 pending submissions to review and 3 scheduled classes today.
              </p>
            </div>
            <Dialog open={isCreateCourseOpen} onOpenChange={setIsCreateCourseOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-primary text-primary-foreground">
                  Create New Course
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Create New Course</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="courseTitle">Course Title</Label>
                    <Input
                      id="courseTitle"
                      placeholder="e.g., Introduction to React"
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courseCategory">Category</Label>
                    <Input
                      id="courseCategory"
                      placeholder="e.g., Web Development"
                      value={newCourse.category}
                      onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courseDuration">Duration</Label>
                    <Input
                      id="courseDuration"
                      placeholder="e.g., 12 hours"
                      value={newCourse.duration}
                      onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courseDescription">Description</Label>
                    <Textarea
                      id="courseDescription"
                      placeholder="Describe your course..."
                      rows={4}
                      value={newCourse.description}
                      onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsCreateCourseOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateCourse} className="gradient-primary text-primary-foreground">
                      Create Course
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            title="Total Students"
            value="1,234"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Active Courses"
            value={8}
            icon={BookOpen}
          />
          <StatCard
            title="Pending Reviews"
            value={23}
            icon={FileText}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* My Courses */}
          <div className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold">My Courses</h2>
              <a href="/teacher/classes" className="text-sm text-primary hover:underline">
                View all
              </a>
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.students} students enrolled</p>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      ⭐ {course.rating}
                    </span>
                    <span className="font-medium text-primary">{course.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Submissions */}
          <div className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold">Recent Submissions</h2>
              <a href="/teacher/assignments" className="text-sm text-primary hover:underline">
                View all
              </a>
            </div>

            <div className="space-y-4">
              {recentSubmissions.map((submission, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-medium text-sm shrink-0">
                    {submission.student.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium">{submission.student}</h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {submission.assignment} • {submission.course}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0">{submission.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Performance */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold mb-6">Course Performance</h2>
          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.title}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{course.title}</span>
                  <span className="text-sm text-muted-foreground">{course.students} students</span>
                </div>
                <div className="flex items-center gap-4">
                  <Progress value={(course.students / 250) * 100} className="flex-1 h-2" />
                  <span className="text-sm font-medium text-primary w-12 text-right">
                    {Math.round((course.students / 250) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
