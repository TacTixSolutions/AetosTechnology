import { getBlogBySlug, urlFor } from "@/lib/sanity";
import { Locale } from "@/lib/i18n-config";
import { notFound } from "next/navigation";
import Image from "next/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import { calculateReadTime, formatDate } from "@/lib/blog-utils";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const title = lang === "fr" ? blog.titleFr : blog.titleEn;
  const description =
    lang === "fr"
      ? `Lire l'article: ${blog.titleFr}`
      : `Read the article: ${blog.titleEn}`;

  return {
    title: `${title} - Aetos Technology`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      images: blog.picture ? [urlFor(blog.picture).url()] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.picture ? [urlFor(blog.picture).url()] : [],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const title = lang === "fr" ? blog.titleFr : blog.titleEn;
  const content = lang === "fr" ? blog.contentFr : blog.contentEn;
  const readTime = calculateReadTime(content);
  const date = formatDate(blog.createdAt, lang);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="w-9/10 px-auto lg:px-16 mx-auto max-w-[1440px] mb-8">
        <div className="flex items-center gap-2 text-lg text-[#7F7F7F]">
          <Link
            href={`/${lang}/insights`}
            className="hover:text-gray-400 font-inter flex transition-colors"
          >
            <span>
              <ChevronLeft className="inline-block mb-0.5 w-4 h-4" />{" "}
            </span>
            <p className="font-medium text-black">Blogs</p>
          </Link>
          <span>/</span>
          <span className="text-[#7F7F7F] font-inter line-clamp-1">
            {title}
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="w-9/10 px-auto lg:px-16 mx-auto max-w-[1440px]">
        {blog.picture && (
          <div className="relative rounded-xl h-[300px] mb-12">
            <Image
              src={urlFor(blog.picture).url()}
              alt={title}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        )}
        <div className="flex items-center text-[20px] gap-4 text-gray-800 mb-6">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
          {title}
        </h1>

        <div className="prose prose-lg max-w-none font-inter">
          <PortableTextRenderer content={content} />
        </div>
      </article>
    </div>
  );
}
