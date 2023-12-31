"use client";
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Find, book, or rent a car - quickly and easily!</h1>
            <p className='hero__subtitle'>Streamline your car and rental experiance with our effortless booking</p>
            <CustomButton title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}></CustomButton>
        </div>
    </div>
  )
}

export default Hero