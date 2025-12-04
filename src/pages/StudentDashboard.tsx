import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { BookOpen, Clock, Award, TrendingUp, Calendar, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const recentCourses = [
  { title: "Introduction to React", progress: 75, instructor: "John Smith" },
  { title: "Advanced TypeScript", progress: 45, instructor: "Sarah Johnson" },
  { title: "UI/UX Design Basics", progress: 90, instructor: "Mike Chen" },
];

const upcomingAssignments = [
  { title: "React Components Project", course: "Introduction to React", dueDate: "Dec 5, 2025" },
  { title: "TypeScript Quiz", course: "Advanced TypeScript", dueDate: "Dec 8, 2025" },
  { title: "Design Mockup", course: "UI/UX Design Basics", dueDate: "Dec 10, 2025" },
];

const StudentDashboard = () => {
  return (
    <DashboardLayout userType="student" userName="Alex Johnson">
      <div className="space-y-6">
        {/* Welcome section */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground">
            You've completed 3 lessons this week. Keep up the great work!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Enrolled Courses"
            value={12}
            icon={BookOpen}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Hours Learned"
            value="48h"
            icon={Clock}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Certificates"
            value={5}
            icon={Award}
          />
          <StatCard
            title="Completion Rate"
            value="78%"
            icon={TrendingUp}
            trend={{ value: 5, isPositive: true }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Courses */}
          <div className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold">Continue Learning</h2>
              <a href="/student/courses" className="text-sm text-primary hover:underline">
                View all
              </a>
            </div>

            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div
                  key={course.title}
                  className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                    </div>
                    <span className="text-sm font-medium text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold">Upcoming Assignments</h2>
              <a href="/student/assignments" className="text-sm text-primary hover:underline">
                View all
              </a>
            </div>

            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div
                  key={assignment.title}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg gradient-primary shrink-0">
                    <FileText className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{assignment.title}</h3>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
                    <Calendar className="w-4 h-4" />
                    {assignment.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold mb-6">Weekly Activity</h2>
          <div className="grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={day} className="text-center">
                <div
                  className="mx-auto w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium mb-2"
                  style={{
                    background: [3, 4, 2][i % 3] > 1 ? "var(--gradient-primary)" : undefined,
                    color: [3, 4, 2][i % 3] > 1 ? "hsl(var(--primary-foreground))" : undefined,
                  }}
                >
                  {[2, 3, 1, 4, 2, 0, 1][i]}h
                </div>
                <span className="text-xs text-muted-foreground">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
