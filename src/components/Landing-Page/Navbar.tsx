import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#e9f0ff] sticky top-0 ">
      <div className="container mx-auto flex justify-between px-4 pt-10 pb-10">
        <div className="md:grow-0 grow">
          <Link href="#" className="text-xl font-bold px-4 py-2 rounded-md">
            Vaultt
          </Link>
        </div>

        <div className="hidden lg:flex flex-grow justify-center space-x-8">
          <Link href="#" className="text-gray-700 font-semibold">
            Home
          </Link>
          <Link href="#" className="text-gray-700 font-semibold">
            About Us
          </Link>
          <Link href="#" className="text-gray-700 font-semibold">
            Features
          </Link>
          <Link href="#" className="text-gray-700 font-semibold">
            For Patients
          </Link>
          <Link href="#" className="text-gray-700 font-semibold">
            For Researchers
          </Link>
          <Link href="#" className="text-gray-700 font-semibold">
            FAQs
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Link
            href="#"
            className="text-white font-semibold bg-[#06214a] px-4 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>

        <div className="lg:hidden flex items-center ms-5">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden sticky top-10">
          <div className="flex flex-col space-y-5 p-4">
            <Link href="#" className="text-gray-700 hover:font-semibold">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:font-semibold">
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:font-semibold">
              Features
            </Link>
            <Link href="#" className="text-gray-700 hover:font-semibold">
              For Patients
            </Link>
            <Link href="#" className="text-gray-700 hover:font-semibold">
              For Researchers
            </Link>
            <Link href="#" className="text-gray-700 hover:font-semibold">
              FAQs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
