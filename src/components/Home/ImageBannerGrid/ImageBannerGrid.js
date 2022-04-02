import React from 'react';
import img1 from '../../../images/imagebannergrid/img1.png'
import img2 from '../../../images/imagebannergrid/img2.png'
import img3 from '../../../images/imagebannergrid/img3.png'
import img4 from '../../../images/imagebannergrid/img4.png'

const ImageBannerGrid = () => {
    return (
        <div className="container py-4">
           <div className="row ">
             <div className="col-sm-6">
                <img style={{width: '730px', height: '410px'}} className='' src={img1} alt="" />
             </div>
             <div className="col-sm-3">
                <img style={{width: '360px', height: '205px'}}  className='' src={img2} alt="" />
                <img style={{width: '360px', height: '205px'}} className='' src={img3} alt="" />
             </div>
             <div className="col-sm-3">
               <img style={{width: '360px', height: '410px'}} className='' src={img4} alt="" />
             </div>
          </div>
  
        </div>
    );
};

export default ImageBannerGrid;