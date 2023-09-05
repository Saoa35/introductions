"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

function Register() {
  return (
    <div className={styles.container}>
      <h1>Create an Account</h1>
      <h2>Please sign up to see dashboard</h2>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="User Name"
          required
          className={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />

        <button className={styles.button}>Register</button>
      </form>

      <span>- OR -</span>

      <Link href="/dashboard/login" className={styles.link}>
        Login with an existing Account
      </Link>
    </div>
  );
}

export default Register;
