import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function BlogId({ params }) {
  const data = await getData(params.id);

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
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
