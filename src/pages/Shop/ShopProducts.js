import React from 'react';
import ProductWrappertwo from '../../components/ProductWrappertwo/ProductWrappertwo';
import ProductWrpper from '../../components/ProductWrpper/ProductWrpper';

const ShopProducts = () => {
    return (
        <div>
            <div className='col-span-3'>
                 <div className='flex items-center mb-4'>
                 <select style={{}} className='w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-rose focus:border-rose flex  items-left '>
                    <option>Default sorting</option>
                    <option>Price low-height</option>
                    <option>Price height-low</option>
                    <option>Latest product</option>
                 </select>
                 <div className='flex gap-2 ml-auto'>
                      <div className='border border-rose w-10 h-9 flex items-center justify-center text-white bg-rose rounded cursor-pointer'>
                          <i className='fas fa-th'></i>
                      </div>
                      <div className='border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer'>
                          <i className='fas fa-list'></i>
                      </div>
                 </div>
                 </div>
            </div>
            <ProductWrpper></ProductWrpper>
            <ProductWrappertwo></ProductWrappertwo>
        </div>
    );
};

export default ShopProducts;