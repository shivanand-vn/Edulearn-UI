import { useState, useRef } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Calendar, Clock, FileText, Upload, Link as LinkIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Submission Column Component
const SubmissionColumn = ({ assignment }: { assignment: typeof assignments[0] }) => {
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [linkValue, setLinkValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({
        title: "File Uploaded!",
        description: `"${file.name}" has been submitted successfully.`,
      });
    }
  };

  const handleLinkSubmit = () => {
    if (linkValue.trim()) {
      toast({
        title: "Link Submitted!",
        description: "Your submission link has been recorded.",
      });
      setLinkValue("");
      setIsLinkDialogOpen(false);
    }
  };

  return (
    <div className="lg:w-64 shrink-0">
      <p className="text-sm font-medium mb-2">Your Submission</p>
      {assignment.submission ? (
        <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
          {assignment.submission.type === "file" ? (
            <FileText className="w-4 h-4 text-muted-foreground" />
          ) : (
            <LinkIcon className="w-4 h-4 text-muted-foreground" />
          )}
          <span className="text-sm truncate">{assignment.submission.value}</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload File
          </Button>
          <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <LinkIcon className="w-4 h-4 mr-2" />
                Submit Link
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Submit Link</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input
                  placeholder="https://github.com/your-project"
                  value={linkValue}
                  onChange={(e) => setLinkValue(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsLinkDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleLinkSubmit} className="gradient-primary text-primary-foreground">
                    Submit
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

const assignments = [
  {
    id: 1,
    title: "React Components Project",
    course: "Introduction to React",
    dueDate: "Dec 5, 2025",
    status: "pending",
    type: "Project",
    description: "Build a multi-component React application with state management.",
    submission: null,
  },
  {
    id: 2,
    title: "TypeScript Quiz",
    course: "Advanced TypeScript",
    dueDate: "Dec 8, 2025",
    status: "pending",
    type: "Quiz",
    description: "Complete the quiz covering generics, utility types, and advanced patterns.",
    submission: null,
  },
  {
    id: 3,
    title: "Design Mockup",
    course: "UI/UX Design Basics",
    dueDate: "Dec 10, 2025",
    status: "submitted",
    type: "Assignment",
    description: "Create a high-fidelity mockup for a mobile banking app.",
    submission: { type: "file", value: "design-mockup.fig" },
  },
  {
    id: 4,
    title: "API Integration",
    course: "Node.js Masterclass",
    dueDate: "Dec 3, 2025",
    status: "submitted",
    type: "Project",
    description: "Integrate third-party APIs and handle authentication.",
    submission: { type: "link", value: "https://github.com/user/api-project" },
  },
  {
    id: 5,
    title: "Database Schema Design",
    course: "SQL Fundamentals",
    dueDate: "Nov 28, 2025",
    status: "submitted",
    type: "Assignment",
    description: "Design a normalized database schema for an e-commerce platform.",
    submission: { type: "file", value: "schema-design.pdf" },
  },
];

const Assignments = () => {
  const [filter, setFilter] = useState<"all" | "pending" | "submitted">("all");

  const filteredAssignments = assignments.filter(
    (a) => filter === "all" || a.status === filter
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="text-amber-600 border-amber-600">Pending</Badge>;
      case "submitted":
        return <Badge className="gradient-primary text-primary-foreground">Submitted</Badge>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout userType="student" userName="Alex Johnson">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">Assignments</h1>
            <p className="text-muted-foreground">View and submit your course assignments</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search assignments..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant={filter === "pending" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("pending")}
            >
              Pending
            </Button>
            <Button
              variant={filter === "submitted" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("submitted")}
            >
              Submitted
            </Button>
          </div>
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {filteredAssignments.map((assignment) => (
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
                      <h3 className="font-semibold text-lg">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{assignment.course}</p>
                    </div>
                    {getStatusBadge(assignment.status)}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{assignment.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {assignment.type}
                    </div>
                  </div>
                </div>

                {/* Submission Column */}
                <SubmissionColumn assignment={assignment} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assignments;