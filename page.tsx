'use client'

import { motion } from 'framer-motion'
import { Heart, GamepadIcon, Coffee, Calendar, MessageCircle, Gift, Star } from 'lucide-react'
import { Snowfall } from './components/snowfall'
import { FloatingImage } from './components/floating-image'
import { SideBySide } from './components/side-by-side'
import { ImageGrid } from './components/image-grid'
import { Card, CardContent } from "@/components/ui/card"
import { GiftHighlight } from "./components/gift-highlight";

export default function NewYearWish() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white relative">
      <Snowfall />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Happy New Year 2025! 🎉
          </h1>
          <p className="text-xl md:text-2xl text-blue-200">
            To my amazing buddy, let's celebrate our incredible journey through 2024!
          </p>
        </motion.div>
      </section>

      {/* Floating Images Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FloatingImage
            src="/images/CVXYwpQ/1731399727230.jpg"
            alt="Mall memories"
            rotateDirection="left"
          />
          <FloatingImage
            src="/images/MZTRpVk/IMG-20250101-192958.jpg"
            alt="Gaming moments"
            className="mt-12"
            rotateDirection="right"
          />
          <FloatingImage
            src="/images/XxCvCsZ/IMG-20241231-225354.jpg"
            alt="Food adventures"
            rotateDirection="left"
          />
        </div>
      </section>

      {/* Daily Communications - Side by Side */}
      <section className="container mx-auto px-4 py-16">
        <SideBySide
          image={{
            src: "/images/IMG-20250101-194424.jpg",
            alt: "Our daily chats across platforms"
          }}
          content={{
            title: "Our Daily Conversations",
            text: "There's hardly been a day when we didn't talk! We chat almost everyday, doesn't matter if it's WhatsApp, Snapchat, Instagram, or even LinkedIn. Even in UNO mobile game, we've played 500+ games and still counting."
          }}
        />
      </section>

      {/* Gaming Grid */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Gaming Adventures</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Games... we've played so many together! From Smash Karts to Tough Love Arena, 
              Ninja Jump (where you're the only pro!), to Headball where I had that long losing streak against you.
            </p>
          </CardContent>
        </Card>
        <ImageGrid
          images={[
            { src: "/images/IMG-20240729-WA0036.jpg", alt: "UNO games" },
            { src: "/images/10231476-102139355442-8-s5-100430286826-34-s5-v1.webp", alt: "Smash Karts" },
            { src: "/images/IMG-20241007-WA0025.jpg", alt: "Ninja Jump" },
            { src: "/images/IMG-20250101-194000.jpg", alt: "Tough Love Arena" },
            { src: "/images/IMG-20240713-WA0118.jpg", alt: "Headball" },
            { src: "/images/IMG-20241011-WA0011.jpg", alt: "Gaming moments" },
          ]}
        />
      </section>

      {/* Mall Day - Side by Side Reverse */}
      <section className="container mx-auto px-4 py-16">
        <SideBySide
          image={{
            src: "/images/IMG-20250101-200049.jpg",
            alt: "Mall day with friends"
          }}
          content={{
            title: "Mall Adventures",
            text: "Remember the day we went to mall with Het and Dhruvi? That day was just awesome - can say I can put that in some of the best moments of this year. We walked, we talked, we laughed... I enjoyed it a lot - kinda like a 10/10 day."
          }}
          imageLeft={false}
        />
      </section>

      {/* Food Adventures - Floating Images */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Food Adventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FloatingImage
            src="/images/IMG-20241231-225524.jpg"
            alt="McDonalds memories"
            rotateDirection="left"
          />
          <FloatingImage
            src="/images/IMG-20241231-225554.jpg"
            alt="The Burger Company"
            className="mt-12"
            rotateDirection="right"
          />
          <FloatingImage
            src="/images/IMG-20241231-225431.jpg"
            alt="Burger King celebration"
            rotateDirection="left"
          />
        </div>
        <div className="grid gap-8">
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">McDonalds After Hackathon</h3>
              <p className="text-gray-600 dark:text-gray-300">
                After the hackathon presentation rehearsal, we went to McDonalds. Having those burgers and fries together was just amazing! 
                But it wasn't just about the food - we had such a great time playing games on our phones and laughing together. 
                Those moments of fun talk and games made it one of the best experiences! 🍔
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">The Burger Company Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Then after a long time, we went to "The Burger Company" - and wow, what an experience that was! 
                You know what makes it special? It's not just about the food, it's about your whole vibe! 
                You make every moment enjoyable, whether we're eating, talking, or just hanging out. ✨
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Birthday Celebration at Burger King</h3>
              <p className="text-gray-600 dark:text-gray-300">
                This month's highlight was definitely our trip to Burger King for my belated birthday celebration! 
                It was such an awesome day - the perfect way to celebrate! The food was great, but your company made it special.
                These food adventures with you always turn into unforgettable memories! 🎉
              </p>
            </CardContent>
          </Card>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            <p className="text-lg text-blue-200 italic">
              "Every meal shared is a memory made, and with you, even simple burgers become extraordinary moments! 🌟"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Moments Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Special Moments</h2>
        <ImageGrid
          images={[
            { src: "/images/IMG-20241231-230301.jpg", alt: "The monkey gift" },
            { src: "/images/IMG-20241231-225617.jpg", alt: "Coding together" },
            { src: "/images/IMG-20241231-230053.jpg", alt: "Bus stand moments" },
            { src: "/images/IMG-20241231-225827.jpg", alt: "The special card" },
            { src: "/images/IMG-20241231-225323.jpg", alt: "Canteen chitchats" },
            { src: "/images/IMG-20241231-225909.jpg", alt: "Study sessions" },
          ]}
        />
      </section>

      {/* Special Gifts Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Precious Gifts</h2>
          <p className="text-xl text-blue-200">
            The most special presents aren't just things - they're pieces of our friendship ✨
          </p>
        </motion.div>

        <div className="grid gap-8">
          <GiftHighlight
            title="The Best Birthday Card Ever!"
            description="The card you gave me is the best gift I've ever received! It's not just a card - it's a treasure that holds all our memories and feelings. Every time I look at it, it reminds me of our amazing friendship and all the wonderful moments we've shared. It's truly number oneeeeeeee! This isn't just any card; it's a piece of our story that I'll cherish forever. The way you wrote those heartfelt words, making it so personal and meaningful - it shows just how special our friendship is."
            image="/images/Snapchat-1884088160.jpg"
            isSpecial={true}
          />

          <GiftHighlight
            title="The Adorable Monkey Sticker"
            description="That monkey sticker you gave me? YOU won't believe but It's one of the best gifts I've ever received! It might seem simple to others, but to me, it's so much more than just a sticker. Every time I see it, it brings a smile to my face, reminding me of our amazing friendship. It's these little thoughtful gifts that mean the most!"
            image="/images/IMG-20240908-WA0030.jpg"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                  I know its already too late to wish happy new year I actually planned to send it at the time of new year at 12:00 but due to technical issues possible nai hua hehe......but yk what here I have tried my best to tell how much awesome this year has been with you!! you are just awesome , you always bring the vibe buddy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-red-500 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Here's to Our Forever Friendship! 
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            I hope 2025 will go the same way and all the upcoming years as well. I want to remain buddies with you forever... like forever!!!!!!!!!!!!!!!!!!!!!!!
          </p>
          <p className="text-2xl text-blue-100 font-bold mb-8">
            Thank you buddy for making my year this much great!
          </p>
          <div className="flex justify-center gap-4">
            <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" />
            <Star className="w-8 h-8 text-yellow-400 animate-bounce" />
            <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" />
          </div>
        </motion.div>
      </section>
    </div>
  )
}

