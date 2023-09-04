import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

function Contact() {
  return (
    <div>
      <h1 className={styles.title}>Let`s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.jpg"
            fill={true}
            className={styles.image}
            alt="contacts"
          />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            className={styles.textArea}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
