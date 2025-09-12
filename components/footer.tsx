"use client"

import { ArrowRight, Twitter, Instagram, Youtube, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">Dedicated to design with a passion</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bringing creativity on a global scale, I am a designer driven by passion and innovation.
            </p>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-purple-400 transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#articles"
                  className="text-muted-foreground hover:text-purple-400 transition-colors duration-200"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#newsletter"
                  className="text-muted-foreground hover:text-purple-400 transition-colors duration-200"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#dribbble"
                  className="text-muted-foreground hover:text-purple-400 transition-colors duration-200"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Say Hello Section */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Say hello!</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#twitter"
                  className="text-muted-foreground hover:text-purple-400 transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#instagram"
                  className="text-muted-foreground hover:text-purple-400 transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#youtube"
                  className="text-muted-foreground hover:text-purple-400 transition-colors duration-200"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="#dribbble"
                  className="text-muted-foreground hover:text-purple-400 transition-colors duration-200"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <div className="text-right">
              <p className="text-muted-foreground mb-4">Let's work together</p>

              <div className="space-y-3">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-foreground font-medium">Have an idea?</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 p-0">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-2">Creative tools (coming soon!)</p>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-foreground font-medium">Courses & Tools</span>
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 p-0"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#twitter"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#youtube"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#dribbble"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-200"
              >
                <Dribbble className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#terms" className="hover:text-purple-400 transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#privacy" className="hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">© 2024 Nathan Cusick. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
