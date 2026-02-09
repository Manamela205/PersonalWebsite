import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {"Copyright © 2026 Lucky Manamela"}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:Kgalifi.manamela4@gmail.com"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucky-manamela/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
