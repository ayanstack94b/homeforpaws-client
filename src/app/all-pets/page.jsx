"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import PetCard from "@/components/shared/PetCard";
import PuppySpinner from "@/components/shared/PuppySpinner";

const AllPetsPage = () => {

    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [species, setSpecies] = useState("");


    useEffect(() => {

        fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/pet?search=${search}&species=${species}`
        )
            .then((res) => res.json())
            .then((data) => {

                setPets(data);

                setLoading(false);

            });

    }, [search, species]);

    if (loading) {
        return <PuppySpinner />;
    }

    return (

        <div className="min-h-screen bg-slate-50 py-20">

            <div className="w-11/12 mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 text-center"
                >

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">

                        All Pets

                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-8">

                        Explore all available pets waiting for a safe,
                        loving, and caring forever home.

                    </p>

                </motion.div>

                {/* Search + Filter */}
                <div className="mb-10 flex flex-col gap-4 lg:flex-row">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search pets by name..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="input input-bordered w-full rounded-2xl"
                    />

                    {/* Filter */}
                    <select
                        value={species}
                        onChange={(e) =>
                            setSpecies(e.target.value)
                        }
                        className="select select-bordered w-full max-w-xs rounded-2xl"
                    >

                        <option value="">
                            All Species
                        </option>

                        <option value="Dog">
                            Dog
                        </option>

                        <option value="Cat">
                            Cat
                        </option>

                        <option value="Bird">
                            Bird
                        </option>
                        <option value="Others">
                            Others
                        </option>

                    </select>

                </div>

             


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
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                            >

                                <PetCard pet={pet} />

                            </motion.div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default AllPetsPage;