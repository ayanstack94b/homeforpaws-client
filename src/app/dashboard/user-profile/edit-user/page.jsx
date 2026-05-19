"use client";

import { useState } from "react";
import { useForm, setValue } from "react-hook-form";

import { motion, AnimatePresence } from "framer-motion";

import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaImage, FaPaw } from "react-icons/fa";

const EditUserProfilePage = () => {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const [formData, setFormData] = useState(null);

    const defaultBios = [
        "Passionate about helping pets find loving and caring homes.",
        "Animal lover dedicated to safe and responsible pet adoption.",
        "Building a better future for rescued and abandoned pets.",
        "Pet adoption enthusiast who believes every animal deserves love.",
    ];

    const handleSelectBio = (bio) => {

        setValue("bio", bio);

    };

    const onSubmit = (data) => {

        setFormData(data);

        setShowConfirmModal(true);

    };

    const handleConfirmUpdate = async () => {

        /*
            BACKEND LOGIC WILL COME LATER
        */

        console.log(formData);

        setShowConfirmModal(false);

        setShowSuccessPopup(true);

        setTimeout(() => {

            setShowSuccessPopup(false);

        }, 2000);

    };

    return (

        <div className="min-h-screen">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10"
            >

                <h1 className="text-4xl font-bold text-gray-800">
                    Edit Profile
                </h1>

                <p className="mt-2 text-gray-600">
                    Update your personal information and profile details.
                </p>

            </motion.div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-[35px] border border-blue-100 bg-white p-6 shadow-sm md:p-10"
            >

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >

                    {/* Name */}
                    <div>

                        <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

                            <FaUser className="text-blue-600" />

                            Full Name

                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full rounded-2xl"
                            {...register("name", {
                                required: "Full name is required",
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

                    {/* Email */}
                    <div>

                        <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

                            <FaEnvelope className="text-blue-600" />

                            Email Address

                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full rounded-2xl"
                            {...register("email", {
                                required: "Email is required",
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

                    {/* Phone */}
                    <div>

                        <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

                            <FaPhoneAlt className="text-blue-600" />

                            Phone Number

                        </label>

                        <input
                            type="text"
                            placeholder="Enter your phone number with Dial code"
                            className="input input-bordered w-full rounded-2xl"
                            {...register("phone", {
                                required: "Phone number is required",
                            })}
                        />

                        {
                            errors.phone && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.phone.message}
                                </p>
                            )
                        }

                    </div>

                    {/* Location */}
                    <div>

                        <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

                            <FaMapMarkerAlt className="text-blue-600" />

                            Location

                        </label>

                        <input
                            type="text"
                            placeholder="Enter your location"
                            className="input input-bordered w-full rounded-2xl"
                            {...register("location", {
                                required: "Location is required",
                            })}
                        />

                        {
                            errors.location && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.location.message}
                                </p>
                            )
                        }

                    </div>

                    {/* Photo URL */}
                    <div className="md:col-span-2">

                        <label className="mb-2 flex items-center gap-2 font-medium text-gray-700">

                            <FaImage className="text-blue-600" />

                            Profile Photo URL

                        </label>

                        <input
                            type="text"
                            placeholder="Enter your profile photo URL"
                            className="input input-bordered w-full rounded-2xl"
                            {...register("photo", {
                                required: "Profile photo is required",
                            })}
                        />

                        {
                            errors.photo && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.photo.message}
                                </p>
                            )
                        }

                    </div>

                    {/* Bio */}
                    <div className="md:col-span-2">

                        <label className="mb-2 block font-medium text-gray-700"> Bio </label>

                        {/* Default Bio Options */}
                        <div className="mb-4 flex flex-wrap gap-3">

                            {
                                defaultBios.map((bio, i) => (

                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => handleSelectBio(bio)}
                                        className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 transition hover:bg-blue-100"
                                    >

                                        Use Default Bio {i + 1}

                                    </button>

                                ))
                            }

                        </div>

                        <textarea
                            rows={3}
                            placeholder="Write something about yourself"
                            className="textarea textarea-bordered w-full rounded-2xl"
                            {...register("bio", {
                                required: "Bio is required",
                            })}
                        ></textarea>

                        {
                            errors.bio && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.bio.message}
                                </p>
                            )
                        }

                    </div>

                    {/* Button */}
                    <div className="md:col-span-2">

                        <button
                            type="submit"
                            className="btn h-14 rounded-2xl border-0 bg-blue-600 px-10 text-white hover:bg-blue-700"
                        >

                            Update Profile

                        </button>

                    </div>

                </form>

            </motion.div>

            {/* confirmation modal */}
            <AnimatePresence>

                {
                    showConfirmModal && (

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-999 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
                        >

                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.7, opacity: 0 }}
                                className="w-full max-w-md rounded-[35px] bg-white p-8 shadow-2xl"
                            >

                                <div className="flex justify-center">

                                    <div className="rounded-full bg-blue-100 p-5 text-5xl text-blue-600">

                                        <FaPaw />

                                    </div>

                                </div>

                                <h2 className="mt-6 text-center text-3xl font-bold text-gray-800">

                                    Confirm Changes

                                </h2>

                                <p className="mt-3 text-center leading-7 text-gray-600">

                                    Are you sure you want to update your profile information?

                                </p>

                                <div className="mt-8 flex items-center justify-center gap-4">

                                    <button
                                        onClick={() => setShowConfirmModal(false)}
                                        className="btn rounded-2xl border-0 bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleConfirmUpdate}
                                        className="btn rounded-2xl border-0 bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                        Yes, Update
                                    </button>

                                </div>

                            </motion.div>

                        </motion.div>

                    )
                }

            </AnimatePresence>

            {/* SUCCESS POPUP */}
            <AnimatePresence>

                {
                    showSuccessPopup && (

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-999 flex items-center justify-center bg-black/20 backdrop-blur-sm px-4"
                        >

                            <motion.div
                                initial={{ scale: 0.6, opacity: 0, y: 40 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.6, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-sm rounded-[35px] bg-white p-8 text-center shadow-2xl"
                            >

                                <motion.div
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                        y: [0, -6, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                    className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl text-blue-600"
                                >

                                    <FaPaw />

                                </motion.div>

                                <h2 className="mt-6 text-3xl font-bold text-gray-800">

                                    Profile Updated

                                </h2>

                                <p className="mt-3 leading-7 text-gray-600">

                                    Your profile information has been updated successfully.

                                </p>

                            </motion.div>

                        </motion.div>

                    )
                }

            </AnimatePresence>

        </div>
    );
};

export default EditUserProfilePage;