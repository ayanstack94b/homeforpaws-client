"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
    return (

        <section className="relative overflow-hidden bg-slate-50 py-28">

            <div className="absolute inset-0 -z-10">

                <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-30"></div>

            </div>

            <div className="w-11/12 mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mx-auto text-center"
                >

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl font-bold leading-tight text-gray-800 md:text-6xl"
                    >
                        Give Every Pet A
                        <span className="text-blue-600"> Loving Home</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
                    >
                        Discover adorable pets waiting for adoption and help them
                        find a safe, caring, and forever family.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-10 flex items-center justify-center gap-4"
                    >

                        <Link
                            href="/all-pets"
                            className="btn rounded-xl border-0 bg-blue-600 px-8 text-white hover:bg-blue-700"
                        >
                            Adopt Now
                        </Link>

                        <Link
                            href="/dashboard/add-pet"
                            className="btn rounded-xl border border-blue-200 bg-white px-8 text-blue-600 hover:bg-blue-50"
                        >
                            Add Pet
                        </Link>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
};

export default Banner;