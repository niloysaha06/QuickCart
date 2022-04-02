import React from 'react';
import Header from '../../components/Home/Header/Header';
import Navbar from '../../components/Home/Navbar/Navbar';
import Footer from '../Footer/Footer';
import ShopProducts from './ShopProducts';

const Shop = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='container py-4 flex items-center gap-3'>
            <a href='' className='text-rose text-base'>
                <i className='fas fa-home'></i>
            </a>
            <span className='text-sm text-gray-400'>
                <i className='fas fa-chevron-right'></i>
            </span>
            <p className='text-gray-600 font-medium'>Shop</p>
           </div>

           <div className='container grid grid-cols-4 gap-6 pt-4 pb-16 items-start '>
               <div className='col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden'>
                   <div className='divide-y divide-gray-200 space-y-5'>
                        <div>
                            <h3 className='text-xl text-gray-800 mb-2 uppercase font-medium text-left'>
                                Categories
                            </h3>
                            <div className='space-y-2'>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Shoes</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Men</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Women</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Electronics</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Watches</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Computer</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Mobile</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Mobile</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <h3 className='text-xl text-gray-800 mb-2 uppercase font-medium text-left'>
                                Brands
                            </h3>
                            <div className='space-y-2'>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Shoes</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Men</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Women</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Electronics</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Watches</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Computer</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Mobile</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex items-center'>
                                     <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                                     <label for="" className='text-gray-600 ml-3 cursor-pointer'>Mobile</label>
                                     <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='pt-4'>
                              <h3 className='text-xl text-gray-800 mb-2 uppercase font-medium text-left'>
                                Price
                               </h3>
                               <div className='mt-4 flex items-center'>
                                    <input type="text" className='w-full border-gray-300 focus:border-rose focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded ' placeholder='minimum'/>
                                    <span className='mx-2 text-gray-500'> - </span>
                                    <input type="text" className='w-full border-gray-300 focus:border-rose focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded ' placeholder='maximum'/>
                               </div>
                        </div>

                        <div className='pt-4'>
                               <h3 className='text-xl text-gray-800 mb-2 uppercase font-medium text-left'>
                                   Size
                               </h3>
                               <div className='flex items-center gap-2'>
                                   <div className='size-selector hover:bg-rose transition'>
                                        <input type="radio" name="size" id="size" className='hidden'/>
                                        <label for="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>XS</label>
                                   </div>
                                   <div className='size-selector hover:bg-rose transition'>
                                        <input type="radio" name="size" id="size" className='hidden'/>
                                        <label for="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>S</label>
                                   </div>
                                   <div className='size-selector hover:bg-rose transition'>
                                        <input type="radio" name="size" id="size" className='hidden'/>
                                        <label for="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>M</label>
                                   </div>
                                   <div className='size-selector hover:bg-rose transition'>
                                        <input type="radio" name="size" id="size" className='hidden'/>
                                        <label for="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>L</label>
                                   </div>
                                   <div className='size-selector hover:bg-rose transition'>
                                        <input type="radio" name="size" id="size" className='hidden'/>
                                        <label for="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>XL</label>
                                   </div>
                                   <div className='size-selector hover:bg-rose transition'>
                                        <input type="radio" name="size" id="size" className='hidden'/>
                                        <label for="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>XXL</label>
                                   </div>
                               </div>
                     
                        </div>

                        <div className='pt-4'>
                            <h3 className='text-xl text-gray-800 mb-2 uppercase font-medium text-left'>
                                Color
                            </h3>
                            <div className='flex items-center gap-2'>
                                   <div>
                                       <input type="radio" name="color" className='hidden' id="color-red"/>
                                       <label for="color-red" style={{backgroundColor: 'red'}} className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm'></label>
                                   </div>
                                   <div>
                                       <input type="radio" name="color" className='hidden' id="color-red"/>
                                       <label for="color-red" style={{backgroundColor: 'yellow'}} className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm'></label>
                                   </div>
                                   <div>
                                       <input type="radio" name="color" className='hidden' id="color-red"/>
                                       <label for="color-red" style={{backgroundColor: 'blue'}} className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm'></label>
                                   </div>
                                   <div>
                                       <input type="radio" name="color" className='hidden' id="color-red"/>
                                       <label for="color-red" style={{backgroundColor: 'white'}} className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm'></label>
                                   </div>
                                   <div>
                                       <input type="radio" name="color" className='hidden' id="color-red"/>
                                       <label for="color-red" style={{backgroundColor: 'black'}} className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm'></label>
                                   </div>
                                   <div>
                                       <input type="radio" name="color" className='hidden' id="color-red"/>
                                       <label for="color-red" style={{backgroundColor: 'pink'}} className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm'></label>
                                   </div>
                                   <div>
                                       <input type="radio" name="color" className='hidden' id="color-red"/>
                                       <label for="color-red" style={{backgroundColor: 'gold'}} className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm'></label>
                                   </div>
                            </div>
                        </div>

                   </div>

               </div>
               <div className='col-span-3'>
                   <ShopProducts></ShopProducts>
               </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Shop;