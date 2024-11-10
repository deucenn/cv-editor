import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function SkillsForm() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="skillName">Skill Name</Label>
      <Input
        type="text"
        id="skillName"
        placeholder="Programming Languages"
        className="rounded mb-3"
      />
      <Label htmlFor="skillDetails">Skill Details</Label>
      <div className="flex items-center gap-2 mb-3">
        <Input
          type="text"
          id="skillDetails"
          placeholder="JavaScript"
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
          Add 
        </Button>
        <Button variant="destructive" className="h-10 w-20 px-3 py-2 rounded">
          Delete 
        </Button>
      </div>
    </div>
  );
}
