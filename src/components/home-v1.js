import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Search from './section-components/search';
import Intro from './section-components/intro';
import Games from './section-components/games';
import Video from './section-components/video';
import PiscineAbonement from './section-components/piscineAbonement';
import Review from './section-components/review';
import BlogSection from './blog-components/blog-section';
import Ads from './section-components/ads';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        {/* <Search /> */}
        <Intro />
        <Games />
        <Video />
        <PiscineAbonement />
        <Review />
        <BlogSection />
        <Ads />
        <Subscribe />
        <Footer />
        
    </div>
}

export default Home_V1

