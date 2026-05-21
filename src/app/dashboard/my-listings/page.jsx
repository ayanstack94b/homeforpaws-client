"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import PuppySpinner from "@/components/shared/PuppySpinner";
import DashboardPetCard from "@/components/dashboard/DashboardPetCard";
import PetEditModal from "../PetEditModal";
import PetViewModal from "../PetViewModal";
import { authClient } from "@/lib/auth-client";


const MyListingsPage = () => {

    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedPetId, setSelectedPetId] = useState(null);
    const [selectedPet, setSelectedPet] = useState(null);
    const [selectedViewPet, setSelectedViewPet] = useState(null);
    const [showAdoptForm, setShowAdoptForm] = useState(false);
    const [requests, setRequests] = useState([]);
    const [selectedRequestsPet, setSelectedRequestsPet] = useState(null);


    const {
        data: session,
    } = authClient.useSession();

    useEffect(() => {

        if (!session?.user?.email) {

            return;

        }

        fetch(
            `http://localhost:5000/pet?email=${session?.user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {

                setPets(data);

                setLoading(false);

            });

    }, [session]);


    /*OPEN View MODAL*/
    const openViewModal = (pet) => {

        setShowAdoptForm(false);

        setSelectedViewPet(pet);

        setTimeout(() => {

            document
                .getElementById("view_pet_modal")
                ?.showModal();

        }, 0);

    };

    /*OPEN EDIT MODAL*/

    const openEditModal = (pet) => {

        setSelectedPet(pet);

        document
            .getElementById("edit_pet_modal")
            .showModal();

    };

    /* OPEN REQUESTS MODAL */

    const openRequestsModal = async (pet) => {

        setSelectedRequestsPet(pet);

        const res = await fetch(
            `http://localhost:5000/adoption-request?petId=${pet._id}`
        );

        const data = await res.json();

        setRequests(data);

        document
            .getElementById("requests_modal")
            ?.showModal();

    };

    /* APPROVE REQUEST */

    const handleApprove = async (request) => {

        await fetch(
            `http://localhost:5000/adoption-request/${request._id}`,
            {
                method: "PATCH",

                headers: {
                    "content-type": "application/json",
                },

                body: JSON.stringify({
                    status: "approved",
                }),
            }
        );

        await fetch(
            `http://localhost:5000/pet/adopt/${request.petId}`,
            {
                method: "PATCH",
            }
        );

        const updatedRequests =
            requests.map((req) => {

                if (req._id === request._id) {

                    return {
                        ...req,
                        status: "approved",
                    };

                }

                return {
                    ...req,
                    status:
                        req.status === "pending"
                            ? "rejected"
                            : req.status,
                };

            });

        setRequests(updatedRequests);

    };


    /* REJECT REQUEST */

    const handleReject = async (request) => {

        await fetch(
            `http://localhost:5000/adoption-request/${request._id}`,
            {
                method: "PATCH",

                headers: {
                    "content-type": "application/json",
                },

                body: JSON.stringify({
                    status: "rejected",
                }),
            }
        );

        const updatedRequests =
            requests.map((req) => {

                if (req._id === request._id) {

                    return {
                        ...req,
                        status: "rejected",
                    };

                }

                return req;

            });

        setRequests(updatedRequests);

    };

    /*OPEN DELETE MODAL*/

    const openDeleteModal = (id) => {

        setSelectedPetId(id);

        setShowDeleteModal(true);

    };

    /*DELETE PET*/

    const handleDelete = async () => {

        const res = await fetch(
            `http://localhost:5000/pet/${selectedPetId}`,
            {
                method: "DELETE",
            }
        );

        const data = await res.json();

        if (data.deletedCount > 0) {

            const remainingPets =
                pets.filter(
                    (pet) => pet._id !== selectedPetId
                );

            setPets(remainingPets);

            setShowDeleteModal(false);

            setSelectedPetId(null);

        }

    };



    if (loading) {

        return <PuppySpinner />;

    }

    return (

        <div>

            {/* Heading*/}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10"
            >

                <h1 className="text-3xl font-bold text-gray-800">

                    My Listings

                </h1>

                <p className="mt-2 text-gray-600">

                    Manage all your listed pets from here.

                </p>

            </motion.div>

            {/*PET GRID*/}

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                {
                    pets.map((pet, index) => (

                        <motion.div
                            key={pet._id}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.08,
                            }}
                        >

                            <DashboardPetCard
                                pet={pet}
                                openDeleteModal={openDeleteModal}
                                openEditModal={openEditModal}
                                openViewModal={openViewModal}
                                openRequestsModal={openRequestsModal}
                            />

                        </motion.div>

                    ))
                }

            </div>

            {/*DELETE MODAL*/}

            {
                showDeleteModal && (

                    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
                        >

                            {/* Paw */}
                            <div className="text-center text-6xl">

                                🐾

                            </div>

                            {/* Title */}
                            <h2 className="mt-5 text-center text-3xl font-bold text-gray-800">

                                Delete Pet?

                            </h2>

                            {/* Text */}
                            <p className="mt-3 text-center leading-7 text-gray-600">

                                This action cannot be undone.
                                Are you sure you want to remove this pet listing?

                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex items-center justify-center gap-4">

                                {/* Cancel */}
                                <button
                                    onClick={() => setShowDeleteModal(false)}
                                    className="btn rounded-xl border-0 bg-gray-200 text-gray-700 hover:bg-gray-300"
                                >

                                    Cancel

                                </button>


                                {/* Delete */}
                                <button
                                    onClick={handleDelete}
                                    className="btn rounded-xl border-0 bg-red-500 text-white hover:bg-red-600"
                                >

                                    Delete

                                </button>
                                {/* open Requests */}
                                <button
                                    onClick={() =>
                                        openRequestsModal(pet)
                                    }
                                    className="btn rounded-xl border-0 bg-cyan-500 text-white hover:bg-cyan-600"
                                >

                                    Requests

                                </button>

                            </div>

                        </motion.div>

                    </div>

                )
            }

            {/*Edit and view modal*/}

            <PetEditModal
                selectedPet={selectedPet}
            />
            <PetViewModal
                pet={selectedViewPet}
                showAdoptForm={showAdoptForm}
                setShowAdoptForm={setShowAdoptForm}
            />

            {/* Req modal */}

            <dialog
                id="requests_modal"
                className="modal"
            >

                <div className="modal-box max-w-3xl rounded-[35px]">

                    <h2 className="text-3xl font-black text-gray-800">

                        Adoption Requests

                    </h2>

                    <p className="mt-2 text-gray-500">

                        Requests for {selectedRequestsPet?.petName}

                    </p>

                    <div className="mt-8 space-y-4">

                        {
                            requests.length > 0 ? (

                                requests.map((request) => (

                                    <div
                                        key={request._id}
                                        className="rounded-3xl border border-gray-100 p-5"
                                    >

                                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                                            <div>

                                                <h3 className="text-2xl font-bold text-gray-800">

                                                    {request.adopterName}

                                                </h3>

                                                <p className="mt-2 text-gray-600">

                                                    {request.adopterEmail}

                                                </p>

                                                <p className="mt-2 text-gray-500">

                                                    Pickup Date: {request.pickupDate}

                                                </p>

                                            </div>

                                            <div className="flex flex-col items-end gap-3">

                                                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">

                                                    {request.status}

                                                </span>

                                                {
                                                    request.status === "pending" && (

                                                        <div className="flex gap-3">

                                                            <button
                                                                onClick={() =>
                                                                    handleApprove(request)
                                                                }
                                                                className="btn rounded-xl border-0 bg-green-500 text-white hover:bg-green-600"
                                                            >

                                                                Approve

                                                            </button>

                                                            <button
                                                                onClick={() =>
                                                                    handleReject(request)
                                                                }
                                                                className="btn rounded-xl border-0 bg-red-500 text-white hover:bg-red-600"
                                                            >

                                                                Reject

                                                            </button>

                                                        </div>

                                                    )
                                                }

                                            </div>

                                        </div>

                                    </div>

                                ))

                            ) : (

                                <div className="rounded-3xl border border-dashed p-10 text-center text-gray-500">

                                    No adoption requests found.

                                </div>

                            )
                        }

                    </div>

                    <div className="modal-action">

                        <form method="dialog">

                            <button className="btn rounded-2xl">

                                Close

                            </button>

                        </form>

                    </div>

                </div>

            </dialog>
        </div>


    );


};

export default MyListingsPage;