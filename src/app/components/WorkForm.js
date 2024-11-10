import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function WorkForm() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="companyName">Company Name</Label>
      <Input
        type="text"
        id="companyName"
        placeholder="Google"
        className="rounded mb-3"
      />
      <Label htmlFor="jobTitle">Job Title</Label>
      <Input
        type="text"
        id="jobTitle"
        placeholder="Software Engineer"
        className="rounded mb-3"
      />
      <Label htmlFor="startDate">Start Date</Label>
      <Input
        type="text"
        id="startDate"
        placeholder="May 2022"
        className="rounded mb-3"
      />
      <Label htmlFor="endDate">End Date</Label>
      <Input
        type="text"
        id="endDate"
        placeholder="May 2024 / Present / Etc."
        className="rounded mb-3"
      />
      <Label htmlFor="link">Job Responsibilities</Label>
      <div className="flex items-center gap-2 mb-3">
        <Input
          type="url"
          id="link"
          placeholder="Some cool stuff"
          className="rounded flex-grow"
        />
        <Button variant="secondary" className="h-10 w-10 px-3 py-2 rounded">
          <AddCircleOutlineIcon />
        </Button>
        <Button variant="destructive" className="h-10 w-10 px-3 py-2 rounded">
          <HighlightOffIcon />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" className="h-10 w-20 px-3 py-2 rounded">
          Add Job
        </Button>
        <Button variant="destructive" className="h-10 w-20 px-3 py-2 rounded">
          Delete Job
        </Button>
      </div>
    </div>
  );
}
