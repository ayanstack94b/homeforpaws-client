"use client";

import { motion } from "framer-motion";

import {
    FaBone,
    FaSyringe,
    FaBowlFood,
    FaHeartPulse,
    FaPaw,
} from "react-icons/fa6";

const PetCareTips = () => {

    const tips = [
        {
            id: 1,
            title: "Healthy Nutrition",
            description:
                "Balanced meals and fresh water help pets stay energetic, healthy, and emotionally active.",
            icon: <FaBowlFood />,
        },
        {
            id: 2,
            title: "Regular Vaccination",
            description:
                "Routine vaccinations protect pets from harmful diseases and improve long-term health.",
            icon: <FaSyringe />,
        },
        {
            id: 3,
            title: "Daily Exercise",
            description:
                "Physical activities and playtime keep pets mentally stimulated and physically fit.",
            icon: <FaBone />,
        },
        {
            id: 4,
            title: "Routine Checkups",
            description:
                "Regular vet visits help detect health issues early and maintain proper pet wellness.",
            icon: <FaHeartPulse />,
        },
    ];

    return (

        <section className="overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-24">

            <div className="w-11/12 mx-auto">

                {/* Top Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative mb-16 overflow-hidden rounded-[40px]"
                >

                    <img
                        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop"
                        alt="Pet Care"
                        className="h-[260px] w-full object-cover md:h-[420px]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/35"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

                        <motion.div
                            animate={{
                                rotate: [0, -10, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                            className="mb-5 text-5xl text-white"
                        >

                            <FaPaw />

                        </motion.div>

                        <h2 className="text-4xl font-bold text-white md:text-6xl">

                            Pet Care Tips

                        </h2>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "140px" }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mt-6 h-1 rounded-full bg-blue-400"
                        />

                        <p className="mt-6 max-w-2xl leading-8 text-gray-200">

                            Caring for pets is not just responsibility.
                            It is about giving them a healthier and happier life.

                        </p>

                    </div>

                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {
                        tips.map((tip, index) => (

                            <motion.div
                                key={tip.id}
                                initial={{
                                    opacity: 0,
                                    scale: 0.7,
                                    rotate: index % 2 === 0 ? -8 : 8,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                    rotate: index % 2 === 0 ? -2 : 2,
                                }}
                                className="group rounded-[35px] border border-blue-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
                            >

                                {/* Icon */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 12,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-4xl text-blue-600"
                                >

                                    {tip.icon}

                                </motion.div>

                                {/* Title */}
                                <h3 className="mt-8 text-3xl font-bold text-gray-800">

                                    {tip.title}

                                </h3>

                                {/* Description */}
                                <p className="mt-4 leading-8 text-gray-600">

                                    {tip.description}

                                </p>

                            </motion.div>

                        ))
                    }

                </div>

            </div>

        </section>
    );
};

export default PetCareTips;