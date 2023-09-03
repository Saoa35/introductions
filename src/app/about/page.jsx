import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

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
      </div>
    </div>
  );
}

export default About;
