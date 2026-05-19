"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
    FaEdit,
    FaEye,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { MdDelete } from "react-icons/md";

const DashboardPetCard = ({pet,openDeleteModal}) => {

    const { _id, petName, species, breed, image, location, adoptionFee, healthStatus } = pet;

    return (

        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition hover:shadow-xl"
        >

            <div className="flex flex-col md:flex-row">

                {/* Image */}
                <div className="relative h-72 w-full md:h-auto md:w-64">

                    <Image
                        src={image}
                        alt={petName}
                        fill
                        className="object-cover"
                    />

                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">

                    <div>

                        {/* Top */}
                        <div className="flex items-start justify-between gap-4">

                            <div>

                                <h2 className="text-3xl font-bold text-gray-800">
                                    {petName}
                                </h2>

                                <p className="mt-1 text-gray-500">
                                    {breed} • {species}
                                </p>

                            </div>

                            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">

                                {healthStatus}

                            </span>

                        </div>

                        {/* Location */}
                        <div className="mt-5 flex items-center gap-2 text-gray-500">

                            <FaMapMarkerAlt className="text-blue-600" />

                            <span>{location}</span>

                        </div>

                        {/* Fee */}
                        <div className="mt-6">

                            <p className="text-sm text-gray-400">
                                Adoption Fee
                            </p>

                            <h3 className="mt-1 text-3xl font-bold text-blue-600">

                                ${adoptionFee}

                            </h3>

                        </div>

                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">

                        {/* View */}
                        <Link
                            href={`/pet/${_id}`}
                            className="btn rounded-xl border-0 bg-blue-600 text-white hover:bg-blue-700"
                        >

                            <FaEye />

                            View

                        </Link>

                        {/* Edit */}
                        <Link
                            href={`/dashboard/update-pet/${_id}`}
                            className="btn rounded-xl border-0 bg-emerald-500 text-white hover:bg-emerald-600"
                        >

                            <FaEdit />

                            Edit

                        </Link>

                        {/* Delete */}
                        <button
                            onClick={() => openDeleteModal(_id)}
                            className="btn rounded-xl border-0 bg-red-500 text-white hover:bg-red-600"
                        >

                            <MdDelete />

                            Delete

                        </button>

                    </div>

                </div>

            </div>

        </motion.div>
    );
};

export default DashboardPetCard;