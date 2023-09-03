import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import Main from "public/Main.jpg";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>The Future of AI in the next few years</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>

        <Button url="/portfolio" text="See my works" />
      </div>
      <div className={styles.item}>
        <Image src={Main} alt="Main image" className={styles.img} />
      </div>
    </main>
  );
}
