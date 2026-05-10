import { client } from "@/utils/sanity";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = await params;

  try {
    const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      desc,
      body,
      "slug": slug.current,
      mainImage,
      publishedAt,
      _createdAt,
      views,
      author->{name, email, image}
    }`, { slug });

    if (!post) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404 }
      );
    }

    // Increment views in Sanity (Fire and forget, don't await to avoid blocking response)
    client.patch(post._id).setIfMissing({ views: 0 }).inc({views: 1}).commit().catch(console.error);
    post.views = (post.views || 0) + 1; // optimistically update

    return NextResponse.json(post);
  } catch (err) {
    console.error("[POST_GET_ERROR]", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
