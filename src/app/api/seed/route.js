import { client } from "@/utils/sanity";
import { NextResponse } from "next/server";

export const GET = async () => {
  // Only allow if we have a token
  if (!process.env.SANITY_API_TOKEN) {
    return NextResponse.json({ message: "No Sanity API token found" }, { status: 401 });
  }

  // Use a client with the token so we can mutate
  const writeClient = client.withConfig({ token: process.env.SANITY_API_TOKEN });

  try {
    // 1. Create an Author (User)
    const author = await writeClient.createOrReplace({
      _id: 'seed-author-1',
      _type: 'user',
      name: 'Jacob Tech',
      email: 'hello@jacobtechinfo.com',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop',
    });

    // 2. Create Categories
    const categoriesData = [
      { _id: 'cat-nextjs', title: 'Next.js', slug: 'nextjs', desc: 'Everything about Next.js and React ecosystem.' },
      { _id: 'cat-design', title: 'Web Design', slug: 'web-design', desc: 'UI/UX tips, modern design trends, and CSS mastery.' },
      { _id: 'cat-architecture', title: 'Architecture', slug: 'architecture', desc: 'Backend systems, databases, and scalability.' },
    ];

    const categoryDocs = await Promise.all(
      categoriesData.map(c => writeClient.createOrReplace({
        _id: c._id,
        _type: 'category',
        title: c.title,
        slug: { _type: 'slug', current: c.slug },
        description: c.desc,
      }))
    );

    // 3. Create Posts
    const postsData = [
      {
        _id: 'post-1',
        title: 'Mastering the Next.js 15 App Router',
        slug: 'mastering-nextjs-15',
        desc: 'A comprehensive guide to building fast, SEO-friendly applications with the latest Next.js features.',
        catId: 'cat-nextjs',
        image: 'https://images.unsplash.com/photo-1618477247222-ac60c62857b4?q=80&w=1200&auto=format&fit=crop',
      },
      {
        _id: 'post-2',
        title: 'The Principles of Premium Web Design',
        slug: 'principles-of-premium-design',
        desc: 'How to elevate your user interfaces with space, typography, and subtle micro-interactions.',
        catId: 'cat-design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop',
      },
      {
        _id: 'post-3',
        title: 'Building Scalable Node.js Backends',
        slug: 'scalable-nodejs-backends',
        desc: 'Discover the architectural patterns used by top tech companies to scale their Node.js applications.',
        catId: 'cat-architecture',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
      },
      {
        _id: 'post-4',
        title: 'React Server Components Explained',
        slug: 'react-server-components-explained',
        desc: 'Understand the paradigm shift in React development and how RSCs improve performance.',
        catId: 'cat-nextjs',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
      }
    ];

    const postDocs = await Promise.all(
      postsData.map(p => writeClient.createOrReplace({
        _id: p._id,
        _type: 'post',
        title: p.title,
        slug: { _type: 'slug', current: p.slug },
        desc: p.desc,
        publishedAt: new Date().toISOString(),
        author: { _type: 'reference', _ref: author._id },
        categories: [{ _type: 'reference', _ref: p.catId }],
        // Sanity images ideally should be uploaded as assets. 
        // But for mock data, we can just omit mainImage and use a frontend fallback, or upload an asset.
        // To keep it simple, we'll skip mainImage for now, or just provide an empty array for body.
        body: [
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: p.desc + ' This is a seeded post. You can edit this content in Sanity Studio to add rich text, images, and more. Sanity provides an excellent editing experience.' }]
          }
        ]
      }))
    );

    return NextResponse.json({ message: "Seeded successfully!", author, categories: categoryDocs.length, posts: postDocs.length });
  } catch (err) {
    console.error("[SEED_ERROR]", err);
    return NextResponse.json({ message: "Failed to seed", error: err.message }, { status: 500 });
  }
};
