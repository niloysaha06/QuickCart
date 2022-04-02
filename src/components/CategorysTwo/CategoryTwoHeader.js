import React from 'react'

function CategoryTwoHeader() {
  return (
    <div className='flex pb-3 items-center justify-between flex-grow '>
    <div>
       <h2 className='text-2xl font-medium text-black uppercase  text-left'>
         Consumer Electronics
        </h2>
     </div>

     <div className=' flex space-x-2'>
        <a >
           <h6 className=' border border-gray text-md font-medium text-black uppercase p-2 rounded-lg '>New Arrivals</h6>
        </a>
        <a >
           <h6 className=' border border-gray text-md font-medium text-black uppercase p-2 rounded-lg '>Best Seller</h6>
        </a>
        <a >
           <h6 className=' border border-gray text-md font-medium text-black uppercase p-2 rounded-lg '>Most Popular</h6>
        </a>
        <a >
           <h6 className=' border border-gray text-md font-medium text-black uppercase p-2 rounded-lg '>View All</h6>
        </a>
     </div>

  </div>
  )
}

export default CategoryTwoHeader