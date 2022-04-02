import React from 'react';
import bgbanner from '../../../images/banner/bgbanner.png'
import blog1 from '../../../images/blog/blog1.png'
import blog2 from '../../../images/blog/blog2.png'
import blog3 from '../../../images/blog/blog3.png'
import blog4 from '../../../images/blog/blog4.png'

const BgBanner = () => {
    return (
        <div className='container py-4 border border-gray'>
             <div>
                 <img style={{width: '100%', height:'100%'}} className='px-4' src={bgbanner} alt="" />
             </div>
             <div>
                 <div className='flex items-center justify-between flex-grow '>
                   <h2 className='text-2xl font-medium text-black uppercase my-4 text-left'>
                      From Our Blog
                   </h2>
                   <div>
                       <h6>
                         View All Articles
                       </h6>
                   </div>
                 </div>
                <div className="grid grid-cols-4 space-x-2">
                    <div>
                        <img className='mx-auto' src={blog1}/>
                        <p className=' text-xs pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                         <div className='flex justify-center items-center'>
                             <a className='pt-2'>
                                 <span>Read More</span>
                             </a>
                         </div>
                    </div>
                    <div>
                        <img className='mx-auto' src={blog2}/>
                        <p className='text-xs pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                         <div className='flex justify-center items-center'>
                             <a className='pt-2'>
                                 <span>Read More</span>
                             </a>
                         </div>
                    </div>
                    <div>
                        <img className='mx-auto' src={blog3}/>
                        <p className='text-xs pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                         <div className='flex justify-center items-center'>
                             <a className='pt-2'>
                                 <span>Read More</span>
                             </a>
                         </div>
                    </div>
                    <div>
                        <img className='mx-auto' src={blog4}/>
                        <p className='text-xs pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                         <div className='flex justify-center items-center'>
                             <a className='pt-2'>
                                 <span className=''>Read More</span>
                             </a>
                         </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default BgBanner;