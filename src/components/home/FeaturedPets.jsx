"use client";

import { useEffect, useState } from "react";
import PuppySpinner from "../shared/PuppySpinner";
import PetCard from "../shared/PetCard";
import { motion } from "framer-motion";


const FeaturedPets = () => {

    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("http://localhost:5000/pets")
            .then((res) => res.json())
            .then((data) => {

                setPets(data.slice(0, 6));

                setLoading(false);

            });

    }, []);

    if (loading) {
        return <PuppySpinner />;
    }

    return (
        <div>
            <section className="bg-slate-50 py-20">

                <div className="w-11/12 mx-auto">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-14 text-center"
                    >

                        <h2 className="text-4xl font-bold text-gray-800">
                            Featured Pets
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-8">
                            Meet some adorable pets currently waiting for a loving
                            and caring forever home.
                        </p>

                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                        {
                            pets.map((pet, index) => (

                                <motion.div
                                    key={pet._id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >

                                    <PetCard pet={pet} />

                                </motion.div>

                            ))
                        }

                    </div>

                </div>

            </section>
        </div>
    );
};

export default FeaturedPets;