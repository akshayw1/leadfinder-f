"use client"

import { motion } from "framer-motion"
import { stats } from "../constants"
import styles from "../pages/style"

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <motion.div
        key={stat.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <motion.h4
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.2, duration: 0.3, type: "spring" }}
          className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
        >
          {stat.value}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.4, duration: 0.3 }}
          className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"
        >
          {stat.title}
        </motion.p>
      </motion.div>
    ))}
  </section>
)

export default Stats