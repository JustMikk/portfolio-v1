"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Code, Palette } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-purple-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-purple-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rotate-12 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-purple-400/30 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-6 h-6 bg-indigo-500/40 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 animate-fade-in">
              <Coffee className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">
                Hey there! I'm Mikiyas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="block animate-fade-in">I craft digital</span>
              <span
                className="block animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                experiences that
              </span>
              <span
                className="bg-gradient-to-r from-purple-300 via-purple-200 to-indigo-300 bg-clip-text text-transparent animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                people love
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              From sleek web designs to full-stack applications, I bring ideas
              to life with code, creativity, and a passion for pixel-perfect
              details. Let's build something amazing together.
            </p>

            <div
              className="flex flex-wrap gap-3 mb-8 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">Full-Stack Dev</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20">
                <Palette className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">UI/UX Designer</span>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
                aria-label="Contact Mikiyas for collaboration"
              >
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent backdrop-blur-sm hover:border-purple-500/50"
                aria-label="View Mikiyas's portfolio"
              >
                See My Work
              </Button>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="relative w-full max-w-md mx-auto mb-8">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-1">
                  <Image
                    src="/profile.webp"
                    alt="Mikiyas - Full-Stack Developer and Designer"
                    className="w-full h-full rounded-full object-cover border-2 border-white/10"
                    width={192}
                    height={192}
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-purple-400">const developer = {`{`}</div>
                  <div className="text-gray-300 ml-4">
                    name: <span className="text-green-400">"Mikiyas"</span>,
                  </div>
                  <div className="text-gray-300 ml-4">
                    skills: [<span className="text-blue-400">"React"</span>,{" "}
                    <span className="text-blue-400">"Next.js"</span>],
                  </div>
                  <div className="text-gray-300 ml-4">
                    passion: <span className="text-yellow-400">"Creating"</span>
                    ,
                  </div>
                  <div className="text-gray-300 ml-4">
                    coffee: <span className="text-orange-400">true</span>
                  </div>
                  <div className="text-purple-400">{"}"}</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500/30 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              16+
            </div>
            <div className="text-muted-foreground text-sm">Projects Built</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              4+
            </div>
            <div className="text-muted-foreground text-sm">Years Coding</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              ∞
            </div>
            <div className="text-muted-foreground text-sm">Cups of Coffee</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-muted-foreground text-sm">Learning Mode</div>
          </div>
        </div>
      </div>
    </section>
  );
}
