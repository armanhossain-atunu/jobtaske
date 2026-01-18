import React from 'react';
import Header from '../Common/Header';

const Achievements = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Header>
                <h2 className="text-3xl font-bold text-center">Our Achievements</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                    We take pride in our accomplishments and the trust our clients place in us.
                </p>
            </Header>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-4 pb-10">
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">50+</h3>
                    <p className="text-gray-600 mt-2">Projects Completed</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">25+</h3>
                    <p className="text-gray-600 mt-2">Happy Clients</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">15+</h3>
                    <p className="text-gray-600 mt-2">Team Members</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">10+</h3>
                    <p className="text-gray-600 mt-2">Years of Experience</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">30+</h3>
                    <p className="text-gray-600 mt-2">Skilled Staff</p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;