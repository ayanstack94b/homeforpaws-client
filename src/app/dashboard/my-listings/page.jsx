"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import PuppySpinner from "@/components/shared/PuppySpinner";
import DashboardPetCard from "@/components/dashboard/DashboardPetCard";
import PetEditModal from "../PetEditModal";
import PetViewModal from "../PetViewModal";


const MyListingsPage = () => {

    const [pets, setPets] = useState([]);

    const [loading, setLoading] = useState(true);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedPetId, setSelectedPetId] = useState(null);

    const [selectedPet, setSelectedPet] = useState(null);

    const [selectedViewPet, setSelectedViewPet] = useState(null);

    useEffect(() => {

        fetch("http://localhost:5000/pet")
            .then((res) => res.json())
            .then((data) => {

                setPets(data);

                setLoading(false);

            });

    }, []);


    /*OPEN View MODAL*/
    const openViewModal = (pet) => {

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

    /*LOADING*/

    if (loading) {

        return <PuppySpinner />;

    }

    return (

        <div>

            {/* PAGE HEADING*/}

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
            />

        </div>
    );
};

export default MyListingsPage;