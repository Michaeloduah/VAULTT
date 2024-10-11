import React from "react";
import Image from "next/image";
import Login from "../../public/images/signup.png";

export default function signin() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-[#06214a] h-screen w-full hidden md:block sticky top-0">
          <Image src={Login} alt="Login" className="mt-16 mx-auto px-10" />
          <h1 className="text-center text-white text-3xl font-black mt-5">
            VAULTT
          </h1>
        </div>
        <div className="px-5">
          <h1 className="text-center text-3xl font-black my-5 ">Sign In</h1>
          <form action="">
            <div className="my-3">
              <label htmlFor="email" className="font-semibold">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border-black border rounded-xl p-3"
                required
                placeholder="Enter Email Address"
              />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="font-semibold">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full border-black border rounded-xl p-3"
                required
                placeholder="Enter Password"
              />
            </div>
            <div className="my-3">
              <h1 className="font-semibold text-center">Forgetten Password?</h1>
            </div>
            <button
              type="submit"
              className="w-full p-2 rounded-lg my-3 bg-[#06214a] text-white "
            >
              Login
            </button>

            <div>
              <h1 className="font-semibold text-center">
                Don&apos;t have an account?{" "}
                <span className="text-[#06214a]">Create Account here</span>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
