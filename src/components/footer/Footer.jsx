import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Jacob Tech Info" width={50} height={50} />
          <h1 className={styles.logoText}>Jacob Tech Info</h1>
        </div>
        <p className={styles.desc}>
          Jacob Tech Info is a leading web development agency providing expert 
          insights, tutorials, and industry updates. We help businesses and 
          developers stay ahead in the ever-evolving tech landscape.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="Tiktok" width={18} height={18} />
          <Image src="/youtube.png" alt="Youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Categories</span>
          <Link href="/blog?cat=react">React</Link>
          <Link href="/blog?cat=nextjs">Next.js</Link>
          <Link href="/blog?cat=javascript">JavaScript</Link>
          <Link href="/blog?cat=webdev">Web Dev</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Legal</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
