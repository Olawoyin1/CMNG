import { motion } from "framer-motion"
import type { ReactNode, FC } from "react"

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
} as const

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
