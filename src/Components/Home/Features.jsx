import React from 'react';
import Header from '../Common/Header';

const Features = () => {
    
    return (
        <div className="max-w-11/12 mx-auto ">
            <Header>
                <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                    We offer a wide range of web development services to help you build and maintain a strong online presence.
                </p>
            </Header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-6 border rounded-xl">
                    <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">We deliver your project on time with quality.</p>
                </div>

                <div className="p-6 border rounded-xl">
                    <h3 className="text-xl font-bold mb-2">Modern UI/UX</h3>
                    <p className="text-gray-600">Stunning interface with smooth and clean experience.</p>
                </div>

                <div className="p-6 border rounded-xl">
                    <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                    <p className="text-gray-600">Best pricing packages for startups and individuals.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;