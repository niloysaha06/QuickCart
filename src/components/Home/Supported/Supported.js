import React from 'react';
import alibaba from '../../../images/supported/alibaba.png'
import aliexpress from '../../../images/supported/aliexpress-logo-png-6.png'
import amazon from '../../../images/supported/amazon_PNG9.png'
import appstore from '../../../images/supported/appstore.png'
import bestbuy from '../../../images/supported/bestbuy.png'
import dhgate from '../../../images/supported/DHgate-Logo (2).png'
import ebay from '../../../images/supported/EBay_logo.png'
import etsy from '../../../images/supported/etsy.png'
import gearbest from '../../../images/supported/gearbest-logo.png'
import levis from '../../../images/supported/levis.png'
import target from '../../../images/supported/target.png'
import walmart from '../../../images/supported/walmart.png'

const Supported = () => {
    return (
          <div className='container my-4 py-4'>
             <h3 className='text-2xl font-medium text-black uppercase  text-left'>
               Our supported shopping companies
             </h3>

        <div className="container my-4 py-4 bg-white shadow-lg">

        <div  className="row">
          <div className="col-sm-3">
              <img  className='mx-auto' src={alibaba} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={aliexpress} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={amazon} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={appstore} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={bestbuy} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={dhgate} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={ebay} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={etsy} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={gearbest} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={levis} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={target} alt="" />
          </div>
          <div className="col-sm-3">
              <img  className='mx-auto' src={walmart} alt="" />
          </div>
       </div>

     </div>
          </div>
    );
};

export default Supported;