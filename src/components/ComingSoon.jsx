import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        background:
          "linear-gradient(135deg, #6bbf59 0%, #f4a261 100%)",
        backgroundSize: "cover",
      }}
    >
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2933/2933603.png"
        alt="Tractor"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
        className="w-32 h-32 mb-6"
      />

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4 drop-shadow-lg"
      >
        🚜 Something Great is Growing!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-lg md:text-xl max-w-2xl text-white/90"
      >
        Our new platform is being cultivated! Soon you’ll be able to browse, compare, and connect with the best in agricultural equipment and farming products.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-all shadow-lg">
          Notify Me
        </button>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
