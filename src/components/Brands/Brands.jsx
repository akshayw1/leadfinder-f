

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const companies = [
  { name: 'RollWorks', image: 'https://bombora.com/wp-content/uploads/2021/04/rollworks.jpeg' },
  { name: 'HubSpot', image: 'https://bombora.com/wp-content/uploads/2021/04/hubspot.png' },
  { name: 'Leadspace', image: 'https://bombora.com/wp-content/uploads/2021/04/leads.jpeg' },
  { name: 'LinkedIn', image: 'https://bombora.com/wp-content/uploads/2021/04/linkedin.png' },
  { name: 'Marketo', image: 'https://bombora.com/wp-content/uploads/2021/04/marketo.jpeg' },
  { name: 'Terminus', image: 'https://bombora.com/wp-content/uploads/2019/05/Partner-Terminus-tile.jpg' },
  { name: 'Integrate', image: 'https://bombora.com/wp-content/uploads/2020/07/Partner-Filter-tiles-Integrate.jpg' },
  { name: 'Qualified', image: 'https://bombora.com/wp-content/uploads/2022/09/2.png' },
  { name: 'Intentsify', image: 'https://bombora.com/wp-content/uploads/2022/09/1.png' },
  { name: 'Salesforce', image: 'https://bombora.com/wp-content/uploads/2021/04/salesforce.png' },
  { name: 'Adobe', image: 'https://bombora.com/wp-content/uploads/2021/04/adobe-1.png' },
  { name: '6sense', image: 'https://bombora.com/wp-content/uploads/2021/04/6sense.jpeg' },
]

const Brands = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView && containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth
      const viewportWidth = containerRef.current.offsetWidth

      controls.start({
        x: [0, -(scrollWidth - viewportWidth)],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [isInView, controls])

  return (
    <section className="py-16 rounded-md bg-blue-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Top Companies Using Boomnify for leads Generations</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
        Boomnify Intent Leads Generation for your business!
        </p>
        <div ref={containerRef} className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={controls}
          >
            {companies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Brands;
