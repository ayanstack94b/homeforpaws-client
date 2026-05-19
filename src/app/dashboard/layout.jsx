"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { FaPaw, FaPlusCircle, FaList, FaClipboardList, FaUserCircle, FaHome } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const DashboardLayout = ({ children }) => {

    const pathname = usePathname();

    const navLinks = [
        {
            name: "Overview",
            path: "/dashboard",
            icon: <FaHome />,
        },
        {
            name: "Add Pet",
            path: "/dashboard/add-pet",
            icon: <FaPlusCircle />,
        },
        {
            name: "My Listings",
            path: "/dashboard/my-listings",
            icon: <FaList />,
        },
        {
            name: "My Requests",
            path: "/dashboard/my-requests",
            icon: <FaClipboardList />,
        },
        {
            name: "User Profile",
            path: "/dashboard/user-profile",
            icon: <FaUserCircle />,
        },
    ];

    return (

        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">

            <div className="flex flex-col lg:flex-row">

                {/* SIDEBAR */}
                <motion.aside
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full border-b border-blue-100 bg-white/70 backdrop-blur-md lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r"
                >

                    {/* Logo */}
                    <div className="border-b border-blue-100 p-6">

                        <Link
                            href="/"
                            className="flex items-center gap-3"
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
                                className="text-3xl text-blue-600"
                            >
                                <FaPaw />
                            </motion.div>

                            <div>

                                <h1 className="text-2xl font-bold text-blue-600">
                                    HomeForPaws
                                </h1>

                                <p className="text-sm text-gray-500">
                                    Dashboard Panel
                                </p>

                            </div>

                        </Link>

                    </div>

                    {/* Navigation area*/}
                    <div className="p-4">

                        <ul className="space-y-2">

                            {
                                navLinks.map((link) => {

                                    const isActive = pathname === link.path;

                                    return (

                                        <li key={link.path}>

                                            <Link
                                                href={link.path}
                                                className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-[15px] font-medium transition-all duration-300
                                                    
                                                    ${isActive
                                                        ? "bg-blue-600 text-white shadow-lg"
                                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                                    }
                                                
                                                `}
                                            >

                                                <span className="text-lg">
                                                    {link.icon}
                                                </span>

                                                {link.name}

                                            </Link>

                                        </li>

                                    );
                                })
                            }

                        </ul>

                    </div>

                </motion.aside>

                {/* main content */}
                <motion.main
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 p-4 md:p-8"
                >

                    {/* Top Banner */}
                    <div className="mb-8 overflow-hidden rounded-3xl border border-blue-100 bg-white/70 p-6 shadow-sm backdrop-blur-md">

                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                            <div>

                                <h2 className="text-3xl font-bold text-gray-800 flex gap-3 items-center">
                                    Welcome Back <MdWavingHand className="text-yellow-500"></MdWavingHand>
                                </h2>

                                <p className="mt-2 text-gray-600">
                                    Manage your pets, listings, and adoption requests.
                                </p>

                            </div>

                            <div className="rounded-2xl bg-blue-50 px-5 py-3 text-sm font-medium text-blue-600">

                                HomeForPaws Dashboard

                            </div>

                        </div>

                    </div>

                    {/* Dynamic Pages */}
                    <div className="rounded-3xl border border-blue-100 bg-white/60 p-4 shadow-sm backdrop-blur-md md:p-6">

                        {children}

                    </div>

                </motion.main>

            </div>

        </div>
    );
};

export default DashboardLayout;