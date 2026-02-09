import React from "react"
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucky Manamela | Junior AI Engineer & Data Scientist",
  description:
    "Junior AI Engineer, Data Scientist, BI & Cloud Analyst. Experienced in Python, SQL, Power BI, Azure, machine learning, and deploying cloud-based AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
