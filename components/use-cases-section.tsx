"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, GraduationCap, Building, Store, HomeIcon, CheckCircle2, Rocket } from "lucide-react"

const industries = [
  {
    id: "retail",
    icon: Store,
    label: "Retail & Malls",
    title: "Retail & Malls: Enhancing Shopper Security",
    features: [
      {
        title: "AI-Powered Surveillance:",
        description: "Implement smart cameras with real-time threat detection to enhance mall security.",
      },
      {
        title: "Contactless Access Control:",
        description: "Use biometric or QR-based entry systems for seamless and secure shopper access.",
      },
      {
        title: "Emergency Alert System:",
        description: "Deploy mobile app alerts and in-store kiosks for quick response during emergencies.",
      },
    ],
  },
  {
    id: "workspaces",
    icon: Building2,
    label: "Workspaces",
    title: "Workspaces: Secure Office Environments",
    features: [
      {
        title: "Access Management:",
        description: "Smart access control for employees and visitors.",
      },
      {
        title: "Workspace Monitoring:",
        description: "AI-powered surveillance for office safety.",
      },
      {
        title: "Emergency Response:",
        description: "Quick alert system for security incidents.",
      },
    ],
  },
  {
    id: "healthcare",
    icon: Building,
    label: "Healthcare",
    title: "Healthcare: Patient & Staff Safety",
    features: [
      {
        title: "Patient Monitoring:",
        description: "Advanced surveillance for patient safety.",
      },
      {
        title: "Staff Security:",
        description: "Protecting healthcare workers 24/7.",
      },
      {
        title: "Emergency Protocols:",
        description: "Rapid response system for medical emergencies.",
      },
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    label: "Educational Institutions",
    title: "Education: Campus Security Solutions",
    features: [
      {
        title: "Campus Monitoring:",
        description: "Comprehensive surveillance system.",
      },
      {
        title: "Student Safety:",
        description: "Advanced security for student areas.",
      },
      {
        title: "Emergency Management:",
        description: "Quick response protocols for incidents.",
      },
    ],
  },
  {
    id: "small-business",
    icon: HomeIcon,
    label: "Small-Scale Businesses",
    title: "Small Business: Affordable Security",
    features: [
      {
        title: "Smart Surveillance:",
        description: "Cost-effective security solutions.",
      },
      {
        title: "Access Control:",
        description: "Simple yet secure entry management.",
      },
      {
        title: "Mobile Alerts:",
        description: "Real-time notifications for owners.",
      },
    ],
  },
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("retail")

  const activeIndustry = industries.find((i) => i.id === activeTab) || industries[0]

  return (
    <section id="use-cases" className="container py-12 md:py-16 space-y-8 md:space-y-12">
      <div className="space-y-4 text-center">
        <Badge variant="secondary" className="gap-1">
          <Rocket className="w-4 h-4" />
          Use Cases
        </Badge>

        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
          Real-World Applications of Our
          <br />
          Security Solutions
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore how Mahfooz AI transforms security across various sectors. Our tailored solutions address the unique
          challenges faced in Saudi Arabia.
        </p>
      </div>

      <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        {industries.map((industry) => {
          const Icon = industry.icon
          return (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full whitespace-nowrap transition-colors text-xs md:text-sm
                ${activeTab === industry.id ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}`}
            >
              <Icon className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-medium">{industry.label}</span>
            </button>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center bg-gray-50 rounded-3xl p-6 md:p-8">
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold">{activeIndustry.title}</h3>
          <div className="space-y-3 md:space-y-4">
            {activeIndustry.features.map((feature, index) => (
              <div key={index} className="flex gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <div>
                  <span className="font-medium text-sm md:text-base">{feature.title}</span>{" "}
                  <span className="text-muted-foreground text-xs md:text-sm">{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
          <Button size="lg">Request a Demo</Button>
        </div>

        <div className="relative aspect-[9/16] md:aspect-square w-full max-w-xs mx-auto md:max-w-none">
        <video
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/useCases.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

