'use client'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import YouTube from "react-youtube"

export default function Hero() {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      modestbranding: 1,
      playsinline: 1,
      enablejsapi: 1,
    }
  }

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.playVideo();
    event.target.mute();
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <YouTube
            videoId="HQfF5XRVXjU"
            opts={{
              ...videoOptions,
              width: '100%',
              height: '100%',
            }}
            onReady={onReady}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none"
            style={{ opacity: 0.6 }}
            onEnd={(event) => event.target.playVideo()} // For looping
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Transform Your Body,
          <br />
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Transform Your Life
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Join the ultimate fitness experience where limits don&apos;t exist
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-lg"
          >
            Start Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 text-lg hover:bg-white hover:text-black transition-colors"
          >
            View Programs
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
