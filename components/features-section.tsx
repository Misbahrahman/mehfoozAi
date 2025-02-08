import { Badge } from "@/components/ui/badge"
import { Cpu, Shield, Lock, Zap } from "lucide-react"
import type React from "react" // Import React

export function FeaturesSection() {
  return (
    <section id="features" className="container py-12 md:py-16 space-y-8 md:space-y-12">
      <div className="space-y-4 text-center">
        <Badge variant="secondary">Features & Technology</Badge>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Advanced Security Technology</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our cutting-edge AI technology provides comprehensive security solutions that adapt to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <FeatureCard
          icon={Cpu}
          title="AI-Powered Analytics"
          description="Real-time threat detection and behavioral analysis"
        />
        <FeatureCard
          icon={Shield}
          title="Advanced Security"
          description="Multi-layered security protocols and encryption"
        />
        <FeatureCard
          icon={Lock}
          title="Access Control"
          description="Biometric authentication and smart access management"
        />
        <FeatureCard
          icon={Zap}
          title="Real-time Alerts"
          description="Instant notifications and emergency response system"
        />
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 p-4 md:p-6 rounded-lg border bg-card">
      <div className="p-2 md:p-3 rounded-full bg-primary/10">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-base md:text-lg">{title}</h3>
      <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

