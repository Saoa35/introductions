import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

function About() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://www.bhpalmbeach.com/wp-content/uploads/2016/08/group-support_326545217.jpg"
          fill={true}
          alt="about"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>web development passion </h1>
          <h2>
            I love coding, it gives me power and feeling that I can change the
            world.
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who I Am?</h1>
          <p className={styles.desc}>
            I am FronEnd developer with 1 year experience in web developing,
            which includes personal pet projects and practical commercial
            experience in IT company, where I participated in the development of
            different projects in a team of professional developers.
          </p>
        </div>

        <div className={styles.item}>
          <h1>What technologies I use ?</h1>
          <p>
            In my work, I use such technologies as HTML, CSS(SCSS), React, React
            Native, Redux Toolkit, REST API/HTTP, TypeScript, Git, NodeJs,
            MongoDB, Nextjs...
          </p>

          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;
