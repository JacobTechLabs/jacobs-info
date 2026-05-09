import { auth } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(1).max(200),
  desc: z.string().min(1).max(10000),
  slug: z.string().min(1).max(200),
  catSlug: z.string().min(1),
  img: z.string().optional(),
});

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 5;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
    orderBy: {
      createdAt: 'desc',
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
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










// CREATE A POST
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
    
    const validatedData = postSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: validatedData.error.errors },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: { ...validatedData.data, userEmail: session.user.email },
    });

    return NextResponse.json(post);
  } catch (err) {
    console.error("[POSTS_POST_ERROR]", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
