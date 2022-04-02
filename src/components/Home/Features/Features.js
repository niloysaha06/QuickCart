import React from 'react';
import customer from '../../../images/icons/Customer support icon.png'
import lock from '../../../images/icons/19 - Lock.png'
import path from '../../../images/icons/Path 289.png'
import refund from '../../../images/icons/Refund icon.png'

const Features = () => {
    return (
         <>
            <section className=' container py-2 border border-gray shadow-md rounded-lg flex justify-center items-center gap-14'>
                <div className=' px-3 py-3 flex justify-center items-center gap-4 '>
                   <img  className='w-8 h-8 object-contain' src={refund} alt="" />
                   <div>
                      <h6 className='font-medium capitalize text-md  '>Money Back Guarantee</h6>
                      <p className='text-gray-500 text-sm'>Any Back with 60 Working Days</p>
                   </div>
                </div>

                <div className=' px-3 py-3 flex justify-center items-center gap-4 '>
                   <img  className='w-8 h-8 object-contain' src={customer} alt="" />
                    <div>
                       <h6 className='font-medium capitalize text-md  '>Customer Support</h6>
                       <p className='text-gray-500 text-sm'>Call or email us 24/7</p>
                    </div>
                 </div>

                <div className='px-3 py-3 flex justify-center items-center gap-4 '>
                      <img  className='w-8 h-8 object-contain' src={path} alt="" />
                      <div>
                         <h6 className='font-medium capitalize text-md  '>Premium Shipping</h6>
                         <p className='text-gray-500 text-sm'>Premium shipment for every products</p>
                     </div>
                </div>
                 <div className='px-3 py-3 flex justify-center items-center gap-4 '>
                      <img  className='w-8 h-8 object-contain' src={lock} alt="" />
                      <div>
                          <h6 className='font-medium capitalize text-md  '>Secure Payment</h6>
                          <p className='text-gray-500 text-sm'>We ansure secure payment</p>
                     </div>
                 </div>
            </section>
         </>
    );
};

export default Features;















{/* <div className=' py-4'>
<div className='w-9/12 grid grid-cols-4 gap-6 mx-auto justify-center'>
<div className='border border-rose rounded-md px-3 py-3 flex justify-center items-center gap-6 '>
        <img  className='w-12 h-12 object-contain' src={refund} alt="" />
         <div>
             <h6 className='font-medium capitalize text-lg  '>Money Back Guarantee</h6>
             <p className='text-gray-500 text-sm'>Any Back with 60 Working Days</p>
         </div>
     </div>
     <div className='border border-rose rounded-md px-3 py-3 flex justify-center items-center gap-6 '>
        <img  className='w-12 h-12 object-contain' src={customer} alt="" />
         <div>
             <h6 className='font-medium capitalize text-lg  '>Customer Support</h6>
             <p className='text-gray-500 text-sm'>Call or email us 24/7</p>
         </div>
     </div>
     
     <div className='border border-rose rounded-md px-3 py-3 flex justify-center items-center gap-6 '>
        <img  className='w-12 h-12 object-contain' src={path} alt="" />
         <div>
             <h6 className='font-medium capitalize text-lg  '>Premium Shipping</h6>
             <p className='text-gray-500 text-sm'>Premium shipment for every products</p>
         </div>
     </div>
     <div className='border border-rose rounded-md px-3 py-3 flex justify-center items-center gap-6 '>
        <img  className='w-12 h-12 object-contain' src={lock} alt="" />
         <div>
             <h6 className='font-medium capitalize text-lg  '>Secure Payment</h6>
             <p className='text-gray-500 text-sm'>We ansure secure payment</p>
         </div>
     </div>
</div>
</div> */}