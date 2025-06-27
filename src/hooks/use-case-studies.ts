import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { CaseStudy } from "@/payload-types";

type CaseStudyResponse = {
  docs: CaseStudy[];
};

export async function getCaseStudies(): Promise<CaseStudyResponse> {
  try {
    const params = new URLSearchParams({
      limit: "100", // Adjust limit as needed
    });
    const queryString = params.toString();
    const response = await fetch(`/api/case-studies?${queryString}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching case studies:", error);
    throw error;
  }
}

export const caseStudiesQueryKey = ["case-studies"];

export default function useGetCaseStudies(
  useQueryOptions?: Omit<UseQueryOptions<CaseStudyResponse, Error>, "queryKey" | "queryFn">,
) {
  return useQuery<CaseStudyResponse, Error>({
    queryKey: caseStudiesQueryKey,
    queryFn: () => getCaseStudies(),
    ...useQueryOptions,
  });
}
