import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ToolsSection } from "@/components/tools-section"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <Navigation />

      <HeroSection />

      <AnimatedSection animation="fadeUp" delay={200}>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection animation="slideLeft" delay={400}>
        <ToolsSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay={600}>
        <PortfolioPreview />
      </AnimatedSection>

      <AnimatedSection animation="slideRight" delay={800}>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={1000}>
        <FAQSection />
      </AnimatedSection>

      <Footer />
    </main>
  )
}
