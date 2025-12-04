import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Plus, Users, Clock, MoreVertical, BookOpen } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const initialClasses = [
  {
    id: 1,
    title: "Introduction to React",
    students: 156,
    lessons: 24,
    duration: "12h 30m",
    status: "active",
    description: "Learn the fundamentals of React including components, state, and hooks.",
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    students: 89,
    lessons: 30,
    duration: "15h 45m",
    status: "active",
    description: "Master TypeScript with generics, utility types, and advanced patterns.",
  },
  {
    id: 3,
    title: "Node.js Masterclass",
    students: 234,
    lessons: 36,
    duration: "20h 00m",
    status: "active",
    description: "Build scalable backend applications with Node.js and Express.",
  },
  {
    id: 4,
    title: "CSS Grid & Flexbox",
    students: 178,
    lessons: 18,
    duration: "8h 15m",
    status: "draft",
    description: "Master modern CSS layout techniques for responsive web design.",
  },
  {
    id: 5,
    title: "Python for Data Science",
    students: 312,
    lessons: 42,
    duration: "25h 00m",
    status: "active",
    description: "Learn Python programming with focus on data analysis and visualization.",
  },
];

const TeacherClasses = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newClass, setNewClass] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const handleCreate = () => {
    if (newClass.title && newClass.description) {
      toast({
        title: "Class Created!",
        description: `"${newClass.title}" has been created successfully.`,
      });
      setNewClass({ title: "", description: "", duration: "" });
      setIsCreateOpen(false);
    }
  };

  return (
    <DashboardLayout userType="teacher" userName="Dr. Sarah Miller">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">My Classes</h1>
            <p className="text-muted-foreground">Manage your courses and track student progress</p>
          </div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                Create Class
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create New Class</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="classTitle">Class Title</Label>
                  <Input
                    id="classTitle"
                    placeholder="e.g., Introduction to React"
                    value={newClass.title}
                    onChange={(e) => setNewClass({ ...newClass, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="classDuration">Duration</Label>
                  <Input
                    id="classDuration"
                    placeholder="e.g., 12 hours"
                    value={newClass.duration}
                    onChange={(e) => setNewClass({ ...newClass, duration: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="classDescription">Description</Label>
                  <Textarea
                    id="classDescription"
                    placeholder="Describe your class..."
                    rows={4}
                    value={newClass.description}
                    onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreate} className="gradient-primary text-primary-foreground">
                    Create Class
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search classes..." className="pl-10" />
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-soft transition-all"
            >
              <div className="h-32 gradient-primary relative">
                <div className="absolute inset-0 bg-foreground/10" />
                <div className="absolute bottom-3 left-4">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{cls.title}</h3>
                  <Badge variant={cls.status === "active" ? "default" : "secondary"}>
                    {cls.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cls.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {cls.students} students
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {cls.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherClasses;
