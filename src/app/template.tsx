"use client"
import { motion , AnimatePresence } from "framer-motion"
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "Tween", duration: 0.6 }}
    >
    
       {children}
      </motion.main>
    )
  }