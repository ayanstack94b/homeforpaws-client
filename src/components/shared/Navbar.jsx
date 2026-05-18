"use client";
import Link from 'next/link';
import { FaPaw } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {

    const links = (
        <>
            <li>
                <Link href="/" className="hover:text-blue-600 transition">
                    Home
                </Link>
            </li>

            <li>
                <Link href="/all-pets" className="hover:text-blue-600 transition">
                    All Pets
                </Link>
            </li>

            <li>
                <Link href="/dashboard/my-requests" className="hover:text-blue-600 transition">
                    My Requests
                </Link>
            </li>

            <li>
                <Link href="/dashboard/add-pet" className="hover:text-blue-600 transition">
                    Add Pet
                </Link>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">

            <div className="navbar w-11/12 mx-auto px-0 min-h-20">

                <div className="navbar-start">

                    <div className="dropdown">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl z-50"
                        >
                            {links}
                        </ul>

                    </div>

                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >

                        <motion.div
                            animate={{
                                rotate: [0, -10, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                            }}
                            className="text-2xl text-blue-600"
                        >
                            <FaPaw />
                        </motion.div>

                        <h1 className="text-lg md:text-2xl font-bold text-blue-600 whitespace-nowrap">
                            HomeForPaws
                        </h1>

                    </Link>

                </div>

                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal gap-2 px-1 text-[15px] font-medium text-gray-700">
                        {links}
                    </ul>

                </div>

                <div className="navbar-end gap-2">

                    <Link
                        href="/login"
                        className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="btn h-10 min-h-0 rounded-xl border-0 bg-blue-600 px-4 text-sm text-white hover:bg-blue-700 md:px-6"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Navbar;