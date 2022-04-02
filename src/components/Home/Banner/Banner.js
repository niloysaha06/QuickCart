import React from 'react';
import bgbanner from '../../../images/banner/bgbanner.png'
import banner from '../../../images/banner/banner.png'
import mouse from '../../../images/carts/mouse.png'
import cameralens from '../../../images/carts/cameralens.png'
import headphone from '../../../images/carts/headphone.png'

const Banner = () => {
    return (
        <div className="container py-4">
           <div className="row ">
             <div  style={{width:'325px', height:'427'}} className="col-sm-3 ">
             <div className='px-8 py-4 bg-rose flex items-center cursor-pointer relative group '>
                 <i className='fa fa-bars'></i>
                 <span className='capitalize ml-2 text-white'>All categories</span>
                 <div className='absolute w-full left-0 top-full bg-white shadow-md py-2 divide-y divide-gray-300 divide-dashed '>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                         <i class="fas fa-boot w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Shoes</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                        <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Men</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Women</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Electronics</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Watches</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Computer</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Mobile</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Mobile</span>
                    </a>
                     <a href='#' className='flex items-center px-6 py-2 hover:bg-gray-100 transition'>
                     <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
                         <span className='ml-6 text-rose text-sm'>Mobile</span>
                    </a>
                 </div>
              </div>
             </div>
             <div className="col-sm-6">
                <img  style={{width:'730px', height:'427px'}} className='' src={banner} alt="" />
                
             </div>
             <div className="col-sm-3 shadow-md pt-2">
             <h6 className='text-start border-b border-gray py-1'>You May Like</h6>
                 <div className='row pt-4'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-1" src={mouse}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-1'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          <p className='text-start text-xs'>Sold By Vendor 2</p>
                     </div>
                    
                 </div>
                 <div className='row pt-4'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-1" src={headphone}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-1'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          <p className='text-start text-xs'>Sold By Vendor 2</p>
                     </div>
                    
                 </div>
                 <div className='row pt-4'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-1" src={cameralens}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-1'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          <p className='text-start text-xs'>Sold By Vendor 2</p>
                     </div>
                    
                 </div>
                 <div className='row pt-4'>
                    
                    <div className='col-sm-4'>
                        <img style={{width:'80px', height: '62px'}} className="mx-auto  mt-1" src={mouse}/>
                     </div>
                     <div className='col-sm-8 items-center space-y-1'>
                          <h6 className='text-start text-lg'>Automatic Watch</h6>
                          <div className='flex items-center space-x-3'>
                             <p className='text-sm text-rose'>৳ 1280</p>
                             <p className='text-xs text-gray line-through'>৳ 1280</p>
                          </div>
                          <p className='text-start text-xs'>Sold By Vendor 2</p>
                     </div>
                    
                 </div>
             </div>
          </div>
  
        </div>
    );
};

export default Banner;















// <div className="container py-4">
//         <div className="row">
//             <div className="col pl-10">
//             <div  className='px-8 py-4 bg-rose flex items-center cursor-pointer relative '>
//                  <i className='fa fa-bars'></i>
//                  <span className='capitalize ml-2 text-white'>All categories</span>
//                  <div className='absolute w-full left-0 top-full bg-white shadow-md py-1 divide-y divide-gray-300 divide-dashed'>
//                      <a href='#' className='flex items-center px-6 py-2.5 hover:bg-gray-100 transition'>
//                          <i class="fas fa-boot w-5 h-5 object-contain bg-primary text-2xl"></i>
//                          <span className='ml-6 text-rose text-sm'>Shoes</span>
//                     </a>
//                      <a href='#' className='flex items-center px-6 py-2.5 hover:bg-gray-100 transition'>
//                         <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
//                          <span className='ml-6 text-rose text-sm'>Men</span>
//                     </a>
//                      <a href='#' className='flex items-center px-6 py-2.5 hover:bg-gray-100 transition'>
//                      <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
//                          <span className='ml-6 text-rose text-sm'>Women</span>
//                     </a>
//                      <a href='#' className='flex items-center px-6 py-2.5 hover:bg-gray-100 transition'>
//                      <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
//                          <span className='ml-6 text-rose text-sm'>Electronics</span>
//                     </a>
//                      <a href='#' className='flex items-center px-6 py-2.5 hover:bg-gray-100 transition'>
//                      <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
//                          <span className='ml-6 text-rose text-sm'>Watches</span>
//                     </a>
//                      <a href='#' className='flex items-center px-6 py-2.5 hover:bg-gray-100 transition'>
//                      <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
//                          <span className='ml-6 text-rose text-sm'>Computer</span>
//                     </a>
//                      <a href='#' className='flex items-center px-6 py-2.5 hover:bg-gray-100 transition'>
//                      <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
//                          <span className='ml-6 text-rose text-sm'>Mobile</span>
//                     </a>
//                      <a href='#' className='flex items-center px-6 py-2.5 hover:bg-gray-100 transition'>
//                      <i class="fa fa-person-simple w-5 h-5 object-contain bg-primary text-2xl"></i>
//                          <span className='ml-6 text-rose text-sm'>Mobile</span>
//                     </a>
//                  </div>
//               </div>
//             </div>
//             <div class="col-6">
//                <img style={{width: '572px', height: '410px'}} className='mx-auto ' src={banner} alt="" />
//             </div>
//             <div className="col ">
//                 <h2>You MayLike</h2>
//                    <div style={{  height: '400px'}}  className='bf-white shadow-lg '>
//                      <div className='row my-2 bg-white shadow-md'>
//                       <div class="col-6">
//                            <img style={{}} className='mx-auto' src={mouse} alt="" />
//                       </div>
//                       <div class="col-6">
//                          <h6 style={{fontSize: '12px'}}>Automatic Watch</h6>
//                          <h6 style={{fontSize: '12px'}}>৳ 1280</h6>
//                          <span style={{fontSize: '12px'}}>Sold By Vendor 2</span>
//                      </div>
//                    </div>
//                    </div>
//            </div>
//        </div>
//    </div>