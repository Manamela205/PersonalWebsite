"use client";

import React from "react"

import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Opens the user's email client with a pre-filled message
    const mailtoLink = `mailto:Kgalifi.manamela4@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Contact
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {"Let's Connect"}
        </h2>
        <p className="mb-12 max-w-lg text-muted-foreground leading-relaxed">
          {
            "Interested in discussing a project, collaboration, or opportunity? I'd love to hear from you."
          }
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? (
                "Opening email client..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:Kgalifi.manamela4@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="h-5 w-5" />
                  Kgalifi.manamela4@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/lucky-manamela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Linkedin className="h-5 w-5" />
                  linkedin.com/in/lucky-manamela
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Location
              </h3>
              <p className="text-sm text-muted-foreground">
                Chloorkop, Phomolong, 1619
              </p>
              <p className="text-sm text-muted-foreground">Gauteng, South Africa</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Phone
              </h3>
              <p className="text-sm text-muted-foreground">063 198 4551</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
