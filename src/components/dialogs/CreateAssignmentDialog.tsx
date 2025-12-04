import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreateAssignmentDialog({ open, onOpenChange }: any) {
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const handleSubmit = () => {
    console.log("New Assignment:", assignment);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Assignment</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            placeholder="Title"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />

          <Textarea
            placeholder="Description"
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />

          <Input
            type="date"
            value={assignment.deadline}
            onChange={(e) =>
              setAssignment({ ...assignment, deadline: e.target.value })
            }
          />
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
