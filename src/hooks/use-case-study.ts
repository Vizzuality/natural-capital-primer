import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { CaseStudy } from "@/payload-types";

export async function getCaseStudy(id: CaseStudy["id"]) {
  const response = await fetch(`/api/caseStudies/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export const getCaseStudyQueryKey = (id: string) => ["case-study", id];

export default function useGetCaseStudy<T>(
  id: CaseStudy["id"],
  useQueryOptions?: Omit<UseQueryOptions<CaseStudy, Error, T>, "queryKey" | "queryFn">,
) {
  return useQuery<CaseStudy, Error, T>({
    queryKey: getCaseStudyQueryKey(id),
    queryFn: () => getCaseStudy(id),
    ...useQueryOptions,
  });
}
