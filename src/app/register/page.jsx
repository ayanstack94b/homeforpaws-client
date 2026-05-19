"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (

        <div className="relative min-h-screen overflow-hidden bg-slate-50 py-10">

            {/* Background Blur */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

            </div>

            <div className="w-11/12 max-w-6xl mx-auto">

                <div className="grid items-center gap-10 lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden lg:block"
                    >

                        <div className="max-w-lg">

                            <div className="flex items-center gap-3">

                                <motion.div
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                    }}
                                    className="text-4xl text-blue-600"
                                >
                                    <FaPaw />
                                </motion.div>

                                <h1 className="text-3xl font-bold text-blue-600">
                                    HomeForPaws
                                </h1>

                            </div>

                            <h2 className="mt-10 text-5xl font-bold leading-tight text-gray-800">

                                Create An Account
                                <span className="text-blue-600">
                                    {" "}For A Better Pet Journey
                                </span>

                            </h2>

                            <p className="mt-6 leading-8 text-gray-600">

                                Join our adoption community and help pets find
                                safe, loving, and caring homes.

                            </p>

                        </div>

                    </motion.div>

                    {/* FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-10">

                            <div className="mb-8 text-center">

                                <h2 className="text-3xl font-bold text-gray-800">
                                    Register
                                </h2>

                                <p className="mt-2 text-gray-500">
                                    Create your HomeForPaws account
                                </p>

                            </div>

                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-5"
                            >

                                {/* Name */}
                                <div>

                                    <label className="mb-2 block font-medium text-gray-700">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="input input-bordered w-full rounded-xl"
                                        {...register("name", {
                                            required: "Name is required"
                                        })}
                                    />

                                    {
                                        errors.name && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.name.message}
                                            </p>
                                        )
                                    }

                                </div>

                                {/* Photo URL */}
                                <div>

                                    <label className="mb-2 block font-medium text-gray-700">
                                        Photo URL
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Paste your profile photo url"
                                        className="input input-bordered w-full rounded-xl"
                                        {...register("photo")}
                                    />

                                </div>

                                {/* Email */}
                                <div>

                                    <label className="mb-2 block font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full rounded-xl"
                                        {...register("email", {
                                            required: "Email is required"
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
                                        className="input input-bordered w-full rounded-xl"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            }
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

                                {/* Register Button */}
                                <button
                                    type="submit"
                                    className="btn mt-3 h-12 w-full rounded-xl border-0 bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Create Account
                                </button>

                            </form>

                            {/* Divider */}
                            <div className="my-6 flex items-center gap-4">

                                <div className="h-px flex-1 bg-gray-200"></div>

                                <span className="text-sm text-gray-400">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-gray-200"></div>

                            </div>

                            {/* Google */}
                            <button className="btn h-12 w-full rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">

                                Continue With Google

                            </button>

                            {/* Login Redirect */}
                            <p className="mt-6 text-center text-sm text-gray-600">

                                Already have an account?

                                <Link
                                    href="/login"
                                    className="ml-1 font-semibold text-blue-600 hover:underline"
                                >
                                    Login
                                </Link>

                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>

        </div>
    );
};

export default RegisterPage;