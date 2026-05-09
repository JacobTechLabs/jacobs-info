import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = await params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return NextResponse.json(post);
  } catch (err) {
    console.error("[POST_GET_ERROR]", err);
    if (err.code === 'P2025') {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
