import Container from "@/app/components/container";
import { HeroPost } from "@/app/components/hero-post";
import { MoreStories } from "@/app/components/more-stories";
import { getAllblog } from "@/lib/api";
import { Metadata } from "next";

export default function Index() {
  const allblog = getAllblog();

  const heroPost = allblog[0];

  const moreblog = allblog.slice(1);

  return (
    <main>
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Blog.
            </h1>
        </section>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {moreblog.length > 0 && <MoreStories blog={moreblog} />}
      </Container>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Créalab - Blog",
    openGraph: {
      title: "Créalab - Blog",
      images: ["/images/og-image.jpg"],
    },
  };
}