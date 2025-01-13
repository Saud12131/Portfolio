import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen p-4">
      {/* Text Section */}
      <motion.div
        className="text-right max-w-lg mr-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name */}
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-slate-50"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Saud Sayyed
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="text-lg text-slate-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Hey there! I’m <strong className="text-slate-50">Saud Sayyed</strong>, <br />
          a passionate <span className="font-semibold">Software Engineer</span> specializing in
          <span className="font-semibold text-slate-50"> Frontend, Backend, and Fullstack Development.</span>
        </motion.p>

        {/* Call to Action */}
        <motion.p
          className="text-md text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-slate-50 font-bold">
          Feel free to 
            connect
            with me to learn more about my work or collaborate on exciting projects!

          </span>
        </motion.p>
      </motion.div>

      {/* Animated Image */}
      <motion.img
        src="/Screenshot_2024_0101_211846.jpg"
        alt="Saud Sayyed"
        className="w-48 h-48 rounded-full object-cover mb-8 md:mb-0"
        animate={{
          y: [0, -10, 0], // Moves image up and down
        }}
        transition={{
          duration: 2, // Time for one cycle of animation
          repeat: Infinity, // Animation repeats infinitely
        }}
      />
    </div>
  );
}
