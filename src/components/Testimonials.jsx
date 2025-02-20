"use client"

import { motion } from "framer-motion"
import styles from "../pages/style"
import VideoSection from "./VideoSection/VideoSection"

const TermsAndConditions = () => (
  <section id="terms" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`${styles.heading2} text-center md:text-left`}
      >
        Subscribe to Access Lead Generation Features
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full md:mt-0 mt-6 text-center md:text-left"
      >
        <p className={`${styles.paragraph} max-w-[450px]`}>
          By subscribing, you gain access to our powerful lead generation tools and resources to help grow your business exponentially.
        </p>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-[1]"
    >
      <div className="flex flex-col space-y-6">
        {[
          {
            title: "Services Offered",
            content: "Boomnify specializes in online lead generation, helping businesses find unlimited leads from diverse sources."
          },
          {
            title: "Client Responsibilities",
            content: "Clients must provide accurate information and support the lead generation process by supplying essential data."
          },
          {
            title: "Lead Quality and Guarantee",
            content: "We strive for high-quality leads but cannot guarantee conversions. Leads are validated and sourced legitimately."
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="font-poppins font-semibold text-white text-[20px] mb-2">{item.title}</h3>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{item.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col space-y-6">
        {[
          {
            title: "Data Confidentiality and Usage",
            content: "All client data is confidential and used responsibly, with anonymized data possibly used for analysis."
          },
          {
            title: "Service Modifications and Termination",
            content: "We reserve the right to modify terms with notice. Clients may terminate services per the agreed terms."
          },
          {
            title: "Limitation of Liability",
            content: "We are not liable for direct or indirect damages due to service usage, aiming for reliability and accuracy."
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="font-poppins font-semibold text-white text-[20px] mb-2">{item.title}</h3>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

   
  </section>
)

export default TermsAndConditions