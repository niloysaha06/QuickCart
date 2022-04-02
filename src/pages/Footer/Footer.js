import React from 'react';
import logo from '../../images/logo/logo.png'

const Footer = () => {
    return (
        <>
        
      <footer className='bg-blue-800 pt-16 pb-12 border-t border-gray-100'>
            <div className='container grid grid-cols-3'>
                <div className='col-span-1 space-y-8 pt-3  ml-12'>
                     <img src={logo} className="w-30"/>
                     <p className='text-left text-white'>Got any Ques 24/7 <br/> 8801511605330</p>
                     <div className='flex space-x-6'>
                     <a href='' className='text-white hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center '>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='' className='text-white hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center '>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='' className='text-white hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center '>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='' className='text-white hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center '>
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                     </div>
                </div>

                <div className='col-span-2 grid grid-cols-2 gap-10'>
                     <div className='grid grid-cols-2 gap-8'>
                        <div>
                           <h3 className='text-lg font-semibold text-white uppercase tracking-wider opacity-4 '>Solutions</h3>
                           <div className='mt-4 space-y-4 '>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                          </div>
                        </div>
                        <div>
                           <h3 className='text-lg font-semibold text-white uppercase tracking-wider opacity-4 '>Solutions</h3>
                           <div className='mt-4 space-y-4 '>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                          </div>
                        </div>
                     </div>
                     <div className='grid grid-cols-2 gap-8'>
                        <div>
                           <h3 className='text-lg font-semibold text-white uppercase tracking-wider opacity-4 '>Solutions</h3>
                           <div className='mt-4 space-y-4 '>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                          </div>
                        </div>
                        <div>
                           <h3 className='text-lg font-semibold text-white uppercase tracking-wider opacity-4 '>Solutions</h3>
                           <div className='mt-4 space-y-4 '>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                              <a href='#' className='text-base text-white block '>Marketing</a>
                          </div>
                        </div>
                     </div>
                </div>

            </div>
      </footer>
       <footer>
           <div className='bg-blue-900'>
               <h2 style={{height: '94px'}} className="text-white flex items-center justify-center">
                 Copyright © SDB2All rights reserved. 
               </h2>
           </div>
       </footer>
      </>
    );
};

export default Footer;