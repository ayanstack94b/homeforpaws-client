"use client";

import { motion } from "framer-motion";

import {FaPaw,FaFacebookF,FaInstagram,FaGithub,FaHeart,} from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
    {
        icon: FaFacebookF,
        url: "https://www.facebook.com/jhon.doe.2026/",
    },
    {
        icon: FaInstagram,
        url: "https://www.instagram.com/syntax_bree/",
    },
    {
        icon: FaGithub,
        url: "https://github.com/ayanstack94b",
    },
];


const Footer = () => {
  
    const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState("");
    const handleSubscribe = (e) => {

        e.preventDefault();

        if (!email) {
            return;
        }

        setShowPopup(true);

        setEmail("");

        setTimeout(() => {

            setShowPopup(false);

        }, 2000);

    };

    const quickLinks = [
        {
            name: "Featured Pets",
            path: "#featured-pets",
        },
        {
            name: "Why Adopt Pets",
            path: "#why-adopt",
        },
        {
            name: "Success Stories",
            path: "#success-stories",
        },
        {
            name: "Pet Care Tips",
            path: "#pet-care",
        },
    ];

    return (

        <footer className="overflow-hidden border-t border-blue-100 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

            <div className="w-11/12 mx-auto py-20">

                <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >

                        {/* Logo */}
                        <div id="" className="flex items-center gap-3">

                            <motion.div
                                animate={{
                                    rotate: [0, -10, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                }}
                                className="text-4xl text-blue-600"
                            >

                                <FaPaw />

                            </motion.div>

                            <div>

                                <h2 className="text-3xl font-bold text-blue-600">

                                    HomeForPaws

                                </h2>

                                <p className="mt-1 text-sm text-gray-500">

                                    Give Pets A Forever Home

                                </p>

                            </div>

                        </div>

                        {/* Description */}
                        <p className="mt-8 max-w-md leading-8 text-gray-600">

                            HomeForPaws connects loving families with pets
                            searching for care, safety, and a forever home.

                        </p>

                        {/* Socials */}
                        <div className="mt-8 flex items-center gap-4">

                            {
                                socialLinks.map((social, index) => {

                                    const Icon = social.icon;

                                    return (

                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{
                                                y: -5,
                                                scale: 1.1,
                                            }}
                                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white"
                                        >

                                            <Icon />

                                        </motion.a>

                                    );
                                })
                            }
                        </div>

                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:mx-auto"
                    >

                        <h3 className="text-2xl font-bold text-gray-800">

                            Quick Links

                        </h3>

                        <div className="mt-8 flex flex-col gap-5">

                            {
                                quickLinks.map((link, index) => (

                                    <motion.a
                                        key={index}
                                        href={link.path}
                                        whileHover={{ x: 8 }}
                                        className="text-lg text-gray-600 transition hover:text-blue-600"
                                    >

                                        {link.name}

                                    </motion.a>

                                ))
                            }

                        </div>

                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="text-2xl font-bold text-gray-800">

                            Join Our Community

                        </h3>

                        <p className="mt-6 leading-8 text-gray-600">

                            Stay connected with pet adoption stories,
                            pet care advice, and rescue updates.

                        </p>

                        {/* Input */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <form
                                onSubmit={handleSubscribe}
                                className="mt-8 flex flex-col gap-4 sm:flex-row"
                            >

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="input input-bordered h-14 flex-1 rounded-2xl border-blue-100 bg-white"
                                />

                                <button
                                    type="submit"
                                    className="btn h-14 rounded-2xl border-0 bg-blue-600 px-8 text-white hover:bg-blue-700"
                                >

                                    Subscribe

                                </button>

                            </form>
                        </div>

                    </motion.div>

                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 border-t border-blue-100 pt-8"
                >

                    <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">

                        <p className="text-gray-600">

                            © 2026 HomeForPaws. All rights reserved.

                        </p>

                        <div className="flex items-center gap-2 text-gray-600">

                            Made with

                            <motion.span
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                                className="text-red-500"
                            >

                                <FaHeart />

                            </motion.span>

                            for pets everywhere

                        </div>

                    </div>

                </motion.div>

            </div>
            {
                showPopup && (

                    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/20 backdrop-blur-sm px-4">

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="w-full max-w-sm rounded-[35px] bg-white p-8 text-center shadow-2xl"
                        >

                            {/* Animated Paw */}
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

                                Joined Successfully

                            </h2>

                            <p className="mt-3 leading-7 text-gray-600">

                                Thank you for joining our pet loving community.

                            </p>

                        </motion.div>

                    </div>

                )
            }

        </footer>
    );
};

export default Footer;