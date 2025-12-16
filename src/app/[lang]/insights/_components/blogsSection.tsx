import BlogCard from "./blogCard";

interface BlogsSectionProps {
  blogs: Array<{
    _id: string;
    titleEn: string;
    titleFr: string;
    slug: { current: string };
    contentEn: unknown[];
    contentFr: unknown[];
    picture: unknown;
    createdAt: string;
  }>;
  lang: "en" | "fr";
}

function BlogsSection({ blogs, lang }: BlogsSectionProps) {
  const blogsAvailable =
    lang === "fr"
      ? `${blogs.length} blogs disponibles`
      : `${blogs.length} available blogs`;

  return (
    <div className="my-16">
      <div className="flex flex-row items-center justify-between font-inter">
        <p className=" font-semibold text-[32px]">Blogs</p>
        <p className="text-lg text-gray-700">{blogsAvailable}</p>
      </div>
      <div className="grid max-[600px]:grid-cols-1 max-[900px]:grid-cols-2 min-[900px]:grid-cols-3 place-items-center gap-6 mt-10">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default BlogsSection;
