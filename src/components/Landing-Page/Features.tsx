import React from "react";
import Image from "next/image";
import DataAccess from "../../../public/images/DataAccess.png";
import PatientEmpowerment from "../../../public/images/PatientEmpowerment.png";
import SecureStorage from "../../../public/images/SecureStorage.png";

export default function Features() {
  return (
    <>
      <div className="bg-[#e9f0ff] py-10">
        <h1 className="text-center text-3xl font-black">Features</h1>
        <h1 className="text-center text-lg mt-3">
          Vaultt is a blockchain-based healthcare data management system powered
          by the Base ecosystem, designed <br /> to empower patients with
          control over their health data.
        </h1>

        <div className="grid md:grid-cols-3 justify-items-center items-center gap-5 mx-16 mt-5">
          {/* Card 1 */}
          <div className="bg-gradient-to-t from-[#93bdeb] rounded-xl shadow-xl flex flex-col h-full">
            <div className="flex items-stretch gap-3 p-5 h-full">
              <div>
                <Image src={SecureStorage} alt="Secure Storage" />
                <h1 className="font-semibold text-[#06214a]">Secure Storage</h1>
              </div>
              <h1 className="self-end">
                Vaultt uses blockchain for secure patient record storage,
                ensuring data integrity.
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-t from-[#93bdeb] rounded-xl shadow-xl flex flex-col h-full">
            <div className="flex items-stretch gap-3 p-5 h-full">
              <div>
                <Image src={PatientEmpowerment} alt="Patient Empowerment" />
                <h1 className="font-semibold text-[#06214a]">
                  Patient Empowerment
                </h1>
              </div>
              <h1 className="self-end">
                Patients fully control their health data, managing and sharing
                records as needed.
              </h1>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-t from-[#93bdeb] rounded-xl shadow-xl flex flex-col h-full">
            <div className="flex items-stretch gap-3 p-5 h-full">
              <div>
                <Image src={DataAccess} alt="Data Access" />
                <h1 className="font-semibold text-[#06214a]">
                  Anonymized Data Access
                </h1>
              </div>
              <h1 className="self-end">
                Researchers access anonymized data for vital research while
                ensuring confidentiality.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
