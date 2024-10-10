import React from "react";

export default function Footer() {
  return (
    <>
    <div className="bg-[#06214a]">

      <div className="grid  gap-1 md:mx-20 mx-5 md:grid-cols-4 md:gap-10 ">
        <div className="py-5">
            <h1 className="text-white text-xl">Empowering with sercure control of their data.</h1>
        </div>
        <div className="py-5">
            <h1 className="text-white text-xl mb-3">Support Links</h1>
            <ul className="text-white">
                <li className="mb-2">Help Center</li>
                <li className="mb-2">Tecnical Support</li>
            </ul>
        </div>
        <div className="py-5">
            <h1 className="text-white text-xl mb-3">Legal</h1>
            <ul className="text-white">
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Terms of Service</li>
                <li className="mb-2">Data Protection Policy</li>
            </ul>
        </div>
        <div className="py-5 text-white">
            2024Vaultt. All rights reserved.
        </div>
      </div>
    </div>
    </>
  );
}
