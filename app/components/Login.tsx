"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/action";
interface userLogin {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<userLogin>({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin(userData));
  };

  return (
    <div className=" flex justify-center  md:h-[90vh] items-center ">
      <form
        className="  flex border border-gray-200  space-x-3"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col gap-4  p-20 w-[500px] justify-center">
          <h2 className=" font-bold  text-3xl">Welcome back</h2>
          <p className=" text-gray-500">Please enter your details</p>
          <div className=" flex flex-col">
            <label className=" font-bold mb-1">Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className=" border-2 border-gray-400 py-2 px-2"
            />
            <label className=" font-bold mt-3 mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className=" border-2 border-gray-400 py-2 px-2"
            />
          </div>
          <Link href="" className=" text-blue-900 underline">
            Forgot Password
          </Link>

          <button type="submit" className="bg-[#7b7bc2] text-white py-2 px-2">
            Sign in
          </button>
          <button className="border border-gray-300 py-2 px-2">
            Sign in with Google
          </button>
          <p>
            Don't have an account?{" "}
            <Link href="" className="text-blue-900 underline">
              Sign Up
            </Link>
          </p>
        </div>
        <div className=" hidden md:block">
          <Image
            src="/assets/images/task.png"
            alt="Description"
            width={0}
            height={0}
            sizes="110vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
