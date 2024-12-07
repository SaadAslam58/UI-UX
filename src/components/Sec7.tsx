import React from 'react'
import Image from 'next/image'
const Sec7 = () => {
  return (
    <div>
        <div className='Sec7'>
            <div className='flex flex-col justify-center items-center gap-4 text-black'>
             <div>
            <Image
            src="/Delivery.svg"
            alt='delivery'
            width={"80"}
            height={"80"}
            
            />
             </div>
             <div className='text-center content-center'>
             <div>
                <h1 className='text-[20px] font-semibold'>FREE AND FAST DELIVERY</h1>
             </div>
             <div>
                <p className='text-[15px] font-normal'>Free delivery for all orders over $140</p>
             </div>
             </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 text-black'>
             <div>
            <Image
            src="/Services.svg"
            alt='delivery'
            width={"80"}
            height={"80"}
            
            />
             </div>
             <div className='text-center content-center'>
             <div>
                <h1 className='text-[20px] font-semibold'>24/7 CUSTOMER SERVICE</h1>
             </div>
             <div>
                <p className='text-[15px] font-normal'>Friendly 24/7 customer support</p>
             </div>
             </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 text-black'>
             <div>
            <Image
            src="/Verified1.svg"
            alt='delivery'
            width={"80"}
            height={"80"}
            
            />
             </div>
             <div className='text-center content-center'>
             <div>
                <h1 className='text-[20px] font-semibold'>MONEY BACK GUARANTEE</h1>
             </div>
             <div>
                <p className='text-[15px] font-normal'>We return money within 30 days</p>
             </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Sec7