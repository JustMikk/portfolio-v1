"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Mikiyas - Home">
              <h1 className="text-2xl font-bold text-foreground">Mikiyas.</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-8" role="menubar">
              <li role="none">
                <Link
                  href="/"
                  className={`transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${
                    pathname === "/"
                      ? "text-purple-400"
                      : "text-muted-foreground hover:text-purple-400"
                  }`}
                  role="menuitem"
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/about"
                  className={`transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${
                    pathname === "/about"
                      ? "text-purple-400"
                      : "text-muted-foreground hover:text-purple-400"
                  }`}
                  role="menuitem"
                  aria-current={pathname === "/about" ? "page" : undefined}
                >
                  About Me
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/portfolio"
                  className={`transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 ${
                    pathname === "/portfolio"
                      ? "text-purple-400"
                      : "text-muted-foreground hover:text-purple-400"
                  }`}
                  role="menuitem"
                  aria-current={pathname === "/portfolio" ? "page" : undefined}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Contact Mikiyas"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-background rounded-md p-1"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <nav
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <Link
                href="/"
                className={`block px-3 py-2 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-card ${
                  pathname === "/"
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-muted-foreground hover:text-purple-400 hover:bg-purple-500/5"
                }`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-card ${
                  pathname === "/about"
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-muted-foreground hover:text-purple-400 hover:bg-purple-500/5"
                }`}
                aria-current={pathname === "/about" ? "page" : undefined}
              >
                About Me
              </Link>
              <Link
                href="/portfolio"
                className={`block px-3 py-2 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-card ${
                  pathname === "/portfolio"
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-muted-foreground hover:text-purple-400 hover:bg-purple-500/5"
                }`}
                aria-current={pathname === "/portfolio" ? "page" : undefined}
              >
                Portfolio
              </Link>
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-card"
                    aria-label="Contact Mikiyas"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
