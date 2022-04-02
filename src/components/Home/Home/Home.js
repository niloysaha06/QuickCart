import React from 'react';
import Account from '../../../pages/Account/Account';
import CheckOut from '../../../pages/CheckOut/CheckOut';
import Footer from '../../../pages/Footer/Footer';
import Login from '../../../pages/Login/Login';
import ProductView from '../../../pages/ProductView/ProductView';
import ProductViews from '../../../pages/ProductViews/ProductViews';
import Register from '../../../pages/Register/Register';

import CategoryOneComponent from '../../CategorysOne/CategoryOneComponent';
import CategoryThreeComponent from '../../CategorysThree/CategoryThreeComponent';
import CategoryTwoComponent from '../../CategorysTwo/CategoryTwoComponent';
import TopWeeklyVendors from '../../TopWeeklyVendors/TopWeeklyVendors';
import Banner from '../Banner/Banner';
import BgBanner from '../BgBanner/BgBanner';
import Features from '../Features/Features';
import GridBanner from '../GridBanner/GridBanner';
import Header from '../Header/Header';
import ImageBannerGrid from '../ImageBannerGrid/ImageBannerGrid';
import Navbar from '../Navbar/Navbar';
import Supported from '../Supported/Supported';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <ImageBannerGrid></ImageBannerGrid>
            <CategoryOneComponent></CategoryOneComponent>
            <GridBanner></GridBanner>
            <CategoryTwoComponent></CategoryTwoComponent>
            <CategoryThreeComponent></CategoryThreeComponent>
            <TopWeeklyVendors></TopWeeklyVendors>
            <BgBanner></BgBanner>
            <Supported></Supported>
            <Footer></Footer>
            {/* <Shop></Shop> */}
            
            {/* <ProductView></ProductView> */}
            {/* <ProductViews></ProductViews> */}
            {/* <Cart></Cart>
            <Login></Login>
            <Register></Register>
            

            <CheckOut></CheckOut>
            <Account></Account> */}


            

           
            
            
        </div>
    );
};

export default Home;