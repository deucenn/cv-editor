import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function ProjectsForm() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="projectName">Project Name</Label>
          <Input
            type="text"
            id="projectName"
            placeholder="CV Application"
            className="rounded mb-3"
          />
          <Label htmlFor="projectDesc">Project Description</Label>
          <Input
            type="text"
            id="projectDesc"
            placeholder="A CV Application"
            className="rounded mb-3"
          />
          <Label htmlFor="projectLink">Link to Project</Label>
          <Input
            type="url"
            id="projectLink"
            placeholder="http://cv-application.de"
            className="rounded mb-3"
          />
          <Label htmlFor="projectTools">Tools Used</Label>
          <div className="flex items-center gap-2 mb-3">
            <Input
              type="text"
              id="projectTools"
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
