'use client'
import { motion } from "framer-motion"
import { Dumbbell, Users, Apple, Waves } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Personal Training",
      description: "Expert-led one-on-one sessions customized to your fitness goals. Transform your body with dedicated guidance.",
      icon: Dumbbell,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Group Classes",
      description: "High-energy group workouts that combine motivation and results. Join our fitness community today.",
      icon: Users,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Nutrition Planning",
      description: "Personalized meal plans and nutritional guidance to maximize your fitness results.",
      icon: Apple,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Recovery Zone",
      description: "State-of-the-art recovery facilities including spa, sauna, and professional massage therapy.",
      icon: Waves,
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-black to-zinc-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        <h2 className="heading text-center">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Premium Services
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <div className="p-6">
                  <div className={`w-12 h-12 mb-6 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
