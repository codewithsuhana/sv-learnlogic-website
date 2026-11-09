import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { flagshipPrograms } from "@/config/site";
import { ProgramDetailView } from "@/components/program-detail-view";

const programData = flagshipPrograms.find((p) => p.slug === "java-dsa");

export const metadata: Metadata = {
  title: "Java Data Structures & Algorithms (DSA) | Algorithmic Problem Solving",
  description:
    "Master 17 core DSA topics in Java: Time & Space Complexity, Trees, Graphs, Dynamic Programming, Greedy, and competitive programming interview rounds.",
};

export default function JavaDsaPage() {
  if (!programData) notFound();
  return <ProgramDetailView program={programData} />;
}
