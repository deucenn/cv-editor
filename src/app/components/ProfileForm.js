import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileForm() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="fullName">Full Name</Label>
      <Input type="text" id="fullName" placeholder="John Smith" className="rounded mb-3"/>
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="johnsmith@example.com" className="rounded mb-3"/>
      <Label htmlFor="phoneNumber">Phone Number</Label>
      <Input type="tel" id="phoneNumber" placeholder="(555) 123-4567" className="rounded mb-3"/>
      <Label htmlFor="location">Location</Label>
      <Input type="text" id="location" placeholder="New York, NY" className="rounded mb-3"/>
      <Label htmlFor="link">Link</Label>
      <Input type="url" id="link" placeholder="mycoolportfolio.com" className="rounded mb-3"/>
    </div>
  );
}
