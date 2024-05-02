import Link from "next/link";
import { AiOutlineMail } from 'react-icons/ai';

const page = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen relative justify-center bg-white">
      <div className="bg-[#ddebff] h-full md:w-3/5 lg:w-4/5 md:h-screen flex flex-col-reverse justify-center items-center">

        <div className="flex flex-col justify-center items-center bg-white px-8 py-8 lg:py-10 lg:w-3/5 rounded-lg shadow-lg">
          <h2 className="text-[#3272A8] font-semibold text-2xl text-nowrap mb-4 pb-4">Forgot Password</h2>
          <div className="relative w-full">
            <input
              type="email"
              className="pl-8 border-[.1px] lg:w-full border-gray-300 rounded-xl py-1 text-sm my-2 placeholder-[#000000]/20 text-black"
              placeholder="Email"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineMail className="text-gray-400" />
            </span>
          </div>
          <Link href="../verify_otp" className="bg-[#3272A8] lg:w-full rounded-xl mt-4 py-1 w-full text-white font-medium text-center">
            <button>Send OTP</button>
          </Link>
        </div>
      </div>
      <div className="h-1/2 md:w-1/2 md:h-screen justify-center items-center hidden md:flex">
        <img src="forgotpswd.png" className="w-2/3 object-contain" />
      </div>
    </div>
  );
}

export default page;
