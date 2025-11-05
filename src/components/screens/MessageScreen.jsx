"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happy Birthday, Khaira Fathima! 🎂✨
                        Another beautiful year has passed, and watching you grow has been one of the sweetest joys of my life.
                        You and Khansa are the light of our home, the smile in our hearts, and the cutest reason behind so many happy moments.

                        I pray that Allah fills your life with endless laughter, good health, loving memories, and a future as bright as your shining eyes.
                        May every step you take be protected, blessed, and full of love.

                        To your amazing parents — my dear Bhaiya and Bhabhi — may Allah bless you with strength, happiness, and the joy of watching her grow into the wonderful person she is destined to be.
                        You both are doing an incredible job, and I am always proud of you.

                        And to you, my little Laddu — your Abbu Chacha will always be here for your smiles, your stories, and your celebrations.
                        Never forget how loved you are — today, tomorrow, and always. 💖

                        Happy Birthday, meri pyari bhateeji.
                        May your life be as sweet and beautiful as you are.
                        With all my love and duas,
                        – Abbu Chacha 🤍
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
