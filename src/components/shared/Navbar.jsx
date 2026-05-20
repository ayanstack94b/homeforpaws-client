"use client";
import Link from 'next/link';
import { FaPaw } from "react-icons/fa";
import { motion } from "framer-motion";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";
const Navbar = () => {
    const router = useRouter();
    const {
        data: session,
    } = authClient.useSession();

    const user = session?.user

    const handleSignOut = async () => {

        const logout = await Swal.fire({

            title: "Logout?",
            text: "You will be signed out from your account.",
            icon: "warning",

            showCancelButton: true,

            confirmButtonColor: "#2563eb",
            cancelButtonColor: "#d33",

            confirmButtonText: "Yes, Logout",

            background: "#ffffff",
        });
        router.push("/");

        if (logout.isConfirmed) {

            await authClient.signOut();

            Swal.fire({

                title: "Logged Out",
                text: "You have been signed out successfully.",
                icon: "success",

                confirmButtonColor: "#2563eb",

                timer: 1500,

                showConfirmButton: false,

            });

        }

    };


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
                <Link
                    href="/dashboard"
                    className="hover:text-blue-600 transition"
                >
                    Dashboard
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

                <div className="navbar-end gap-3">

                    {
                        user ? (

                            <>

                                {/* Desktop User Section */}
                                <div className="hidden items-center gap-4 lg:flex">

                                    {/* User Info */}
                                    <div className="text-right">

                                        <h2 className="text-sm font-bold text-gray-800">

                                            {user?.name || "User"}

                                        </h2>

                                        <p className="max-w-45 truncate text-xs text-gray-500">

                                            {user?.email}

                                        </p>

                                    </div>

                                    {/* Avatar */}
                                    <Link
                                        href="/dashboard/user-profile"
                                        className="avatar transition hover:scale-105"
                                    >

                                        <div className="h-12 w-12 rounded-full border-2 border-blue-200 shadow-md">

                                            <Image
                                                src={
                                                    user?.image ||
                                                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                                                }
                                                alt="Profile"
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />

                                        </div>

                                    </Link>

                                    {/* Dashboard
                                    <Link
                                        href="/dashboard"
                                        className="btn h-11 min-h-0 rounded-2xl border-0 bg-blue-100 px-5 text-sm font-semibold text-blue-600 hover:bg-blue-200"
                                    >

                                        Dashboard

                                    </Link> */}

                                    {/* Logout */}
                                    <button onClick={handleSignOut}
                                        className="btn h-11 min-h-0 rounded-2xl border-0 bg-red-500 px-5 text-sm text-white hover:bg-red-600"
                                    >

                                        Logout

                                    </button>

                                </div>

                                {/* Mobile / Tablet Dropdown */}
                                <div className="dropdown dropdown-end lg:hidden">

                                    {/* Avatar */}
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="avatar cursor-pointer transition hover:scale-105"
                                    >

                                        <div className="h-12 w-12 rounded-full border-2 border-blue-200 shadow-md">

                                            <Image
                                                src={
                                                    user?.image ||
                                                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                                                }
                                                alt="Profile"
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />

                                        </div>

                                    </div>

                                    {/* Dropdown Menu */}
                                    <ul
                                        tabIndex={0}
                                        className="menu dropdown-content z-999 mt-4 w-64 rounded-3xl border border-blue-100 bg-white p-3 shadow-2xl"
                                    >

                                        {/* User Info */}
                                        <div className="mb-2 rounded-2xl bg-blue-50 p-4">

                                            <h2 className="truncate text-lg font-bold text-gray-800">

                                                {user?.name || "User"}

                                            </h2>

                                            <p className="truncate text-sm text-gray-500">

                                                {user?.email}

                                            </p>

                                        </div>

                                        {/* Dashboard */}
                                        <li>

                                            <Link
                                                href="/dashboard"
                                                className="rounded-xl py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                            >

                                                Dashboard

                                            </Link>

                                        </li>

                                        {/* Profile */}
                                        <li>

                                            <Link
                                                href="/dashboard/user-profile"
                                                className="rounded-xl py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                            >

                                                My Profile

                                            </Link>

                                        </li>

                                        {/* Logout */}
                                        <li className="mt-2">

                                            <button
                                                className="rounded-xl bg-red-50 py-3 font-medium text-red-500 hover:bg-red-100"
                                            >

                                                Logout

                                            </button>

                                        </li>

                                    </ul>

                                </div>

                            </>

                        ) : (

                            <>

                                <Link
                                    href="/login"
                                    className="hidden text-sm font-semibold text-gray-700 transition hover:text-blue-600 sm:block"
                                >

                                    Login

                                </Link>

                                <Link
                                    href="/register"
                                    className="btn h-11 min-h-0 rounded-2xl border-0 bg-blue-600 px-5 text-sm text-white hover:bg-blue-700 md:px-7"
                                >

                                    Register

                                </Link>

                            </>

                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default Navbar;