import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { flagshipPrograms } from "@/config/site";
import { ProgramDetailView } from "@/components/program-detail-view";

const programData = flagshipPrograms.find((p) => p.slug === "generative-ai");

export const metadata: Metadata = {
  title: "Generative AI & Agentic Systems Program | LLMs, RAG & LangChain",
  description:
    "Cutting-edge Generative AI engineering: LLMs, Prompt Engineering, OpenAI APIs, Vector Databases, RAG architectures, LangChain, and Autonomous AI Agents.",
};

export default function GenerativeAiPage() {
  if (!programData) notFound();
  return <ProgramDetailView program={programData} />;
}
