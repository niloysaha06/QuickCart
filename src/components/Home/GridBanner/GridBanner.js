import React from 'react';
import gridbannerimg1 from '../../../images/gridbanner/gridbannerimg1.jpg'
import gridbannerimg2 from '../../../images/gridbanner/gridbannerimg2.jpg'
import gridbannerimg3 from '../../../images/gridbanner/gridbannerimg3.jpg'


const GridBanner = () => {
    return (
        <div className="container mb-5">
           <div className="row ">
             <div className="col-sm-4 ">
                <img  className='' src={gridbannerimg1} alt="" />
             </div>
             <div className="col-sm-4">
                <img   className='' src={gridbannerimg2} alt="" />
                
             </div>
             <div className="col-sm-4">
               <img  className='' src={gridbannerimg3} alt="" />
             </div>
          </div>
  
        </div>
    );
};

export default GridBanner;