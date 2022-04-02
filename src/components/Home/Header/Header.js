import React from 'react';
import logo from '../../../images/logo/logo.png'

const Header = () => {
    return (
            <header className="py-3 shadow-sm bg-white  ">

{/* Logo */}

<div className=" container flex items-center justify-between space-x-10  ">
    <a href='#'>
       <img style={{width: '141.1px', height: '19.38px'}} className='' src={logo} alt="" />
    </a>


    <div className='flex items-center justify-between flex-grow'>
                <div className='flex items-center space-x-10 capitalize'>
                  <a href='#' className='text-gray hover:text-rose transition'>Home</a>
                  <a href='#' className='text-gray hover:text-rose transition'>Shop</a>
                  <a href='#' className='text-gray hover:text-rose transition'>Blog</a>
                  <a href='#' className='text-gray hover:text-rose transition'>About Us</a>
                 </div>
                 
    </div>

       {/* Search Input */}

{/* <div  className='w-full max-w-xl relative flex '>
     <span className='absolute left-4 top-3 text-lg text-gray-400'>
         <i className='fas fa-search'></i>
     </span>
     <input type="text" className='w-full border border-rose border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none' placeholder='Paste link or Search from million of products...'/>
     <button className='text-white bg-rose border border-rose px-8  rounded-r-md hover:bg-transparent hover:bg-primary transition '>Search</button>
 </div> */}

{/* Icons */}


<div  className='flex items-center space-x-6 '>
  <a href='#' className='text-center text-gray-700 hover:text-rose transition relative'>
        <div className='flex items-center  space-x-2'>
        <div className='text-2xl'>
            <i class="fa fa-phone"></i>
        </div>
           <div className='space-y-1'>
           <p className='text-xs leading-3 text-left '>Call Us Now:</p>
           <p className='text-xs leading-3'>8801511605330</p>
           
           </div>
        </div>
       
   </a>
   <a href='#' className='text-center text-gray-700 hover:text-rose transition relative'>
        <div className='text-2xl'>
            <i className='far fa-heart'></i>
        </div>
        <div className='text-xs leading-3'>WishList</div>
        <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>8</span>
   </a>
   <a href='#' className='text-center text-gray-700 hover:text-rose transition relative'>
        <div className='text-2xl'>
            <i className='far fa-shopping-bag'></i>
        </div>
        <div className='text-xs leading-3'>Cart</div>
        <span className='absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>4</span>
   </a>
   <a href='#' className='text-center text-gray-700 hover:text-rose transition relative'>
        <div className='text-2xl'>
            <i className='far fa-user'></i>
        </div>
        <div className='text-xs leading-3'>Account</div>
        
   </a>
</div>
</div>


</header>
    );
};

export default Header;