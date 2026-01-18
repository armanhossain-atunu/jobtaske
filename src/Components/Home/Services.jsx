import React from 'react';
import Header from '../Common/Header';
import services from "../../data/services.json";
import Image from 'next/image';
import Link from 'next/link';

const Services = async() => {
    return (
        <div className='max-w-[91%] mx-auto py-12'>
            <Header>
                <h2 className='text-3xl font-bold text-center'>Our Services</h2>
                <p className='text-center text-gray-600 max-w-2xl mx-auto mb-10'>
                    We offer a wide range of web development services to help you build and maintain a strong online presence.
                </p>
            </Header>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className="group relative min-h-[300px] rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 bg-white"
                    >
                        {/* Icon Container */}
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-6 group-hover:bg-primary transition-colors duration-300">
                            <Image 
                                src={service.icon} 
                                alt={service.name} 
                                width={32} 
                                height={32} 
                                className="group-hover:filter group-hover:invert transition-all duration-300"
                            />
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                       {/* Changed from Button to Link */}
                        <Link
                            href={`/services/${service.id}`}
                            className="
                                inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium
                                opacity-0 translate-y-4 
                                group-hover:opacity-100 group-hover:translate-y-0 
                                transition-all duration-300 ease-out
                            "
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
