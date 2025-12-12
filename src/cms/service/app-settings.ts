import { getPayload } from "payload";
import { cache } from "react";

import config from "@payload-config";

export const getAppSettings = cache(async () => {
  try {
    const payload = await getPayload({ config });

    const result = await payload.findGlobal({
      slug: "app-settings",
    });
    return result;
  } catch (error) {
    console.error("Error fetching app settings:", error);
    return null;
  }
});
