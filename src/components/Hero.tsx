import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
        <div className='Frame768 text-black '>
        <div className='flex flex-row items-center  w-[217px] h-[24px] p-0 gap-[51px]'>
         <h2 className="cursor-pointer">Womans Fashion</h2>
        <Image
        src="/Dropdown.png"
        alt='arrowDown'
        height={20}
        width={20}
        />
        </div>
        <div className='flex flex-row items-center p-0 w-[217px] h-[24px] gap-[75px]'>
         <h2 className="cursor-pointer">Mens Fashion</h2>
         <Image
        src="/Dropdown.png"
        alt='arrowDown'
        height={20}
        width={20}
        />
        </div>
         <h2 className="cursor-pointer">Electronics</h2>
         <h2 className="cursor-pointer">Home & Lifestyle</h2>
         <h2 className="cursor-pointer">Medicine</h2>
         <h2 className="cursor-pointer">Sports & Outdoor</h2>
         <h2 className="cursor-pointer">Babys & Toys</h2>
         <h2 className="cursor-pointer">Groceries & Pets</h2>
         <h2 className="cursor-pointer">Health & Beauty</h2>
        
        <div className='line2'></div>
        </div>
        <div className='Frame560'>
            <Image
            src="/Frame560.png"
            alt=''
            width={"808"}
            height={"358"}/>
        </div>
    </div>
  )
}

export default Hero