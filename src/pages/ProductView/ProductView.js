import React from 'react';
import Header from '../../components/Home/Header/Header';
import Navbar from '../../components/Home/Navbar/Navbar';
import productview1 from '../../images/productview/productview1.jpg'
import productview2 from '../../images/productview/productview2.jpg'
import productview3 from '../../images/productview/productview3.jpg'
import productview4 from '../../images/productview/productview4.jpg'
import Footer from '../Footer/Footer';
import ProductViewDetails from './ProductViewDetails';

const ProductView = () => {
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
            <span className='text-sm text-gray-400'>
                <i className='fas fa-chevron-right'></i>
            </span>
            <p className='text-gray-600 font-medium'>Headphone</p>
           </div>
            
            <div className='container grid grid-cols-2 gap-6'>
            <div>
                 <img src={productview1} className="w-full" alt=""/>
                 <div className='grid grid-cols-5 gap-4 mt-4'>
                     <img src={productview1}  className="w-full cursor-pointer border border-primary" alt=""/>
                     <img src={productview2} className="w-full cursor-pointer border " alt=""/>
                     <img src={productview3} className="w-full cursor-pointer border " alt=""/>
                     <img src={productview1} className="w-full cursor-pointer border " alt=""/>
                     <img src={productview4} className="w-full cursor-pointer border " alt=""/>
                 </div>
            </div>
            
            <div className=''>
                <h2 className='text-3xl font-medium uppercase text-rose mb-2 text-left'>Headphone</h2>
                <div className='flex items-center mb-4'>
                <div className='flex gap-1 text-sm text-yellow-400'>
                    <span><i className='fas fa-star'></i></span>
                    <span><i className='fas fa-star'></i></span>
                    <span><i className='fas fa-star'></i></span>
                    <span><i className='fas fa-star'></i></span>
                    <span><i className='fas fa-star'></i></span>
                </div>
                <div className='text-xs text-gray-500 ml-3'>(150 Reviews)</div>
                </div>

                <div className='space-y-2'>
                    <p className='text-gray-800  font-semibold space-x-2 text-left'>
                        <span>Availability :</span>
                        <span className='text-green-600'>In Stock</span>
                    </p>
                    <p className='space-x-2 text-left'>
                        <span className='text-gray-800 font-semibold'>Brand :</span>
                        <span className='text-gray-600'>Boat</span>
                    </p>
                    <p className='space-x-2  text-left'>
                        <span className='text-gray-800 font-semibold'>Category :</span>
                        <span className='text-gray-600'>Electronics</span>
                    </p>
                    <p className='space-x-2 text-left'>
                        <span className='text-gray-800 font-semibold'>SKU :</span>
                        <span className='text-gray-600'>BE45VGRT</span>
                    </p>
                </div>
                <div className='flex items-baseline mb-1 space-x-2 mt-4 font-roboto'>
                    <p className='text-2xl text-rose font-semibold'>$45.00</p>
                    <p className='text-base text-rose line-through'>$55.00</p>
                </div>
                <p className='mt-4 text-md text-gray-600 text-left'>
                    Headphones are a pair of small loudspeaker drivers around the head over a user's ears
                </p>

                <div className='pt-4'>
                               <h3 className='text-md text-gray-800 mb-2 uppercase text-left'>
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
                            <h3 className='text-md text-gray-800 mb-2 uppercase  text-left'>
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
                
                <div className='mt-4'>
                    <h3 className='text-md text-gray-800 mb-2 uppercase text-left'>
                        Quantity
                    </h3>
                    <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
                         <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>-</div>
                         <div className='h-8 w-8 text-base flex items-center justify-center'>2</div>
                         <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>+</div>
                        
                    </div>
                </div>

                <div className='flex gap-3 border-b border-gray-200 pb-5 mt-6'>
                    <a href='#' className='bg-rose border border-rose text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:bg-primary transition'>
                        Add to cart
                    </a>
                    {/* <a href='#' className=' block px-8 text-center text-white bg-rose border border-rose py-1  rounded-b hover:bg-transparent hover:bg-primary transition uppercase'>
                    <i className='fas fa-shopping-bag '>Add to cart</i>
                    </a> */}
                    <a href='#' className=' border border-gray-300 text-gray-700 px-10 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-white  hover:bg-primary transition'>
                        Wishlist
                    </a>
                </div>

                <div className='flex gap-3 mt-4'>
                    <a href='' className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center '>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='' className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center '>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='' className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center '>
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>





            </div>

        </div>

        <div className='container pb-16 mt-16 border-t border-gray-200'>
                   <ProductViewDetails></ProductViewDetails>
                </div>
        <Footer></Footer>
       </div>
    );
};

export default ProductView;