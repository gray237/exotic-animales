"use client";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button
        className="
          flex items-center justify-center h-10 px-4 rounded-xl border border-purple-400/36
          bg-linear-to-br from-purple-500/22 to-teal-400/14 font-semibold shadow-lg overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.99]"
      >
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
