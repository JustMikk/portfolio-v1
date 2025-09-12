"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    id: 1,
    question: "Can you work with clients remotely?",
    answer:
      "I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    id: 2,
    question: "How long does it typically take to complete a web design project?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while more complex projects with custom functionality can take 6-12 weeks. I provide detailed timelines during our initial consultation.",
  },
  {
    id: 3,
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, I offer comprehensive website maintenance services including regular updates, security monitoring, performance optimization, and content management. I provide flexible maintenance packages to suit different needs and budgets.",
  },
  {
    id: 4,
    question: "Can you optimize my website for search engines?",
    answer:
      "I implement SEO best practices in all my projects, including proper HTML structure, meta tags, site speed optimization, mobile responsiveness, and content optimization to help improve your search engine rankings.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Question</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            If your question isn't addressed here, feel free to reach out—I'm always ready to provide further assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Ask Question Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-8 text-center sticky top-8">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-purple-400" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">Ask A Question</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Here's what some of my satisfied clients have to say about my work
              </p>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                Ask a Question
              </Button>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/30"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors duration-200"
                  >
                    <span className="text-lg font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-purple-400 transition-transform duration-300 flex-shrink-0 ${
                        openItems.includes(faq.id) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
