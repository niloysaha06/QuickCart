import React from 'react';
import vendorbig1 from '../../images/vendor/vendorbig1.png'
import vendorsmall1 from '../../images/vendor/vendorsmall1.png'
import vendorsmall2 from '../../images/vendor/vendorsmall2.png'
import vendorlogo1 from '../../images/vendorlogo/vendorlogo1.png'
import vendorlogo2 from '../../images/vendorlogo/vendorlogo2.png'
import vendorlogo3 from '../../images/vendorlogo/vendorlogo3.png'
import vendorlogo4 from '../../images/vendorlogo/vendorlogo4.png'


const TopWeeklyVendors = () => {
    return (
        <div className="container my-4">
             <h2 className='text-2xl font-medium text-black uppercase mb-6 text-left'>
                Top Weekly Vendors
              </h2>

              <div className="grid grid-cols-4 ">
                   <div className='mx-auto'> 
                     <div className='flex'>
                      <div  className="">
                          <img style={{width:'165px', height: '183px'}} className='' src={vendorbig1} alt="" />
                       </div>
                       <div  className="">
                           <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall1} alt="" />
                           <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall2} alt="" />
                        </div>
                      </div> 
                      <div className=' flex items-center'>
                          <div>
                              <img src={vendorlogo1}/>
                          </div>
                          <div>
                              <h6 className='text-md'>Vendor Name</h6>
                              <div className='flex gap-1 text-sm text-rose pt-1'>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                </div>
                          </div>
                      </div>
                   </div>
                   <div className='mx-auto'> 
                     <div className='flex'>
                      <div  className="">
                          <img style={{width:'165px', height: '183px'}} className='' src={vendorbig1} alt="" />
                       </div>
                       <div  className="">
                           <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall1} alt="" />
                           <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall2} alt="" />
                        </div>
                      </div> 
                      <div className=' flex items-center'>
                          <div>
                              <img src={vendorlogo2}/>
                          </div>
                          <div>
                              <h6 className='text-md'>Vendor Name</h6>
                              <div className='flex gap-1 text-sm text-rose pt-1'>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                </div>
                          </div>
                      </div>
                   </div>
                   <div className='mx-auto'> 
                     <div className='flex'>
                      <div  className="">
                          <img style={{width:'165px', height: '183px'}} className='' src={vendorbig1} alt="" />
                       </div>
                       <div  className="">
                           <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall1} alt="" />
                           <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall2} alt="" />
                        </div>
                      </div> 
                      <div className=' flex items-center'>
                          <div>
                              <img src={vendorlogo3}/>
                          </div>
                          <div>
                              <h6 className='text-md'>Vendor Name</h6>
                              <div className='flex gap-1 text-sm text-rose pt-1'>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                </div>
                          </div>
                      </div>
                   </div>
                   <div className='mx-auto'> 
                     <div className='flex'>
                      <div  className="">
                          <img style={{width:'165px', height: '183px'}} className='' src={vendorbig1} alt="" />
                       </div>
                       <div  className="">
                           <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall1} alt="" />
                           <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall2} alt="" />
                        </div>
                      </div> 
                      <div className=' flex items-center'>
                          <div>
                              <img src={vendorlogo4}/>
                          </div>
                          <div>
                              <h6 className='text-md'>Vendor Name</h6>
                              <div className='flex gap-1 text-sm text-rose pt-1'>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                     <span><i className='fas fa-star'></i></span>
                                </div>
                          </div>
                      </div>
                   </div>

              </div>
        </div>
    );
};

export default TopWeeklyVendors;










// <div className="container my-4">
{/* <h2 className='text-2xl font-medium text-rose uppercase mb-6 text-left'>
Top Weekly Vendors
</h2>
<div className="grid grid-cols-5 gap-4">
  <div className="grid grid-cols-2">
     <div  className="">
         <img style={{width:'165px', height: '183px'}} className='' src={vendorbig1} alt="" />
     </div>
     <div  className="">
         <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall1} alt="" />
         <img style={{width:'77px', height: '89px'}} className='mx-auto' src={vendorsmall2} alt="" />
      </div>
</div>


</div>

</div> */}