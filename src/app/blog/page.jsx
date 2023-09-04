import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

function Blog() {
  return (
    <div>
      <Link href="blog/test" className={styles.container} key="1">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/house-with-save-world-icons_24877-50575.jpg"
            alt="blog"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>

      <Link href="blog/test2" className={styles.container} key="2">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/house-with-save-world-icons_24877-50575.jpg"
            alt="blog"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
