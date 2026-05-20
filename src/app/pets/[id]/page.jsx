"use client";

import AdoptionForm from "@/app/dashboard/AdoptionForm";

import Image from "next/image";

import Link from "next/link";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

import { FaArrowLeft, FaHeart, FaLocationDot, FaMars, FaVenus, FaShieldDog, FaSyringe } from "react-icons/fa6";

const PetDetailsPage = () => {

    const { id } = useParams();

    const [pet, setPet] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [showAdoptForm, setShowAdoptForm] =
        useState(false);

    useEffect(() => {

        fetch(
            "http://localhost:5000/pet"
        )
            .then((res) => res.json())
            .then((data) => {

                const singlePet =
                    data.find(
                        (pet) =>
                            pet._id === id
                    );

                setPet(singlePet);

                setLoading(false);

            });

    }, [id]);

    // loading state
    if (loading) {

        return (

            <div className="flex min-h-screen items-center justify-center">

                <span className="loading loading-spinner loading-lg text-blue-600"></span>

            </div>

        );

    }

    // pet not found
    if (!pet) {

        return (

            <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">

                <h1 className="text-5xl font-black text-gray-800">
                    Pet Not Found
                </h1>

                <p className="mt-4 text-gray-500">
                    The pet you are looking for does not exist.
                </p>

                <Link
                    href="/all-pets"
                    className="btn mt-8 rounded-2xl border-0 bg-blue-600 px-8 text-white hover:bg-blue-700"
                >

                    Back To Pets

                </Link>

            </div>

        );

    }

    return (

        <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-14">

            <div className="container mx-auto px-4">

                {/* back button */}
                <Link
                    href="/all-pets"
                    className="mb-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-gray-700 shadow-md transition hover:-translate-y-1 hover:text-blue-600"
                >

                    <FaArrowLeft />

                    Back To Pets

                </Link>

                {/* main card */}
                <div className="overflow-hidden rounded-[40px] border border-blue-100 bg-white shadow-2xl">

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* left image */}
                        <div className="relative h-[400px] lg:h-full">

                            <Image
                                src={pet?.image}
                                alt={pet?.petName}
                                fill
                                priority
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                            {/* pet info */}
                            <div className="absolute bottom-8 left-8">

                                <p className="mb-3 inline-block rounded-full bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md">

                                    Available For Adoption

                                </p>

                                <h1 className="text-5xl font-black text-white">

                                    {pet?.petName}

                                </h1>

                                <p className="mt-3 text-lg text-blue-100">

                                    {pet?.breed} • {pet?.species}

                                </p>

                            </div>

                        </div>

                        {/* right side */}
                        <div className="flex min-h-[750px] flex-col justify-between p-8 lg:p-12">

                            {
                                !showAdoptForm ? (

                                    <>

                                        <div>

                                            {/* top cards */}
                                            <div className="grid grid-cols-2 gap-4">

                                                {/* gender */}
                                                <div className="rounded-3xl bg-pink-50 p-5">

                                                    <div className="mb-3 text-2xl text-pink-500">

                                                        {
                                                            pet?.gender === "Male"
                                                                ? <FaMars />
                                                                : <FaVenus />
                                                        }

                                                    </div>

                                                    <p className="text-sm text-gray-500">
                                                        Gender
                                                    </p>

                                                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                                                        {pet?.gender}
                                                    </h3>

                                                </div>

                                                {/* health */}
                                                <div className="rounded-3xl bg-emerald-50 p-5">

                                                    <div className="mb-3 text-2xl text-emerald-600">

                                                        <FaShieldDog />

                                                    </div>

                                                    <p className="text-sm text-gray-500">
                                                        Health Status
                                                    </p>

                                                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                                                        {pet?.healthStatus}
                                                    </h3>

                                                </div>

                                                {/* location */}
                                                <div className="rounded-3xl bg-red-50 p-5">

                                                    <div className="mb-3 text-2xl text-red-500">

                                                        <FaLocationDot />

                                                    </div>

                                                    <p className="text-sm text-gray-500">
                                                        Location
                                                    </p>

                                                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                                                        {pet?.location}
                                                    </h3>

                                                </div>

                                                {/* vaccination */}
                                                <div className="rounded-3xl bg-blue-50 p-5">

                                                    <div className="mb-3 text-2xl text-blue-600">

                                                        <FaSyringe />

                                                    </div>

                                                    <p className="text-sm text-gray-500">
                                                        Vaccination
                                                    </p>

                                                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                                                        {pet?.vaccinationStatus}
                                                    </h3>

                                                </div>

                                            </div>

                                            {/* adoption fee */}
                                            <div className="mt-6 rounded-[30px] bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white shadow-xl">

                                                <div className="flex items-center gap-4">

                                                    <div className="rounded-full bg-white/20 p-4 text-2xl">

                                                        <FaHeart />

                                                    </div>

                                                    <div>

                                                        <p className="text-sm text-blue-100">
                                                            Adoption Fee
                                                        </p>

                                                        <h2 className="text-4xl font-black">
                                                            $ {pet?.adoptionFee}
                                                        </h2>

                                                    </div>

                                                </div>

                                            </div>

                                            {/* description */}
                                            <div className="mt-8">

                                                <h2 className="mb-4 text-3xl font-black text-gray-800">

                                                    About {pet?.petName}

                                                </h2>

                                                <p className="leading-8 text-gray-600">

                                                    {pet?.description}

                                                </p>

                                            </div>

                                        </div>

                                        {/* adopt button */}
                                        <button
                                            onClick={() =>
                                                setShowAdoptForm(true)
                                            }
                                            className="btn mt-10 h-14 rounded-2xl border-0 bg-blue-600 text-lg text-white hover:bg-blue-700"
                                        >

                                            Adopt Now

                                        </button>

                                    </>

                                ) : (

                                    <AdoptionForm
                                        pet={pet}
                                        setShowAdoptForm={setShowAdoptForm}
                                    />

                                )
                            }

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default PetDetailsPage;