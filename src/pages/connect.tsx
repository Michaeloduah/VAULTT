import React from "react";
import Image from "next/image";
import Link from "next/link";
import Connect from "../../public/images/Connect.png";
import Wallet from "../../public/images/Wallet.png";
import Add from "../../public/images/Add.png";
import Logo from "../../public/images/Logo.png";

export default function connect() {
  return (
    <>
      <div className="bg-[#06214a] text-white h-fit">
        <Image src={Logo} alt="Logo" className="h-20 w-auto mx-2 pt-2" />
        <div className="py-10">
          <h1 className="text-center font-bold text-3xl">
            Create a wallet now
          </h1>
          <p className="text-center text-lg">
            Create your wallet to securely manage your health data and earn
            rewards for your contributions!
          </p>
          <div className="flex justify-center">
            <Image src={Connect} alt="Connect" className="p-10" />
          </div>
          <Link href="#">
            <div className=" rounded-xl md:w-[40%] mx-auto p-2">
              <div className="p-5 flex gap-5 items-center bg-[#1f365c] rounded-xl">
                <div className="">
                  <Image
                    src={Wallet}
                    alt="Wallet"
                    className="img-fluid w-12 h-12"
                  />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold">Create a new wallet</h1>
                  <h1 className="text-md">
                    Create a new wallet and start enjoying Vaultt
                  </h1>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className=" rounded-xl md:w-[40%] mx-auto p-2">
              <div className="p-5 flex gap-5 items-center bg-[#1f365c] rounded-xl">
                <div className="">
                  <Image
                    src={Add}
                    alt="Wallet"
                    className="img-fluid w-12 h-12"
                  />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold">
                    Add existing wallet on vaultt
                  </h1>
                  <h1 className="text-md">Import, restore or view only</h1>
                </div>
              </div>
            </div>
          </Link>
          <p className="text-center text-lg">
            Secure your Vaultt wallet: Keep your seed phrase safe to maintain
            access and control over your health data
          </p>
        </div>
      </div>
    </>
  );
}
