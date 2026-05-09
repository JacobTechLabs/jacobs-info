import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.button}>
            Go Home
          </Link>
          <Link href="/blog" className={styles.buttonOutline}>
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
