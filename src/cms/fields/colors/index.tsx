"use client";

import { useField } from "@payloadcms/ui";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React from "react";

import type { TextFieldClientComponent } from "payload";

const caseStudiesColors = [
  { label: "Orange Bright", value: "#FF5C21" },
  { label: "Green", value: "#37A24C" },
  { label: "Blue", value: "#3F6AFF" },
  { label: "Orange", value: "#FAAD25" },
  { label: "Purple", value: "#B152EC" },
  { label: "Lime", value: "#CFE44F" },
  { label: "Turqoise", value: "#2DAEF6" },
  { label: "Pink", value: "#FD4BE1" },
];

const CmsColorsField: TextFieldClientComponent = ({ field: { name }, path }) => {
  const field = useField({ path });
  const defaultValue = typeof field.initialValue === "string" ? field.initialValue : undefined;

  return (
    <div className="my-6">
      <label className="field-label">
        Color <span className="required">*</span>
      </label>
      <RadioGroup
        defaultValue={defaultValue}
        className="flex h-[56px] w-full items-center justify-between gap-4"
        name={name}
        onValueChange={(value) => field?.setValue(value)}
      >
        {caseStudiesColors.map((color) => (
          <RadioGroupItem
            key={color.value}
            value={color.value}
            className="group flex h-full flex-1 flex-col justify-between border-none bg-transparent py-1 data-[state=checked]:bg-grey-300"
          >
            <div
              className="h-8 border-white transition-all duration-200 group-hover:h-10 group-data-[state=checked]:h-10 group-data-[state=checked]:border-[3px]"
              style={{ backgroundColor: color.value }}
            ></div>
            <span className="underline-offset-2 transition-colors duration-300 group-hover:font-bold group-data-[state=checked]:font-bold group-data-[state=checked]:underline">
              {color.label}
            </span>
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CmsColorsField;
