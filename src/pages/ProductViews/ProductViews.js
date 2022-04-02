import React, { useState } from 'react';
import Header from '../../components/Home/Header/Header';
import Navbar from '../../components/Home/Navbar/Navbar';
import Footer from '../Footer/Footer';
import mouse from '../../images/carts/mouse.png'
import img1 from '../../images/carts/1.png'
import img2 from '../../images/carts/2.png'
import img3 from '../../images/carts/3.png'
import img4 from '../../images/carts/4.png'
import img5 from '../../images/carts/5.png'
import productimg1 from '../../images/productview/productimg1.png'
import productsmimg1 from '../../images/productview/productsmimg1.png'
import productsmimg2 from '../../images/productview/productsmimg2.png'
import productsmimg3 from '../../images/productview/productsmimg3.png'
import productsmimg4 from '../../images/productview/productsmimg4.png'
import productsmimg5 from '../../images/productview/productsmimg5.png'
import productsmimg6 from '../../images/productview/productsmimg6.png'
import productsmimg7 from '../../images/productview/productsmimg7.png'
import productsmimg8 from '../../images/productview/productsmimg8.png'
import ProductSpecification from '../ProductView/ProductSpecification';
import img6 from '../../images/carts/6.png'
import img7 from '../../images/carts/7.png'
import img8 from '../../images/carts/8.png'
import img9 from '../../images/carts/9.png'
import img10 from '../../images/carts/10.png'
import china from '../../images/productview/china.png'

const ProductViews = () => {

    

    return (
        <div>
        <Header></Header>
        <Navbar></Navbar>
        <section className=''>
            <div className='row'>
                <div className='col-sm-2 bg-white '>
                <div>
                   <h6 className='text-md font-medium text-black uppercase py-4 pl-4 text-left'>
                      Top Selling Products
                    </h6>
                 </div>
                <div className='row py-4 px-2 border border-b'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-3" src={mouse}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-3'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>

                          <div className='flex gap-1 text-sm text-yellow-400'>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                         </div>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          
                     </div>
                    
                 </div>
                <div className='row py-4 px-2 border border-b'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-3" src={mouse}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-3'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>

                          <div className='flex gap-1 text-sm text-yellow-400'>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                         </div>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          
                     </div>
                    
                 </div>
                <div className='row py-4 px-2 border border-b'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-3" src={mouse}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-3'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>
                          <div className='flex gap-1 text-sm text-yellow-400'>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                         </div>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          
                     </div>
                    
                 </div>
                <div className='row py-4 px-2 border border-b'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-3" src={mouse}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-3'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>
                          <div className='flex gap-1 text-sm text-yellow-400'>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                         </div>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          
                     </div>
                    
                 </div>
                <div className='row py-4 px-2 border border-b'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-3" src={mouse}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-3'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>
                          <div className='flex gap-1 text-sm text-yellow-400'>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                         </div>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          
                     </div>
                    
                 </div>
                <div className='row py-4 px-2 border border-b'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-3" src={mouse}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-3'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>
                          <div className='flex gap-1 text-sm text-yellow-400'>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                             <span><i className='fas fa-star'></i></span>
                         </div>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          
                     </div>
                    
                 </div>
                </div>



                <div className='col-sm-8 px-4 bg-gray'>
                  <div className='bg-white'>
                     <p className='text-md font-medium text-gray pt-8'>
                        2021 new men's jeans Korean version of the trend of slim feet pants youth stretch denim men's pants plus velvet pants
                      </p>
                      <div className='row pt-4 pl-6'>
                          <div className='col-sm-5'>
                                <div>
                                    <img style={{width: '356px', height: '356px'}} className='mx-auto ' src={productimg1} alt=""/>
                                </div>
                                <div className='grid grid-cols-4 gap-x-5 gap-y-2 pt-3'>
                                     <img className='mx-auto' src={productsmimg1} alt=""/>
                                     <img className='mx-auto' src={productsmimg2} alt=""/>
                                     <img className='mx-auto' src={productsmimg3} alt=""/>
                                     <img className='mx-auto' src={productsmimg4} alt=""/>
                                     <img className='mx-auto' src={productsmimg5} alt=""/>
                                     <img className='mx-auto' src={productsmimg6} alt=""/>
                                     <img className='mx-auto' src={productsmimg7} alt=""/>
                                     <img className='mx-auto' src={productsmimg8} alt=""/>
                                </div>
                          </div>

                          <div className='col-sm-6 px-4'>
                             <div className='bg-blue-900 py-4 space-y-2 rounded-lg'>
                                 <p className='text-white text-xl text-start pl-3'>৳1347 - ৳2540</p>
                                 <p className='text-rose text-start pl-3 line-through'>৳1347 - ৳2540</p>
                                 <div style={{width: '100px'}} className='bg-rose ml-3 rounded'>
                                    <p className='text-sm text-white text-start pl-2 py-2'>5% Discount</p>
                                 </div>
                             </div>
                              
                              <div className='py-3'>
                                  <div className='pb-3'>
                                     <p className='text-xl text-black text-start'>Color: Black</p>
                                  </div>
                                  <div className='grid grid-cols-7 gap-x-2 gap-y-3'>
                                     <img className='mx-auto' src={productsmimg1} alt=""/>
                                     <img className='mx-auto' src={productsmimg2} alt=""/>
                                     <img className='mx-auto' src={productsmimg3} alt=""/>
                                     <img className='mx-auto' src={productsmimg4} alt=""/>
                                     <img className='mx-auto' src={productsmimg5} alt=""/>
                                     <img className='mx-auto' src={productsmimg6} alt=""/>
                                     <img className='mx-auto' src={productsmimg7} alt=""/>
                                     <img className='mx-auto' src={productsmimg8} alt=""/>
                                  </div>

                                  <div>
                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6'>
                                          <tr className=''>
                                              <td className='py-2 px-4  border-y border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border-y border-x border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border-y border-gray w-25 font-medium text-center'>
                                                <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded'>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>-</div>
                                                    <div className='h-8 w-8 text-base flex items-center justify-center'>2</div>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>+</div>
                        
                                                 </div>
                                                 <div>
                                                     <span>1068</span>
                                                 </div>
                                              </td>
                                          </tr>
                                          <tr className=''>
                                              <td className='py-2 px-4  border-y border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border-y border-x border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border-y border-gray w-25 font-medium text-center'>
                                                <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded'>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>-</div>
                                                    <div className='h-8 w-8 text-base flex items-center justify-center'>2</div>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>+</div>
                        
                                                 </div>
                                                 <div>
                                                     <span>1068</span>
                                                 </div>
                                              </td>
                                          </tr>
                                          <tr className=''>
                                              <td className='py-2 px-4  border-y border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border-y border-x border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border-y border-gray w-25 font-medium text-center'>
                                                <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded'>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>-</div>
                                                    <div className='h-8 w-8 text-base flex items-center justify-center'>2</div>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>+</div>
                        
                                                 </div>
                                                 <div>
                                                     <span>1068</span>
                                                 </div>
                                              </td>
                                          </tr>
                                          <tr className=''>
                                              <td className='py-2 px-4  border-y border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border-y border-x border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border-y border-gray w-25 font-medium text-center'>
                                                <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded'>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>-</div>
                                                    <div className='h-8 w-8 text-base flex items-center justify-center'>2</div>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>+</div>
                        
                                                 </div>
                                                 <div>
                                                     <span>1068</span>
                                                 </div>
                                              </td>
                                          </tr>
                                          <tr className=''>
                                              <td className='py-2 px-4  border-y border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border-y border-x border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border-y border-gray w-25 font-medium text-center'>
                                                <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded'>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>-</div>
                                                    <div className='h-8 w-8 text-base flex items-center justify-center'>2</div>
                                                    <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>+</div>
                        
                                                 </div>
                                                 <div>
                                                     <span>1068</span>
                                                 </div>
                                              </td>
                                          </tr>
                                      </table>
                                  </div>

                                  <div className='py-3'>
                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6  '>
                                          <tr className=' bg-stone-200'>
                                              <div className='flex justify-center items-center'>
                                              <td className='py-4 px-4 border border-gray w-50 font-medium'>From China 
                                              </td>
                                              <div>
                                                  <img src={china}/>
                                              </div>
                                              </div>
                                              <td className='py-4 px-4  border border-gray w-30 font-medium text-center'>To Bangladesh</td>

                                          </tr>
                                          <tr className=''>
                                              <td className='py-4 px-4 border border-gray w-50 font-medium text-center'>From China</td>
                                              <td className='py-4 px-4  border border-gray w-50 font-medium text-center'>To Bangladesh</td>
                                          </tr>
                                           
                                               <tr  className=' border border-gray '>
                                                   <p className='py-3 px-4 font-medium'>Shipping Method: By Air(15-45) Working Days</p>
                                               </tr>
                                               <tr  className=' border border-gray  '>
                                                   <p className='py-3 px-4 font-medium'>Shipping Charge: ৳৮০০ par kg</p>
                                               </tr>
                                        
                                          
                                      </table>
                                  </div>


                                  <div>
                                      <div className='flex space-x-8'>
                                          <div className='flex bg-blue-900 p-2 items-center space-x-3 rounded-lg'>
                                             <div className='text-2xl text-rose'>
                                               <i className='far fa-heart'></i>
                                             </div>
                                              <div>
                                                  <p className='text-white'>Save</p>
                                              </div>
                                          </div>
                                          <div className='flex bg-blue-900 p-2 items-center space-x-3 rounded-lg'>
                                             <div className='text-2xl text-rose'>
                                                 <i class="fas fa-shopping-cart"></i>
                                             </div>
                                              <div>
                                                  <p className='text-white'>Add to Cart</p>
                                              </div>
                                          </div>
                                          <div className='flex bg-blue-900 p-2 items-center space-x-3 rounded-lg'>
                                             <div className='text-2xl text-rose'>
                                                 <i class="fas fa-shopping-cart"></i>
                                             </div>
                                              <div>
                                                  <p className='text-white'>Add to Cart</p>
                                              </div>
                                          </div>
 
                                      </div>
                                  </div>


                                  <div className='py-4 space-y-2'>
                                      <p className='text-start'>Product Code: Aasas-asa85555</p>
                                      <p className='text-start'>Source: China</p>
                                      <p className='text-start'>Category: Men's jeans</p>
                                      <p className='text-start'>Approximate Weight: 0.5 kg</p>
                                      <p className='text-start'>Total Sold: 14528</p>
                                      <p className='text-start'>Seller Score: 10/10</p>
                                  </div>


                                  <div>
                                    <div className='flex'>
                                        <div className='flex space-x-3 bg-blue-900 p-2 items-center rounded-lg'>
                                         <div className='text-2xl text-rose'>
                                            <i class="fas fa-home"></i>
                                         </div>
                                         <div>
                                             <p className='text-white'>Visit Seller Store</p>
                                         </div>
                                      </div>
                                        </div>
                                  </div>


                              </div>






                          </div>
                      </div>
                  </div>

                  
                  <div className='pt-10 bg-white mt-4 '>
                     <div className='flex gap-10 mt-8 flex items-center justify-center'>
                        <div className='bg-blue-900 border border-rose text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 cursor-pointer '>

                          <button>Specification</button>

                       </div>
                      <div className='border border-gray-300 text-gray-700 px-10 py-2 font-medium rounded uppercase flex items-center gap-2 cursor-pointer '>
                         <button>Description</button>
                       </div>
                      <div className='border border-gray-300 text-gray-700 px-10 py-2 font-medium rounded uppercase flex items-center gap-2 cursor-pointer '>
                        <button>Seller Info</button>
                     </div>
                    </div>
                  </div>
                  
                </div>




                <div className='col-sm-2 bg-white shadow-lg'>
                <div>
                   <h4 className='text-md font-medium text-black uppercase py-4'>
                       Seller Recommed
                    </h4>
                 </div>
                <div className='bd-white shadow-lg rounded mb-4 overflow-hidden group'>
                      <div className='relative'> 
                         <img className='w-full' src={img1} alt=""/>
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
                <div className='bd-white shadow-lg mb-4 rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img2} alt=""/>
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
                <div className='bd-white shadow-lg mb-4 rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img3} alt=""/>
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
                <div className='bd-white shadow-lg mb-4 rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img4} alt=""/>
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
                <div className='bd-white shadow rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img5} alt=""/>
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
            </div>









            <div className='bg-white px-12 py-16'>
              <div className='flex pb-3 items-center justify-between flex-grow '>
                <div>
                   <h2 className='text-2xl font-medium text-black uppercase  text-left'>
                      More You Like
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
            <div className='grid grid-cols-5 gap-3 '>
            <div className='bd-white shadow rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img6} alt=""/>
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
                <div className='bd-white shadow rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img7} alt=""/>
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
                <div className='bd-white shadow rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img8} alt=""/>
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
                <div className='bd-white shadow rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img9} alt=""/>
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
                <div className='bd-white shadow rounded overflow-hidden group '>
                      <div className='relative'> 
                         <img className='w-full' src={img10} alt=""/>
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
        </div>

            <Footer></Footer>
        </section>


    </div>
    );
};

export default ProductViews;