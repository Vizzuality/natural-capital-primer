import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

const AppSettings: GlobalConfig = {
  slug: "app-settings",
  label: "App Settings",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => revalidatePath("/globals/app-settings")],
  },
  fields: [
    {
      name: "enableCaseStudies",
      type: "radio",
      options: [
        {
          label: "Yes",
          value: "true",
        },
        {
          label: "No",
          value: "false",
        },
      ],
      label: "Enable Case Studies",
      defaultValue: "true",
      required: true,
    },
  ],
};

export default AppSettings;
