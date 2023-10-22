import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='flex flex-col  md:flex-row justify-around items-center h-screen md:mx-40' >
            <Link to="/registration">
                <button className='flex  justify-center bg-white border border-red-500 rounded-3xl text-red-500 items-center px-5 py-10 mt-10 md:mt-0'>
                    <h1 className='text-3xl'>Resister as DONOR</h1>
                </button>
            </Link>
            <Link to="/findDonor">
                <button className='flex justify-center bg-white border border-red-500 rounded-3xl text-red-500 items-center px-5 py-10 mb-10 md:mb-0'>
                    <h1 className='text-3xl'>Find DONOR</h1>
                </button>
            </Link>
        </div>
    );
};

export default Home;