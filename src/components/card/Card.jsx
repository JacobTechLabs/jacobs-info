import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/utils/sanity";
import { Button } from "@/components/ui/button";

const Card = ({ item }) => {
  const slug = item.slug?.current || item.slug;
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center bg-card text-card-foreground border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
      {item.mainImage && (
        <div className="relative flex-1 w-full h-[300px] lg:h-[350px] rounded-xl overflow-hidden group">
          <Image src={urlFor(item.mainImage).url()} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-4 justify-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <span>{(item.publishedAt || item._createdAt).substring(0, 10)}</span>
          <span>•</span>
          <span className="text-primary font-semibold uppercase tracking-wider">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${slug}`}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight hover:text-primary transition-colors">
            {item.title}
          </h2>
        </Link>
        <p className="text-muted-foreground leading-relaxed">
          {item.desc?.substring(0, 120)}...
        </p>
        <Link href={`/posts/${slug}`} className="mt-2 w-max">
          <Button variant="outline" className="rounded-full">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
