import React from 'react';
import descriptionpic1 from '../../images/productview/productview1.jpg'

const ProductDescription = () => {
    return (
        <div className='container'>
            <div className='my-4'>
               <img className='w-5/12 my-4' src={descriptionpic1} alt="" />
               <img className='w-5/12 my-4' src={descriptionpic1} alt="" />
               <img className='w-5/12 my-4' src={descriptionpic1} alt="" />
               <img className='w-5/12 my-4' src={descriptionpic1} alt="" />
            </div>
        </div>
    );
};

export default ProductDescription;