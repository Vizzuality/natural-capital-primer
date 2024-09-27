import { env } from "@/env.mjs";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = `https://${env.NEXT_PUBLIC_DOMAIN}`;

  return [
    {
      url: `${baseURL}/`,
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      priority: 0.8,
    },
    {
      url: `${baseURL}/terms-and-conditions`,
      priority: 0.2,
    },
    {
      url: `${baseURL}/natural-capital-in-daily-life`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/key-concepts`,
      priority: 1,
    },
    {
      url: `${baseURL}/key-concepts#assets`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/key-concepts#flows-of-services`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/key-concepts#dependencies-and-impacts`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/industry-use-cases`,
      priority: 1,
    },
    {
      url: `${baseURL}/industry-use-cases#manufacturing`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/industry-use-cases#tourism`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/industry-use-cases#retail`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/industry-use-cases#food-systems`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/climate-and-biodiversity`,
      priority: 1,
    },
    {
      url: `${baseURL}/climate-and-biodiversity#climate`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/climate-and-biodiversity#biodiversity`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/resources`,
      priority: 0.5,
    },
    {
      url: `${baseURL}/references`,
      priority: 0.8,
    },
  ];
}
