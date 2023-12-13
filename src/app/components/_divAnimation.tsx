import { motion } from "framer-motion"


export default function TemplateDiv({ children }: { children: React.ReactNode }) {

return (
    <motion.div
  animate={{ x: 100 }}
  transition={{ delay: 1 }}
>
    {children}
    </motion.div>
    
    )
}