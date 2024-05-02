'use client'
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const page = () => {
  const [npassword, setnPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [shownPassword, setShownPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);

  const toggleShownPassword = () => {
    setShownPassword((prev) => !prev);
  };

  const toggleShowcPassword = () => {
    setShowcPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen relative justify-center bg-white">
      <div className="bg-[#ddebff] h-full md:w-3/5 lg:w-4/5 md:h-screen flex flex-col-reverse justify-center items-center">
        <div className="flex flex-col justify-center items-center lg:py-10 lg:w-3/5 px-8 py-8 bg-white rounded-lg shadow-lg">
          <h2 className='text-[#3272A8] font-bold text-2xl text-nowrap mb-4 pb-4'>Reset Password</h2>

          <div className="flex flex-row justify-center items-center w-full">
            <div className="relative w-full">
              <input
                type={shownPassword ? "text" : "password"}
                className='border-[.1px] border-gray-300 w-full rounded-xl px-2 py-1 text-sm my-2 placeholder-[#000000]/20 text-black'
                placeholder='New Password'
                value={npassword}
                onChange={(e) => setnPassword(e.target.value)}
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleShownPassword}>
                {shownPassword ?   <FaEye className="text-[#3272A8]"/>:<FaEyeSlash className="text-[#3272A8]"/>}
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-full">
            <div className="relative w-full">
              <input
                type={showcPassword ? "text" : "password"}
                className='border-[.1px] border-gray-300 w-full rounded-xl px-2 py-1 text-sm my-2 placeholder-[#000000]/20 text-black'
                placeholder='Confirm Password'
                value={cpassword}
                onChange={(e) => setcPassword(e.target.value)}
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleShowcPassword}>
                {showcPassword ?  <FaEye className=" text-[#3272A8]"/>:<FaEyeSlash className="text-[#3272A8]"/>}
              </span>
            </div>
          </div>

          <Link href="../login" className='text-center bg-[#3272A8] rounded-xl my-5 py-1 w-full text-white font-medium'>
            <button>Continue</button>
          </Link>
        </div>
      </div>

      <div className="h-1/2 md:w-1/2 md:h-screen justify-center items-center hidden md:flex">
        <img src="reset_pswd.png" className="w-2/3 object-contain" alt="Reset Password" />
      </div>
    </div>
  );
};

export default page;