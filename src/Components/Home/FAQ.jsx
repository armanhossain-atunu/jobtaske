'use client';
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Header from "../Common/Header";

const FAQWithImage = () => {
    const faqs = [
        {
            question: "What services do you provide?",
            answer: "We offer modern web development, UI/UX design, and full-stack solutions.",
        },
        {
            question: "How fast is your delivery?",
            answer: "Most small-to-medium projects are delivered within 1–2 weeks.",
        },
        {
            question: "Do you offer support after project completion?",
            answer: "Yes, we provide ongoing support and maintenance based on your needs.",
        },
        {
            question: "Can I request custom features?",
            answer: "Absolutely! We build fully customized solutions based on your requirements.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-11/12 mx-auto py-12 px-4">
            <Header>
                <h2 className="text-center text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            </Header>
            <div className="flex justify-between items-center flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-300 pb-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex items-center justify-between w-full text-left"
                                >
                                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-6 h-6 transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <p className="mt-2 text-gray-600 pr-4">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src="https://i.ibb.co.com/mC34RKNM/faq.webp"
                        alt="FAQ illustration"
                        className="w-full h-auto rounded-lg"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQWithImage;