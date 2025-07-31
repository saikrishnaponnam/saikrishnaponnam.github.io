"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Briefcase, FolderGit2, Mail, User, Wrench, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#about", label: "About", icon: User, id: "about" },
  { href: "/#experience", label: "Experience", icon: Briefcase, id: "experience" },
  { href: "/#projects", label: "Projects", icon: FolderGit2, id: "projects" },
  { href: "/#skills", label: "Skills", icon: Wrench, id: "skills" },
  { href: "/#contact", label: "Contact", icon: Mail, id: "contact" },
];

const externalLinks = [
  { href: "https://saikrishnaponnam.github.io/Machine-Learning/", label: "ML Notes", icon: BookOpen },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      let currentSection = "";

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          // A little offset to make the highlight trigger a bit sooner
          if (window.scrollY >= sectionTop - 150) {
            currentSection = section.id;
          }
        }
      }

      // Check for bottom of page to highlight contact
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo.png" alt="Logo" className="w-12 h-10 object-cover" />
          Sai Krishna Ponnam
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 text-base font-medium transition-colors hover:text-primary",
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
          {externalLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
