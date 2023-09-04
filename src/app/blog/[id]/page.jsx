import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function BlogId({ params }) {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
          <div className={styles.author}>
            <Image
              src="/#"
              alt="pict"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span>User name</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/#" alt="pict" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p>Content</p>
      </div>
    </div>
  );
}

export default BlogId;
