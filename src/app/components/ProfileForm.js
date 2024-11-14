"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileForm({ profileData, onDataChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedProfileData = { ...profileData, [name]: value };

    // Pass the updated data back to the parent
    onDataChange(updatedProfileData);
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="fullName">Full Name</Label>
      <Input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="John Smith"
        className="rounded mb-3"
        value={profileData.fullName}
        onChange={handleChange}
      />
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="johnsmith@example.com"
        className="rounded mb-3"
        value={profileData.email}
        onChange={handleChange}
      />
      <Label htmlFor="phoneNumber">Phone Number</Label>
      <Input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="(555) 123-4567"
        className="rounded mb-3"
        value={profileData.phoneNumber}
        onChange={handleChange}
      />
      <Label htmlFor="location">Location</Label>
      <Input
        type="text"
        id="location"
        name="location"
        placeholder="New York, NY"
        className="rounded mb-3"
        value={profileData.location}
        onChange={handleChange}
      />
      <Label htmlFor="link">Link</Label>
      <Input
        type="url"
        id="link"
        name="link"
        placeholder="mycoolportfolio.com"
        className="rounded mb-3"
        value={profileData.link}
        onChange={handleChange}
      />
    </div>
  );
}

