import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Layers, 
  Coffee, 
  Users,
  Check,
  Calculator,
  Code,
  Database,
  Globe,
  MessageCircle,
  Zap,
  Brain,
  Smartphone,
  Settings,
  ChartLine,
  ArrowUp
} from "lucide-react";
import { SiPython } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  const coreServices = [
    {
      icon: Layers,
      title: "MERN + LLM Developer Augmentation",
      subtitle: "Full-Stack AI Integration",
      description: "MongoDB, Express.js, React, Node.js, LangChain, OpenAI API, Vector Databases",
      technologies: [
        "MongoDB", "Express.js", "React", "Node.js", 
        "LangChain", "OpenAI API", "Vector Databases"
      ],
      useCases: [
        "AI-powered web platforms",
        "Custom LLM integrations", 
        "Smart automation tools",
        "Real-time chat systems"
      ],
      gradient: "from-primary-500 to-primary-600",
      badgeColors: "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
    },
    {
      icon: Coffee,
      title: "Java Full Stack Developer Augmentation", 
      subtitle: "Enterprise Solutions",
      description: "Java, Spring Boot, Hibernate, Angular/React, REST APIs, Microservices",
      technologies: [
        "Java", "Spring Boot", "Hibernate", "Angular/React", 
        "REST APIs", "Microservices"
      ],
      useCases: [
        "Enterprise-grade software",
        "Scalable backend systems",
        "Secure, high-performance web apps",
        "Cloud-ready architecture"
      ],
      gradient: "from-accent-amber to-yellow-500",
      badgeColors: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
    },
    {
      icon: SiPython,
      title: "Python + LLM Developer Augmentation",
      subtitle: "AI-Driven Backend",
      description: "Python, Flask/Django, LangChain, Hugging Face, AI APIs",
      technologies: [
        "Python", "Flask/Django", "LangChain", "Hugging Face", 
        "Data Engineering", "AI APIs"
      ],
      useCases: [
        "AI-enabled SaaS platforms",
        "NLP-driven search engines", 
        "Automated data analysis systems",
        "Chatbot & AI assistant development"
      ],
      gradient: "from-accent-emerald to-green-500",
      badgeColors: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
    }
  ];

  const additionalRoles = [
    {
      category: "Frontend & Backend",
      roles: [
        "Frontend Developers: React, Angular, Vue.js",
        "Backend Developers: Node.js, .NET, GoLang", 
        "Mobile App Developers: Flutter, React Native, Swift, Kotlin",
        "UI/UX Designers"
      ]
    },
    {
      category: "Infrastructure & QA", 
      roles: [
        "DevOps & Cloud Engineers: AWS, Azure, GCP",
        "QA Automation Engineers: Selenium, Cypress",
        "Data Engineers & Data Scientists"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Elements */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {/* Tech Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Elite Developer Services</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Build Your
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dream Team
                </span>
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Get world-class developers in <span className="text-cyan-400 font-semibold">days, not months</span>. 
              From MERN stacks to AI integration, we deliver excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-7 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                  data-testid="button-explore-services"
                >
                  <Link href="#services-grid">
                    <Rocket className="w-5 h-5 mr-3" />
                    Explore Services
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg font-semibold rounded-2xl transition-all duration-300"
                  data-testid="button-get-quote"
                >
                  <Link href="/contact">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Get Free Quote
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Tech Stack Grid */}
            <motion.div
              className="grid grid-cols-3 md:grid-cols-6 gap-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { icon: Code, label: "Full-Stack", color: "from-blue-400 to-cyan-400" },
                { icon: Brain, label: "AI/LLM", color: "from-purple-400 to-pink-400" },
                { icon: Database, label: "Database", color: "from-green-400 to-emerald-400" },
                { icon: Globe, label: "Web Apps", color: "from-orange-400 to-red-400" },
                { icon: Smartphone, label: "Mobile", color: "from-indigo-400 to-purple-400" },
                { icon: Settings, label: "DevOps", color: "from-yellow-400 to-orange-400" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="group text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="relative mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${tech.color} group-hover:shadow-lg transition-all duration-300`}>
                      <tech.icon className="w-8 h-8 text-white mx-auto" />
                    </div>
                  </div>
                  <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {tech.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-3 text-white/60">
            <span className="text-sm font-medium">Discover Our Services</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section id="services-grid" className="section-padding bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-8 sm:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
                  <CardContent className="p-6 sm:p-8">
                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                      {/* Service Header */}
                      <div className="lg:col-span-1">
                        <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0`}>
                            <service.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                              {service.title}
                            </h3>
                            <p className="text-primary-500 font-medium text-sm sm:text-base">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-white mb-4">
                          Skills & Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              className={`${service.badgeColors} rounded-full text-sm`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-white mb-4">
                          Use Cases:
                        </h4>
                        <ul className="space-y-3">
                          {service.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <Check className="text-accent-emerald mr-3 mt-0.5 flex-shrink-0 w-4 h-4" />
                              <span className="text-sm">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Roles Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start sm:items-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-secondary-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                    <Users className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                      Additional Specialized Roles
                    </h3>
                    <p className="text-secondary-500 font-medium text-sm sm:text-base">
                      Complete Tech Teams
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {additionalRoles.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-white mb-4">
                        {category.category}:
                      </h4>
                      <ul className="space-y-3">
                        {category.roles.map((role, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0" />
                            <span className="text-sm">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
              Let's build your team – faster, better, smarter.
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Let's discuss your specific requirements and match you with the perfect developers for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/quote" className="w-full sm:w-auto">
                <Button className="bg-accent-amber hover:bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto transition-all transform hover:scale-105">
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Custom Quote
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 w-full sm:w-auto transition-all transform hover:scale-105"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
