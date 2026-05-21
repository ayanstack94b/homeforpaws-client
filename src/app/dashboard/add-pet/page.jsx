"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";


const AddPetPage = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {
        data: session,
    } = authClient.useSession();

    const user = session?.user;


    const onSubmit = async(data) => {

        const petData = {

            ...data,

            ownerEmail: session?.user?.email,

            age: {

                day: data.day,

                month: data.month,

                year: data.year,

            },

        };
        console.log(petData);

        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);

        // getting the data from DB
        const res = await fetch('http://localhost:5000/pet', {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(petData)
        })
        const resData = await res.json();

        if (resData.insertedId) {

            // Swal.fire({

            //     icon: "success",

            //     title: "Pet Added Successfully",

            //     text: "Your pet listing is now live.",

            //     timer: 1800,

            //     showConfirmButton: false,

            // });

            setTimeout(() => {

                router.push("/dashboard/my-listings");

            }, 1800);

        }
        
        // console.log(resData);
    };

    return (

        <div className="min-h-screen bg-slate-50 py-10">

            <div className="w-11/12 max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >

                    <div className="mb-8">

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Add A Pet
                        </h1>

                        <p className="mt-2 text-gray-600">
                            Fill in the details below to list a pet for adoption.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm"
                    >

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                            {/* Pet Name */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Pet Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter pet name"
                                    className="input input-bordered w-full rounded-xl"
                                    {...register("petName", {
                                        required: "Pet name is required"
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
                                    className="select select-bordered w-full rounded-xl"
                                    {...register("species", {
                                        required: "Species is required"
                                    })}
                                >
                                    <option value="">Select species</option>
                                    <option>Dog</option>
                                    <option>Cat</option>
                                    <option>Bird</option>
                                    <option>Rabbit</option>
                                    <option>Camel</option>
                                    <option>Crow</option>
                                    <option>Others</option>
                                </select>

                                {
                                    errors.species && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.species.message}
                                        </p>
                                    )
                                }
                            </div>

                            {/* Breed */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Breed
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter breed"
                                    className="input input-bordered w-full rounded-xl"
                                    {...register("breed", {
                                        required: "Breed name is required"
                                    })}
                                />

                                {
                                    errors.breed && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.breed.message}
                                        </p>
                                    )
                                }
                            </div>

                            {/* Age */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">
                                    Age
                                </label>

                                <div className="grid grid-cols-3 gap-3">

                                    <div>

                                        <input
                                            type="number"
                                            placeholder="Day"
                                            className="input input-bordered w-full rounded-xl"
                                            {...register("day", {
                                                required: "Day required"
                                            })}
                                        />

                                        {
                                            errors.day && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.day.message}
                                                </p>
                                            )
                                        }

                                    </div>

                                    <div>

                                        <input
                                            type="number"
                                            placeholder="Month"
                                            className="input input-bordered w-full rounded-xl"
                                            {...register("month", {
                                                required: "Month required"
                                            })}
                                        />

                                        {
                                            errors.month && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.month.message}
                                                </p>
                                            )
                                        }

                                    </div>

                                    <div>

                                        <input
                                            type="number"
                                            placeholder="Year"
                                            className="input input-bordered w-full rounded-xl"
                                            {...register("year", {
                                                required: "Year required"
                                            })}
                                        />

                                        {
                                            errors.year && (
                                                <p className="mt-1 text-xs text-red-500">
                                                    {errors.year.message}
                                                </p>
                                            )
                                        }

                                    </div>

                                </div>

                            </div>

                            {/* Gender */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Gender
                                </label>

                                <select
                                    className="select select-bordered w-full rounded-xl"
                                    {...register("gender", {
                                        required: "Please select a gender"
                                    })}
                                >
                                    <option value="">Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>

                                {
                                    errors.gender && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.gender.message}
                                        </p>
                                    )
                                }
                            </div>

                            {/* Image URL */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Image URL
                                </label>

                                <input
                                    type="text"
                                    placeholder="Paste image url"
                                    className="input input-bordered w-full rounded-xl"
                                    {...register("image", {
                                        required: "Pet image is required"
                                    })}
                                />

                                {
                                    errors.image && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.image.message}
                                        </p>
                                    )
                                }
                            </div>

                            {/* Health Status */}
                            <div>

                                <label className="mb-2 block font-medium text-gray-700">

                                    Health Status

                                </label>

                                <select
                                    className="select select-bordered w-full rounded-xl"
                                    defaultValue=""
                                    {...register("healthStatus", {
                                        required: "Please select the current health status",
                                    })}
                                >

                                    <option value="" disabled>

                                        Select Health Status

                                    </option>

                                    <option value="Healthy">

                                        Healthy

                                    </option>

                                    <option value="Under Treatment">

                                        Under Treatment

                                    </option>

                                    <option value="Injured">

                                        Injured

                                    </option>

                                    <option value="Special Needs">

                                        Special Needs

                                    </option>

                                    <option value="Recovering">

                                        Recovering

                                    </option>

                                </select>

                                {
                                    errors.healthStatus && (

                                        <p className="mt-1 text-sm text-red-500">

                                            {errors.healthStatus.message}

                                        </p>

                                    )
                                }

                            </div>

                            {/* Vaccination Status */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Vaccination Status
                                </label>

                                <select
                                    className="select select-bordered w-full rounded-xl"
                                    {...register("vaccinationStatus", {
                                        required: "Please select the vaccination status"
                                    })}
                                >
                                    <option value="">Select status</option>
                                    <option>Vaccinated</option>
                                    <option>Not Vaccinated</option>
                                    <option>Not Required</option>
                                </select>

                                {
                                    errors.vaccinationStatus && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.vaccinationStatus.message}
                                        </p>
                                    )
                                }
                            </div>

                            {/* Location */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter location in plain text"
                                    className="input input-bordered w-full rounded-xl"
                                    {...register("location", {
                                        required: "Location is required"
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

                            {/* Adoption Fee */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Adoption Fee
                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter adoption fee"
                                    className="input input-bordered w-full rounded-xl"
                                    {...register("adoptionFee", {
                                        required: "Adoption fee is required"
                                    })}
                                />

                                {
                                    errors.adoptionFee && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.adoptionFee.message}
                                        </p>
                                    )
                                }
                            </div>

                            {/* owner email */}
                            <div className="md:col-span-2">

                                <label className="mb-2 block font-medium text-gray-700">

                                    Owner Email

                                </label>

                                <input
                                    type="email"
                                    value={user?.email || ""}
                                    readOnly
                                    className="input input-bordered w-full rounded-xl bg-gray-100"
                                    {...register("ownerEmail")}
                                />

                            </div>

                            {/* Message */}
                            <div className="md:col-span-2">
                                <label className="mb-2 block font-medium text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows={3}
                                    placeholder="Write pet details..."
                                    className="textarea textarea-bordered w-full rounded-xl"
                                    {...register("message")}
                                ></textarea>
                            </div>

                        </div>

                        <div className="mt-8">

                            <button
                                type="submit"
                                className="btn w-full rounded-xl border-0 bg-blue-600 px-8 text-white hover:bg-blue-700"
                            >
                                Add Pet
                            </button>

                        </div>

                    </form>

                </motion.div>

            </div>
            {/* SUCCESS POPUP */}
            {
                showSuccess && (

                    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.7, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 text-center shadow-2xl"
                        >

                            {/* Background Blur Circle */}
                            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

                            {/* Dog Emoji */}
                            <motion.div
                                animate={{
                                    rotate: [0, -10, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                                className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-5xl shadow-md"
                            >
                                🐶
                            </motion.div>

                            <h2 className="relative mt-6 text-3xl font-bold text-gray-800">
                                Pet Added!
                            </h2>

                            <p className="relative mt-3 text-gray-600 leading-7">
                                Your lovely pet has been successfully listed for adoption.
                            </p>

                            <div className="relative mt-6">

                                <div className="mx-auto h-2 w-40 overflow-hidden rounded-full bg-gray-100">

                                    <motion.div
                                        initial={{ width: "100%" }}
                                        animate={{ width: "0%" }}
                                        transition={{ duration: 3 }}
                                        className="h-full rounded-full bg-blue-600"
                                    />

                                </div>

                            </div>

                        </motion.div>

                    </div>

                )
            }


        </div>
    );
};

export default AddPetPage;