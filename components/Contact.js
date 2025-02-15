'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const stats = [
    { number: "1,000+", label: "Active Members" },
    { number: "50+", label: "Expert Trainers" },
    { number: "100+", label: "Weekly Classes" },
    { number: "95%", label: "Success Rate" }
  ]

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-black to-orange-500/20" />
      
      <div className="relative container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Transformation?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join now and get 20% off your first month. Start your journey to a better you today.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-zinc-900/50 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-800"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black/50 border border-zinc-800 focus:border-red-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-black/50 border border-zinc-800 focus:border-red-500 transition-colors"
              />
              <select className="w-full p-3 rounded-lg bg-black/50 border border-zinc-800 focus:border-red-500 transition-colors">
                <option value="">Select Membership Type</option>
                <option value="basic">Basic Plan</option>
                <option value="premium">Premium Plan</option>
                <option value="elite">Elite Plan</option>
              </select>
              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-lg py-6">
                Start Your Journey
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
