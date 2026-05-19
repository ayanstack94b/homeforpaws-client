"use client";

import { motion } from "framer-motion";

import {
    FaHeart,
    FaShieldDog,
    FaPaw,
} from "react-icons/fa6";

import { FaHome } from "react-icons/fa";

const WhyAdoptPets = () => {

    const reasons = [
        {
            id: 1,
            title: "Save A Life",
            description:
                "Thousands of pets wait for loving homes every day. Adoption gives them a second chance at life.",
            icon: <FaHeart />,
        },
        {
            id: 2,
            title: "Find True Companionship",
            description:
                "Pets bring emotional support, happiness, and loyal companionship into everyday life.",
            icon: <FaHome />,
        },
        {
            id: 3,
            title: "Support Ethical Care",
            description:
                "Adopting pets helps reduce unsafe breeding practices and supports responsible pet care.",
            icon: <FaShieldDog />,
        },
    ];

    return (

        <section className="bg-white py-24">

            <div className="w-11/12 mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >

                    <div className="mb-5 flex justify-center text-5xl text-blue-600">

                        <FaPaw />

                    </div>

                    <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">

                        Why Adopt Pets?

                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">

                        Pet adoption is more than bringing an animal home.
                        It is about giving love, safety, and a forever family
                        to pets who truly need care and compassion.

                    </p>

                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {
                        reasons.map((reason, index) => (

                            <motion.div
                                key={reason.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group rounded-[35px] border border-blue-100 bg-slate-50 p-8 transition hover:shadow-xl"
                            >

                                {/* Icon */}
                                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-4xl text-blue-600 transition group-hover:scale-110">

                                    {reason.icon}

                                </div>

                                {/* Title */}
                                <h3 className="mt-8 text-3xl font-bold text-gray-800">

                                    {reason.title}

                                </h3>

                                {/* Description */}
                                <p className="mt-4 leading-8 text-gray-600">

                                    {reason.description}

                                </p>

                            </motion.div>

                        ))
                    }

                </div>

            </div>

        </section>
    );
};

export default WhyAdoptPets;