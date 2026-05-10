import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/utils/sanity";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = await params;

  const data = await getData(slug);
  
  // Calculate reading time
  const wordCount = data?.desc?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200) || 5;

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-32 max-w-[1400px] pt-32 pb-20">
      {/* Breadcrumb */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* Category */}
        <Badge 
          variant="secondary" 
          className="mb-6 px-4 py-1.5 text-xs uppercase tracking-wider font-semibold bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400"
        >
          {data?.catSlug || "Article"}
        </Badge>
        
        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          {data?.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          {/* Author */}
          <div className="flex items-center gap-2">
            {data?.author?.image && (
              <div className="w-8 h-8 rounded-full overflow-hidden relative">
                <Image 
                  src={data.author.image} 
                  alt={data.author.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
            )}
            <span className="font-medium text-foreground">{data?.author?.name || "Unknown"}</span>
          </div>
          
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          
          {/* Date */}
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{(data?.publishedAt || data?._createdAt || "").substring(0, 10)}</span>
          </div>
          
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          
          {/* Reading Time */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <Button variant="outline" size="sm" className="rounded-full gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="rounded-full gap-2">
            <Bookmark className="w-4 h-4" />
            Save
          </Button>
        </div>
      </div>

      {/* Featured Image */}
      {data?.mainImage && (
        <div className="relative w-full aspect-[21/9] rounded-2xl lg:rounded-3xl overflow-hidden mb-16 shadow-xl">
          <Image 
            src={urlFor(data.mainImage).url()} 
            alt={data.title}
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      )}

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Main Article */}
        <article className="flex-[5] min-w-0">
          {/* Article Body */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-p:leading-relaxed prose-a:text-gold-600 dark:prose-a:text-gold-400">
            {data?.body ? (
              <PortableText value={data.body} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
            )}
          </div>

          {/* Divider */}
          <div className="my-16 border-t" />

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold mb-8">Discussion</h2>
            <Comments postSlug={slug}/>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="flex-[2] lg:sticky lg:top-32 lg:h-max">
          <Menu />
        </aside>
      </div>
    </div>
  );
};

export default SinglePage;
