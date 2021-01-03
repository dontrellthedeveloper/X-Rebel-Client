import React from 'react';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive
} from './Data';
import { InfoSection } from '../components/Utils';

import {Jumbotron} from '../components/jumbotron/jumbotron.component';
import Cards from "../components/cards/cards.component";
import HomePage from '../components/homepage/homepage.component';
import ReactVideoPlayer from '../components/videoplayer/videoplayer.component';
import Slider from '../components/slider/slides.component';
import Services from '../components/servicessection/services.component';
import HomepageSlider from '../components/homepageslider/homepageslider.component';
import MainSlider from '../components/mainslider/mainslider.component';
import ProductBanner from '../components/productbanner/productbanner.component';
import ProductBanner2 from '../components/productbanner/productbanner2.component';
import Home from './Home';

const HomeSection = () => {
    return (
        <>
            <Home/>
            <MainSlider/>

            <ProductBanner2/>
            <Jumbotron/>
            <ProductBanner/>
            <InfoSection {...homeObjFive}/>
            <HomePage/>
            <Slider/>
            {/*<ReactVideoPlayer/>*/}
            <Services/>




            {/*<InfoSection {...homeObjOne}/>*/}



            {/*<InfoSection {...homeObjTwo}/>*/}


        </>
    )
};

export default HomeSection;
