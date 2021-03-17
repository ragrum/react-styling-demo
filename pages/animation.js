import { motion } from "framer-motion";

export default function Animation() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        className="flex justify-center items-center w-80 h-80 bg-white"
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          whileHover={{ scale: 1.5 }}
          className="w-20 h-20 rounded-full bg-red-600"
        />
      </motion.div>
    </div>
  );
}
