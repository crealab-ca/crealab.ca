import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  url: string;
};

export function HeroProjects({
  title,
  coverImage,
  excerpt,
  url,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Link href={`${url}`} target="_blank">
            <Image src={coverImage} alt={title} width={1300} height={630} />
        </Link>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`${url}`} className="hover:underline" target="_blank">
              {title}
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}