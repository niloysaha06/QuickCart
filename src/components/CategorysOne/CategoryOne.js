import React from 'react'

function CategoryOne({productOne}) {
    const {img} = productOne;
  return (
    <div className='bd-white shadow rounded overflow-hidden group '>
             <div className='bd-white shadow rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img} alt=""/>
                         <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition'>
                            <a href='#' className='text-white text-lg w-9 h-8 rounded-full bg-rose flex items-center justify-center hover:bg-gray-800 transition'>
                               <i className='fas fa-search'></i>
                            </a>
                            <a href='#' className='text-white text-lg w-9 h-8 rounded-full bg-rose flex items-center justify-center hover:bg-gray-800 transition'>
                               <i className='fas fa-heart'></i>
                            </a>
                         </div>
                      </div>

                      <div className='pt-4 pb-2 px-2'>

                           <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                               <p className='text-md text-rose font-semibold text-left'>৳ 147.00 - </p>
                               <p className='text-xmd text-rose font-semibold'>৳ 157.00</p>
                           </div>
                           <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                               <p className='text-sm text-gray font-semibold line-through'>৳ 147.00 - </p>
                               <p className='text-sm text-gray font-semibold line-through'>৳ 157.00</p>
                           </div>
                           
                                <div className='flex gap-1 text-sm text-rose pt-2 pb-1'>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                </div>
                                
                           <p className='text-left text-sm'>RG351P ANBERNIC  Retro Game PS1 RK3326 64G Open ……...</p>

                      </div>
                </div>
    </div>
  )
}

export default CategoryOne