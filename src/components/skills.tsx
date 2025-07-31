import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { SkillCategory, Skill } from "@/lib/types";
import { Code, Cpu, Database, BrainCircuit, Rocket, type LucideIcon, Search } from "lucide-react";

const categoryIcons: { [key: string]: LucideIcon } = {
  "Programming Languages": Code,
  "ML Frameworks & Libraries": BrainCircuit,
  "Search Technologies": Search,
  "Tools & Platforms": Rocket,
};

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: Code, proficiency: 95 },
      { name: "Kotlin", icon: Code, proficiency: 95 },
      { name: "Java", icon: Code, proficiency: 85 },
      { name: "C++", icon: Code, proficiency: 80 },
      { name: "Scala", icon: Code, proficiency: 90 },
      { name: "SQL", icon: Database, proficiency: 80 },
    ],
  },
  {
    category: "ML Frameworks & Libraries",
    skills: [
      { name: "PyTorch", icon: BrainCircuit, proficiency: 90 },
      { name: "Scikit-learn", icon: BrainCircuit, proficiency: 85 },
      { name: "Pandas", icon: Cpu, proficiency: 95 },
      { name: "NumPy", icon: Cpu, proficiency: 90 },
      { name: "HuggingFace", icon: Cpu, proficiency: 90 },

    ],
  },
  {
    category: "Search Technologies",
    skills: [
      { name: "Elasticsearch", icon: Search, proficiency: 90 },
      { name: "Lucene", icon: Search, proficiency: 90 },
      { name: "Solr", icon: Search, proficiency: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Docker", icon: Cpu, proficiency: 80 },
      { name: "Git & GitHub", icon: Cpu, proficiency: 90 },
      { name: "Kubernetes", icon: Cpu, proficiency: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full">
      <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category) => {
          const CategoryIcon = categoryIcons[category.category];
          return (
            <Card key={category.category} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {CategoryIcon && <CategoryIcon className="h-6 w-6 text-primary" />}
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-muted-foreground" />
                        {skill.name}
                      </p>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency ${skill.proficiency} percent`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
