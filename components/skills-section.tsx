"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "SQL", level: 88, category: "Programming" },
  { name: "R", level: 60, category: "Programming" },
  { name: "C#", level: 50, category: "Programming" },
  { name: "Power BI & DAX", level: 85, category: "BI & Analytics" },
  { name: "Executive Dashboards", level: 82, category: "BI & Analytics" },
  { name: "scikit-learn", level: 85, category: "ML & AI" },
  { name: "CNNs / Computer Vision", level: 75, category: "ML & AI" },
  { name: "Explainable AI (Grad-CAM)", level: 70, category: "ML & AI" },
  { name: "Microsoft Azure", level: 80, category: "Cloud" },
  { name: "Microsoft Fabric", level: 75, category: "Cloud" },
  { name: "Databricks", level: 70, category: "Cloud" },
  { name: "ETL Pipelines", level: 78, category: "Data Eng" },
  { name: "Data Warehousing", level: 76, category: "Data Eng" },
  { name: "Elastic Stack", level: 65, category: "Data Eng" },
  { name: "Enterprise Content Management", level: 75, category: "Data Eng" },
  { name: "Database Administration", level: 85, category: "Data Eng" },
];

const categories = [
  "All",
  "Programming",
  "ML & AI",
  "BI & Analytics",
  "Cloud",
  "Data Eng",
];

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
          style={{ width: animate ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="bg-secondary/50 px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Skills
        </div>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Technical Expertise
        </h2>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${activeCategory === cat
                ? "bg-accent text-accent-foreground"
                : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
