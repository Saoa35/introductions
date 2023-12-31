"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
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

        {error && "Something went wrong!"}
      </form>

      <span className={styles.or}>- OR -</span>

      <Link href="/dashboard/login" className={styles.link}>
        Login with an existing Account
      </Link>
    </div>
  );
};

export default Register;
