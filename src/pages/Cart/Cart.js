import React from 'react';
import Header from '../../components/Home/Header/Header';
import Navbar from '../../components/Home/Navbar/Navbar';
import productsmimg1 from '../../images/productview/productsmimg6.png'
import img6 from '../../images/carts/6.png'
import img7 from '../../images/carts/7.png'
import img8 from '../../images/carts/8.png'
import img9 from '../../images/carts/9.png'
import img10 from '../../images/carts/10.png'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        <div className='bg-slate-200'>
          <div className='container px-12 pb-8'>
            <div className='row pt-10'>
                <div>
                    <h1 className='text-3xl font-medium text-black pb-4'>Cart</h1>
                </div>
                  <div className='col-sm-8'>
                      <div className='bg-rose'>
                          <div className='p-3 flex items-center justify-between flex-grow  rounded-lg-t'>
                            <input
                              type="checkbox"
                              id="remember"
                              class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <div>
                                <h2 className='text-white text-xl uppercase'>From China</h2>
                            </div>

                            <button className='bg-white text-base text-gray-500  p-2 rounded-md'>Remove All</button>
                          </div>
                      </div>

                      
                          <div className='bg-white shadow rounded mt-3 px-4'>
                              <div className='flex items-center space-x-4 p-2'>
                                  <input
                                  type="checkbox"
                                  id="remember"
                                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                  />
                                  <h4>CC Jewellery Store</h4>
                              </div>
                              <div className='row pt-2'>
                                  <div className='col-sm-3'>
                                      <img style={{width:'82px', height:'82px'}} className="mx-auto" src={productsmimg1}/>
                                  </div>
                                  <div className='col-sm-9'>
                                      <p className='text-sm font-medium'>2021 new men's jeans Korean version of the trend of slim feet pants youth stretch denim men's pants plus velvet pants</p>

                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm my-4'>
                                      <tr className=''>
                                              <td className='py-1 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-1 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-1 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>Total</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳402</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>3</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                          </div>
                          <div className='bg-white shadow rounded mt-3 px-4'>
                              <div className='flex items-center space-x-4 p-2'>
                                  <input
                                  type="checkbox"
                                  id="remember"
                                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                  />
                                  <h4>CC Jewellery Store</h4>
                              </div>
                              <div className='row pt-2'>
                                  <div className='col-sm-3'>
                                      <img style={{width:'82px', height:'82px'}} className="mx-auto" src={productsmimg1}/>
                                  </div>
                                  <div className='col-sm-9'>
                                      <p className='text-sm font-medium'>2021 new men's jeans Korean version of the trend of slim feet pants youth stretch denim men's pants plus velvet pants</p>

                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm my-4'>
                                      <tr className=''>
                                              <td className='py-1 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-1 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-1 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>Total</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳402</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>3</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                          </div>
                          <div className='bg-white shadow rounded mt-3 px-4'>
                              <div className='flex items-center space-x-4 p-2'>
                                  <input
                                  type="checkbox"
                                  id="remember"
                                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                  />
                                  <h4>CC Jewellery Store</h4>
                              </div>
                              <div className='row pt-2'>
                                  <div className='col-sm-3'>
                                      <img style={{width:'82px', height:'82px'}} className="mx-auto" src={productsmimg1}/>
                                  </div>
                                  <div className='col-sm-9'>
                                      <p className='text-sm font-medium'>2021 new men's jeans Korean version of the trend of slim feet pants youth stretch denim men's pants plus velvet pants</p>

                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm my-4'>
                                      <tr className=''>
                                              <td className='py-1 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-1 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-1 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>Total</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳402</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>3</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                          </div>
                          <div className='bg-white shadow rounded mt-3 px-4'>
                              <div className='flex items-center space-x-4 p-2'>
                                  <input
                                  type="checkbox"
                                  id="remember"
                                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                  />
                                  <h4>CC Jewellery Store</h4>
                              </div>
                              <div className='row pt-2'>
                                  <div className='col-sm-3'>
                                      <img style={{width:'82px', height:'82px'}} className="mx-auto" src={productsmimg1}/>
                                  </div>
                                  <div className='col-sm-9'>
                                      <p className='text-sm font-medium'>2021 new men's jeans Korean version of the trend of slim feet pants youth stretch denim men's pants plus velvet pants</p>

                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm my-4'>
                                      <tr className=''>
                                              <td className='py-1 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-1 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-1 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>Total</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳402</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>3</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                          </div>
                          <div className='bg-white shadow rounded mt-3 px-4'>
                              <div className='flex items-center space-x-4 p-2'>
                                  <input
                                  type="checkbox"
                                  id="remember"
                                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                  />
                                  <h4>CC Jewellery Store</h4>
                              </div>
                              <div className='row pt-2'>
                                  <div className='col-sm-3'>
                                      <img style={{width:'82px', height:'82px'}} className="mx-auto" src={productsmimg1}/>
                                  </div>
                                  <div className='col-sm-9'>
                                      <p className='text-sm font-medium'>2021 new men's jeans Korean version of the trend of slim feet pants youth stretch denim men's pants plus velvet pants</p>

                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm my-4'>
                                      <tr className=''>
                                              <td className='py-1 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-1 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-1 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>Total</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳402</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>3</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                          </div>
                          <div className='bg-white shadow rounded mt-3 px-4'>
                              <div className='flex items-center space-x-4 p-2'>
                                  <input
                                  type="checkbox"
                                  id="remember"
                                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                  />
                                  <h4>CC Jewellery Store</h4>
                              </div>
                              <div className='row pt-2'>
                                  <div className='col-sm-3'>
                                      <img style={{width:'82px', height:'82px'}} className="mx-auto" src={productsmimg1}/>
                                  </div>
                                  <div className='col-sm-9'>
                                      <p className='text-sm font-medium'>2021 new men's jeans Korean version of the trend of slim feet pants youth stretch denim men's pants plus velvet pants</p>

                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm my-4'>
                                      <tr className=''>
                                              <td className='py-1 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-1 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-1 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>Total</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳402</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>3</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                          </div>
                          <div className='bg-white shadow rounded mt-3 px-4'>
                              <div className='flex items-center space-x-4 p-2'>
                                  <input
                                  type="checkbox"
                                  id="remember"
                                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                  />
                                  <h4>CC Jewellery Store</h4>
                              </div>
                              <div className='row pt-2'>
                                  <div className='col-sm-3'>
                                      <img style={{width:'82px', height:'82px'}} className="mx-auto" src={productsmimg1}/>
                                  </div>
                                  <div className='col-sm-9'>
                                      <p className='text-sm font-medium'>2021 new men's jeans Korean version of the trend of slim feet pants youth stretch denim men's pants plus velvet pants</p>

                                      <table className='table-auto border-collapse w-full text-left text-gray-600 text-sm my-4'>
                                      <tr className=''>
                                              <td className='py-1 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-1 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-1 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>32</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳134</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>
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
                                              <td className='py-2 px-4  border border-gray w-50 font-medium text-center'>Total</td>
                                              <td className='py-2 px-4  border border border-gray w-25 font-medium text-center' >৳402</td>
                                              <td className='py-2 px-4  border border-gray w-25 font-medium text-center'>3</td>
                                          </tr>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      
                  </div>


                  <div className='col-sm-4'>
                          <div className='bg-white'>
                              <div className='px-4 pt-2 shadow'>
                                <p className='text-black bg-rose text-xl uppercase flex items-center justify-center py-4'>Fees</p>
                                <div className='row pb-3 px-2.5 rounded-t'>
                                  <div className='col-sm-6 py-3 border-l border-b border-r border-rose'>
                                    <p className=''>China Shipping Charge</p>
                                  </div>
                                  <div className=' col-sm-6 py-3 border-l border-b border-r border-rose '>
                                    <p className='pt-2'>৳800 per Kg</p>
                                  </div>
                               </div>
                              </div>
                          </div>
                          <div className='bg-white mt-3'>
                              <div className='px-4 py-4 shadow'>
                                <p className='text-black bg-rose text-xl uppercase flex items-center justify-center py-4'>Fees</p>
                                <div className='row pb-3 px-2.5 rounded-t'>
                                  <div className='col-sm-6 py-3 border-l border-b border-r border-rose'>
                                    <p className=''>China Shipping Charge</p>
                                  </div>
                                  <div className=' col-sm-6 py-3 border-l border-b border-r border-rose '>
                                    <p className='pt-2'>৳800 per Kg</p>
                                  </div>
                                  <div className=' col-sm-6 py-3 border-l border-b border-r border-rose '>
                                    <p className='pt-2'>China Shipping Charge</p>
                                  </div>
                                  <div className=' col-sm-6 py-3 border-l border-b border-r border-rose '>
                                    <p className='pt-2'>৳800 per Kg</p>
                                  </div>
                                  <div className=' col-sm-6 py-3 border-l border-b border-r border-rose '>
                                    <p className='pt-2'>Vat only for amazon 9% on total purchase price</p>
                                  </div>
                                  <div className=' col-sm-6 py-3 border-l border-b border-r border-rose '>
                                    <p className='pt-2'>৳800 per Kg</p>
                                  </div>

                               </div>
                                <Link to='/checkout'>
                                      <div className='bg-cyan-900'>
                                        <p className='py-3 text-white uppercase'>Go To CheckOut</p>
                                      </div>
                                </Link>
                              </div>
                          </div>
                  </div> 
            </div>
        </div>
        </div>
        {/* ProductWrapper Start */}
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
        {/* ProductWrapper End */}

        <Footer></Footer>
        </>
    );
};

export default Cart;