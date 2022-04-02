import React from 'react';
import nagad from '../../images/paymentmethods/nagad.png'
import bkash from '../../images/paymentmethods/bkash.png'
import citybank from '../../images/paymentmethods/citybank.png'
import bracbank from '../../images/paymentmethods/bracbank.png'
const PaymentMethods = () => {
    return (
       <div  className=''>
        
            <div style={{paddingTop:'10%'}} className='flex  justify-center'>
            <div style={{width:'692px' , height: '380px'}} className='bg-white border shadow-lg px-4'>
                 <div>
                    <h2 className='text-start font-medium py-4 text-xl'>Payment Methods</h2>
                    <div  className='grid grid-cols-4 gap-8'>
                    <div>
                        <img src={nagad}/>
                        <p>Nagad</p>
                    </div>
                    <div>
                       <img src={bkash}/>
                       <p>Bkash</p>
                    </div>
                    <div>
                       <img src={citybank}/>
                       <p>CityBank</p>
                    </div>
                    <div>
                      <img src={bracbank}/>
                      <p>BracBank</p>
                   </div>

                   </div>
                   <div className='pt-4'>
                       <p>---------------------------------Or-----------------------------------</p>
                   </div>
                   <div className='pt-4'>
                       <p>Your wallet balance: ৳1400</p>
                   </div>
                   <div className='pt-2'>
                       <button className='border p-2 rounded-lg'>Available Balance</button>
                   </div>
                </div>

           </div>
            </div>
      
       </div>
    );
};

export default PaymentMethods;