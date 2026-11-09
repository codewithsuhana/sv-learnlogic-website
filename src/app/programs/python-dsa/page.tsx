import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { flagshipPrograms } from "@/config/site";
import { ProgramDetailView } from "@/components/program-detail-view";

const programData = flagshipPrograms.find((p) => p.slug === "python-dsa");

export const metadata: Metadata = {
  title: "Python Data Structures & Algorithms (DSA) | Technical Interview Mastery",
  description:
    "Master algorithmic problem solving with Pythonic data structures, collections, recursion, dynamic programming, and technical interview whiteboard drills.",
};

export default function PythonDsaPage() {
  if (!programData) notFound();
  return <ProgramDetailView program={programData} />;
}
