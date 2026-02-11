"use client";

import { useState } from "react";
import {
  Stethoscope,
  Users,
  BarChart3,
  LayoutDashboard,
  Server,
  AppWindow,
  Database,
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
  {
    title: "Automated Database & Server Networking",
    subtitle: "Database Automation & Migration",
    description:
      "Automated the deployment of database instances and configured server networking for secure remote access.",
    details: [
      "Implemented database automation scripts to streamline environment setup and deployment workflows.",
      "Configured server networking using Pinggy to expose local services for remote testing and collaboration.",
      "Integrated Elastic Stack (Elasticsearch, Kibana) for efficient timesheet data migration and monitoring.",
      "Resolved complex configuration challenges through independent research and technical troubleshooting.",
    ],
    technologies: ["SQL", "Python", "Pinggy", "Elastic/Kibana", "SSIS"],
    icon: Server,
  },
  {
    title: "Order Tracking & Reporting App",
    subtitle: "Power Platform Development",
    description:
      "A responsive low-code application for tracking and reporting pharmacy orders, improving operational efficiency.",
    details: [
      "Designed a user-centered interface in Power Apps optimized for Desktop, Tablet, and Mobile devices.",
      "Developed automated workflows using Power Automate for order processing and real-time notifications.",
      "Integrated SharePoint as a secure backend data source for centralized data management.",
      "Conducted iterative user testing and refined complex designs to enhance overall usability and UX.",
    ],
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Low-Code"],
    icon: AppWindow,
  },
  {
    title: "Timesheet Data Migration",
    subtitle: "ETL & Real-time Visualization",
    description:
      "Migrated enterprise timesheet data from legacy formats to a relational database with real-time analytics integration.",
    details: [
      "Designed and implemented complex SSIS packages for enterprise-scale ETL (Extract, Transform, Load) processes.",
      "Optimized SQL queries and normalized database structures to ensure high data integrity and retrieval speed.",
      "Configured Elastic Stack (Elasticsearch, Logstash, Kibana) for log management and real-time monitoring dashboards.",
      "Automated the entire migration and deployment lifecycle using GitHub Actions CI/CD pipelines.",
    ],
    technologies: ["SSIS", "SQL Server", "Elastic/Kibana", "GitHub Actions"],
    icon: Database,
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
