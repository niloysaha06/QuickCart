import React from 'react'
const scrape = require('aliexpress-product-scraper');
const product = scrape('32958933105');

product.then(res => {
  console.log('The JSON: ', res);
});



