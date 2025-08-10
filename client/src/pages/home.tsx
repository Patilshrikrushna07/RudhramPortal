import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  UserCheck, 
  Rocket, 
  Clock, 
  Brain,
  Layers,
  Coffee,
  Settings,
  Smartphone,
  ChartLine,
  Calculator,
  MessageCircle,
  ArrowUp
} from "lucide-react";
import { SiPython, SiJavascript, SiReact, SiMongodb } from "react-icons/si";
import { TrustedCompanies } from "@/components/ui/trusted-companies";

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

export default function Home() {
  const whyChooseFeatures = [
    {
      icon: UserCheck,
      title: "Pre-vetted, senior-level tech professionals",
      description: "Only the top 3% of talent with proven expertise and track record",
      color: "bg-primary-500",
    },
    {
      icon: Rocket,
      title: "Onboard in 5–7 days",
      description: "Get your team up and running faster than traditional hiring",
      color: "bg-accent-emerald",
    },
    {
      icon: Clock,
      title: "Flexible hiring: hourly, monthly, or project-based",
      description: "Scalable engagement models that adapt to your needs",
      color: "bg-secondary-500",
    },
    {
      icon: Brain,
      title: "Specialized in AI, LLM, and modern full-stack development",
      description: "Cutting-edge expertise in emerging technologies",
      color: "bg-accent-cyan",
    },
  ];

  const techDomains = [
    {
      icon: Layers,
      title: "MERN + LLM Developers",
      description: "Full-stack web apps + AI chatbot integrations",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "LangChain", "OpenAI API"],
      gradient: "from-primary-50 to-primary-100",
      badgeColor: "bg-primary-500",
    },
    {
      icon: Coffee,
      title: "Java Full Stack Developers",
      description: "Scalable enterprise apps with microservices",
      technologies: ["Java", "Spring Boot", "Hibernate", "Angular/React", "REST APIs"],
      gradient: "from-amber-50 to-amber-100",
      badgeColor: "bg-accent-amber",
    },
    {
      icon: SiPython,
      title: "Python + LLM Developers",
      description: "AI-driven backend systems and NLP solutions",
      technologies: ["Python", "Flask/Django", "LangChain", "Hugging Face", "AI APIs"],
      gradient: "from-emerald-50 to-emerald-100",
      badgeColor: "bg-accent-emerald",
    },
    {
      icon: Settings,
      title: "DevOps Engineers",
      description: "Cloud infrastructure, CI/CD automation",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
      gradient: "from-purple-50 to-purple-100",
      badgeColor: "bg-secondary-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Developers",
      description: "iOS, Android, cross-platform solutions",
      technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
      gradient: "from-cyan-50 to-cyan-100",
      badgeColor: "bg-accent-cyan",
    },
    {
      icon: ChartLine,
      title: "AI & Data Science Experts",
      description: "Predictive analytics and model deployment",
      technologies: ["TensorFlow", "PyTorch", "MLOps", "Data Engineering"],
      gradient: "from-purple-50 to-purple-100",
      badgeColor: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 border-2 border-white/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-20 right-4 md:right-20 w-32 md:w-48 h-32 md:h-48 bg-gradient-to-r from-accent-amber/20 to-accent-cyan/20 rounded-full animate-float blur-xl"></div>
          <div className="absolute bottom-20 left-4 md:left-20 w-40 md:w-64 h-40 md:h-64 border border-white/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-10 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-l from-secondary-500/10 to-primary-500/10 rounded-full animate-float blur-2xl"></div>
          
          {/* Tech Icon Animations - Hidden on mobile for cleaner look */}
          <div className="hidden md:block absolute top-32 left-1/4 opacity-30">
            <SiReact className="w-8 h-8 text-accent-cyan animate-spin-slow" />
          </div>
          <div className="hidden md:block absolute top-64 right-1/4 opacity-30">
            <SiPython className="w-8 h-8 text-accent-emerald animate-float" />
          </div>
          <div className="hidden md:block absolute bottom-64 left-1/3 opacity-30">
            <Coffee className="w-8 h-8 text-accent-amber animate-bounce-slow" />
          </div>
          <div className="hidden md:block absolute bottom-32 right-1/3 opacity-30">
            <SiMongodb className="w-8 h-8 text-accent-emerald animate-pulse-slow" />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <Badge className="bg-accent-amber/20 text-accent-amber border-accent-amber/30 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                🚀 Trusted by 50+ Companies Worldwide
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Build Your Dream
              <br />
              <span className="bg-gradient-to-r from-accent-amber via-accent-cyan to-accent-emerald bg-clip-text text-transparent animate-gradient">
                Tech Team
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white/90 font-light">
                in Days, Not Months
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Access <span className="text-accent-amber font-semibold">pre-vetted developers</span> in MERN+LLM, Java, Python, DevOps, Mobile & AI. 
              <br className="hidden sm:block" />
              <span className="text-accent-cyan font-semibold">Onboard in 5-7 days</span> with flexible engagement models.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/quote" className="w-full sm:w-auto">
                <Button className="bg-gradient-to-r from-accent-amber to-yellow-400 hover:from-yellow-400 hover:to-accent-amber text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-2xl hover:shadow-accent-amber/25 transition-all transform hover:scale-105 w-full sm:w-auto">
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Free Quote Today
                </Button>
              </Link>
              
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="border-2 border-white/60 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Talk to Expert
                </Button>
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
            >
              {[
                { number: "500+", label: "Expert Developers", icon: UserCheck },
                { number: "5-7", label: "Days to Onboard", icon: Clock },
                { number: "98%", label: "Client Satisfaction", icon: ArrowUp }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-accent-amber" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <div className="animate-bounce">
            <ArrowUp className="w-6 h-6 rotate-180" />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Rudram Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              Why Choose Rudram?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              ✅ Global delivery with 24/7 support
            </p>
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-8 sm:mb-12 shadow-lg mx-4 sm:mx-auto">
              <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 italic text-center mb-4">
                "Rudram transformed our idea into a working AI-powered platform in record time. Their developers feel like an extension of our team."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-primary-500 text-sm sm:text-base">– CTO, US-based SaaS Startup</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card rounded-2xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 h-full">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                      <feature.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <TrustedCompanies />

      {/* Tech Domains Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
              Tech Domains We Cover
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive expertise across modern technology stacks and emerging AI technologies.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techDomains.map((domain, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`bg-gradient-to-br ${domain.gradient} dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 h-full`}>
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${domain.badgeColor} rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}>
                        <domain.icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white leading-tight">
                        {domain.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {domain.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {domain.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className={`${domain.badgeColor} text-white text-xs sm:text-sm hover:${domain.badgeColor}/80 px-2 py-1`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Scale Your Tech Team?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Get started with world-class developers today. Our expert team is ready to help you accelerate your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/quote" className="w-full sm:w-auto">
                <Button className="bg-accent-amber hover:bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto transition-all transform hover:scale-105">
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Custom Quote
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 w-full sm:w-auto transition-all transform hover:scale-105"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
