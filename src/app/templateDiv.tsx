import { motion } from "framer-motion"

export const templateDiv = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >{children}</motion.div>
)