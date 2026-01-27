import type React from "react";
import { motion } from "motion/react"
 
export const NotifyMenu: React.FC<{isOpen: boolean}> = ({ isOpen }) => {
    return (
        <motion.section
            className="NotifyMenu"
            initial={{ left: '100%' }}
            animate={{ left: isOpen ? '0%' : '100%' }}
            transition={{ duration: 0.3 }}
        >

        </motion.section>
    )
}