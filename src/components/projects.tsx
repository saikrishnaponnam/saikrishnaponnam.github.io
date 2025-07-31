
"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const projectsData: Project[] = [
  {
    id: 4,
    title: "Machine Learning Notes",
    description: "A collection of my notes on machine learning concepts and summaries of papers I've read, hosted on GitHub Pages.",
    tags: ["Machine Learning", "Deep Learning", "Paper Summaries"],
    liveUrl: "https://saikrishnaponnam.github.io/Machine-Learning/",
    sourceUrl: "https://github.com/saikrishnaponnam/Machine-Learning",
  },
  {
    id: 1,
    title: "Mini Torch framework",
    description: "Developed a neural network framework in C++ with CUDA, using shared memory and reduction for optimization. Implemented core operations like matrix multiplication, activation functions, and backpropagation.",
    tags: ["C++", "CUDA", "Neural Networks", "Deep Learning"],
    sourceUrl: "https://github.com/saikrishnaponnam/mini-torch",
  },
  {
    id: 2,
    title: "Tokenizer Transfer for Multilingual Factual Knowledge Retrieval",
    description: "Implemented a Vocabulary-Free Multilingual Neural Tokenizer. Utilized FVT and FOCUS to adapt a large tokenizer into a language-specific one for improved factual knowledge retrieval.",
    tags: ["NLP", "Tokenizer", "Multilingual", "PyTorch"],
    sourceUrl: "https://github.com/saikrishnaponnam/FVT-FOCUS",
  },
  {
    id: 3,
    title: "Real-Time Object Detection with MobileNets",
    description: "Developed a real-time object detection app using MobileNets in TensorFlow. Enhanced accuracy for small objects by applying deconvolution techniques to low-resolution inputs.",
    tags: ["TensorFlow", "Computer Vision", "Object Detection", "MobileNets"],
  },

  {
    id: 5,
    title: "Natural Language Q&A Bot",
    description: "A chatbot that can answer questions based on a given context using transformer models.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "robot chatbot conversation",
    tags: ["Hugging Face", "Transformers", "PyTorch"],
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Recommendation System",
    description: "Collaborative filtering-based recommendation engine for e-commerce products.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store products",
    tags: ["Surprise", "Pandas", "Flask"],
    sourceUrl: "#",
  },

  {
    id: 5,
    title: "Natural Language Q&A Bot",
    description: "A chatbot that can answer questions based on a given context using transformer models.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "robot chatbot conversation",
    tags: ["Hugging Face", "Transformers", "PyTorch"],
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Recommendation System",
    description: "Collaborative filtering-based recommendation engine for e-commerce products.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store products",
    tags: ["Surprise", "Pandas", "Flask"],
    sourceUrl: "#",
  },
];

const PROJECTS_TO_SHOW_INITIALLY = 3;

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, PROJECTS_TO_SHOW_INITIALLY);

  return (
    <section id="projects" className="w-full">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {projectsData.length > PROJECTS_TO_SHOW_INITIALLY && (
        <div className="mt-12 text-center">
          <Button onClick={toggleShowAll} variant="secondary" size="lg">
            {showAll ? "Show Less" : "Show More"}
            {showAll ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
          </Button>
        </div>
      )}
    </section>
  );
}
