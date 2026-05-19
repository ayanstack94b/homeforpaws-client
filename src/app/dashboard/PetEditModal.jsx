"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { motion, AnimatePresence } from "framer-motion";

import { FaPaw } from "react-icons/fa";

const PetEditModal = ({
    selectedPet,
}) => {

    const [showSuccessPopup, setShowSuccessPopup] =
        useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /* UPDATE PET */

    const onSubmit = async (data) => {

        const res = await fetch(
            `http://localhost:5000/pet/${selectedPet?._id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        const result = await res.json();

        if (result.modifiedCount > 0) {

            document
                .getElementById("edit_pet_modal")
                .close();

            setShowSuccessPopup(true);

            setTimeout(() => {

                setShowSuccessPopup(false);

                window.location.reload();

            }, 2000);

        }

    };

    return (

        <>

            {/* =========================
                MODAL
            ========================== */}

            <dialog
                id="edit_pet_modal"
                className="modal"
            >

                <div className="modal-box max-w-4xl rounded-[35px] border border-blue-100 bg-white p-0 shadow-2xl">

                    {/* Header */}
                    <div className="border-b border-blue-100 bg-gradient-to-r from-blue-500 to-sky-500 px-8 py-6 text-white">

                        <h2 className="text-4xl font-bold">
                            Update Pet
                        </h2>

                        <p className="mt-2 text-blue-100">
                            Edit your pet information carefully.
                        </p>

                    </div>

                    {/* Form */}
                    <div className="max-h-[75vh] overflow-y-auto px-8 py-8">

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="grid grid-cols-1 gap-6 md:grid-cols-2"
                        >

                            {/* Pet Name */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Pet Name

                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter pet name"
                                    className="input input-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.petName}
                                    {...register("petName", {
                                        required:
                                            "Pet name is required",
                                    })}
                                />

                                {
                                    errors.petName && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.petName.message}
                                        </p>
                                    )
                                }

                            </div>

                            {/* Species */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Species

                                </label>

                                <select
                                    className="select select-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.species}
                                    {...register("species")}
                                >

                                    <option>Dog</option>
                                    <option>Cat</option>
                                    <option>Bird</option>
                                    <option>Crow</option>
                                    <option>Camel</option>

                                </select>

                            </div>

                            {/* Breed */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Breed

                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter breed"
                                    className="input input-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.breed}
                                    {...register("breed")}
                                />

                            </div>

                            {/* Gender */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Gender

                                </label>

                                <select
                                    className="select select-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.gender}
                                    {...register("gender")}
                                >

                                    <option>Male</option>
                                    <option>Female</option>

                                </select>

                            </div>

                            {/* Image */}
                            <div className="md:col-span-2">

                                <label className="mb-2 block font-medium text-gray-700">

                                    Image URL

                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter image url"
                                    className="input input-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.image}
                                    {...register("image")}
                                />

                            </div>

                            {/* Location */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Location

                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="input input-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.location}
                                    {...register("location")}
                                />

                            </div>

                            {/* Adoption Fee */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Adoption Fee

                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter fee"
                                    className="input input-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.adoptionFee}
                                    {...register("adoptionFee")}
                                />

                            </div>

                            {/* Health Status */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Health Status

                                </label>

                                <input
                                    type="text"
                                    placeholder="Healthy / Under Treatment"
                                    className="input input-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.healthStatus}
                                    {...register("healthStatus")}
                                />

                            </div>

                            {/* Vaccination */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Vaccination Status

                                </label>

                                <select
                                    className="select select-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.vaccinationStatus}
                                    {...register("vaccinationStatus")}
                                >

                                    <option>Vaccinated</option>
                                    <option>Not Vaccinated</option>
                                    <option>Not Required</option>

                                </select>

                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">

                                <label className="mb-2 block font-medium text-gray-700">

                                    Description

                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Write pet details"
                                    className="textarea textarea-bordered w-full rounded-2xl"
                                    defaultValue={selectedPet?.description}
                                    {...register("description")}
                                ></textarea>

                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex flex-wrap items-center gap-4 md:col-span-2">

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="btn h-14 rounded-2xl border-0 bg-blue-600 px-8 text-white hover:bg-blue-700"
                                >

                                    Update Pet

                                </button>

                                {/* Cancel */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        document
                                            .getElementById("edit_pet_modal")
                                            .close()
                                    }
                                    className="btn h-14 rounded-2xl border-0 bg-gray-200 px-8 text-gray-700 hover:bg-gray-300"
                                >

                                    Cancel

                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </dialog>

            {/* =========================
                SUCCESS POPUP
            ========================== */}

            <AnimatePresence>

                {
                    showSuccessPopup && (

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/20 backdrop-blur-sm px-4"
                        >

                            <motion.div
                                initial={{
                                    scale: 0.7,
                                    opacity: 0,
                                    y: 40,
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    scale: 0.7,
                                    opacity: 0,
                                }}
                                className="w-full max-w-sm rounded-[35px] bg-white p-8 text-center shadow-2xl"
                            >

                                <motion.div
                                    animate={{
                                        rotate: [0, -10, 10, -10, 0],
                                        y: [0, -5, 0],
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

                                    Pet Updated

                                </h2>

                                <p className="mt-3 leading-7 text-gray-600">

                                    Your pet information has been updated successfully.

                                </p>

                            </motion.div>

                        </motion.div>

                    )
                }

            </AnimatePresence>

        </>

    );
};

export default PetEditModal;