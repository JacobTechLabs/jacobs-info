import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        title: 'asc',
      },
    });

    return NextResponse.json(categories);
  } catch (err) {
    console.error("[CATEGORIES_GET_ERROR]", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
