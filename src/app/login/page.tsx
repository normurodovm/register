"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface Inputs {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/profile",
    });
  };
  return (
    <div className="mx-auto max-w-[1200px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="border p-3 bg-blue-300"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          type="password"
          className="border p-3 bg-blue-300"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        <button className="bg-green-300 p-4" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
