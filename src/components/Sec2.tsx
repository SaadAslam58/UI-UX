import Image from 'next/image'
import React from 'react'

const Sec2 = () => {
  return (
    <div>
        <div className='Frame730'>
        <div className='Frame727 '>
            <div className='Frame725'>
            <div className='Frame626'>
             <div className='Frame625'>
                <div className='w-[20px] h-[40px] bg-[#DB4444] rounded'></div>
                <div>
                    <h2 className='text-[#DB4444] text-[16px]'>Categories</h2>
                </div>
             </div>
             <div>
                <h1 className='text-[36px] font-semibold text-black w-[350px]'>Browse By Category</h1>
             </div>
            </div>
            </div>
            <div className='Frame726'>
            <div className='flex justify-center items-center w-[46px] h-[46px] bg-[#F5F5F5] rounded-full'>
            <Image
            src="/arrow-left.png"
            alt='left'
            height={"24"}
            width={"24"}
            className='cursor-pointer'
            />
            </div>
            <div className='flex justify-center items-center w-[46px] h-[46px] bg-[#F5F5F5] rounded-full'>
            <Image
            src="/arrow-right.png"
            alt='left'
            height={"24"}
            width={"24"}
            className='cursor-pointer'

            />
            </div>
            </div>
         </div>
         <div className='Frame597'>
         <div className='accessories transition-all duration-200 hover:bg-[#DB4444]'>
            <Image
            src="/CellPhone.png"
            alt='phone'
            width={"56"}
            height={"56"}
            className='cursor-pointer'

            />            
            <p>Phones</p>
         </div>
         <div className='accessories transition-all duration-200 hover:bg-[#DB4444]'>
            <Image
            src="/Computer.png"
            alt='phone'
            width={"56"}
            height={"56"}
            className='cursor-pointer'

            />
            <p>Computers</p>
         </div>
         <div className='accessories  transition-all duration-200 hover:bg-[#DB4444]'>
            <Image
            src="/SmartWatch.png"
            alt='phone'
            width={"56"}
            height={"56"}
            />
            <p>SmartWatches</p>
         </div>
         <div className='accessories transition-all duration-200 hover:bg-[#DB4444]'>
            <Image
            src="/Category-Camera.png"
            alt='phone'
            width={"56"}
            height={"56"}
            />
            <p>Cameras</p>
         </div>
         <div className='accessories transition-all duration-200 hover:bg-[#DB4444]'>
            <Image
            src="/Headphone.png"
            alt='phone'
            width={"56"}
            height={"56"}
            />
            <p>Headphones</p>
         </div>
         <div className='accessories transition-all duration-200 hover:bg-[#DB4444]'>
            <Image
            src="/Gamepad.png"
            alt='phone'
            width={"56"}
            height={"56"}
            />
            <p>Gamepads</p>
         </div>
         </div>
         
        </div>
        <div className='line4'>    
         </div>
    </div>
  )
}

export default Sec2