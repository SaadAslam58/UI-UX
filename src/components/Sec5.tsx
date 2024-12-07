import React from 'react'
import Image from 'next/image'
const Sec5 = () => {
  return (
    <div>
        <div className='Sec5'>
        <div className='Frame727 '>
            <div className='Frame725'>
            <div className='Frame626'>
             <div className='Frame625'>
                <div className='w-[20px] h-[40px] bg-[#DB4444] rounded'></div>
                <div>
                    <h2 className='text-[#DB4444] text-[16px]'>Our Products</h2>
                </div>
             </div>
             <div>
                <h1 className='text-[36px] font-semibold text-black w-[350px]'>Explore Our Products</h1>
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
         <div className='flex flex-col w-[100%] relative left-[40px] '>
         <div className='Frame603'>
         <div className='Cart'>
             <div>
                <Image
                src="/Dog.svg"
                alt='coat'
                width={"240"}
                height={"210"}
                className='cursor-pointer'
                />
             </div>
             <div className='Frame569 text-black'>
             <h1 className='cursor-pointer'>Breed Dry Dog Food</h1>
             <div className='flex gap-2'>
                <p className='text-[#DB4444] text-[16px] font-medium'>$260</p>
                <p className='decoration-slate-400 text-gray-400 line-through text-[16px] font-medium'>$360</p>
             </div>
           
             </div>
            </div> 
            <div className='Cart'>
             <div>
                <Image
                src="/Camera1.svg"
                alt='controller'
                width={"240"}
                height={"210"}
                className='cursor-pointer'
                />
             </div>
             <div className='Frame569 text-black'>
             <h1 className='cursor-pointer'>CANON EOS DSLR Camera</h1>
             <div className='flex gap-2'>
                <p className='text-[#DB4444] text-[16px] font-medium'>$960</p>
                <p className='decoration-slate-400 text-gray-400 line-through text-[16px] font-medium'>$1160</p>
             </div>
             </div>
            </div> 
            <div className='Cart'>
             <div>
                <Image
                src="/Controller1.svg"
                alt='controller'
                width={"240"}
                height={"210"}
                className='cursor-pointer'
                />
             </div>
             <div className='Frame569 text-black'>
             <h1 className='cursor-pointer'>GP11 Shooter USB Gamepad</h1>
             <div className='flex gap-2'>
                <p className='text-[#DB4444] text-[16px] font-medium'>$160</p>
                <p className='decoration-slate-400 text-gray-400 line-through text-[16px] font-medium'>$170</p>
             </div>
            
             </div>
            </div> 
            <div className='Cart'>
             <div>
                <Image
                src="/Coat2.svg"
                alt='controller'
                width={"240"}
                height={"210"}
                className='cursor-pointer'
                />
             </div>
             <div className='Frame569 text-black'>
             <h1 className='cursor-pointer'>Quilted Satin Jacket</h1>
             <div className='flex gap-2'>
                <p className='text-[#DB4444] text-[16px] font-medium'>$360</p>
             </div>
             </div>
            </div> 
         </div> 

         <div className='Frame603'>
         <div className='Cart'>
             <div>
                <Image
                src="/Coat1.svg"
                alt='coat'
                width={"240"}
                height={"210"}
                className='cursor-pointer'
                />
             </div>
             <div className='Frame569 text-black'>
             <h1 className='cursor-pointer'>The north coat</h1>
             <div className='flex gap-2'>
                <p className='text-[#DB4444] text-[16px] font-medium'>$260</p>
                <p className='decoration-slate-400 text-gray-400 line-through text-[16px] font-medium'>$360</p>
             </div>
           
             </div>
            </div> 
            <div className='Cart'>
             <div>
                <Image
                src="/Bag.png"
                alt='controller'
                width={"240"}
                height={"210"}
                className='cursor-pointer'
                />
             </div>
             <div className='Frame569 text-black'>
             <h1 className='cursor-pointer'>Gucci duffle bag</h1>
             <div className='flex gap-2'>
                <p className='text-[#DB4444] text-[16px] font-medium'>$960</p>
                <p className='decoration-slate-400 text-gray-400 line-through text-[16px] font-medium'>$1160</p>
             </div>
             </div>
            </div> 
            <div className='Cart'>
             <div>
                <Image
                src="/Controller1.svg"
                alt='controller'
                width={"240"}
                height={"210"}
                className='cursor-pointer'
                />
             </div>
             <div className='Frame569 text-black'>
             <h1 className='cursor-pointer'>GP11 Shooter USB Gamepad</h1>
             <div className='flex gap-2'>
                <p className='text-[#DB4444] text-[16px] font-medium'>$160</p>
                <p className='decoration-slate-400 text-gray-400 line-through text-[16px] font-medium'>$170</p>
             </div>
            
             </div>
            </div> 
            <div className='Cart'>
             <div>
                <Image
                src="/Cabin.svg"
                alt='controller'
                width={"240"}
                height={"210"}
                className='cursor-pointer'
                />
             </div>
             <div className='Frame569 text-black'>
             <h1 className='cursor-pointer'>Small BookSelf</h1>
             <div className='flex gap-2'>
                <p className='text-[#DB4444] text-[16px] font-medium'>$360</p>
             </div>
             </div>
            </div> 
         </div> 

        </div>
        <div>
            <button className='py-[16px] px-[48px] bg-[#DB4444] transition-all duration-200 hover:bg-[#f36262] rounded'>View All Product</button>
            </div>
        </div>
    </div>
  )
}

export default Sec5