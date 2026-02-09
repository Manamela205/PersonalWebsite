"use client";

import { useState } from "react";
import {
  Stethoscope,
  Users,
  BarChart3,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  technologies: string[];
  icon: typeof Stethoscope;
}

const projects: Project[] = [
  {
    title: "Tuberculosis Detection System",
    subtitle: "Computer Vision & Explainable AI",
    description:
      "A web-based tuberculosis detection system using a CNN hosted on Azure Custom Vision, with Explainable AI (Grad-CAM) for model interpretability.",
    details: [
      "Implemented image upload workflow for radiologists to submit chest X-ray images for automated prediction.",
      "Built an image preprocessing pipeline before sending images to the trained CNN model for inference.",
      "Integrated Grad-CAM to visualize and highlight key image regions influencing model predictions.",
      "Deployed to Azure App Service for real-time inference with Azure Blob Storage for secure image storage.",
      "Used Supabase for authentication and storing prediction metadata and audit records.",
    ],
    technologies: [
      "Python",
      "CNN",
      "Azure Custom Vision",
      "Grad-CAM",
      "Azure App Service",
      "Supabase",
    ],
    icon: Stethoscope,
  },
  {
    title: "Employee Attrition Prediction",
    subtitle: "Machine Learning Project",
    description:
      "Predictive models to identify key factors contributing to employee attrition, supporting HR decision-making with data-driven insights.",
    details: [
      "Built predictive models using Python and scikit-learn.",
      "Performed data preprocessing, feature engineering, and model evaluation.",
      "Delivered actionable insights to support strategic HR decisions.",
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "Feature Engineering"],
    icon: Users,
  },
  {
    title: "HR Data Warehouse & BI Analytics",
    subtitle: "Data Engineering & BI Solution",
    description:
      "End-to-end data warehouse design for HR analytics with automated reporting workflows and Power BI dashboards.",
    details: [
      "Designed and implemented a data warehouse for HR analytics and reporting.",
      "Developed Power BI dashboards connected to SQL Server and Azure datasets.",
      "Automated reporting workflows and improved data accessibility for management.",
    ],
    technologies: ["SQL Server", "Azure", "Power BI", "Data Warehousing", "ETL"],
    icon: BarChart3,
  },
  {
    title: "Executive BI Dashboards",
    subtitle: "Business Intelligence",
    description:
      "Interactive executive dashboards using Power BI and DAX for business reporting, integrating multiple data sources.",
    details: [
      "Created interactive dashboards using Power BI and DAX for management reporting.",
      "Integrated multiple data sources including SQL databases and cloud-based datasets.",
      "Enabled real-time data visualization for executive decision-making.",
    ],
    technologies: ["Power BI", "DAX", "SQL", "Azure Datasets"],
    icon: LayoutDashboard,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg">
      <div className="p-6">
        <div className="mb-4 flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <project.icon className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-accent">{project.subtitle}</p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Expand toggle */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mb-4 flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent/80"
        >
          {expanded ? "Show less" : "Show details"}
          <ChevronDown
            className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {expanded && (
          <ul className="mb-4 flex flex-col gap-2">
            {project.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {detail}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
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
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Projects
        </div>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Featured Work
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
