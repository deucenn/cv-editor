"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function SkillsForm({ skillItem, onDelete, isDeleteDisabled, onDataChange }) {
  const [skillDetails, setSkillDetails] = useState(skillItem.skillDetails || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(skillItem.id, { ...skillItem, [name]: value });
  };

  const handleAddDetail = () => {
    const newDetail = { id: Date.now(), text: "" };
    const updatedDetails = [...skillDetails, newDetail];
    setSkillDetails(updatedDetails);
    onDataChange(skillItem.id, {
      ...skillItem,
      skillDetails: updatedDetails,
    });
  };

  const handleDeleteDetail = (id) => {
    const updatedDetails = skillDetails.filter((detail) => detail.id !== id);
    setSkillDetails(updatedDetails);
    onDataChange(skillItem.id, {
      ...skillItem,
      skillDetails: updatedDetails,
    });
  };

  const handleSkillDetailChange = (index, e) => {
    const updatedDetails = skillDetails.map((detail, i) =>
      i === index ? { ...detail, text: e.target.value } : detail
    );
    setSkillDetails(updatedDetails);
    onDataChange(skillItem.id, {
      ...skillItem,
      skillDetails: updatedDetails,
    });
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
      <Label htmlFor="skillName">Skill Name</Label>
      <Input
        type="text"
        id="skillName"
        name="skillName"
        value={skillItem.skillName}
        placeholder="Programming Languages"
        className="rounded mb-3"
        onChange={handleChange}
      />
      <Label htmlFor="skillDetails">Skill Details</Label>
      {skillDetails.map((detail, index) => (
        <div key={detail.id} className="flex items-center gap-2 mb-3">
          <Input
            type="text"
            value={detail.text || ""}
            onChange={(e) => handleSkillDetailChange(index, e)}
            placeholder="JavaScript"
            className="rounded flex-grow"
          />
          <Button
            variant="secondary"
            className="h-10 w-10 px-3 py-2 rounded"
            onClick={handleAddDetail}
          >
            <AddCircleOutlineIcon />
          </Button>
          <Button
            variant="destructive"
            className="h-10 w-10 px-3 py-2 rounded"
            onClick={() => handleDeleteDetail(detail.id)}
            disabled={skillDetails.length === 1}
          >
            <HighlightOffIcon />
          </Button>
        </div>
      ))}
      <Button
        variant="destructive"
        className="h-10 w-20 px-3 py-2 rounded"
        onClick={onDelete}
        disabled={isDeleteDisabled}
      >
        Delete
      </Button>
    </div>
  );
}

export default function SkillFormsContainer({ skillsData, onSkillsDataChange }) {
  const handleAddForm = () => {
    const newSkillItem = {
      id: Date.now(),
      skillName: "",
      skillDetails: [{ id: Date.now(), text: "" }],
    };
    onSkillsDataChange([...skillsData, newSkillItem]);
  };

  const handleDeleteForm = (id) => {
    onSkillsDataChange(skillsData.filter((item) => item.id !== id));
  };

  const handleSkillsDataChange = (id, newData) => {
    const updatedSkillsData = skillsData.map((skillItem) =>
      skillItem.id === id ? { ...skillItem, ...newData } : skillItem
    );
    onSkillsDataChange(updatedSkillsData);
  };

  return (
    <div>
      {skillsData.map((skillItem, index) => (
        <SkillsForm
          key={skillItem.id}
          skillItem={skillItem}
          onDelete={() => handleDeleteForm(skillItem.id)}
          isDeleteDisabled={index === 0}
          onDataChange={handleSkillsDataChange}
        />
      ))}
      <Button
        variant="secondary"
        className="h-10 w-20 px-3 py-2 rounded mt-4"
        onClick={handleAddForm}
      >
        Add
      </Button>
    </div>
  );
}
