import React from 'react';
import hero_img from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero bg-base-200 min-h-137.5 rounded-3xl my-12">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-40">
                    <img
                        src={hero_img}
                        className="max-w-lg rounded-lg shadow-2xl"
                    />
                    <div className='space-y-12'>
                        <h1 className="text-6xl font-bold ">Books to freshen up<br /> your bookshelf</h1>

                        <button className="btn bg-green-500 text-white mt-12 text-md">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;