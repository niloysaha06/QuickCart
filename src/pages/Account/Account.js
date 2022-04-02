import React from 'react';
import Header from '../../components/Home/Header/Header';
import Navbar from '../../components/Home/Navbar/Navbar';

const Account = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='container py-4 flex items-center gap-3'>
            <a href='' className='text-rose text-base'>
                <i className='fas fa-home'></i>
            </a>
            <span className='text-sm text-gray-400'>
                <i className='fas fa-chevron-right'></i>
            </span>
            <p className='text-gray-600 font-medium'>Account</p>

            </div>

             <div className='bg-white pt-16 pb-12 border-t border-gray-100'>
                 <div className='col-span-3'></div>
             </div>
        </div>
    );
};

export default Account;