import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { flagshipPrograms } from "@/config/site";
import { ProgramDetailView } from "@/components/program-detail-view";

const programData = flagshipPrograms.find((p) => p.slug === "data-science");

export const metadata: Metadata = {
  title: "Data Science & Machine Learning Program | Python, Pandas, EDA & ML",
  description:
    "Comprehensive Data Science curriculum: Python, NumPy, Pandas, EDA, Statistical Inference, Supervised/Unsupervised Machine Learning, and SQL Analytics.",
};

export default function DataSciencePage() {
  if (!programData) notFound();
  return <ProgramDetailView program={programData} />;
}
