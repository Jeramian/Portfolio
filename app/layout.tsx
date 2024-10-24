import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Projects from "./components/projects";

export const metadata: Metadata = {
  title: "Jeremys Portfolio",
  description: "A portfolio of my works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <Projects />
        <Footer />
        {children}
      </body>
    </html>
  );
}