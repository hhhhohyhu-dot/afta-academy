"use client";
import { motion } from "framer-motion";

export default function FlyingPlane() {
  return (
    <>
      {/* الطائرة 1: سريعة */}
      <motion.div
        initial={{ x: "-150px", y: "10vh" }}
        animate={{ x: "110vw", y: "15vh" }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        className="fixed z-40 text-6xl pointer-events-none"
      >
        ✈️
      </motion.div>

      {/* الطائرة 2: متوسطة السرعة */}
      <motion.div
        initial={{ x: "-200px", y: "50vh" }}
        animate={{ x: "110vw", y: "45vh" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, delay: 2 }}
        className="fixed z-40 text-5xl pointer-events-none"
      >
        ✈️
      </motion.div>

      {/* الطائرة 3: سريعة جداً */}
      <motion.div
        initial={{ x: "-150px", y: "80vh" }}
        animate={{ x: "110vw", y: "75vh" }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity, delay: 5 }}
        className="fixed z-40 text-6xl pointer-events-none"
      >
        ✈️
      </motion.div>
    </>
  );
}