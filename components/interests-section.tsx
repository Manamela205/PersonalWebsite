import { Puzzle, CircleDot, HeartPulse, LineChart } from "lucide-react";

const interests = [
  {
    icon: Puzzle,
    title: "Chess",
    description:
      "Strategic thinker and chess enthusiast. The game sharpens analytical thinking and decision-making.",
  },
  {
    icon: CircleDot,
    title: "Soccer",
    description:
      "Active team player on the pitch. Soccer builds teamwork, discipline, and resilience.",
  },
];

export function InterestsSection() {
  return (
    <section className="bg-secondary/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Interests
        </div>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Beyond Work
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
