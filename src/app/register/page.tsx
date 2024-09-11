"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = (data: Inputs) => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/login");
      });
  };
  return (
    <div className="mx-auto max-w-[1200px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border p-3 bg-blue-300"
          type="text"
          placeholder="text"
          {...register("name", { required: true })}
        />
        <br />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
