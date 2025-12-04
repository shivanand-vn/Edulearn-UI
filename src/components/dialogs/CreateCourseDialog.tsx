import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreateCourseDialog({ open, onOpenChange }: any) {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const handleSubmit = () => {
    console.log("New Course:", course);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            placeholder="Course Title"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />

          <Textarea
            placeholder="Course Description"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />

          <Input
            placeholder="Duration (e.g. 3 Months)"
            value={course.duration}
            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
          />
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
