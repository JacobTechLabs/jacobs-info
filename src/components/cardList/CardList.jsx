import React from "react";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { client } from "@/utils/sanity";

const getData = async (page, cat) => {
  const POST_PER_PAGE = 2;
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

    return { posts, count };
  } catch (err) {
    console.error("[POSTS_GET_ERROR]", err);
    throw new Error("Failed");
  }
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-[5] mt-12 mb-12">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">Recent Posts</h1>
      <div className="flex flex-col gap-16 lg:gap-24">
        {posts?.map((item, index) => (
          <Card item={item} key={item._id} index={index} />
        ))}
      </div>
      <div className="mt-12">
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </div>
  );
};

export default CardList;
