import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "ijyul8tw",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to true in production for faster responses
});

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export async function getBlogs() {
  return client.fetch(
    `*[_type == "blog" && isPublished == true] | order(createdAt desc) {
      _id,
      titleEn,
      titleFr,
      slug,
      contentEn,
      contentFr,
      picture,
      createdAt,
      isPublished
    }`
  );
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug && isPublished == true][0] {
      _id,
      titleEn,
      titleFr,
      slug,
      contentEn,
      contentFr,
      picture,
      createdAt,
      isPublished
    }`,
    { slug }
  );
}

export async function getEvents() {
  return client.fetch(
    `*[_type == "event" && isPublished == true] | order(date desc) {
      _id,
      eventHost,
      titleEn,
      titleFr,
      slug,
      date,
      time,
      location,
      descriptionEn,
      descriptionFr,
      picture,
      isPublished
    }`
  );
}
