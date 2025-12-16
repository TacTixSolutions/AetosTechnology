export function calculateReadTime(content: unknown[]): string {
  if (!content || content.length === 0) return "1 min read";

  let wordCount = 0;

  content.forEach((block: unknown) => {
    const typedBlock = block as {
      _type?: string;
      children?: Array<{ text?: string }>;
    };
    if (typedBlock._type === "block" && typedBlock.children) {
      typedBlock.children.forEach((child) => {
        if (child.text) {
          wordCount += child.text
            .split(/\s+/)
            .filter((word: string) => word.length > 0).length;
        }
      });
    }
  });

  const readTimeMinutes = Math.ceil(wordCount / 200);

  return `${readTimeMinutes} min read`;
}

export function formatDate(
  date: string | Date,
  locale: "en" | "fr" = "en"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dateObj.toLocaleDateString(
    locale === "fr" ? "fr-FR" : "en-US",
    options
  );
}
