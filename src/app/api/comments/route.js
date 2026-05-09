import { auth } from "@/utils/auth";
import { client } from "@/utils/sanity";
import { NextResponse } from "next/server";
import { z } from "zod";

const commentSchema = z.object({
  desc: z.string().min(1).max(2000),
  postSlug: z.string().min(1),
});

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    let query = `*[_type == "comment"`;
    if (postSlug) {
      query += ` && post->slug.current == $postSlug`;
    }
    query += `] | order(_createdAt desc) {
      _id,
      desc,
      _createdAt,
      user->{name, email, image}
    }`;

    const comments = await client.fetch(query, { postSlug });
    return NextResponse.json(comments);
  } catch (err) {
    console.error("[COMMENTS_GET_ERROR]", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { message: "Not Authenticated!" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    
    const validatedData = commentSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: validatedData.error.errors },
        { status: 400 }
      );
    }

    // First find the user and post to link them
    const user = await client.fetch(`*[_type == "user" && email == $email][0]`, { email: session.user.email });
    const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: validatedData.data.postSlug });

    if (!user || !post) {
      return NextResponse.json(
        { message: "User or Post not found in Sanity" },
        { status: 404 }
      );
    }

    // Create the comment document
    const comment = await client.create({
      _type: 'comment',
      desc: validatedData.data.desc,
      post: {
        _type: 'reference',
        _ref: post._id,
      },
      user: {
        _type: 'reference',
        _ref: user._id,
      }
    });

    // Manually format the response to match the GET query structure for optimistic UI
    const formattedComment = {
      _id: comment._id,
      desc: comment.desc,
      _createdAt: comment._createdAt,
      user: {
        name: user.name,
        email: user.email,
        image: user.image
      }
    };

    return NextResponse.json(formattedComment);
  } catch (err) {
    console.error("[COMMENTS_POST_ERROR]", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
