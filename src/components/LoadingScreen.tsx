"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center"
          >
            {/* Airplane icon */}
            <div className="w-24 h-24 mb-6 rounded-full bg-slate-800 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-1">
              AFTA <span className="text-amber-500">Academy</span>
            </h1>
            
            <div className="mt-8 flex gap-2">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                className="w-3 h-3 rounded-full bg-amber-500"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                className="w-3 h-3 rounded-full bg-amber-500"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="w-3 h-3 rounded-full bg-amber-500"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
