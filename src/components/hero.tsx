import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="text-center flex flex-col justify-center min-h-[calc(100vh-10rem)] py-10 relative">

      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
        Sai Krishna Ponnam
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        M.S. in Computer Science at UW-Madison with a passion for Machine Learning and building intelligent applications.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/#contact">
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="/resume.pdf" download>
            Download Resume <Download className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
      <div className="flex justify-center gap-6 mt-12">
        <a href="https://github.com/saikrishnaponnam" target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
          <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/sai-krishna-ponnam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </a>
      </div>
    </section>
  );
}
