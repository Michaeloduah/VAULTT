import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "../../../public/images/hero.png";
import Ellipse6 from "../../../public/images/Ellipse6.png";
import Country from "../../../public/images/Country.png";
import Hospitals from "../../../public/images/Hospitals.png";
import Staff from "../../../public/images/Staff.png";
import Specialists from "../../../public/images/Specialists.png";

export default function () {
  return (
    <>
      <div className="bg-[#e9f0ff] grid justify-items-center items-center gap-5 md:grid-cols-2">
        <div className="px-10">
          <div className="flex justify-center">
            <Image src={Ellipse6} alt="Ellispse6" className="img-fluid" />
          </div>
          <h1 className="font-bold text-4xl leading-normal font-mono">
            Vaultt: Revolutionizing <br /> Healthcare Data Management <br />{" "}
            Across Africa
          </h1>
          <p className="font-bold mt-5">
            Empower yourself with control over your health data while
            accelerating <br /> medical research through secure,
            blockchain-based solutions.
          </p>
          <div className="flex md:gap-16 gap-5 md:mt-10 mt-5">
            <button className="text-white font-semibold bg-[#06214a] px-4 py-2 rounded-lg">
              Sign up Now
            </button>
            <button className="text-[#06214a] font-semibold border-2 border-[#06214a] px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="flex gap-5 mt-5 mb-10">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  fill="#06214a"
                />
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                  fill="#06214a"
                />
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  fill="#06214a"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="">
          <Image src={Hero} alt="Hero" />
        </div>
      </div>
      <div className="grid justify-items-center items-center gap-5 grid-cols-2 md:grid-cols-4 my-5 mx-10">
        <div className="">
          <div className="flex justify-center">
            <Image src={Staff} alt="Staff" />
          </div>
          <h1 className="text-center text-3xl text-[#062141] font-black my-3">
            102k
          </h1>
          <p className="text-center font-medium">
            Total Number of patients and medical staff
          </p>
        </div>
        <div className="">
          <div className="flex justify-center">
            <Image src={Hospitals} alt="Hospitals" />
          </div>
          <h1 className="text-center text-3xl text-[#062141] font-black my-3">
            5k
          </h1>
          <p className="text-center font-medium">
            Total number of hospitals avialable
          </p>
        </div>
        <div className="">
          <div className="flex justify-center">
            <Image src={Country} alt="Country" />
          </div>
          <h1 className="text-center text-3xl text-[#062141] font-black my-3">
            +100
          </h1>
          <p className="text-center font-medium">
            Over 150 countries reached
          </p>
        </div>
        <div className="">
          <div className="flex justify-center">
            <Image src={Specialists} alt="Specialists" />
          </div>
          <h1 className="text-center text-3xl text-[#062141] font-black my-3">
            +500
          </h1>
          <p className="text-center font-medium">
            Total number of Specialists on VAULTT
          </p>
        </div>
      </div>
    </>
  );
}
