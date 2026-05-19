"use client";

import { motion } from "framer-motion";

import { FaQuoteLeft, FaPaw } from "react-icons/fa";

const SuccessStories = () => {

    const stories = [
        {
            id: 1,
            name: "Ariana Wilson",
            pet: "Max",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            story:
                "Adopting Max completely changed my daily life. He brought warmth, energy, and happiness into my home.",
        },
        {
            id: 2,
            name: "Daniel Carter",
            pet: "Luna",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            story:
                "Luna was rescued from difficult conditions. Today she is healthy, playful, and part of our family forever.",
        },
        {
            id: 3,
            name: "Sophia Miller",
            pet: "Bella",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            story:
                "Bella helped me emotionally during one of the hardest phases of my life. Adoption was the best decision.",
        },
    ];

    return (

        <section id="success-stories" className="bg-slate-50 py-24">

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

                        Success Stories

                    </h2>

                    {/* Animated Underline */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "140px" }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-6 h-1 rounded-full bg-blue-600"
                    />

                    <p className="mt-6 leading-8 text-gray-600">

                        Every successful adoption creates a new beginning
                        for both pets and their loving families.

                    </p>

                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {
                        stories.map((story, index) => (

                            <motion.div
                                key={story.id}
                                initial={
                                    index === 0
                                        ? { opacity: 0, x: -80 }
                                        : index === 1
                                            ? { opacity: 0, y: 80 }
                                            : { opacity: 0, x: 80 }
                                }
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="rounded-[35px] border border-blue-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
                            >

                                {/* Quote */}
                                <div className="text-5xl text-blue-100">

                                    <FaQuoteLeft />

                                </div>

                                {/* Story */}
                                <p className="mt-6 leading-8 text-gray-600">

                                    {story.story}

                                </p>

                                {/* User */}
                                <div className="mt-8 flex items-center gap-4">

                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />

                                    <div>

                                        <h3 className="text-xl font-bold text-gray-800">

                                            {story.name}

                                        </h3>

                                        <p className="mt-1 text-sm text-blue-600">

                                            Adopted {story.pet}

                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        ))
                    }

                </div>

            </div>

        </section>
    );
};

export default SuccessStories;