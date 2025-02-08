import { Mail, MessageSquare, Phone, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import type React from "react"

export function ContactSection() {
  return (
    <section id="contact" className="container py-12 md:py-16 space-y-12 md:space-y-16">
      <div className="rounded-3xl bg-gradient-to-br from-[#1a1333] to-[#2b1c6b] text-center px-6 md:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Schedule Your Free
          <br />
          <span className="text-gray-300">Consultation</span>
        </h2>
        <p className="text-gray-300 mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
          Connect with our experts to discuss tailored security solutions
          <br />
          for your unique needs.
        </p>
        <Button size="lg" className="bg-[#4169E1] hover:bg-[#3154b3] text-white">
          Request a Demo
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ContactMethod
          icon={Mail}
          title="Email"
          description="For inquiries, reach us at our support email or call us."
          contact="support@mahfooz.ai"
          isLink
        />
        <ContactMethod
          icon={MessageSquare}
          title="Live chat"
          description="Connect with us for immediate assistance through our live chat."
          contact="Start new chat"
          isLink
        />
        <ContactMethod
          icon={Phone}
          title="Phone"
          description="Call us for urgent support or inquiries regarding our services."
          contact="+966 123 456 789"
          isLink
        />
        <ContactMethod
          icon={Building}
          title="Office"
          description="Visit us at our office located in the heart of Riyadh."
          contact="456 Security Ave, Riyadh, Saudi Arabia"
        />
      </div>
    </section>
  )
}

interface ContactMethodProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  contact: string
  isLink?: boolean
}

function ContactMethod({ icon: Icon, title, description, contact, isLink }: ContactMethodProps) {
  return (
    <div className="space-y-3 md:space-y-4">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      </div>
      <div className="space-y-1 md:space-y-2">
        <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        {isLink ? (
          <a
            href={title === "Email" ? `mailto:${contact}` : title === "Phone" ? `tel:${contact}` : "#"}
            className="text-primary hover:underline font-medium block text-sm md:text-base"
          >
            {contact}
          </a>
        ) : (
          <span className="text-primary font-medium block text-sm md:text-base">{contact}</span>
        )}
      </div>
    </div>
  )
}

