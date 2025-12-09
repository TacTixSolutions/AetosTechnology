import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { calculateReadTime, formatDate } from "@/lib/blog-utils";

interface BlogCardProps {
  blog: {
    _id: string;
    titleEn: string;
    titleFr: string;
    slug: { current: string };
    contentEn: unknown[];
    contentFr: unknown[];
    picture: unknown;
    createdAt: string;
  };
  lang: "en" | "fr";
}

function BlogCard({ blog, lang }: BlogCardProps) {
  const title = lang === "fr" ? blog.titleFr : blog.titleEn;
  const content = lang === "fr" ? blog.contentFr : blog.contentEn;
  const readTime = calculateReadTime(content);
  const date = formatDate(blog.createdAt, lang);

  return (
    <Link href={`/${lang}/insights/blog/${blog.slug.current}`}>
      <div className="max-w-[420px] shadow-lg w-full h-[400px] lg:h-[500px] bg-white rounded-xl flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-2/3 w-full rounded-t-xl bg-gray-400 overflow-hidden">
          {blog.picture ? (
            <Image
              src={urlFor(blog.picture as never).url()}
              alt={title}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="font-inter w-full h-1/3 flex flex-col justify-between items-center p-3 lg:p-6">
          <p className="font-semibold text-lg lg:text-xl text-center line-clamp-2">
            {title}
          </p>
          <p className="text-gray-800">
            {date} - {readTime}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
