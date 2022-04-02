import React from 'react';
import Header from '../../components/Home/Header/Header';
import Navbar from '../../components/Home/Navbar/Navbar';
import Footer from '../Footer/Footer';

const CheckoutAddress = () => {
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
            <p className='text-gray-600 font-medium'>CheckOut</p>
           </div>

           <div className='container grid grid-cols-12 items-start pb-16 pt-4 text-left '>
              <div className='col-span-8 border border-gray-200 p-4 rounded'>
                  <h3 className='text-lg font-medium capitalize mb-4'>CheckOut</h3>
                  <div className='space-y-4'>
                      <div className='grid grid-cols-2 gap-4'>
                          <div>
                              <label className='text-gray-600 mb-2 block'>
                                  First Name <span className='text-rose'>*</span>
                              </label>
                              <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-rose focus:ring-0'/>
                          </div>
                          <div>
                              <label className='text-gray-600 mb-2 block'>
                                  First Name <span className='text-rose'>*</span>
                              </label>
                              <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-rose focus:ring-0'/>
                          </div>
                      </div>
                         <div>
                              <label className='text-gray-600 mb-2 block'>
                                  Company Name
                              </label>
                              <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-rose focus:ring-0'/>
                          </div>
                         <div>
                              <label className='text-gray-600 mb-2 block'>
                                  Country/Region <span className='text-rose'>*</span>
                              </label>
                              <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-rose focus:ring-0'/>
                          </div>
                         <div>
                              <label className='text-gray-600 mb-2 block'>
                                  Town/City <span className='text-rose'>*</span>
                              </label>
                              <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-rose focus:ring-0'/>
                          </div>
                         <div>
                              <label className='text-gray-600 mb-2 block'>
                                  Phone Number <span className='text-rose'>*</span>
                              </label>
                              <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-rose focus:ring-0'/>
                          </div>
                         <div>
                              <label className='text-gray-600 mb-2 block'>
                                  Email <span className='text-rose'>*</span>
                              </label>
                              <input type="text" className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-rose focus:ring-0'/>
                          </div>
                  </div>
              </div>
              <div className='col-span-4 border border-gray-200 p-4 rounded mx-4'>
                  <h4 className='text-gray-800 text-lg mb-4 fount-medium uppercase'>Order Summary</h4>
                  <div className='space-y-4 mb-3'>
                      <div className='flex justify-between '>
                           <div>
                               <h5 className='text-gray-800 font-medium'>HeadPhone</h5>
                               <p className='text-sm text-gray-600'>Size: M</p>
                           </div>
                           <p className='text-gray-600'>x3</p>
                           <p className='text-gray-800 font-medium'>$320</p>
                      </div>
                  </div>
                  <div className='space-y-2 mb-3'>
                      <div className='flex justify-between '>
                           <div>
                               <h5 className='text-gray-800 font-medium'>HeadPhone</h5>
                               <p className='text-sm text-gray-600'>Size: M</p>
                           </div>
                           <p className='text-gray-600'>x3</p>
                           <p className='text-gray-800 font-medium'>$320</p>
                      </div>
                  </div>
                  <div className='space-y-2 mb-3'>
                      <div className='flex justify-between '>
                           <div>
                               <h5 className='text-gray-800 font-medium'>HeadPhone</h5>
                               <p className='text-sm text-gray-600'>Size: M</p>
                           </div>
                           <p className='text-gray-600'>x3</p>
                           <p className='text-gray-800 font-medium'>$320</p>
                      </div>
                  </div>

                  <div className='flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase'>
                      <p>Subtotal</p>
                      <p>$320</p>
                  </div>
                  <div className='flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase'>
                      <p>Shipping</p>
                      <p>$10</p>
                  </div>
                  <div className='flex justify-between text-gray-800 font-medium py-3 uppercase'>
                      <p className='semi-bold'>Total</p>
                      <p>$330</p>
                  </div>
                  <div className='flex items-center space-x-2 mb-4 mt-2'>
                      <input className='text-rose focus:ring-0 rounded cursor-pointer ' type="checkbox" id=""/>
                      <label className='text-gray-600 cursor-pointer text-sm'>Agree to our <span className='text-rose'>terms & conditions</span></label>
                  </div>

                  <div>
                  <a href='#' className=' block w-full text-center text-white bg-rose border border-rose py-1  rounded-b hover:bg-transparent hover:bg-primary transition '>Place Order</a>
                  </div>

              </div>

           </div>
            <Footer></Footer>
        </div>
    );
};

export default CheckoutAddress;