"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CampsiteForm = () => {
  const [editable, setEditable] = useState<boolean>(false);
  return (
    <div className="max-w-4xl mx-auto p-4 border border-gray-200 rounded-md hover:shadow-md transition-all duration-300 bg-white">
      <h2 className="text-base font-bold">Campsites Information</h2>
      <p>This information will help to calculate growth and dashboard graphs</p>

      <div className="w-full mt-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <Label>Camp Name</Label>
            <Input
              placeholder="eg. Resort Camp"
              disabled={!editable}
              className="w-full mt-2"
            />
          </div>
          <div className="w-full">
            <Label>Camp Description</Label>
            <Input
              placeholder="Description"
              disabled={!editable}
              className="w-full mt-2"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="w-full">
            <Label>Total Number of Camps</Label>
            <Input
              placeholder="eg. 15"
              disabled={!editable}
              className="w-full mt-2"
            />
          </div>
          <div className="w-full">
            <Label>Price per Night (Standard Campsite, $)</Label>
            <Input
              placeholder="eg. 3500"
              disabled={!editable}
              className="w-full mt-2"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <Label>Non-veg Meal cost per person</Label>
              <Input
                placeholder="eg. Resort Camp"
                disabled={!editable}
                className="w-full mt-2"
              />
            </div>
            <div className="w-full">
              <Label>Veg Meal cost per person</Label>
              <Input
                placeholder="eg. Resort Camp"
                disabled={!editable}
                className="w-full mt-2"
              />
            </div>
          </div>
          <div className="w-full">
            <Label>Camp Description</Label>
            <Input
              placeholder="Description"
              disabled={!editable}
              className="w-full mt-2"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        {editable ? (
          <Button className="w-full" onClick={() => setEditable(false)}>
            Save
          </Button>
        ) : (
          <Button
            variant={"outline"}
            onClick={() => setEditable(true)}
            className="w-full border-gray-200"
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default CampsiteForm;
