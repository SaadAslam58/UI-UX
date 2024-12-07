import Image from 'next/image'
import React from 'react'
import { MdSend  } from 'react-icons/md'
import { FaTwitter,FaInstagram,FaFacebook,FaLinkedin  } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='Footer'>
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
  )
}

export default Footer