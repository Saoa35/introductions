"use client";

import { signIn } from "next-auth/react";
import React from "react";

function Login() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
}

export default Login;
