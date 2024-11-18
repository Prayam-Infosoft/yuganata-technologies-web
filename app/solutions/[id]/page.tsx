"use client";
import { Timeline } from "@/components/ui/timeline";
import fetcher from "@/fetcher";
import useSWR from "swr";
import { TimelineSkeleton } from "./skeleton";

export default function SolutionPage({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useSWR(`/api/solutions/${params.id}`, fetcher);

  if (isLoading) return <TimelineSkeleton />;
  if (error) return "Error Featching Details";

  return (
    <>
      <Timeline data={data} />
    </>
  );
}
