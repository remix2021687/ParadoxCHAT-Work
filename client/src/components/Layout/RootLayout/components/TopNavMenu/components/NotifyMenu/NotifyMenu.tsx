import type React from "react";
import { motion } from "motion/react"
import { CaretDoubleRight } from "@phosphor-icons/react"
 
export const NotifyMenu: React.FC<{isOpen: boolean}> = ({ isOpen }) => {
    return (
        <motion.section
            className="NotifyMenu"
            initial={{ left: '100%' }}
            animate={{ left: isOpen ? '50%' : '100%' }}
            transition={{ duration: 0.3 }}
        >
            <section className="NotifyMenu_header">
                <h1>Уведомления</h1>
                <button>
                    <CaretDoubleRight size={24} weight="bold" />
                </button>
            </section>
            <section className="NotifyMenu_conetent">
                
            </section>
        </motion.section>
    )
}