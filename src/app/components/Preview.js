import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Preview({ profileData }) {
  return (
    <div className="w-full h-full">
      <p>Full Name: {profileData.fullName}</p>
      <p>Email: {profileData.email}</p>
      <p>Phone Number: {profileData.phoneNumber}</p>
      <p>Location: {profileData.location}</p>
      <p>Link: {profileData.link}</p>
    </div>
  );
}
