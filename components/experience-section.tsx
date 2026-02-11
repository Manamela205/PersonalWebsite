import { Briefcase, Users } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  icon: typeof Briefcase;
  responsibilities: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Graduate Data Scientist",
    company: "Sambe Consulting",
    period: "Feb 2025 -- Jan 2026",
    type: "Contract",
    icon: Briefcase,
    responsibilities: [
      "Supported BI and data engineering projects using Python, SQL, Power BI, and Azure.",
      "Assisted in developing and maintaining ETL pipelines and data warehouse solutions.",
      "Built predictive machine learning models (scikit-learn) for business and HR analytics use cases.",
      "Designed and delivered executive-level Power BI dashboards integrated with SQL Server.",
      "Collaborated with business, risk, and technical teams in Agile environments.",
      "Worked with Databricks notebooks and SQL for data processing and analysis tasks.",
      "Utilized the Elastic Stack (Elasticsearch, Logstash, Kibana) for log analysis and data monitoring.",
      "Developing a responsive Power Platform application for pharmaceutical order tracking and reporting.",
      "Automating database creation and server networking using Python, SQL, Pinggy, and GitHub Actions.",
      "Configuring Elastic Stack (Elasticsearch, Kibana) for timesheet data migration and analytics.",
      "Building predictive ML models and delivering executive-level Power BI dashboards.",
      "Applying user-centered design and independent problem-solving in an Agile enterprise environment.",
    ],
    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "Azure",
      "scikit-learn",
      "Databricks",
      "Elastic Stack",
      "Power Platform",
      "GitHub Actions",
    ],
  },
  {
    role: "Vice President",
    company: "Student Representative Council (SRC)",
    period: "2023 -- 2024",
    type: "Leadership",
    icon: Users,
    responsibilities: [
      "Represented student interests and coordinated campus initiatives.",
      "Led strategic decision-making and collaborated with university administration.",
      "Organized events and managed student community engagement.",
    ],
    technologies: ["Leadership", "Communication", "Project Management"],
  },
  {
    role: "Student Relation Department Member",
    company: "Student Representative Council (SRC)",
    period: "2022 -- 2023",
    type: "Leadership",
    icon: Users,
    responsibilities: [
      "Represented student interests and coordinated campus initiatives.",
      "Collaborated strategic decision-making.",
      "Organized events and managed student community engagement.",
    ],
    technologies: ["Leadership", "Communication", "Project Management"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Experience
        </div>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Work History
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-border md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <div key={exp.role} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 hidden md:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background">
                    <exp.icon className="h-5 w-5 text-accent" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-accent">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mb-4 flex flex-col gap-2">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
