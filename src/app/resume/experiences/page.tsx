"use client";
import ContentLayout from "@/components/layouts/contentLayout";
import experiences from "@/data/experiences";
import React from "react";
import ExperienceCard from "@/components/experienceCard";
export default function ExperiencesPages() {
  return (
    <ContentLayout
      title="Experiences"
      contentClassName="flex-col items-center justify-center gap-10 h-full"
    >
      {experiences.map((experience) => (
        <div
          key={`${experience.name}${experience.place}`}
          className="w-full flex items-center justify-center pt-72 h-[calc(100vh-1.5rem)] lg:h-[calc(100vh-12rem)] snap-always  snap-center"
        >
          <ExperienceCard
            {...experience}
            className="w-full lg:w-1/3 lg:aspect-square"
          />
        </div>
      ))}
    </ContentLayout>
  );
}
