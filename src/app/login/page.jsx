"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

import {
    FaGoogle,
    FaPaw,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
       
    };

    return (

        <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 py-10">

            {/* Background Blur */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

            </div>

            <div className="mx-auto grid min-h-[90vh] w-11/12 max-w-7xl items-center gap-12 lg:grid-cols-2">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="hidden lg:block"
                >

                    <div className="max-w-xl">

                        {/* Logo */}
                        <div className="flex items-center gap-4">

                            <motion.div
                                animate={{
                                    rotate: [0, -10, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                }}
                                className="text-5xl text-blue-600"
                            >

                                <FaPaw />

                            </motion.div>

                            <h1 className="text-4xl font-bold text-blue-600">

                                HomeForPaws

                            </h1>

                        </div>

                        {/* Heading */}
                        <h2 className="mt-12 text-6xl font-bold leading-tight text-gray-800">

                            Welcome
                            <span className="text-blue-600">
                                {" "}Back.
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="mt-8 text-lg leading-9 text-gray-600">

                            Login to continue managing your pet listings,
                            adoption requests, and help pets find loving homes.

                        </p>

                        {/* Cards */}
                        <div className="mt-12 space-y-5">

                            {
                                [
                                    "Manage your listed pets easily",
                                    "Track adoption requests securely",
                                    "Continue helping rescued pets",
                                ].map((item, index) => (

                                    <motion.div
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            x: -30,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.2,
                                        }}
                                        className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                                    >

                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">

                                            <FaPaw />

                                        </div>

                                        <p className="text-gray-700">

                                            {item}

                                        </p>

                                    </motion.div>

                                ))
                            }

                        </div>

                    </div>

                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                >

                    <div className="rounded-[35px] border border-blue-100 bg-white p-7 shadow-2xl md:p-10">

                        {/* Heading */}
                        <div className="mb-8 text-center">

                            <h2 className="text-4xl font-bold text-gray-800">

                                Login

                            </h2>

                            <p className="mt-3 text-gray-500">

                                Access your HomeForPaws account

                            </p>

                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >

                            {/* Email */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Email

                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full rounded-2xl"
                                    {...register("email", {
                                        required:
                                            "Email is required",
                                    })}
                                />

                                {
                                    errors.email && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.email.message}
                                        </p>
                                    )
                                }

                            </div>

                            {/* Password */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Password

                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full rounded-2xl"
                                    {...register("password", {
                                        required:
                                            "Password is required",
                                    })}
                                />

                                {
                                    errors.password && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.password.message}
                                        </p>
                                    )
                                }

                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="btn mt-3 h-14 w-full rounded-2xl border-0 bg-blue-600 text-white hover:bg-blue-700"
                            >

                                Login

                            </button>

                        </form>

                        {/* Divider */}
                        <div className="my-7 flex items-center gap-4">

                            <div className="h-px flex-1 bg-gray-200"></div>

                            <span className="text-sm text-gray-400">
                                OR
                            </span>

                            <div className="h-px flex-1 bg-gray-200"></div>

                        </div>

                        {/* Google */}
                        <button
                            className="btn h-14 w-full rounded-2xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        >

                            <FaGoogle />

                            Continue With Google

                        </button>

                        {/* Register Redirect */}
                        <p className="mt-8 text-center text-sm text-gray-600">

                            Don&apos;t have an account?

                            <Link
                                href="/register"
                                className="ml-1 font-semibold text-blue-600 hover:underline"
                            >

                                Register

                            </Link>

                        </p>

                    </div>

                </motion.div>

            </div>

        </div>

    );
};

export default LoginPage;