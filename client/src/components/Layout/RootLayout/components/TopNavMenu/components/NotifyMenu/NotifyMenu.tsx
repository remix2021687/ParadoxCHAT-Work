import type React from "react";
import { motion } from "motion/react"
import { CaretDoubleRight } from "@phosphor-icons/react"
import { NotifyMenuMessage } from "./components/NotifyMenuMessage/NotifyMenuMessage";
 
export const NotifyMenu: React.FC<{isOpen: boolean}> = ({ isOpen }) => {
    return (
        <motion.section
            className="NotifyMenu"
            initial={{ transform: 'translateX(100%)' }}
            animate={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
            transition={{ duration: 0.3 }}
        >
            <section className="NotifyMenu_header">
                <h1>Уведомления</h1>
                <button>
                    <CaretDoubleRight size={24} weight="bold" />
                </button>
            </section>
            <section className="NotifyMenu_conetent">
                <NotifyMenuMessage />
                <NotifyMenuMessage />
                <NotifyMenuMessage />
            </section>
        </motion.section>
    )
}