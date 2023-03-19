import React from 'react';
import Categories from '../../components/Categories/Categories';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Slider/>
            <Categories/>
        </div>
    );
};

export default Home;