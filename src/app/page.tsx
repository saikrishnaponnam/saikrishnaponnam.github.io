"use client";

import { AboutMe } from "@/components/about-me";
import { ContactForm } from "@/components/contact-form";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { ArrowDown } from "lucide-react";


const sections = [
  { id: "hero", component: Hero, nextId: "about" },
  { id: "about", component: AboutMe, nextId: "experience" },
  { id: "experience", component: Experience, nextId: "projects" },
  { id: "projects", component: Projects, nextId: "skills" },
  { id: "skills", component: Skills, nextId: "contact" },
  { id: "contact", component: ContactForm, nextId: null },
];

const ScrollArrow = ({ nextId }: { nextId: string | null }) => {
  if (!nextId) return null;

  const scrollToNext = () => {
    const nextSection = document.getElementById(nextId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden md:block">
      <ArrowDown
        className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        onClick={scrollToNext}
        aria-label={`Scroll to ${nextId} section`}
      />
    </div>
  );
};

export default function Home() {
  return (
    <div>
      {sections.map(({ id, component: Component, nextId }) => (
        <div key={id} id={id} className="snap-section relative">
          <Component />
          <ScrollArrow nextId={nextId} />
        </div>
      ))}
    </div>
  );
}
