import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

function Category({ params }) {
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>

      <div className={styles.item} key="1">
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://img.freepik.com/free-vector/house-with-save-world-icons_24877-50575.jpg"
            alt="Some img"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
