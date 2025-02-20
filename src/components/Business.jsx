"use client"

import { motion } from "framer-motion"
import { features } from "../constants"
import styles, { layout } from "../pages/style"
import Button from "./Button"

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: index * 0.2 + 0.2, duration: 0.3 }}
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="feature-icon" className="w-[50%] h-[50%] object-contain" />
    </motion.div>
    <div className="flex-1 flex flex-col ml-3">
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
        className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"
      >
        {title}
      </motion.h4>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.4, duration: 0.3 }}
        className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]"
      >
        {content}
      </motion.p>
    </div>
  </motion.div>
)

const Business = () => (
  <section id="features" className={layout.section}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={layout.sectionInfo}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={styles.heading2}
      >
        Empowering Businesses with Unlimited Leads
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Our mission is clear: to be the catalyst for your business's expansion. We understand that a constant stream of quality leads is the lifeblood of any successful enterprise. Hence, our focus is on delivering customized and scalable lead generation strategies that propel your business forward.
      </motion.p>
      
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-white text-[20px] font-semibold mt-6"
      >
        What Sets Us Apart
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`${styles.paragraph} mt-2`}
      >
        At the core of our approach lies a dedication to harnessing cutting-edge technology coupled with deep industry insights. Our team comprises experts well-versed in the nuances of lead generation, utilizing state-of-the-art tools and methodologies to unearth potential leads across diverse industries.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {/* <Button styles={`mt-10`} text="Get Started with Boomnify" /> */}
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${layout.sectionImg} flex-col`}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
)

export default Business