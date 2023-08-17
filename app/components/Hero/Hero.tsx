import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative h-[calc(100vh-5rem)]">
            <div className="absolute inset-0">
                <Image
                    src="/hogwarts.jpg" 
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    alt="Hero Section Background Image"
                />
            </div>

            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black via-transparent to-transparent">
                <div className="w-full md:w-3/5 ml-8 text-center md:text-left text-white">
                    <h1 className="text-3xl md:text-6xl font-light leading-tight text-white">
                        Enter the Wizarding World:
                        <span className="block md:inline">
                            <span>Unleash Your Inner Hero</span>
                        </span>
                        <span className="block md:inline">with Harry Potter</span>
                    </h1>
                    <p className="text-lg mt-6 md:mt-10 text-white">
                        Discover your magical potential and embark on an
                        unforgettable adventure
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
