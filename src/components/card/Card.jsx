import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { urlFor } from "@/utils/sanity";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.mainImage && (
        <div className={styles.imageContainer}>
          <Image src={urlFor(item.mainImage).url()} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {(item.publishedAt || item._createdAt).substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* Short description from Sanity */}
        <p className={styles.desc}>{item.desc?.substring(0, 60)}...</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
