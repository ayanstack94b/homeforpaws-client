"use client";

import { motion } from "framer-motion";


import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaPaw,
    FaEdit,
} from "react-icons/fa";

const UserProfilePage = () => {

    /*
        Later this data will come from:
        - Better Auth session
        - MongoDB user collection
    */

    const user = {
        name: "",
        email: "",
        phone: "",
        location: "",
        photo: "",
        bio: "",
        totalListings: 12,
        successfulAdoptions: 8,
        pendingRequests: 5,
        activeListings: 3,
    };

    return (

        <div className="min-h-[70vh]">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10"
            >

                <h1 className="text-3xl font-bold text-gray-800">
                    User Profile
                </h1>

                <p className="mt-2 text-gray-600">
                    Manage your profile information and adoption activity.
                </p>

            </motion.div>

            {/* Profile Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-[35px] border border-blue-100 bg-white shadow-sm"
            >

                {/* Top Banner */}
                <div className="relative h-52 bg-gradient-to-r from-blue-500 via-blue-600 to-sky-500">

                    {/* Floating Paw */}
                    <motion.div
                        animate={{
                            rotate: [0, -10, 10, -10, 0],
                            y: [0, -6, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                        className="absolute right-8 top-8 text-6xl text-white/20"
                    >
                        <FaPaw />
                    </motion.div>

                </div>

                {/* Content */}
                <div className="relative px-6 pb-8 md:px-10">

                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="-mt-20 flex justify-center md:justify-start"
                    >
                        <img
                            src={
                                user.photo ||
                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            }
                            alt="User"
                            className="h-40 w-40 rounded-full border-8 border-white object-cover shadow-xl"
                        />

                    </motion.div>

                    {/* User Info */}
                    <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                        {/* Left */}
                        <div>

                            <h2 className="text-4xl font-bold text-gray-800">

                                {user.name || "Guest User"}

                            </h2>

                            <p className="mt-2 text-lg text-blue-600">

                                Pet Adoption Enthusiast

                            </p>

                            <p className="mt-5 max-w-2xl leading-8 text-gray-600">

                                {
                                    user.bio ||
                                    "Passionate about helping pets find loving homes and building a caring adoption community."
                                }

                            </p>

                            {/* Edit Button */}
                            <button
                                className="btn mt-6 rounded-2xl border-0 bg-blue-600 px-6 text-white hover:bg-blue-700"
                            >

                                <FaEdit />

                                Edit Profile

                            </button>

                            {/* Contact Info */}
                            <div className="mt-8 space-y-4">

                                <div className="flex items-center gap-3 text-gray-600">

                                    <FaEnvelope className="text-blue-600" />

                                    <span>
                                        {user.email || "No email added"}
                                    </span>

                                </div>

                                <div className="flex items-center gap-3 text-gray-600">

                                    <FaPhoneAlt className="text-blue-600" />

                                    <span>
                                        {user.phone || "No phone number"}
                                    </span>

                                </div>

                                <div className="flex items-center gap-3 text-gray-600">

                                    <FaMapMarkerAlt className="text-blue-600" />

                                    <span>
                                        {user.location || "Unknown location"}
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-5">

                            <div className="rounded-3xl bg-blue-50 p-6 text-center">

                                <h3 className="text-4xl font-black text-blue-600">
                                    {user.totalListings || 0}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Total Listings
                                </p>

                            </div>

                            <div className="rounded-3xl bg-sky-50 p-6 text-center">

                                <h3 className="text-4xl font-black text-sky-600">
                                    {user.successfulAdoptions || 0}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Successful Adoptions
                                </p>

                            </div>

                            <div className="rounded-3xl bg-indigo-50 p-6 text-center">

                                <h3 className="text-4xl font-black text-indigo-600">
                                    {user.pendingRequests || 0}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Pending Requests
                                </p>

                            </div>

                            <div className="rounded-3xl bg-cyan-50 p-6 text-center">

                                <h3 className="text-4xl font-black text-cyan-600">
                                    {user.activeListings || 0}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Active Listings
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </motion.div>

        </div>
    );
};

export default UserProfilePage;