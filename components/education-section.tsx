import { GraduationCap, Award, BookOpen } from "lucide-react";

const certifications = [
  "PL-300: Power BI Data Analyst Associate",
  "DP-700: Fabric Data Engineer Associate",
  "Microsoft Certified: Fabric Analytics Engineer Associate",
];

const courses = [
  "Python for Data Science and Machine Learning",
  "REST APIs with Flask and Python",
  "Microsoft Azure Fundamentals (AZ-900, DP-900)",
  "GitHub Actions",
  "SQL & PostgreSQL Developer Guide",
  "Generative AI for Beginners",
  "Power BI Advanced DAX",
  "Linux for Beginners",
  "Elastic Stack (Elasticsearch, Logstash, Kibana)",
  "SSIS & SSRS",
  "Agile & ITIL 4 Foundations",
];

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Education & Certifications
        </div>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Academic Background
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Education */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 p-3">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground">
                Honours in Bachelor of Computing (Data Science)
              </h4>
              <p className="text-sm text-accent">Belgium Campus iTversity</p>
              <p className="text-xs font-mono text-muted-foreground">
                2022 -- 2026
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">
                National Senior Certificate (Matric)
              </h4>
              <p className="text-sm text-accent">Phomolong Secondary School</p>
              <p className="text-xs font-mono text-muted-foreground">2018</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 p-3">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Microsoft Certifications
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-mono text-muted-foreground">
              Earned 2025
            </p>
          </div>

          {/* Additional Training */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 p-3">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Training & Courses
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              {courses.map((course) => (
                <div key={course} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
