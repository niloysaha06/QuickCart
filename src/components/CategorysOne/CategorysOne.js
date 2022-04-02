import React, { useEffect, useState } from 'react'
import CategoryOne from './CategoryOne';

function CategorysOne() {
    const [productsOne, setProductsOne] = useState([]);

    useEffect( () => {
        
        fetch('./categoryones.json')
        .then(res => res.json())
        .then(data => setProductsOne(data))
    }, []);

  return (
    <div className='grid grid-cols-5  gap-3 '>
      {
          productsOne.map(productOne => <CategoryOne
            key={productOne.id}
            productOne= {productOne}
          >

          </CategoryOne> ) 
       }
    </div>
  )
}

export default CategorysOne