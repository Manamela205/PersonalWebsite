"use client";

import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-medium text-muted-foreground">
              Open to opportunities
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Lucky Manamela
          </h1>

          <p className="text-lg font-medium text-accent md:text-xl">
            Junior Data Engineer | Data Scientist | BI &amp; Cloud Engineer
          </p>

          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Bridging the gap between raw data and strategic solutions.
            Specialist in building end-to-end ETL pipelines, predictive models,
            and scalable AI applications that transform complex data into
            actionable business growth.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="cv/Lucky Manamela cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="Academic_Transcript/Academic_Transcript.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              Download Transcript
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-border md:h-80 md:w-80">
            <Image
              src="Images/image.jpg"
              alt="Lucky Manamela"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-3 -right-3 rounded-xl border border-border bg-card px-4 py-2 shadow-lg">
            <p className="text-xs font-medium text-muted-foreground">
              Based in
            </p>
            <p className="text-sm font-semibold text-foreground">
              Tembisa, Gauteng, SA
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
