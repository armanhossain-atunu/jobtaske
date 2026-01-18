import React from 'react';
import Image from 'next/image';

const Banner = () => {
   
    return (
        <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
            <div className="max-w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left Content */}
                <div  className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Empower Your Digital Presence
                        <span className="block text-purple-200">With Modern Web Solutions</span>
                    </h1>

                    <p className="text-lg text-purple-100">
                        We design and develop high-performing websites that help you grow your brand, reach more customers, and scale your business.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow hover:bg-purple-100 transition">
                            Get Started
                        </button>

                        <button className="px-6 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <Image
                        src="https://i.ibb.co.com/TDV70QGW/How-Long-Does-It-Take-To-Build-A-Website-Featured-Image-REV2.png"
                        width={450}
                        height={450}
                        alt="Banner Illustration"
                        className="rounded-2xl object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
