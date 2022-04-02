import React from 'react';


const Navbar = () => {
    return (
      <nav className="bg-blue-800 py-2">
          <div className='container flex'>
             {/* <div className='px-8 py-4 bg-rose flex items-center cursor-pointer relative group '>
                 <i className='fa fa-bars'></i>
                 <span className='capitalize ml-2 text-white'>All categories</span>
                 <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
                     <a href='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                         <i class="fas fa-boot w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Shoes</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                        <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Men</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Women</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Electronics</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Watches</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Computer</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Mobile</span>
                    </a>
                 </div>
              </div> */}

{/* 
              <div className='flex items-center justify-between flex-grow pl-20'>
                <div className='flex items-center space-x-10 capitalize'>
                  <a href='#' className='text-white hover:text-rose transition'>Home</a>
                  <a href='#' className='text-white hover:text-rose transition'>Shop</a>
                  <a href='#' className='text-white hover:text-rose transition'>Blog</a>
                  <a href='#' className='text-white hover:text-rose transition'>About Us</a>
                 </div>
                 <a href='#' className='text-white hover:text-rose transition'>Login/Register</a>
              </div> */}

<div style={{width: '595px', height: '38px'}}  className='w-full max-w-xl relative flex mx-auto'>
     <span className='absolute left-4 top-2 text-lg text-gray'>
         <i className='fas fa-search'></i>
     </span>
     <input type="text" className='w-full border border-rose border-r-0 pl-12 py-3 pr-3 rounded-lg focus:outline-none' placeholder='Paste link or Search from million of products...'/>
     
 </div>

 

 

              
         </div>

            
      </nav>
    );
};

export default Navbar;





{/* <div className='flex items-center space-x-8 capitalize'>
<a href='#' className='text-white hover:text-rose transition'>Home</a>
<a href='#' className='text-white hover:text-rose transition'>Shop</a>
<a href='#' className='text-white hover:text-rose transition'>Blog</a>
<a href='#' className='text-white hover:text-rose transition'>About Us</a>
</div>   */}