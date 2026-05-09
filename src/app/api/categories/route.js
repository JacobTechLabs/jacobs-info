import { client } from "@/utils/sanity";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await client.fetch(`*[_type == "category"] | order(title asc)`);
    return NextResponse.json(categories);
  } catch (err) {
    console.error("[CATEGORIES_GET_ERROR]", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
