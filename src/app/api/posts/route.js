import { client } from "@/utils/sanity";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 5;
  const skip = POST_PER_PAGE * (page - 1);
  const end = skip + POST_PER_PAGE;

  try {
    let query = `*[_type == "post"`;
    if (cat) {
      query += ` && $cat in categories[]->slug.current`;
    }
    query += `]`;

    const countQuery = `count(${query})`;
    const postsQuery = `${query} | order(_createdAt desc) [$skip...$end] {
      _id,
      title,
      desc,
      "slug": slug.current,
      mainImage,
      publishedAt,
      _createdAt,
      views,
      "catSlug": categories[0]->slug.current,
      author->{name, email, image}
    }`;

    const [posts, count] = await Promise.all([
      client.fetch(postsQuery, { cat, skip, end }),
      client.fetch(countQuery, { cat })
    ]);

    return NextResponse.json({ posts, count });
  } catch (err) {
    console.error("[POSTS_GET_ERROR]", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
