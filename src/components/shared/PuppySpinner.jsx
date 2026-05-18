"use client";

import { motion } from "framer-motion";

const PuppySpinner = () => {
    return (

        <div className="flex min-h-75 items-center justify-center">

            <motion.div
                animate={{
                    rotate: [0, -10, 10, -10, 0],
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                }}
                className="text-7xl"
            >
                🐶
            </motion.div>

        </div>
    );
};

export default PuppySpinner;