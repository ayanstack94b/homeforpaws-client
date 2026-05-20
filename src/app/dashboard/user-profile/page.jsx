"use client";

import { authClient } from "@/lib/auth-client";

import { motion } from "framer-motion";

import Link from "next/link";

import {
    FaEnvelope,
    FaPaw,
    FaEdit,
    FaSyringe,
    FaHeart,
} from "react-icons/fa";

import { FaShieldDog } from "react-icons/fa6";

const UserProfilePage = () => {

    const {
        data: session,
    } = authClient.useSession();

    const user = {

        name:
            session?.user?.name || "",

        email:
            session?.user?.email || "",

        image:
            session?.user?.image || "",

    };

    return (

        <div className="min-h-[70vh]">

            {/* heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10"
            >

                <h1 className="text-3xl font-bold text-gray-800">
                    My Profile
                </h1>

                <p className="mt-2 text-gray-600">
                    Manage your profile information and adoption activity.
                </p>

            </motion.div>

            {/* profile card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-[35px] border border-blue-100 bg-white shadow-sm"
            >

                {/* top banner */}
                <div className="relative h-52 bg-linear-to-r from-blue-500 via-blue-600 to-sky-500">

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

                {/* content */}
                <div className="relative px-6 pb-10 md:px-10">

                    {/* profile image */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="-mt-20 flex justify-center lg:justify-start"
                    >

                        <img
                            src={
                                user.image ||
                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            }
                            alt="User"
                            className="h-40 w-40 rounded-full border-8 border-white object-cover shadow-xl"
                        />

                    </motion.div>

                    {/* main content */}
                    <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

                        {/* left side */}
                        <div className="max-w-3xl">

                            <h2 className="text-center text-4xl font-black text-gray-800 lg:text-left">

                                {user.name || "Guest User"}

                            </h2>

                            <p className="mt-3 text-center text-lg text-blue-600 lg:text-left">

                                Pet Adoption Enthusiast

                            </p>

                            <p className="mt-6 text-center leading-8 text-gray-600 lg:text-left">

                                Passionate about helping pets find loving homes and building a caring adoption community.

                            </p>

                            {/* email card */}
                            <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-5">

                                <div className="flex items-center gap-4">

                                    <div className="rounded-2xl bg-white p-4 shadow-sm">

                                        <FaEnvelope className="text-2xl text-blue-600" />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Email Address
                                        </p>

                                        <h3 className="mt-1 text-lg font-semibold text-gray-800">

                                            {user.email || "No email added"}

                                        </h3>

                                    </div>

                                </div>

                            </div>

                            {/* edit button */}
                            <Link href="/dashboard/user-profile/edit-user">

                                <button
                                    className="btn mt-8 h-12 rounded-2xl border-0 bg-blue-600 px-8 text-white hover:bg-blue-700"
                                >

                                    <FaEdit />

                                    Edit Profile

                                </button>

                            </Link>

                        </div>

                        {/* right side */}
                        <div className="relative hidden h-95 lg:flex items-center justify-center">

                            {/* glow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.08, 1],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                                className="absolute h-64 w-64 rounded-full bg-blue-100 blur-3xl"
                            />

                            {/* paw */}
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                    rotate: [0, -5, 5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                                className="absolute left-30 top-10 rounded-3xl bg-white p-6 shadow-xl"
                            >

                                <FaPaw className="text-5xl text-blue-500" />

                            </motion.div>

                            {/* heart */}
                            <motion.div
                                animate={{
                                    y: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="absolute right-40 top-24 rounded-3xl bg-white p-5 shadow-lg"
                            >

                                <FaHeart className="text-4xl text-slate-500" />

                            </motion.div>

                            {/* shield */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                }}
                                className="absolute bottom-16 left-40 rounded-3xl bg-white p-5 shadow-lg"
                            >

                                <FaShieldDog className="text-4xl text-cyan-500" />

                            </motion.div>

                            {/* syringe */}
                            <motion.div
                                animate={{
                                    y: [0, 12, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                                className="absolute bottom-16 right-35 rounded-3xl bg-white p-5 shadow-lg"
                            >

                                <FaSyringe className="text-4xl text-slate-400" />

                            </motion.div>



                        </div>

                    </div>

                </div>

            </motion.div>

        </div>

    );
};

export default UserProfilePage;