import { Navigation } from "@/components/navigation";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "2018",
      title: "A World of Possibilities in 2018",
      description:
        "I started my journey into the digital world with web design. Fueled by a deep passion for creativity and technology, I took my first steps into the world of web development, where I discovered the vast ocean of design principles and techniques that would shape my understanding of digital experiences.",
    },
    {
      year: "2019",
      title: "Learning and Growing in 2019",
      description:
        "I had the opportunity to work with an incredible design agency, where I honed my skills in user experience design and learned the intricacies of user-centered design principles. This experience taught me the importance of understanding user needs and creating intuitive digital experiences from professionally and creatively.",
    },
    {
      year: "2020",
      title: "A Corporate Adventure in 2020",
      description:
        "I joined a corporate environment as a lead designer, where I gained invaluable experience in project planning and functional websites. It was a year of immense growth and learning, where I developed my skills in team collaboration and project management in a fast-paced environment and sharpened my skills.",
    },
    {
      year: "2021",
      title: "Entrepreneurial Pursuits Fueled",
      description:
        "By a desire for creative freedom and the opportunity to work with diverse clients, I decided to venture into freelancing in 2021. This decision allowed me to explore my own creative vision and work with a variety of clients and diverse ideas made with solutions. It was a year of independence and creative exploration.",
    },
    {
      year: "2022",
      title: "A Collaborative Partnership in 2022",
      description:
        "I formed a strategic partnership with a digital marketing agency, combining my web design expertise with their marketing prowess. This collaboration opened doors to exciting projects and allowed me to work on compelling websites that aligned seamlessly with comprehensive marketing strategies. It was a year of synergistic excellence.",
    },
    {
      year: "2023",
      title: "Expanding Horizons in 2023",
      description:
        "In my path of growth and advancement, I embarked on an exciting journey into emerging technologies and design trends. I expanded my skill set to include advanced user experience. I made a year of pushing boundaries and exploring new frontiers in web design and development.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-12 h-12 bg-purple-500/10 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-purple-400/30 transform rotate-12 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-10 h-10 border-2 border-purple-500/30 transform rotate-45 animate-ping"></div>
      </div>

      <Navigation />

      <AnimatedSection>
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/40"></div>
                  <img
                    src="/professional-headshot-of-a-web-designer-in-checker.jpg"
                    alt="Mikiyas Hailegebreal - Professional Web Designer"
                    className="w-full h-full object-cover rounded-2xl relative z-10"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Welcome to the world of captivating web design!
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-white">
                    I'm{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      Mikiyas
                    </span>{" "}
                    Cusick
                  </h1>

                  {/* About Me Card */}
                  <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
                        </div>
                        About Me
                      </h2>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-8 h-8 p-0 hover:bg-purple-500/20 text-gray-300 hover:text-white"
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-8 h-8 p-0 hover:bg-purple-500/20 text-gray-300 hover:text-white"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-8 h-8 p-0 hover:bg-purple-500/20 text-gray-300 hover:text-white"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      I am a skilled web designer with a passion for creating
                      visually stunning and user-friendly websites. With a keen
                      eye for detail and a commitment to excellence, I
                      specialize in crafting online experiences that leave a
                      lasting impression. From concept to launch, I collaborate
                      closely with clients to bring their vision to life and
                      help digital presence stand out from the crowd. With my
                      expertise and dedication, I am here to make your online
                      presence shine and make a powerful impact in the digital
                      world.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Milestones of My Career
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Embarking on a journey through the milestones that have shaped
                my professional path, each marker and successes celebrated, all
                contributing to a rich narrative of professional growth and
                achievement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative group">
                  <Card className="bg-gray-900/50 border-gray-800 p-6 h-full hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-400">
                          {milestone.year}
                        </span>
                        <div className="w-12 h-12 relative">
                          {/* Geometric decoration */}
                          <div className="absolute inset-0 border-2 border-purple-500/30 transform rotate-45"></div>
                          <div className="absolute inset-2 border border-purple-400/50 transform -rotate-12"></div>
                          <div className="absolute inset-3 bg-purple-500/20 transform rotate-12"></div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {milestone.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>

      <Footer />
    </div>
  );
}
