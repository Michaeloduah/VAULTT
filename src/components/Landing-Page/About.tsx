import React from "react";
import Image from "next/image";
import Abouts from "../../../public/images/About.png";
import WHO from "../../../public/images/WHO.png";
import Base from "../../../public/images/Base.png";


export default function About() {
  return (
    <>
      <div className="bg-[#e9f0ff]">
        <div className="grid justify-items-center items-center md:grid-cols-2 py-12 gap-10 aboutus">
          <div className="md:ms-20">
            <div className="flex justify-center ">
              <Image src={Abouts} alt="About" />
            </div>
          </div>
          <div className="mx-10">
            <h1 className="font-bold text-2xl text-center">About Us</h1>
            <p className="font-mono ">
              Vaultt is more than a healthcare data management system. It is a
              movement towards a more secure and efficient healthcare ecosystem
              in Africa. By harnessing the power of blockchain technology, we
              aim to break down barriers, enhance patient control, and
              accelerate medical research. Join us in revolutionizing the
              healthcare data landscape get started with Vaultt today!
            </p>
            <button className="w-full mt-5 bg-[#06214a] text-white py-2 rounded-xl">
              Get Started
            </button>
          </div>
        </div>

        <div className="py-14">
          <h1 className="text-3xl font-black text-[#06214a] text-center">
            Our Partners
          </h1>
          <div className="flex gap-20 justify-center mt-5">
            <Image src={Base} alt="Base" className="h-14 w-auto"/>
            <Image src={WHO} alt="WHO" className="h-14 w-auto"/>
          </div>
        </div>
      </div>
    </> 
  );
}
