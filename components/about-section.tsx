"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Home, ShieldCheck } from "lucide-react"
import type React from "react"

export function AboutSection() {
  const textRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("text-gray-300")
            entry.target.classList.add("text-foreground")
          } else {
            entry.target.classList.remove("text-foreground")
            entry.target.classList.add("text-gray-300")
          }
        })
      },
      {
        threshold: 0.8,
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="container py-12 md:py-16 space-y-8 md:space-y-12">
      <div className="space-y-4 max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          About
        </Badge>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight space-y-2">
          <span ref={(el) => (textRefs.current[0] = el)} className="block transition-colors duration-500">
            Mahfooz AI offers cutting-edge AI-driven security
          </span>
          <span ref={(el) => (textRefs.current[1] = el)} className="block text-gray-300 transition-colors duration-500">
            solutions specifically designed to address the unique
          </span>
          <span ref={(el) => (textRefs.current[2] = el)} className="block text-gray-300 transition-colors duration-500">
            challenges faced in Saudi Arabia. Our platform seamlessly
          </span>
          <span ref={(el) => (textRefs.current[3] = el)} className="block text-gray-300 transition-colors duration-500">
            integrates with existing systems, ensuring real-time threat
          </span>
          <span ref={(el) => (textRefs.current[4] = el)} className="block text-gray-300 transition-colors duration-500">
            detection and enhanced public safety.
          </span>
        </h2>
      </div>

      <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden">
      <video
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/mainVid.mp4" type="video/mp4" />
          </video>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <FeatureCard icon={Clock} title="Real-time threat detection & automated alerts" />
        <FeatureCard icon={Shield} title="Privacy-focused AI monitoring" />
        <FeatureCard icon={Home} title="Scalable solutions for enterprises, hotels, and retail businesses" />
        <FeatureCard icon={ShieldCheck} title="Compliance with Saudi Arabian security regulations" />
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
}: {
  icon: React.ElementType
  title: string
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
      <div className="p-2 md:p-3 rounded-full bg-primary/10">
        <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
      </div>
      <p className="text-xs md:text-sm font-medium">{title}</p>
    </div>
  )
}

