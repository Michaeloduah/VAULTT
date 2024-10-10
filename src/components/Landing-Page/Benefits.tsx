import React from "react";
import Image from "next/image";
import ForPatient from "../../../public/images/ForPatient.png";
import ForWorkers from "../../../public/images/ForWorkers.png";
import ForResearchers from "../../../public/images/ForResearchers.png";

export default function Benefits() {
  return (
    <>
      <div className="bg-[#e9f0ff] py-10 md:py-2">
        <h1 className="text-center font-bold text-3xl">
          What are the{" "}
          <span className="text-[#007bff] font-black">Benefits</span> of using
          Vaultt
        </h1>

        <div className="grid md:grid-cols-3 justify-items-center items-center gap-5 md:mx-16 mx-5 mt-16 pb-16">
          <div className="bg-[#f6f9ff] rounded-t-full">
            <Image src={ForPatient} alt="" className=""/>
            <div className="flex justify-between p-5">
                <h1 className="text-lg">Control your Data</h1>
                <h1 className="text-lg">Private Feature</h1>
            </div>
          </div>
          <div className="bg-[#f6f9ff] rounded-t-full">
            <Image src={ForWorkers} alt="" className=""/>
            <div className="flex justify-between p-5">
                <h1 className="text-lg">Access more patients</h1>
                <h1 className="text-lg">Reducing work load</h1>
            </div>
          </div>
          <div className="bg-[#f6f9ff] rounded-t-full">
            <Image src={ForResearchers} alt="" className=""/>
            <div className="flex justify-between p-5">
                <h1 className="text-lg">Research Access</h1>
                <h1 className="text-lg">Data Insight</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
