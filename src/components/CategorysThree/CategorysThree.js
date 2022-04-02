import React, { useEffect, useState } from 'react'
import CategoryThree from './CategoryThree';

function CategorysThree() {
    const [productsThree, setProductsThree] = useState([]);

    useEffect( () => {
        
        fetch('./categorythree.json')
        .then(res => res.json())
        .then(data => setProductsThree(data))
    }, []);

  return (
    <div className='grid grid-cols-5  gap-3 '>
        {
            productsThree.map(productThree => <CategoryThree
            key={productThree.id}
            productThree={productThree}
            ></CategoryThree>)
        }
    </div>
  )
}

export default CategorysThree