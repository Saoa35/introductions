"use client";

import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Dashboard() {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status == "loading") {
    return <p>Loading...</p>;
  }

  if (session.status == "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status == "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2>{post.title}</h2>
                  <span className={styles.delete}>X</span>
                </div>
              ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>

          <input type="text" placeholder="Title" className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
          />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea className={styles.textArea} cols={30} rows={10} />

          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
