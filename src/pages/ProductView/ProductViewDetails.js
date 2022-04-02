import React from 'react';
import ProductDescription from './ProductDescription';
import ProductSellerInfo from './ProductSellerInfo';
import ProductSpecification from './ProductSpecification';


const ProductViewDetails = () => {
    return (
        <div>
            <div className='flex gap-10 mt-8 flex items-center justify-center'>
                <div className='bg-rose border border-rose text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 cursor-pointer '>
                    <h2>SPECIFICATION</h2>
                    <div>
                        
                    </div>
                </div>
                <div className='border border-gray-300 text-gray-700 px-10 py-2 font-medium rounded uppercase flex items-center gap-2 cursor-pointer '>
                    <h2>DESCRIPTION</h2>
                </div>
                <div className='border border-gray-300 text-gray-700 px-10 py-2 font-medium rounded uppercase flex items-center gap-2 cursor-pointer '>
                    <h2>SELLER INFO</h2>
                </div>
            </div>

            <ProductSpecification></ProductSpecification>
            <ProductSellerInfo></ProductSellerInfo>
            <ProductDescription></ProductDescription>
        </div>
    );
};

export default ProductViewDetails;