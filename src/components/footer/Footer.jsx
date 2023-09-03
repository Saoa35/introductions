import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.container}>
      <div>2023 development</div>
      <div className={styles.social}>
        <Image
          src="/telegramm.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="telegramm"
        />
        <Image
          src="/skype.jpg"
          width={20}
          height={20}
          className={styles.icon}
          alt="skype"
        />
        <Image
          src="/linkedIn.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="linkedIn"
        />
        <Image
          src="/github.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="github"
        />
      </div>
    </footer>
  );
}

export default Footer;
