import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience as ExperienceType } from "@/lib/types";

const experienceData: ExperienceType[] = [
  {
    role: "Senior Software Engineer",
    company: "Target Corporation, India",
    period: "Nov 2021 - Jul 2024",
    description: "Developed and implemented a sentiment analysis model for customer feedback, improving response accuracy by 15%. Collaborated with the data engineering team to build a data pipeline for real-time model training.",
    tags: ["Python", "Kotlin", "NLP", "Kafka", "Spark", "LLMs", "Microservices", "Micronaut", "NER", "QLoRA", "A/B Testing", "Scala", "PyTorch", "Elasticsearch"]
  },
  {
    role: "Software Engineer",
    company: "Target Corporation, India",
    period: "Jul 2019 - Oct 2021",
    description: "Implemented an LSTM-based context model for autocomplete, increasing demand by 2% (~$30M/year). Built a real-time Kafka pipeline in Kotlin processing 150M+ daily events. Automated deployment of a multi-node Redis cluster on Kubernetes, cutting deployment time from 1 hour to 10 minutes. Optimized search services using JMeter, reducing monthly operational costs by 15%.",
    tags: ["Python", "Keras", "Tornado", "Kotlin", "Kafka", "REST APIs", "Microservices", "Redis"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="w-full">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
        <div className="grid gap-10">
          {experienceData.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 items-start group">
              <div className="flex flex-col items-start md:items-end md:text-right">
                <p className="font-semibold text-lg">{exp.role}</p>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <div className="flex justify-center items-center my-4 md:my-0">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-card border-2 border-primary rounded-full">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <div key={tag} className="text-xs inline-flex items-center font-semibold py-1 px-3 uppercase rounded-full text-primary-foreground bg-primary/80">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
