"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import {
    FaDog,
    FaMapMarkerAlt,
    FaMars,
    FaVenus,
} from "react-icons/fa";

const PetViewModal = ({ pet }) => {

    const [showAdoptForm, setShowAdoptForm] =
        useState(false);

    useEffect(() => {

        setShowAdoptForm(false);

    }, [pet]);

    if (!pet) return null;

    return (

        <dialog
            id="view_pet_modal"
            className="modal"
        >

            <div className="modal-box max-w-5xl rounded-[35px] border border-blue-100 bg-white p-0 shadow-2xl">

                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* left side image */}
                    <div className="relative h-80 lg:h-full">

                        <Image
                            src={pet?.image}
                            alt={pet?.petName}
                            fill
                            sizes="(max-width:768px) 100vw, 50vw"
                            className="object-cover lg:rounded-l-[35px]"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                        {/* pet name */}
                        <div className="absolute bottom-6 left-6">

                            <h2 className="text-4xl font-bold text-white">
                                {pet?.petName}
                            </h2>

                            <p className="mt-2 text-blue-100">
                                {pet?.breed} • {pet?.species}
                            </p>

                        </div>

                    </div>

                    {/* right side */}
                    <div className="p-7">

                        {
                            !showAdoptForm ? (

                                <>

                                    {/* top info */}
                                    <div className="grid grid-cols-2 gap-4">

                                        {/* species */}
                                        <div className="rounded-2xl bg-blue-50 p-4">

                                            <div className="mb-2 text-blue-600">
                                                <FaDog />
                                            </div>

                                            <p className="text-xs text-gray-500">
                                                Species
                                            </p>

                                            <h3 className="font-bold text-gray-800">
                                                {pet?.species}
                                            </h3>

                                        </div>

                                        {/* gender */}
                                        <div className="rounded-2xl bg-pink-50 p-4">

                                            <div className="mb-2 text-pink-500">

                                                {
                                                    pet?.gender === "Male"
                                                        ? <FaMars />
                                                        : <FaVenus />
                                                }

                                            </div>

                                            <p className="text-xs text-gray-500">
                                                Gender
                                            </p>

                                            <h3 className="font-bold text-gray-800">
                                                {pet?.gender}
                                            </h3>

                                        </div>

                                        {/* location */}
                                        <div className="col-span-2 rounded-2xl bg-red-50 p-4">

                                            <div className="mb-2 text-red-500">
                                                <FaMapMarkerAlt />
                                            </div>

                                            <p className="text-xs text-gray-500">
                                                Location
                                            </p>

                                            <h3 className="font-bold text-gray-800">
                                                {pet?.location}
                                            </h3>

                                        </div>

                                    </div>

                                    {/* description */}
                                    <div className="mt-6">

                                        <h3 className="mb-3 text-2xl font-bold text-gray-800">
                                            About
                                        </h3>

                                        <p className="leading-7 text-gray-600">
                                            {pet?.description}
                                        </p>

                                    </div>

                                    {/* buttons */}
                                    <div className="mt-8 flex gap-4">

                                        <form
                                            method="dialog"
                                            className="flex-1"
                                        >

                                            <button
                                                className="btn h-12 w-full rounded-2xl border-0 bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            >

                                                Close

                                            </button>

                                        </form>

                                        <button
                                            type="button"
                                            onClick={() => setShowAdoptForm(true)}
                                            className="btn h-12 flex-1 rounded-2xl border-0 bg-blue-600 text-white hover:bg-blue-700"
                                        >

                                            Adopt Pet

                                        </button>

                                    </div>

                                </>

                            ) : (

                                <div className="flex h-full flex-col justify-center">

                                    <h2 className="mb-4 text-3xl font-bold text-gray-800">
                                        Adoption Request
                                    </h2>

                                    <p className="text-gray-600">
                                        Adoption form will appear here.
                                    </p>

                                    <button
                                        onClick={() => setShowAdoptForm(false)}
                                        className="btn mt-8 rounded-2xl border-0 bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    >

                                        Back

                                    </button>

                                </div>

                            )
                        }

                    </div>

                </div>

            </div>

        </dialog>

    );
};

export default PetViewModal;