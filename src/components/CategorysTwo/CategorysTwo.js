import React, { useEffect, useState } from 'react'
import CategoryTwo from './CategoryTwo';

function CategorysTwo() {
    const [productsTwo, setProductsTwo] = useState([]);

    useEffect( () => {
        
        fetch('./categorytwo.json')
        .then(res => res.json())
        .then(data => setProductsTwo(data))
    }, []);

  return (
    <div className='grid grid-cols-5  gap-3 '>
       {
           productsTwo.map(productTwo => <CategoryTwo
           key={productTwo.id}
           productTwo={productTwo}
           ></CategoryTwo>)
       }
    </div>
  )
}

export default CategorysTwo