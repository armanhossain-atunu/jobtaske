import React from "react";
import services from "../../../data/services.json";
import Image from "next/image";

const ServiceDetails = async ({ params }) => {
    const { id } = await params;
    const service = await services.find((service) => service.id === parseInt(id));
    // console.log(service);
    if (!service) {
        return <div className="p-10 text-center">Service Not Found</div>;
    }

    return (
        <div className="max-w-11/12 mx-auto py-12 px-4 md:px-0">

            <div className="flex justify-between gap-8">
                <div className="w-1/2">
                    {/* Header Section */}
                    <div className="flex items-center gap-4 mb-8">
                        <Image
                            src={service.icon}
                            alt={service.name}
                            width={60}
                            height={60}
                            className="rounded-xl"
                        />
                        <h1 className="text-4xl font-bold">{service.name}</h1>
                    </div>

                    {/* Image */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg mb-10">
                        <Image
                            src={service.image}
                            alt={service.name}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>
                <div className="w-1/2">
                    {/* Description + Price */}
                    <div className="bg-white shadow-md rounded-xl p-6 mb-8">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            {service.description}
                        </p>

                        <p className="text-gray-900 text-2xl font-bold">
                            Price: <span className="text-primary">${service.price}</span>
                        </p>
                    </div>

                    {/* Details Section */}
                    <div className="bg-white shadow-md rounded-xl p-6 mb-10">
                        <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
                        <p className="text-gray-700 leading-relaxed">{service.details}</p>
                    </div>

                    {/* Reviews */}
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

                        {service.reviews.length === 0 ? (
                            <p className="text-gray-600">No reviews yet.</p>
                        ) : (
                            service.reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 p-4 border rounded-lg mb-4 hover:shadow-md transition"
                                >
                                    {/* User image */}
                                    <Image
                                        src={review.userImage}
                                        alt={review.user}
                                        width={60}
                                        height={60}
                                        className="rounded-full object-cover"
                                    />

                                    <div>
                                        <h3 className="font-semibold text-lg">{review.user}</h3>
                                        <p className="text-yellow-500 font-bold">
                                            {"⭐".repeat(review.rating)}
                                        </p>
                                        <p className="text-gray-600 mt-1">{review.comment}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
