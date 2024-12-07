import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <div>
      {/* 50% */}
        <div className='w-full h-[38px] bg-black flex justify-center items-center '>
          <div className=' flex absolute right-[115px] top-[7px] flex-row items-start p-0 gap-[241px]'>
        <div className='flex' >
        <h2 className='mr-2 flex flex-row'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
        <button className='font-bold text-[16px] hover:underline'>Shop Now</button>
        </div>
        <div className='flex justify-center items-center'>
        <h2 className='mr-2'>English</h2>
        <Image
        src="/VectorD.png"
        alt='arrow'
        height={"13"}
        width={"15"}
        />
        </div>
        </div>
        </div>
           <div className='relative'>
        {/* Header */}
        <div className='text-black flex flex-row items-center w-auto absolute  p-0 gap-[128px] h-[38px] left-[70px] top-[30px] '>
          <div className='flex flex-row items-center p-0 gap-[140px] w-auto h-[20px] '>

          <div>
            <h1 className='font-bold text-[28px] pb-2 text-center content-center flex-none order-0 flex-grow'>Exclusive</h1>
          </div>

          <div className='ul text-[18px]'>
            <Link
            href="/">
            <h2 className='hover:underline decoration-slate- cursor-pointer'>Home</h2>   
            </Link>
           
            <h2 className='hover:underline  decoration-slate-400 cursor-pointer'>Contact</h2>
            <h2 className='hover:underline  decoration-slate-400 cursor-pointer'>About</h2>
            <Link
            href="/Sign"
            >
            <h2 className='hover:underline  decoration-slate-400 cursor-pointer'>Sign Up</h2>
            </Link>
          </div>

          </div>
          <div className='Frame552'>
          <div className='Search'>
            <h2 className='text-[#7D8184] flex justify-center items-center gap-8'>What are you looking for?
              <img src="/Search.png" alt="search" />
            </h2>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Link 
            href="/list"
            >
            <Image
            src="/heart.png"
            alt="Heart"
            width={40}
            height={40}
            className='w-[23px] h-auto flex bg-center bg-cover items-center'
            />
            </Link>
            <Link
            href="/Cart"
            >
            <Image
            src="/Cart.png"
            alt="Heart"
            width={40}
            height={40}
            className='w-[27px] h-auto flex items-center bg-center bg-cover'
            />
            </Link>
            <Link
            href="/Profile"
            >
            <Image
            src="/user.svg"
            alt="Heart"
            width={40}
            height={40}
            className='w-[27px] h-auto flex items-center bg-center bg-cover'
            />
            </Link>
          </div>
          </div>

 
        </div>
        </div>
       {/* Line */}
        <div className='line1 '>
        <div className='lines1'></div>
      </div>
    </div>
  )
}

export default Header