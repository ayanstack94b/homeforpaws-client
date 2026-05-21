"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
    FaPaw,
    FaClipboardList,
    FaHeart,
    FaPlus,
    FaArrowRight,
} from "react-icons/fa";

const DashboardOverviewPage = () => {

    return (

        <div className="space-y-10">

            {/* heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >

                <h1 className="text-4xl font-black text-gray-800">

                    Dashboard Overview

                </h1>

                <p className="mt-3 text-gray-600">

                    Manage your pets and adoption requests from one place.

                </p>

            </motion.div>

            {/* quick overview cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-[30px] border border-blue-100 bg-blue-50 p-8 shadow-sm"
                >

                    <div className="text-5xl text-blue-600">

                        <FaPaw />

                    </div>

                    <h2 className="mt-6 text-3xl font-black text-gray-800">

                        My Listings

                    </h2>

                    <p className="mt-3 leading-7 text-gray-600">

                        View, update, and manage all your pet listings easily.

                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-[30px] border border-cyan-100 bg-cyan-50 p-8 shadow-sm"
                >

                    <div className="text-5xl text-cyan-600">

                        <FaClipboardList />

                    </div>

                    <h2 className="mt-6 text-3xl font-black text-gray-800">

                        Adoption Requests

                    </h2>

                    <p className="mt-3 leading-7 text-gray-600">

                        Track pending, approved, and rejected adoption requests.

                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-[30px] border border-pink-100 bg-pink-50 p-8 shadow-sm"
                >

                    <div className="text-5xl text-pink-600">

                        <FaHeart />

                    </div>

                    <h2 className="mt-6 text-3xl font-black text-gray-800">

                        Pet Adoption

                    </h2>

                    <p className="mt-3 leading-7 text-gray-600">

                        Help pets find loving homes through safe adoption.

                    </p>

                </motion.div>

            </div>

            {/* quick actions */}
            <div className="rounded-[35px] border border-blue-100 bg-white p-8 shadow-sm">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <h2 className="text-3xl font-black text-gray-800">

                            Quick Actions

                        </h2>

                        <p className="mt-2 text-gray-600">

                            Access the main dashboard features quickly.

                        </p>

                    </div>

                    <div className="flex flex-wrap gap-4">

                        <Link
                            href="/dashboard/add-pet"
                            className="btn rounded-2xl border-0 bg-blue-600 px-6 text-white hover:bg-blue-700"
                        >

                            <FaPlus />

                            Add Pet

                        </Link>

                        <Link
                            href="/dashboard/my-listings"
                            className="btn rounded-2xl border border-blue-200 bg-white px-6 text-blue-600 hover:bg-blue-50"
                        >

                            My Listings

                        </Link>

                        <Link
                            href="/dashboard/my-requests"
                            className="btn rounded-2xl border border-blue-200 bg-white px-6 text-blue-600 hover:bg-blue-50"
                        >

                            My Requests

                        </Link>

                    </div>

                </div>

            </div>

            {/* dashboard note */}
            <div className="rounded-[35px] border border-gray-100 bg-white p-8 shadow-sm">

                <div className="flex items-start gap-5">

                    <div className="rounded-3xl bg-blue-100 p-5 text-4xl text-blue-600">

                        <FaArrowRight />

                    </div>

                    <div>

                        <h2 className="text-3xl font-black text-gray-800">

                            Manage Everything Easily

                        </h2>

                        <p className="mt-4 max-w-3xl leading-8 text-gray-600">

                            From adding pets to managing adoption requests,
                            your dashboard gives you quick access to all important features
                            of the platform.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default DashboardOverviewPage;