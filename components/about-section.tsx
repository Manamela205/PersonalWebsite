import { Brain, Cloud, Database, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Building predictive models with scikit-learn, CNNs, and computer vision for healthcare and HR analytics.",
  },
  {
    icon: Cloud,
    title: "Cloud & Azure",
    description:
      "Deploying AI applications on Azure App Service, Blob Storage, Custom Vision, and Microsoft Fabric.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Designing ETL pipelines, data warehouses, and processing data with Databricks and SQL Server.",
  },
  {
    icon: BarChart3,
    title: "BI & Analytics",
    description:
      "Creating executive-level Power BI dashboards with DAX, integrated with Azure and SQL Server datasets.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          About Me
        </div>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Background
        </h2>

        <div className="mb-16 max-w-3xl">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I am a Junior Data Scientist, BI and Cloud Engineer with practical
            experience in Python, SQL, Power BI, and Azure, gained through a
            completed Graduate Data Scientist contract at Sambe Consulting.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            My experience spans building machine learning and computer vision
            models, supporting ETL pipelines, and deploying cloud-based AI
            applications. I have a strong foundation in data analytics, BI
            dashboards, and Agile project delivery, with a focus on Explainable
            AI and scalable solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
