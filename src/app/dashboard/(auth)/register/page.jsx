"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  };

  return (
    <div className={styles.container}>
      <h1>Create an Account</h1>
      <h2>Please sign up to see dashboard</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
