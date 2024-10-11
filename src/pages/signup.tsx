import React from "react";
import Image from "next/image";
import Login from "../../public/images/signup.png";

export default function signup() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-[#06214a] h-screen w-full hidden md:block sticky top-0">
          <Image src={Login} alt="Login" className="mt-16 mx-auto px-10" />
          <h1 className="text-center text-white text-3xl font-black mt-5">
            VAULTT
          </h1>
        </div>
        <div className="px-5">
          <h1 className="text-center text-3xl font-black my-5 ">Sign Up</h1>
          <form action="">
            <div className="my-3">
              <label htmlFor="name" className="font-semibold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full border-black border rounded-xl p-3"
                required
                placeholder="Enter Full Name"
              />
            </div>
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
              <label htmlFor="phone" className="font-semibold">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full border-black border rounded-xl p-3"
                required
                placeholder="Enter Phone Number"
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
            <div className="text-[#06214a] font-semibold">
              <h1>PASSWORD MUST CONTAIN</h1>
              <ul>
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Minimum of 8 characters
                </li>
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Atleast one uppercase and lowercase
                </li>
                <li className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Atleast one number
                </li>
              </ul>
            </div>
            <div className="my-3">
              <label htmlFor="country" className="font-semibold">
                Country:
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="w-full border-black border rounded-xl p-3"
                required
                placeholder="Enter Country"
              />
            </div>
            <div className="my-3 flex">
              <input
                type="checkbox"
                name="country"
                id="country"
                className="border-black border rounded-xl mx-3"
                required
                placeholder="Enter Country"
              />
              <label htmlFor="country" className="font-semibold">
                By creating an account, you agree to the{" "}
                <span className="text-[#06214a]">Term</span> and{" "}
                <span className="text-[#06214a]">Conditions</span> and{" "}
                <span className="text-[#06214a]">Privacy Policy</span>:
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-2 rounded-lg my-3 bg-[#06214a] text-white "
            >
              Create Account
            </button>

            <div>
              <h1 className="font-semibold text-center">
                Already here an Account?{" "}
                <span className="text-[#06214a]">LOGIN here</span>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
