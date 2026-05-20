"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    FaEye,
    FaPaw,
    FaTrash,
} from "react-icons/fa";

import Swal from "sweetalert2";

import { authClient } from "@/lib/auth-client";

const MyRequestsPage = () => {

    const [requests, setRequests] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [showModal, setShowModal] =
        useState(false);

    const [selectedRequestId, setSelectedRequestId] =
        useState(null);

    const {
        data: session,
    } = authClient.useSession();

    const user = session?.user;

    useEffect(() => {

        if (!user?.email) return;

        fetch(
            `http://localhost:5000/adoption-request?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => {

                setRequests(data);

                setLoading(false);

            });

    }, [user]);

    const openCancelModal = (id) => {

        setSelectedRequestId(id);

        setShowModal(true);

    };

    const handleCancelRequest = async () => {

        try {

            const res = await fetch(
                `http://localhost:5000/adoption-request/${selectedRequestId}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (data.deletedCount > 0) {

                const remainingRequests =
                    requests.filter(
                        (request) =>
                            request._id !== selectedRequestId
                    );

                setRequests(remainingRequests);

                Swal.fire({

                    icon: "success",

                    title: "Request Cancelled",

                    text: "Your adoption request has been removed.",

                    timer: 1500,

                    showConfirmButton: false,

                });

            }

            setShowModal(false);

        } catch (error) {

            console.log(error);

        }

    };

    if (loading) {

        return (

            <div className="flex min-h-[70vh] items-center justify-center">

                <span className="loading loading-spinner loading-lg text-blue-600"></span>

            </div>

        );

    }

    return (

        <section>

            {/* heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10"
            >

                <h1 className="text-4xl font-black text-gray-800">
                    My Requests
                </h1>

                <p className="mt-3 text-lg text-gray-600">
                    Track all your pet adoption requests from here.
                </p>

            </motion.div>

            {/* empty state */}
            {
                requests.length === 0 && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-[35px] border border-dashed border-blue-200 bg-white p-16 text-center shadow-sm"
                    >

                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl text-blue-600">

                            <FaPaw />

                        </div>

                        <h2 className="mt-6 text-3xl font-black text-gray-800">

                            No Requests Yet

                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-600">

                            You have not requested to adopt any pets yet.
                            Explore available pets and send your first adoption request.

                        </p>

                        <Link
                            href="/all-pets"
                            className="btn mt-8 rounded-2xl border-0 bg-blue-600 px-8 text-white hover:bg-blue-700"
                        >

                            Explore Pets

                        </Link>

                    </motion.div>

                )
            }

            {/* request cards */}
            <div className="space-y-6">

                {
                    requests.map((request, index) => (

                        <motion.div
                            key={request._id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                            className="overflow-hidden rounded-[35px] border border-blue-100 bg-white shadow-sm"
                        >

                            <div className="flex flex-col lg:flex-row">

                                {/* image */}
                                <div className="h-72 w-full lg:h-auto lg:w-72">

                                    <img
                                        src={request.petImage}
                                        alt={request.petName}
                                        className="h-full w-full object-cover"
                                    />

                                </div>

                                {/* content */}
                                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">

                                    <div>

                                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                                            <div>

                                                <h2 className="text-4xl font-black text-gray-800">

                                                    {request.petName}

                                                </h2>

                                                <p className="mt-2 text-gray-500">

                                                    Adoption Request

                                                </p>

                                            </div>

                                            {/* status */}
                                            <div>

                                                <span
                                                    className={`rounded-full px-5 py-2 text-sm font-semibold

                                                        ${request.status === "pending"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : request.status === "approved"
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-red-100 text-red-700"
                                                        }

                                                    `}
                                                >

                                                    {request.status}

                                                </span>

                                            </div>

                                        </div>

                                        {/* dates */}
                                        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

                                            {/* request date */}
                                            <div className="rounded-2xl bg-slate-50 p-5">

                                                <p className="text-sm text-gray-400">
                                                    Request Date
                                                </p>

                                                <h3 className="mt-2 text-xl font-bold text-gray-800">

                                                    {
                                                        new Date(
                                                            request.createdAt
                                                        ).toLocaleDateString()
                                                    }

                                                </h3>

                                            </div>

                                            {/* pickup date */}
                                            <div className="rounded-2xl bg-slate-50 p-5">

                                                <p className="text-sm text-gray-400">
                                                    Pickup Date
                                                </p>

                                                <h3 className="mt-2 text-xl font-bold text-gray-800">

                                                    {request.pickupDate}

                                                </h3>

                                            </div>

                                        </div>

                                    </div>

                                    {/* buttons */}
                                    <div className="mt-8 flex flex-wrap gap-4">

                                        {/* view pet */}
                                        {/* <Link
                                            href={`/pets/${request.petId}`}
                                            className="btn rounded-2xl border-0 bg-blue-600 text-white hover:bg-blue-700"
                                        >

                                            <FaEye />

                                            View Pet

                                        </Link> */}

                                        {/* cancel request */}
                                        <button
                                            onClick={() =>
                                                openCancelModal(request._id)
                                            }
                                            className="btn rounded-2xl border-0 bg-red-500 text-white hover:bg-red-600"
                                        >

                                            <FaTrash />

                                            Cancel Request

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    ))
                }

            </div>

            {/* cancel modal */}
            <AnimatePresence>

                {
                    showModal && (

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
                        >

                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.7, opacity: 0 }}
                                className="w-full max-w-md rounded-[35px] bg-white p-8 shadow-2xl"
                            >

                                <div className="flex justify-center">

                                    <div className="rounded-full bg-red-100 p-5 text-5xl text-red-500">

                                        <FaTrash />

                                    </div>

                                </div>

                                <h2 className="mt-6 text-center text-3xl font-black text-gray-800">

                                    Cancel Request?

                                </h2>

                                <p className="mt-3 text-center leading-7 text-gray-600">

                                    Are you sure you want to cancel this adoption request?

                                </p>

                                <div className="mt-8 flex items-center justify-center gap-4">

                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="btn rounded-2xl border-0 bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    >

                                        No

                                    </button>

                                    <button
                                        onClick={handleCancelRequest}
                                        className="btn rounded-2xl border-0 bg-red-500 text-white hover:bg-red-600"
                                    >

                                        Yes, Cancel

                                    </button>

                                </div>

                            </motion.div>

                        </motion.div>

                    )
                }

            </AnimatePresence>

        </section>

    );
};

export default MyRequestsPage;