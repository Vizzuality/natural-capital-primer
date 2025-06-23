import { getPayload } from "payload";
import { cache } from "react";

import config from "@payload-config";

export const getCaseStudies = cache(async () => {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "case-studies", // required
      depth: 2,
      page: 1,
      limit: 100,
      pagination: false, // If you want to disable pagination count, etc.
    });
    return result?.docs || [];
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
});

export const getCaseStudy = cache(async (id?: string) => {
  try {
    if (!id) {
      console.error("No case study ID provided");
      return;
    }
    const payload = await getPayload({ config });

    const result = await payload.findByID({
      collection: "case-studies", // required
      depth: 20,
      id,
    });

    return result;
  } catch (error) {
    console.error(`Error fetching case study ${id}:`, error);
    return;
  }
});
