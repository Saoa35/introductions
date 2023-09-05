"use client";

import { SessionProvider } from "next-auth/react";

export const AuthProvider = () => {
  return <SessionProvider>AuthProvider</SessionProvider>;
};
