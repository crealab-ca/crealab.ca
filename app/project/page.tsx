import { Metadata } from "next";
import Container from "@/app/components/container";
import { HeroProjects } from "../components/hero-projects";

export default function ProjectPage() {
  return (
    <main>
        <Container>
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                    Projets.
                </h1>
            </section>
            <HeroProjects title="Arts et TIC" coverImage="/_projects/ArtsTIC/cover.png" excerpt="Le site web de la concentration Arts et TIC." url="https://artstic.crealab.ca"/>
        </Container>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Créalab - Projets",
    openGraph: {
      title: "Créalab - Projets",
      images: ["/images/og-image.jpg"],
    },
  };
}