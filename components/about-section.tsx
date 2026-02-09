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
            I am a results-oriented Data Science professional and Microsoft
            Certified Fabric Analytics Engineer with a strong foundation in data
            architecture and business intelligence. Currently pursuing an Honors
            Degree in Data Science at Belgium Campus iTversity, I bring hands-on
            experience from my tenure as a Graduate Data Scientist at Sambe
            Consulting, where I specialized in transforming complex datasets
            into actionable business insights.
          </p>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            My expertise spans the entire data lifecycle—from designing robust
            ETL pipelines and data warehouses to deploying cloud-based AI and
            computer vision models. With deep proficiency in Python, SQL, Power
            BI, and Azure, I focus on building scalable and explainable AI
            solutions that drive continuous improvement and deliver measurable
            value in enterprise environments.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                Programming & Languages
              </h4>
              <p className="text-sm text-muted-foreground">
                Python, SQL (MS SQL Server, MySQL, Oracle), R Studio, C#,
                JavaScript, HTML, CSS
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                BI & Visualization
              </h4>
              <p className="text-sm text-muted-foreground">
                Power BI, Microsoft Excel Pivot Tables, SSRS (SQL Server
                Reporting Services)
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                Data Management & ETL
              </h4>
              <p className="text-sm text-muted-foreground">
                Talend, SSIS (SQL Server Integration Services), Data
                Warehousing, Data Mining
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                Cloud & Machine Learning
              </h4>
              <p className="text-sm text-muted-foreground">
                Azure, Oracle PL/SQL, Machine Learning, Generative AI (Prompt
                Engineering)
              </p>
            </div>
          </div>
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
