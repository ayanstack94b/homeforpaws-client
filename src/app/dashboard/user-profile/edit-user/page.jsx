"use client";

import { authClient } from "@/lib/auth-client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

import Link from "next/link";
import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

import {
    FaUser,
    FaEnvelope,
    FaImage,
    FaArrowLeft,
    FaPaw,
} from "react-icons/fa";

const EditUserProfilePage = () => {
    const router = useRouter();
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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({

        defaultValues: {

            name: user.name,

            email: user.email,

            image: user.image,

        },

    });

    const [updatedData, setUpdatedData] =
        useState(null);

    const onSubmit = async (data) => {

        try {

            setUpdatedData(data);

            await Swal.fire({

                icon: "success",

                title: "Profile Updated",

                text: "profile customization coming soon",

                confirmButtonColor: "#2563eb",

            });

            router.push("/dashboard/user-profile");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen">

            {/* heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
            >

                <div>

                    <h1 className="text-4xl font-black text-gray-800">

                        Edit Profile

                    </h1>

                    <p className="mt-2 text-gray-600">

                        Update your personal profile information.

                    </p>

                </div>

                <Link
                    href="/dashboard/user-profile"
                    className="btn w-fit rounded-2xl border-0 bg-white px-6 text-gray-700 shadow-sm hover:bg-blue-50"
                >

                    <FaArrowLeft />

                    Back To Profile

                </Link>

            </motion.div>

            {/* main card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-[35px] border border-blue-100 bg-white shadow-sm"
            >

                <div className="grid lg:grid-cols-[.9fr_1.1fr]">

                    {/* left side */}
                    <div className="relative hidden overflow-hidden bg-linear-to-b from-blue-500 via-blue-600 to-sky-500 p-10 lg:flex lg:flex-col lg:justify-between">

                        {/* floating glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
                        />

                        {/* top content */}
                        <div className="relative z-10">

                            <div className="flex h-20 w-20 items-center justify-center rounded-[30px] bg-white/10 backdrop-blur-md">

                                <FaPaw className="text-4xl text-white" />

                            </div>

                            <h2 className="mt-10 text-5xl font-black leading-tight text-white">

                                Keep Your Profile Updated

                            </h2>

                            <p className="mt-6 max-w-md leading-8 text-blue-100">

                                A complete profile helps create trust and improves your adoption experience.

                            </p>

                        </div>

                        {/* bottom profile preview */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="relative z-10 mt-16 rounded-[35px] border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
                        >

                            <div className="flex items-center gap-5">

                                <img
                                    src={
                                        updatedData?.image ||
                                        user.image ||
                                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    }
                                    alt="user"
                                    className="h-20 w-20 rounded-full border-4 border-white object-cover"
                                />

                                <div>

                                    <h3 className="text-2xl font-bold text-white">

                                        {
                                            updatedData?.name ||
                                            user.name ||
                                            "Guest User"
                                        }

                                    </h3>

                                    <p className="mt-1 text-blue-100">

                                        {
                                            updatedData?.email ||
                                            user.email
                                        }

                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </div>

                    {/* right side */}
                    <div className="p-6 md:p-10">

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-8"
                        >

                            {/* profile image */}
                            <div className="flex justify-center lg:justify-start">

                                <motion.img
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    src={
                                        updatedData?.image ||
                                        user.image ||
                                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    }
                                    alt="user"
                                    className="h-36 w-36 rounded-full border-8 border-blue-50 object-cover shadow-lg"
                                />

                            </div>

                            {/* name */}
                            <div>

                                <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

                                    <FaUser className="text-blue-600" />

                                    Full Name

                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="input input-bordered h-14 w-full rounded-2xl"
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                />

                                {
                                    errors.name && (

                                        <p className="mt-2 text-sm text-red-500">

                                            {errors.name.message}

                                        </p>

                                    )
                                }

                            </div>

                            {/* email */}
                            <div>

                                <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

                                    <FaEnvelope className="text-blue-600" />

                                    Email Address

                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered h-14 w-full rounded-2xl"
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                />

                                {
                                    errors.email && (

                                        <p className="mt-2 text-sm text-red-500">

                                            {errors.email.message}

                                        </p>

                                    )
                                }

                            </div>

                            {/* image */}
                            <div>

                                <label className="mb-3 flex items-center gap-2 font-semibold text-gray-700">

                                    <FaImage className="text-blue-600" />

                                    Profile Image URL

                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter image url"
                                    className="input input-bordered h-14 w-full rounded-2xl"
                                    {...register("image")}
                                />

                            </div>

                            {/* button */}
                            <button
                                type="submit"
                                className="btn mt-4 h-14 w-full rounded-2xl border-0 bg-blue-600 text-lg text-white hover:bg-blue-700"
                            >

                                Save Changes

                            </button>

                        </form>

                    </div>

                </div>

            </motion.div>

        </div>
    );
};

export default EditUserProfilePage;