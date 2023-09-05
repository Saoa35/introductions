import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data, status: ${res.status}`);
  }

  return res.json();
}

async function Blog() {
  const data = await getData();

  return (
    <div>
      {data.map((post) => (
        <Link
          href={`blog/${post._id}`}
          className={styles.container}
          key={post._id}
        >
          <div>
            <Image
              src={post.img}
              alt="post image"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
