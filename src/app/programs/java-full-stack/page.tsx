import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { flagshipPrograms } from "@/config/site";
import { ProgramDetailView } from "@/components/program-detail-view";

const programData = flagshipPrograms.find((p) => p.slug === "java-full-stack");

export const metadata: Metadata = {
  title: "Java Full Stack Development Program | Spring Boot, React & Microservices",
  description:
    "Comprehensive enterprise Java Full Stack training: Core Java, Hibernate, Spring Boot 3, Microservices, REST APIs, React, and MySQL. Build production-grade systems.",
};

export default function JavaFullStackPage() {
  if (!programData) notFound();
  return <ProgramDetailView program={programData} />;
}
