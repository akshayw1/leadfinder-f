"use client"

import { motion } from "framer-motion"
import { apple, bill, google } from "../assets"
import styles, { layout } from "../pages/style"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={layout.sectionImgReverse}
    >
      <motion.img
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        src="/img2.png"
        alt="billing"
        className="w-[100%] h-[20rem] rounded-md relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={layout.sectionInfo}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={styles.heading2}
      >
        Unlock Unlimited Leads with Boomnify
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Subscribe now to access high-quality, tailored leads that empower your business growth. Start your journey towards a thriving client base today!
      </motion.p>
    </motion.div>
  </section>
)

export default Billing