"use client";

import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certificates = [
    {
        title: "AZ-104: Microsoft Azure Administrator",
        file: "AZ-104 Microsoft Azure Administrator Certification.pdf",
        category: "Microsoft Azure",
    },
    {
        title: "AZ-900: Microsoft Azure Fundamentals",
        file: "AZ-900 Microsoft Azure Fundamentals.pdf",
        category: "Microsoft Azure",
    },
    {
        title: "Build Solutions with Power Apps, Power Automate & SharePoint",
        file: "Build Solutions with Power Apps, Power Automate & SharePoint.pdf",
        category: "Power Platform",
    },
    {
        title: "DP-900: Microsoft Azure Data Fundamentals",
        file: "DP-900 Microsoft Azure Data Fundamentals Certification.pdf",
        category: "Microsoft Azure",
    },
    {
        title: "Databricks Fundamentals",
        file: "Databricks Fundamentals.pdf",
        category: "Data Engineering",
    },
    {
        title: "Databricks Fundamentals (Generic)",
        file: "Databricks Fundamentals_Databricks - Generic.pdf",
        category: "Data Engineering",
    },
    {
        title: "Generative AI Fundamentals (Databricks)",
        file: "Generative AI Fundamentals_Databricks - Generic.pdf",
        category: "AI & Machine Learning",
    },
    {
        title: "Introduction to Service Management with ITIL 4",
        file: "Introduction to Service Management with ITIL 4.pdf",
        category: "IT Service Management",
    },
    {
        title: "Linux for Beginners",
        file: "Linux for Beginners.pdf",
        category: "Operating Systems",
    },
    {
        title: "Mastering SQL Server 2016 Integration Services (SSIS) - Part 1",
        file: "Mastering SQL Server 2016 Integration Services (SSIS)-Part 1.pdf",
        category: "Data Engineering",
    },
    {
        title: "Microsoft Certified: Fabric Analytics Engineer Associate",
        file: "Microsoft Certified - Fabric Analytics Engineer Associate.pdf",
        category: "Microsoft Fabric",
    },
    {
        title: "Microsoft Certified: Fabric Data Engineer Associate",
        file: "Microsoft Certified-Fabric Data Engineer Associate.pdf",
        category: "Microsoft Fabric",
    },
    {
        title: "Microsoft DP-700 prep: Fabric Data Engineer Associate",
        file: "Microsoft DP-700 prep Fabric Data Engineer Associate.pdf",
        category: "Microsoft Fabric",
    },
    {
        title: "Microsoft SQL Server Reporting Services (SSRS)",
        file: "Microsoft SQL Server Reporting Services (SSRS).pdf",
        category: "Data Engineering",
    },
    {
        title: "PL-300: Power BI Data Analyst Associate",
        file: "PL300 Credentials - LuckyManamela-0590 _ Microsoft Learn.pdf",
        category: "Data Analytics",
    },
    {
        title: "Python - The Professional Guide For Beginners (2025 Edition)",
        file: "Python - The Professional Guide For Beginners (2025 Edition).pdf",
        category: "Programming",
    },
    {
        title: "Querying Microsoft SQL Server with Transact-SQL",
        file: "Querying Microsoft SQL Server with Transact-SQL.pdf",
        category: "Data Engineering",
    },
    {
        title: "SQL Server Integration Services (SSIS) - An Introduction",
        file: "SQL Server Integration Services (SSIS) - An Introduction.pdf",
        category: "Data Engineering",
    },
    {
        title: "Foundations of Enterprise Content Management",
        file: "CertificateOfCompletion_Foundations of Enterprise Content Management.pdf",
        category: "Content Management",
    },
    {
        title: "Complete Microsoft SQL Server Database Administration Course",
        file: "Complete Microsoft SQL Server Database Administration Course.pdf",
        category: "Database Administration",
    },
];

export function CertificatesSection() {
    return (
        <section id="certificates" className="px-6 py-24 bg-secondary/30">
            <div className="mx-auto max-w-6xl">
                <div className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                    Certifications
                </div>
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Professional Credentials
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert) => (
                        <a
                            key={cert.file}
                            href={`Certificate/${cert.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
                        >
                            <div className="mb-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="rounded-lg bg-accent/10 p-3">
                                        <Award className="h-5 w-5 text-accent" />
                                    </div>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                                </div>
                                <h3 className="mb-1 text-sm font-semibold text-foreground leading-tight">
                                    {cert.title}
                                </h3>
                                <p className="text-xs text-accent font-medium">
                                    {cert.category}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <ShieldCheck className="h-3.3 w-3.5 text-muted-foreground" />
                                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                                    Verified Credential
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
