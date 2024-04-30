import Link from "next/link";
import { AiOutlineMail } from 'react-icons/ai';

const page = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen relative justify-center bg-white">
      <div className="md:bg-[#FAFAFA] h-1/2 md:w-1/2 md:h-screen flex flex-col-reverse justify-center items-center">
        <img src="logo.webp" className="h-14 px-5 pt-1 absolute top-0 left-2" />
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-[#3272A8] font-bold text-2xl text-nowrap mb-4">Forgot Password</h2>
          <div className="relative w-3/5 lg:w-2/5">
            <input
              type="email"
              className="pl-8 border-[.1px] border-gray-700 w-full rounded-md px-2 py-1 text-sm my-2 placeholder-[#000000]/20 text-black"
              placeholder="Email"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineMail className="text-gray-400" />
            </span>
          </div>
          <Link href="../verify_otp" className="bg-[#3272A8] rounded-md my-5 py-1 w-3/5 text-white font-medium text-center lg:w-2/5">
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
