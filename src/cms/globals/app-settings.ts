import { GlobalConfig } from "payload";

const AppSettings: GlobalConfig = {
  slug: "app-settings",
  label: "App Settings",
  access: {
    read: () => true,
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
