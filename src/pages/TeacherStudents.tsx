import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, BookOpen, Clock, TrendingUp } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    initials: "ED",
    courses: 3,
    completedAssignments: 18,
    totalAssignments: 20,
    hoursLearned: 45,
    status: "active",
  },
  {
    id: 2,
    name: "James Wilson",
    email: "james.wilson@email.com",
    initials: "JW",
    courses: 2,
    completedAssignments: 12,
    totalAssignments: 15,
    hoursLearned: 32,
    status: "active",
  },
  {
    id: 3,
    name: "Sophie Brown",
    email: "sophie.brown@email.com",
    initials: "SB",
    courses: 4,
    completedAssignments: 28,
    totalAssignments: 30,
    hoursLearned: 68,
    status: "active",
  },
  {
    id: 4,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    initials: "MC",
    courses: 1,
    completedAssignments: 5,
    totalAssignments: 8,
    hoursLearned: 15,
    status: "inactive",
  },
  {
    id: 5,
    name: "Anna Martinez",
    email: "anna.martinez@email.com",
    initials: "AM",
    courses: 3,
    completedAssignments: 22,
    totalAssignments: 24,
    hoursLearned: 52,
    status: "active",
  },
  {
    id: 6,
    name: "David Kim",
    email: "david.kim@email.com",
    initials: "DK",
    courses: 2,
    completedAssignments: 14,
    totalAssignments: 16,
    hoursLearned: 38,
    status: "active",
  },
];

const TeacherStudents = () => {
  return (
    <DashboardLayout userType="teacher" userName="Dr. Sarah Miller">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Students</h1>
          <p className="text-muted-foreground">View and manage your enrolled students</p>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search students..." className="pl-10" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">1,234</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">1,156</p>
            <p className="text-sm text-muted-foreground">Active</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">89%</p>
            <p className="text-sm text-muted-foreground">Avg. Completion</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">42h</p>
            <p className="text-sm text-muted-foreground">Avg. Learning Time</p>
          </div>
        </div>

        {/* Students List */}
        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold">All Students</h2>
          </div>
          <div className="divide-y divide-border">
            {students.map((student) => (
              <div
                key={student.id}
                className="p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="gradient-primary text-primary-foreground">
                      {student.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{student.name}</h3>
                      <Badge variant={student.status === "active" ? "default" : "secondary"}>
                        {student.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                  </div>

                  <div className="hidden md:flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{student.courses} courses</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span>{student.completedAssignments}/{student.totalAssignments}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{student.hoursLearned}h</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherStudents;
