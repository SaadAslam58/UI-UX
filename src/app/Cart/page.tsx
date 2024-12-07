import Image from 'next/image'
import React from 'react'
import { MdSend  } from 'react-icons/md'
import Link from 'next/link'
import { FaTwitter,FaInstagram,FaFacebook,FaLinkedin,FaGoogle  } from 'react-icons/fa'
const page = () => {
  return (
    <div>
      <div className='relative'>
       <div className='roadmap'>
        <Link
        href="/#"
        >
       <h1 className='text-slate-400'>Home</h1>
       </Link>
       <div className='rotated-element'></div>
       <h1 className='text-black'>Cart</h1>
       </div>
       </div>


       <div className='relative'>
        <div className='CartContainers'>
          
        <div className='CartContainer1'>
        <div className='Container1-Inner'>
          <div className='innerBox1 shadow-lg '>
            <div className='font-medium text-[16px] text-black flex items-center gap-[244px]'>
           
          <div>
            <h1>Product</h1>
          </div>
          <div>
            <h1>Price</h1>
          </div>
          <div>
            <h1>Quantity</h1>
          </div>
          <div>
            <h1>Subtotal</h1>
          </div>
          </div>
          </div>
        </div>

        <div className='Container1-Inner'>
          <div className='innerBox2 shadow-lg '>
            <div className='font-medium text-[16px] text-black flex items-center gap-[215px]'>
          <div className='flex items-center gap-3'>
          <Image
          src="/Cart-small.svg"
          width={"50"}
          height={"50"}
          alt='monitor'
          />
            <h1>LED Monitor</h1>
          </div >
          <div className='relative right-[70px]'>
            <h1>$650</h1>
          </div>
          <div className='relative right-[33px] flex justify-center items-center w-[74px] h-[44px] rounded-sm border border-slate-400'>
            <h1>0 1</h1>
          </div>
          <div>
            <h1>$650</h1>
          </div>
          </div>
          </div>
        </div>

        <div className='Container1-Inner'>
          <div className='innerBox2 shadow-lg '>
            <div className='font-medium text-[16px] text-black flex items-center gap-[223px]'>
          <div className='flex items-center gap-3'>
            <Image
            src='/Cart-Small2.svg'
            height={"50"}
            width={"50"}
            alt='controller'
            />
            <h1>Controller</h1>
          </div>
          <div className='relative right-[57px]'> 
            <h1>$350</h1>
          </div>
          <div className='relative right-[30px] flex justify-center items-center w-[74px] h-[44px] rounded-sm border border-slate-400'>
            <h1>0 1</h1>
          </div>
          <div>
            <h1>$350</h1>
          </div>
          </div>
          </div>
        </div>

         <div className='w-[1100px] h-[56px] flex items-center justify-between  '>
          <div className='flex justify-between text-black items-center w-[100%] text-center'>
        <button className='px-[48px] border rounded border-slate-400 py-[16px]'>Return To Shop</button>
        <button className='px-[48px] border rounded border-slate-600 py-[16px]'> Update Cart</button>
        </div>
        </div>
        </div>
        <div className='CartContainer2 border rounded-sm  border-black'>
          <div className='flex justify-center gap-9 flex-col p-8 font-medium text-xl text-black '>
        <h1>Cart Total</h1>
        <div className='flex flex-col justify-between gap-6 items-center'>
          <div className='flex text-[16px] font-normal justify-between border-b border-b-slate-400 pb-2  w-[400px] items-center '>
     <h1>Subtotal:</h1>
     <h1>$1750</h1>
         </div>
          <div className='flex text-[16px] font-normal justify-between border-b border-b-slate-400 pb-2 items-center w-[400px]'>
     <h1>Shipping:</h1>
     <h1>Free</h1>
         </div>
          <div className='flex text-[16px] font-normal justify-between border-b border-b-slate-400 pb-2 items-center w-[400px]'>
     <h1>Total:</h1>
     <h1>$1750</h1>
         </div>
        </div>
        
         </div>
         <div className='py-[16px] px-[56px] bg-[#DB4444] rounded-md'>
          <button className='text-white'>Proceed to checkout</button></div>
        </div>

       

        </div>
        
       </div>

         {/* Footer */}

         <div className='FooterCart'>
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