"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPaw } from "react-icons/fa";

const PetCard = ({ pet }) => {

    const { _id, petName, species, breed, image, gender, location, adoptionFee, healthStatus } = pet;

    return (

        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
        >

            {/* Image */}
            <div className="relative h-64 overflow-hidden">

                <Image
                    src={image}
                    alt={petName}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Species */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-blue-600 backdrop-blur-sm">

                    {species}

                </div>

                {/* Gender */}
                <div className="absolute right-4 top-4 rounded-full bg-black/50 px-4 py-1 text-sm text-white backdrop-blur-sm">

                    {gender}

                </div>

            </div>

            {/* Content */}
            <div className="p-6">

                {/* Name */}
                <div className="flex items-center gap-2">

                    <FaPaw className="text-blue-600" />

                    <h2 className="text-2xl font-bold text-gray-800">

                        {petName}

                    </h2>

                </div>

                {/* Breed */}
                <p className="mt-2 text-gray-500">

                    {breed}

                </p>

                {/* Location */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">

                    <FaLocationDot className="text-blue-600" />

                    <span>{location}</span>

                </div>

                {/* Health Status */}
                <div className="mt-5">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">

                        {healthStatus}

                    </span>

                </div>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between">

                    <div>

                        <p className="text-sm text-gray-400">
                            Adoption Fee
                        </p>

                        <h3 className="text-2xl font-bold text-blue-600">

                            ${adoptionFee}

                        </h3>

                    </div>

                    <Link
                        href={`/pets/${_id}`}
                        className="btn rounded-xl border-0 bg-blue-600 px-6 text-white hover:bg-blue-700"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </motion.div>
    );
};

export default PetCard;