import Image from 'next/image'
import React from 'react'
import { MdSend  } from 'react-icons/md'
import Link from 'next/link'
import { FaTwitter,FaInstagram,FaFacebook,FaLinkedin, } from 'react-icons/fa'

const page = () => {
  return (
    <div>
        <div className='relative '>
       <div className='roadmap'>
        <div className='flex gap-2 justify-center items-center'>
        <Link
        href="/#"
        >
       <h1 className='text-slate-400'>Home</h1>
       </Link>
       <div className='rotated-element'></div>
       <h1 className='text-black'>Cart</h1>
        </div>
         <div>
        <h1 className='text-black '>Welcome! <span className='text-[#DB4444]'>Md Rimel</span></h1>
       </div>
       </div>
       <div className='relative'>
       <div className='absolute top-[200px] w-[1100px]  h-[500px] flex justify-center items-center flex-col '>
       <div className='w-[40%]  gap-4  absolute top-[150px] left-[75px] flex flex-col items-start text-black'>
        <div className='flex items-start flex-col gap-6'>
        <div>
          <h1>Manage My Account</h1>
        </div>
        <div className=' text-slate-400 flex flex-col items-start justify-center relative left-3 gap-2 '>
          <p className='text-[#DB4444]'>My Profile</p>
          <p>Address Book</p>
          <p>My Payment Options</p>
        </div>
        </div>
        <div className='flex items-start flex-col gap-6'>
        <div>
          <h1>My Orders</h1>
        </div>
        <div className=' text-slate-400 flex flex-col items-start justify-center relative left-3 gap-2 '>
          <p>My Returns</p>
          <p>My Cancellations</p>
        </div>
        </div>
        <div className='flex items-center flex-col gap-6'>
        <div>
          <h1>My WishList</h1>
        </div>
        </div>
       </div>
       <div className='w-[70%] h-[650px] shadow-lg relative top-[190px] left-[140px] flex flex-col items-start'>
        <div className='w-[90%] flex flex-col justify-center p-8  text-black '>
           <div className='flex  '>
          <h1 className='text-[20px] text-[#DB4444]'>Edit Your Profile</h1>
          </div>
           <div className='grid grid-cols-[350px_350px] grid-rows-2 gap-x-3 gap-y-5 mt-5 '>
            <div>
              <h1 className=''>First Name</h1>
              <input type="text" placeholder='Md' className='text-slate-400 px-[30px] w-[300px] py-[16px] bg-slate-100 rounded-md mt-2 outline-none'/>
              </div>
            <div>
              <h1>Last Name</h1>
              <input type="text" placeholder='Rimel' className='text-slate-400 py-[16px]  px-[30px] w-[300px] bg-slate-100 rounded-md mt-2 outline-none'/>
              </div>
            <div>
              <h1>Email</h1>
              <input type="Email" placeholder='rimel1111@gmail.com' className='text-slate-400 py-[16px]  px-[30px] w-[300px] bg-slate-100 rounded-md mt-2 outline-none'/>
              </div>
            <div>
              <h1>Address</h1>
              <input type="address" placeholder='Kingston, 5236, United State' className='text-slate-400 py-[16px]  px-[30px] w-[300px] bg-slate-100 rounded-md mt-2 outline-none'/>
              </div>
           </div>
          
          <div className='mt-6'>
            <h1>Password Changes</h1>
            <div className='grid mt-2 gap-3 grid-rows-3'>
            <input type="text" placeholder='Current Password' className='text-slate-400 py-[16px]  px-[30px] w-[665px] bg-slate-100 rounded-md mt-2 outline-none'/>  
            <input type="password" placeholder='New Password' className='text-slate-400 py-[16px]  px-[30px] w-[665px] bg-slate-100 rounded-md mt-2 outline-none'/>  
            <input type="password" placeholder='Confirm New Password' className='text-slate-400 py-[16px]  px-[30px] w-[665px] bg-slate-100 rounded-md mt-2 outline-none'/>  
            </div>
          </div>
          <div className='flex justify-end w-[665px] items-center mt-5 gap-7'>
            <button>Cancel</button>
            <button className='px-[48px] py-[16px] text-white rounded-[4px] transition-all duration-200 hover:bg-[#f36262] bg-[#DB4444]'>Save Changes</button>
          </div>
           
        </div>
       </div>

       </div>
       
     </div>
       </div>
              {/* Footer */}

              <div className='FooterUser'>
    <div className='Footer1'>
    <div className='box1'>
        <div className='inner'>
            <h1 className='text-[24px]'>Exclusive</h1>
            <h2>Subscribe</h2>
        <p className='text-[14px] font-thin'>Get 10% off your first order</p>

        </div>
        <div className='search'>
        <p >Enter your email</p>
        <MdSend/>
        </div>
    </div>
    <div className='box2'>
        <div className='inner2'>
            <h1 className='text-[24px]'>Support</h1>
        <p className='text-[14px] font-ragular'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p className='text-[14px] font-ragular'>exclusive@gmail.com</p>
        <p className='text-[14px] font-ragular'>+88015-88888-9999</p>
   
        </div>
    </div>
    <div className='box3'>
        <div className='inner3'>
            <h1 className='text-[24px]'>Account</h1>
        <p className='text-[14px] font-bold'>My Account</p>
        <p className='text-[14px] font-ragular'>Login / Register</p>
        <p className='text-[14px] font-ragular'>Cart</p>
        <p className='text-[14px] font-ragular'>Wishlist</p>
        <p className='text-[14px] font-ragular'>Shop</p>
   
        </div>
    </div>
    <div className='box3'>
        <div className='inner'>
            <h1 className='text-[24px]'>Quick Link</h1>
        <p className='text-[14px] font-ragular'>Privacy Policy</p>
        <p className='text-[14px] font-ragular'>Terms Of Use</p>
        <p className='text-[14px] font-ragular'>FAQ</p>
        <p className='text-[14px] font-ragular'>Contact</p>   
        </div>
    </div>
    <div className='box4'>
        <div className='inner4'>
            <h1 className='text-[24px]'>Download App</h1>
        </div>
        <div>
          <Image
          src="Download.svg"
          alt="download"
          width={"198"}
          height={"90"}
          />
        </div>
        <div className='flex items-start gap-5'>
         <FaTwitter className='text-[25px]'/>
         <FaInstagram className='text-[25px]'/>
         <FaLinkedin className='text-[25px]'/>
         <FaFacebook className='text-[25px]'/>
        </div>
    </div>
    </div>

    </div>
    </div>
  )
}

export default page