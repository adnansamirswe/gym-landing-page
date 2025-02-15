'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Dumbbell, Clock, Award, Users } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Clock, value: '24/7', label: 'Access Available', color: 'from-blue-500 to-purple-500' },
    { icon: Users, value: '50+', label: 'Expert Trainers', color: 'from-red-500 to-orange-500' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'from-green-500 to-emerald-500' },
    { icon: Dumbbell, value: '1000+', label: 'Members Strong', color: 'from-yellow-500 to-orange-500' },
  ]

  const features = [
    "State-of-the-art Equipment",
    "Personal Training Programs",
    "Nutrition Consultation",
    "Group Fitness Classes",
    "Recovery & Spa Facilities",
    "Performance Tracking"
  ]

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-zinc-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            More Than Just A
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Gym</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience fitness redefined at Beast Mode. Where passion meets performance, and goals become achievements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/gym-about.jpg"
                alt="Premium gym equipment"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Stats Grid */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] grid grid-cols-2 gap-4 bg-zinc-900/90 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-10"
          >
            <h3 className="text-2xl font-bold mb-6">
              Elevate Your Fitness Journey
            </h3>
            <p className="text-gray-400 mb-8">
              Since 2010, Beast Mode has been redefining the fitness experience. Our state-of-the-art facility combines cutting-edge equipment, expert guidance, and a supportive community to help you achieve your fitness aspirations.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300"
            >
              Explore Our Facilities
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
