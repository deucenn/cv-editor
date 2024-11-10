import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function EducationForm() {
  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="schoolName">School Name</Label>
        <Input
          type="text"
          id="schoolName"
          placeholder="Stanfort University"
          className="rounded mb-3"
        />
        <Label htmlFor="degree">Degree</Label>
        <Input
          type="text"
          id="degree"
          placeholder="B. Sc."
          className="rounded mb-3"
        />
        <Label htmlFor="major">Major</Label>
        <Input
          type="text"
          id="major"
          placeholder="Computer Science"
          className="rounded mb-3"
        />
        <Label htmlFor="gpa">GPA</Label>
        <Input
          type="text"
          id="gpa"
          placeholder="1.7"
          className="rounded mb-3"
        />
        <Label htmlFor="startDateEducation">Start Date</Label>
        <Input
          type="text"
          id="startDateEducation"
          placeholder="Sep 2018"
          className="rounded mb-3"
        />
        <Label htmlFor="endDateEducation">End Date</Label>
        <Input
          type="text"
          id="endDateEducation"
          placeholder="Sep 2021"
          className="rounded mb-3"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" className="h-10 w-20 px-3 py-2 rounded">
          Add Job
        </Button>
        <Button variant="destructive" className="h-10 w-20 px-3 py-2 rounded">
          Delete Job
        </Button>
      </div>
    </>
  );
}
