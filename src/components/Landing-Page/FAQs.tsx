// import React from "react";

// export default function FAQs() {
//   return <></>;
// }

import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };

  return (
    <>
      <div className="bg-[#f6f9ff] py-10 md:py-20">
        <h1 className="text-center font-black text-3xl">FAQs</h1>
        <p className="text-center text-lg">
          Vaultt FAQs provide quick answers to common questions about managing
          health data and securely and efficiently
        </p>
        <div className="grid md:grid-cols-2 gap-5 md:gap-20 mt-10">
          <div className="space-y-4 md:px-20 px-5">
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 border border-blue-300 font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(0)}
              >
                How does Vaultt ensure data security
                <span>
                  {openIndex === 0 ? (
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
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div className={`${openIndex === 0 ? "block" : "hidden"} p-4`}>
              <p>The Answer to the question</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 border border-blue-300 font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(1)}
              >
                Can patients control who access their data
                <span>
                  {openIndex === 1 ? (
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
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div className={`${openIndex === 1 ? "block" : "hidden"} p-4`}>
                <p>The Answer to the question</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 border border-blue-300 font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(2)}
              >
                What types of data can be stored in Vaultt
                <span>
                  {openIndex === 2 ? (
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
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div className={`${openIndex === 2 ? "block" : "hidden"} p-4`}>
              <p>The Answer to the question</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:px-20 px-5">
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 border border-blue-300 font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(3)}
              >
                How can researchers get access to the data
                <span>
                  {openIndex === 3 ? (
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
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div className={`${openIndex === 3 ? "block" : "hidden"} p-4`}>
              <p>The Answer to the question</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 border border-blue-300 font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(4)}
              >
                What hapens if I loose access 
                <span>
                  {openIndex === 4 ? (
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
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div className={`${openIndex === 4 ? "block" : "hidden"} p-4`}>
                <p>The Answer to the question</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-4 border border-blue-300 font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(5)}
              >
                How do I get started with Vaultt
                <span>
                  {openIndex === 5 ? (
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
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div className={`${openIndex === 5 ? "block" : "hidden"} p-4`}>
              <p>The Answer to the question</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
