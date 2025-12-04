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
import { Search, Plus, Calendar, Clock, FileText, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const initialAssignments = [
  {
    id: 1,
    title: "React Components Project",
    course: "Introduction to React",
    dueDate: "Dec 5, 2025",
    submissions: 124,
    totalStudents: 156,
    type: "Project",
    description: "Build a multi-component React application with state management.",
  },
  {
    id: 2,
    title: "TypeScript Quiz",
    course: "Advanced TypeScript",
    dueDate: "Dec 8, 2025",
    submissions: 67,
    totalStudents: 89,
    type: "Quiz",
    description: "Quiz covering generics, utility types, and advanced patterns.",
  },
  {
    id: 3,
    title: "API Integration",
    course: "Node.js Masterclass",
    dueDate: "Dec 10, 2025",
    submissions: 189,
    totalStudents: 234,
    type: "Project",
    description: "Integrate third-party APIs and handle authentication.",
  },
];

const TeacherAssignments = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    course: "",
    description: "",
    dueDate: "",
    type: "Assignment",
  });

  const handleCreate = () => {
    if (newAssignment.title && newAssignment.course && newAssignment.dueDate) {
      toast({
        title: "Assignment Created!",
        description: `"${newAssignment.title}" has been announced to students.`,
      });
      setNewAssignment({ title: "", course: "", description: "", dueDate: "", type: "Assignment" });
      setIsCreateOpen(false);
    } else {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <DashboardLayout userType="teacher" userName="Dr. Sarah Miller">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">Assignments</h1>
            <p className="text-muted-foreground">Create and manage course assignments</p>
          </div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                New Assignment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create New Assignment</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="assignmentTitle">Assignment Title *</Label>
                  <Input
                    id="assignmentTitle"
                    placeholder="e.g., React Components Project"
                    value={newAssignment.title}
                    onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assignmentCourse">Course *</Label>
                  <Input
                    id="assignmentCourse"
                    placeholder="e.g., Introduction to React"
                    value={newAssignment.course}
                    onChange={(e) => setNewAssignment({ ...newAssignment, course: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="assignmentType">Type</Label>
                    <Input
                      id="assignmentType"
                      placeholder="e.g., Project, Quiz"
                      value={newAssignment.type}
                      onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assignmentDueDate">Deadline *</Label>
                    <Input
                      id="assignmentDueDate"
                      type="date"
                      value={newAssignment.dueDate}
                      onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assignmentDescription">Description</Label>
                  <Textarea
                    id="assignmentDescription"
                    placeholder="Describe the assignment requirements..."
                    rows={4}
                    value={newAssignment.description}
                    onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreate} className="gradient-primary text-primary-foreground">
                    Create & Announce
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search assignments..." className="pl-10" />
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {initialAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-card rounded-xl p-6 shadow-card"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="p-3 rounded-lg gradient-primary shrink-0">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{assignment.title}</h3>
                      <p className="text-sm text-muted-foreground">{assignment.course}</p>
                    </div>
                    <Badge variant="outline">{assignment.type}</Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{assignment.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {assignment.submissions}/{assignment.totalStudents} submitted
                    </div>
                  </div>
                </div>

                <div className="lg:w-32 shrink-0">
                  <Button variant="outline" className="w-full">
                    View Submissions
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherAssignments;
