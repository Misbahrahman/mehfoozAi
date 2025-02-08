"use client"

import { useEffect, useState } from "react"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#about", label: "About Mahfooz" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#features", label: "Features & Technology" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100 // offset for header height

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    // Smooth scroll handler
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    // Add event listeners
    window.addEventListener("scroll", handleScroll)
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleLinkClick)
    })

    // Initial check
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleLinkClick)
      })
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <a href="#" className="text-xl font-semibold">
              mahfooz.ai
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === href.substring(1) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <span>English</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">عربي</span>
            </div>
            <Button className="hidden md:inline-flex">Request a Demo</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex flex-col items-center justify-center h-full space-y-8">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} className="text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>
                {label}
              </a>
            ))}
            <Button onClick={() => setIsMenuOpen(false)}>Request a Demo</Button>
          </div>
        </div>
      )}
    </>
  )
}

