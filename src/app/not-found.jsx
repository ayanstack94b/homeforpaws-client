"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaDog } from "react-icons/fa6";
const NotFoundPage = () => {

    return (

        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-4">

            {/* Background Blur */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl rounded-[40px] border border-blue-100 bg-white/70 p-8 text-center shadow-2xl backdrop-blur-md md:p-14"
            >

                {/* Sad Dog */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="text-8xl text-orange-500 md:text-9xl"
                >

                    <FaDog />

                </motion.div>

                {/* 404 */}
                <h1 className="mt-8 text-6xl font-black tracking-tight text-blue-600 md:text-8xl">

                    404

                </h1>

                {/* Title */}
                <h2 className="mt-5 text-3xl font-bold text-gray-800 md:text-4xl">

                    Lost Puppy Detected

                </h2>

                {/* Text */}
                <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">

                    The page you are trying to visit does not exist
                    or may have been moved somewhere else.

                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="btn h-12 rounded-2xl border-0 bg-blue-600 px-8 text-white hover:bg-blue-700"
                    >
                        Back To Home
                    </Link>

                    <Link
                        href="/all-pets"
                        className="btn h-12 rounded-2xl border border-blue-200 bg-white px-8 text-blue-600 hover:bg-blue-50"
                    >
                        Explore Pets
                    </Link>

                </div>

            </motion.div>

        </div>
    );
};

export default NotFoundPage;