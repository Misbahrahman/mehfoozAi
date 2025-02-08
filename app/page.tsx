import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <UseCasesSection />
        <FeaturesSection />
        <ContactSection />
      </main>
    </div>
  )
}

