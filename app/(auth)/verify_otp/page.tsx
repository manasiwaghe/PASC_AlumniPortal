import Link from "next/link"

const page = () => {
    return (
    
      <div
      className="flex flex-col-reverse md:flex-row w-screen h-screen relative justify-center bg-white">
       <div className="md:bg-[#FAFAFA] h-1/2 md:w-1/2 md:h-screen flex flex-col-reverse justify-center items-center">
       <img
        src="logo.webp" 
        className="h-14 px-5 pt-1 absolute top-0 left-2 "
        ></img>
         <div className=" flex flex-col justify-center items-center w-full">
             <h2 className='text-[#3272A8] font-bold text-2xl text-nowrap mb-4'>Verify OPT</h2>
             <input type='text' className=' border-[.1px] border-gray-700 w-3/5 lg:w-2/5 rounded-md px-2 py-1 text-sm my-2 placeholder-[#000000]/20 text-black' placeholder='Enter OTP'></input>         
         <Link href={'../reset_pswd'}  className='bg-[#3272A8] rounded-md my-5 py-1 w-3/5 lg:w-2/5 text-white font-medium text-center'> <button >Continue</button></Link>
           </div>
       </div>
       <div className="h-1/2 md:w-1/2 md:h-screen justify-center items-center hidden md:flex">
        
         <img src="forgotpswd.png" className="w-2/3 object-contain"></img>
   
       </div>
     </div>
  
    )
  }
  
  export default page