import Image from "next/image";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center gap-8 py-12 md:py-16">
      <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
        <Badge variant="secondary" className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          Your AI-powered Surveillance
        </Badge>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          AI-Powered Surveillance & Security for a{" "}
          <span className="text-primary inline-flex items-center gap-2">
            Safer <Shield className="h-6 w-6 md:h-8 md:w-8" />
          </span>
          <br />
          <span className="text-primary">Saudi Arabia</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground">
          Harnessing AI to enhance real-time security, prevent threats, and
          ensure public safety. Experience the future of surveillance tailored
          for Saudi Arabia's unique needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg">Request a Demo</Button>
          <Button size="lg" variant="secondary">
            Know More
          </Button>
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-none">
        <div className="aspect-square rounded-3xl overflow-hidden">
          <Image
            src=""
            // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%2011.21.06%E2%80%AFAM-g0dsIEbLMTnWyhz4yFZGH9WEUFCIF6.png"
            alt="Surveillance technology visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
