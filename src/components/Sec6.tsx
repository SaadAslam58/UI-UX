import Image from 'next/image'
import React from 'react'

const Sec6 = () => {
  return (
    <div>
        <div className='Sec6'>
        <div className='Frame725'>
            <div className='Frame626'>
             <div className='Frame625'>
                <div className='w-[20px] h-[40px] bg-[#DB4444] rounded'></div>
                <div>
                    <h2 className='text-[#DB4444] text-[16px]'>Featured</h2>
                </div>
             </div>
             <div>
                <h1 className='text-[36px] font-semibold text-black w-[350px]'>New Arrival</h1>
             </div>
            </div>
            </div>
            <div className='cursor-pointer'>
                <Image
                src="/Catogary.svg"
                alt='catogary'
                width={"1100"}
                height={"500"}
                />
            </div>
        </div>
    </div>
  )
}

export default Sec6