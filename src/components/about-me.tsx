import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import profile_image from "@/profile.jpg";

export function AboutMe() {
  return (
    <section id="about" className="w-full">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Professional photograph of Sai Krishna Ponnam"
            width={250}
            height={250}
            className="rounded-full object-cover aspect-square shadow-lg"
            data-ai-hint="professional headshot"
          />
        </div>
        <div className="md:col-span-2">
          <p className="text-muted-foreground mb-6">
            As a recent Computer Science graduate specializing in Machine Learning, I'm passionate about building intelligent systems that tackle real-world challenges. I aspire to grow as an ML Engineer/Scientist, contributing to innovative projects that push the boundaries of AI. When I'm not training models, I'm an avid hiker, always looking for a new trail to explore.
            <br />
            <br />

            A proactive and adaptable software engineer with a Master's in Computer Science from the University of Wisconsin-Madison and extensive experience at Target. I specialize in search technologies, deep learning, and building scalable systems. I thrive in agile environments and enjoy leading collaborative projects that push the boundaries of technology.

          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Key Skills Summary</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">Scala</Badge>
              <Badge variant="secondary">PyTorch</Badge>
              <Badge variant="secondary">Elasticsearch</Badge>
              <Badge variant="secondary">Spark</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
            </div>
          </div>

          <Button asChild size="lg">
            <a target="_blank" href="/resume.pdf" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
