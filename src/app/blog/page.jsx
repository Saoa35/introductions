import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Blog() {
  const data = await getData();

  return (
    <div>
      {data.map((post) => (
        <Link
          href={`blog/${post.id}`}
          className={styles.container}
          key={post.id}
        >
          <div>
            <Image
              src="https://storage.googleapis.com/pai-images/a92a4f52669b47e69d16c3d94716c38c.jpeg"
              alt="blog"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
