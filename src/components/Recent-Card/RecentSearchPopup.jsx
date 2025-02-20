'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const recentSearches = [
    {"name": "Alice W.", "location": "Toronto, Canada", "time": "31 minutes ago"},
    {"name": "Lucas F.", "location": "São Paulo, Brazil", "time": "29 minutes ago"},
    {"name": "Amina K.", "location": "Dubai, UAE", "time": "28 minutes ago"},
    {"name": "Takumi Y.", "location": "Tokyo, Japan", "time": "27 minutes ago"},
    {"name": "Priya S.", "location": "New Delhi, India", "time": "26 minutes ago"},
    {"name": "Ahmed N.", "location": "Cairo, Egypt", "time": "25 minutes ago"},
    {"name": "Carlos G.", "location": "Mexico City, Mexico", "time": "24 minutes ago"},
    {"name": "Bianca R.", "location": "Rome, Italy", "time": "23 minutes ago"},
    {"name": "Henrik L.", "location": "Stockholm, Sweden", "time": "22 minutes ago"},
    {"name": "Fiona B.", "location": "Sydney, Australia", "time": "21 minutes ago"},
    {"name": "Eva M.", "location": "Berlin, Germany", "time": "20 minutes ago"},
    {"name": "Zhao L.", "location": "Beijing, China", "time": "19 minutes ago"},
    {"name": "Maria P.", "location": "Madrid, Spain", "time": "18 minutes ago"},
    {"name": "Oliver C.", "location": "London, UK", "time": "17 minutes ago"},
    {"name": "Hassan A.", "location": "Istanbul, Turkey", "time": "16 minutes ago"},
    {"name": "Isabella F.", "location": "Buenos Aires, Argentina", "time": "15 minutes ago"},
    {"name": "Sergei K.", "location": "Moscow, Russia", "time": "14 minutes ago"},
    {"name": "Niko T.", "location": "Helsinki, Finland", "time": "13 minutes ago"},
    {"name": "Jean D.", "location": "Paris, France", "time": "12 minutes ago"},
    {"name": "Julia W.", "location": "Cape Town, South Africa", "time": "11 minutes ago"},
    {"name": "Michael O.", "location": "Auckland, New Zealand", "time": "10 minutes ago"},
    {"name": "Rahul R.", "location": "Mumbai, India", "time": "9 minutes ago"},
    {"name": "Tom M.", "location": "Dublin, Ireland", "time": "8 minutes ago"},
    {"name": "Ali B.", "location": "Riyadh, Saudi Arabia", "time": "7 minutes ago"},
    {"name": "Clara J.", "location": "Vienna, Austria", "time": "6 minutes ago"},
    {"name": "Pablo S.", "location": "Lima, Peru", "time": "5 minutes ago"},
    {"name": "Samuel H.", "location": "Los Angeles, USA", "time": "4 minutes ago"},
    {"name": "Li Wei", "location": "Singapore", "time": "3 minutes ago"},
    {"name": "Ines C.", "location": "Lisbon, Portugal", "time": "2 minutes ago"},
    {"name": "John M.", "location": "Chicago, USA", "time": "1 minute ago"},
    {"name": "Matteo F.", "location": "Milan, Italy", "time": "59 minutes ago"},
    {"name": "Larisa D.", "location": "Bucharest, Romania", "time": "58 minutes ago"},
    {"name": "Igor V.", "location": "Belgrade, Serbia", "time": "57 minutes ago"},
    {"name": "Carla N.", "location": "Montevideo, Uruguay", "time": "56 minutes ago"},
    {"name": "Fiona G.", "location": "Glasgow, UK", "time": "55 minutes ago"},
    {"name": "Javier L.", "location": "Bogota, Colombia", "time": "54 minutes ago"},
    {"name": "Amara B.", "location": "Accra, Ghana", "time": "53 minutes ago"},
    {"name": "David S.", "location": "Dallas, USA", "time": "52 minutes ago"},
    {"name": "Ming H.", "location": "Seoul, South Korea", "time": "51 minutes ago"},
    {"name": "Zara Q.", "location": "Islamabad, Pakistan", "time": "50 minutes ago"},
    {"name": "Choi Y.", "location": "Hong Kong", "time": "49 minutes ago"},
    {"name": "Elena V.", "location": "Athens, Greece", "time": "48 minutes ago"},
    {"name": "Miguel R.", "location": "Quito, Ecuador", "time": "47 minutes ago"},
    {"name": "Bjorn H.", "location": "Oslo, Norway", "time": "46 minutes ago"},
    {"name": "Sofia P.", "location": "Naples, Italy", "time": "45 minutes ago"},
    {"name": "Rajesh K.", "location": "Colombo, Sri Lanka", "time": "44 minutes ago"},
    {"name": "Mira L.", "location": "Nairobi, Kenya", "time": "43 minutes ago"},
    {"name": "Jake W.", "location": "Atlanta, USA", "time": "42 minutes ago"},
    {"name": "Hanna B.", "location": "Munich, Germany", "time": "41 minutes ago"},
    {"name": "Daniel T.", "location": "Vancouver, Canada", "time": "40 minutes ago"},
    {"name": "Giulia C.", "location": "Florence, Italy", "time": "39 minutes ago"},
    {"name": "Yasmin E.", "location": "Casablanca, Morocco", "time": "38 minutes ago"},
    {"name": "Liam P.", "location": "Melbourne, Australia", "time": "37 minutes ago"},
    {"name": "Fatima Z.", "location": "Karachi, Pakistan", "time": "36 minutes ago"},
    {"name": "Pierre L.", "location": "Lyon, France", "time": "35 minutes ago"},
    {"name": "Gustavo A.", "location": "Porto Alegre, Brazil", "time": "34 minutes ago"},
    {"name": "Lucas P.", "location": "Buenos Aires, Argentina", "time": "33 minutes ago"},
    {"name": "Mia R.", "location": "Auckland, New Zealand", "time": "32 minutes ago"},
    {"name": "Jorge S.", "location": "San Juan, Puerto Rico", "time": "31 minutes ago"}
]


export default function RecentSearchPopup() {
  const randInd = () =>{
    const randomIndex = Math.floor(Math.random() * recentSearches.length)
    return randomIndex;
  }

  const rind = randInd();
  const [currentSearch, setCurrentSearch] = useState(recentSearches[rind])
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)


  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * recentSearches.length)
        setCurrentSearch(recentSearches[randomIndex])
        setIsVisible(true)
        setIsAnimating(false)
      }, 1000) // Wait for fade out animation to complete
    }, 3000 + Math.random() * 5000) // Random interval between 3-4 seconds

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-4 left-4 bg-gray-900 bg-opacity-80  backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-sm transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors duration-200"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
            {currentSearch.name[0]}
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-sm font-medium text-gray-100">{currentSearch.name}</p>
          <p className="text-xs text-gray-300">from {currentSearch.location}</p>
          <p className="text-xs text-gray-400 mt-1">{currentSearch.time}</p>
        </div>
      </div>
      <div className="mt-2 pt-2 border-t border-gray-700">
        <p className="text-xs text-gray-300">Activated a plan</p>
      </div>
    </div>
  )
}