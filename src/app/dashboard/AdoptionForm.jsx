"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const AdoptionForm = ({ pet, setShowAdoptForm, }) => {

    const {
        data: session,
    } = authClient.useSession();

    const user = session?.user;

    const router = useRouter();

    const [pickupDate, setPickupDate] = useState("");

    const [message, setMessage] = useState("");

    const handleAdoptionRequest = async (e) => {
        e.preventDefault();

        if (!user?.email) {

            router.push("/login");

            return;

        }
    
       


        const adoptionInfo = {

            petId: pet?._id,
            petName: pet?.petName,
            petImage: pet?.image,

            adopterName: user?.name,
            adopterEmail: user?.email,

            pickupDate,
            message,

            status: "pending",

            createdAt: new Date(),

        };



        const res = await fetch(
            "http://localhost:5000/adoption-request",
            {
                method: "POST",

                headers: {
                    "content-type": "application/json",
                },

                body: JSON.stringify(adoptionInfo),
            }
        );

        const data = await res.json();

        console.log(data);



        if (data.inserted) {

            Swal.fire({

                icon: "success",

                title: "Request Submitted",

                text: "Your adoption request has been submitted successfully.",

                timer: 1800,

                showConfirmButton: false,



            });

            document
                .getElementById("view_pet_modal")
                ?.close();

            setTimeout(() => {

                router.push("/dashboard/my-requests");

            }, 1800);

        }

        else {
            alert("You already requested this pet");
        }

        setPickupDate("");
        setMessage("");

    };




    return (

        <div className="flex h-full flex-col justify-between">

            <div>

                {/* heading */}
                <div>

                    <h2 className="text-3xl font-black text-gray-800">
                        Adoption Request
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Fill out the form below to request adoption for {pet?.petName}.
                    </p>

                </div>

                {/* form */}
                <form
                    onSubmit={handleAdoptionRequest}
                    className="mt-8 space-y-5"
                >

                    {/* pet name */}
                    <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Pet Name
                        </label>

                        <input
                            type="text"
                            value={pet?.petName}
                            readOnly
                            className="input input-bordered h-12 w-full rounded-2xl border-blue-100 bg-gray-100"
                        />

                    </div>

                    {/* user name */}
                    <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Your Name
                        </label>

                        <input
                            type="text"
                            value={user?.name || ""}
                            readOnly
                            className="input input-bordered h-12 w-full rounded-2xl border-blue-100 bg-gray-100"
                        />

                    </div>

                    {/* user email */}
                    <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Your Email
                        </label>

                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="input input-bordered h-12 w-full rounded-2xl border-blue-100 bg-gray-100"
                        />

                    </div>

                    {/* pickup date */}
                    <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Pickup Date
                        </label>

                        <input
                            type="date"
                            value={pickupDate}
                            onChange={(e) =>
                                setPickupDate(e.target.value)
                            }
                            required
                            className="input input-bordered h-12 w-full rounded-2xl border-blue-100 focus:border-blue-500 focus:outline-none"
                        />

                    </div>

                    {/* message */}
                    <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Message
                        </label>

                        <textarea
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            placeholder="Write a short message about why you want to adopt this pet..."
                            required
                            className="textarea textarea-bordered min-h-32 w-full rounded-2xl border-blue-100 focus:border-blue-500 focus:outline-none"
                        ></textarea>

                    </div>

                    {/* buttons */}
                    <div className="flex gap-4 pt-3">

                        <button
                            type="button"
                            onClick={() => setShowAdoptForm(false)}
                            className="btn h-12 flex-1 rounded-2xl border-0 bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >

                            Back

                        </button>

                        <button
                            type="submit"
                            className="btn h-12 flex-1 rounded-2xl border-0 bg-blue-600 text-white hover:bg-blue-700"
                        >

                            Submit Request

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
};

export default AdoptionForm;