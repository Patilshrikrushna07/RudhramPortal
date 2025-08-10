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
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
        {/* Clean Two-Color Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 60% 40%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)
            `,
            backgroundSize: '800px 800px, 600px 600px, 400px 400px, 500px 500px',
            animation: 'mesh-gradient 15s ease infinite'
          }} />
        </div>

        {/* Advanced Particle System */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {/* Large Floating Tech Orbs */}
          <motion.div
            className="absolute top-1/5 left-1/6 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 rounded-full bg-gradient-to-r from-blue-500/40 to-blue-600/40 backdrop-blur-sm border border-blue-400/30 shadow-lg shadow-blue-500/20"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/4 right-1/5 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 rounded-full bg-gradient-to-r from-yellow-500/40 to-yellow-600/40 backdrop-blur-sm border border-yellow-400/30 shadow-lg shadow-yellow-500/20"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-14 sm:w-20 lg:w-28 h-14 sm:h-20 lg:h-28 rounded-full bg-gradient-to-r from-blue-600/40 to-blue-700/40 backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-600/20"
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />

          {/* Tech Icon Constellation */}
          <motion.div
            className="absolute top-32 left-1/3 text-blue-400/60 hidden md:block"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <SiReact className="w-8 lg:w-12 h-8 lg:h-12 drop-shadow-lg" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/4 text-yellow-400/60 hidden md:block"
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 3 }}
          >
            <SiPython className="w-6 lg:w-10 h-6 lg:h-10 drop-shadow-lg" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/5 text-blue-300/60 hidden lg:block"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 18, repeat: Infinity, delay: 6 }}
          >
            <Coffee className="w-8 lg:w-11 h-8 lg:h-11 drop-shadow-lg" />
          </motion.div>
          <motion.div
            className="absolute bottom-48 right-1/3 text-yellow-300/60 hidden lg:block"
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [0, -360, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 1 }}
          >
            <SiMongodb className="w-6 lg:w-9 h-6 lg:h-9 drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        {/* Main Hero Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto w-full px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/15 to-yellow-500/15 backdrop-blur-md border border-blue-400/30 rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-blue-500/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-xs font-medium tracking-wide">🚀 Trusted by 200+ Tech Companies Worldwide</span>
              <div className="text-xs bg-yellow-500/80 text-slate-900 px-2 py-1 rounded-full font-bold">LIVE</div>
            </motion.div>

            {/* Spectacular Main Headline */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 lg:mb-6 leading-[0.9] sm:leading-[0.85] tracking-tight px-2 sm:px-4 lg:px-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Scale Your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Tech Team
                </span>
                <motion.div
                  className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 left-0 right-0 h-1 sm:h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                />
              </span>
              <br />
              <div className="h-1 sm:h-2 lg:h-3"></div>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black/80 dark:text-white/80 font-light">
                with{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-black">
                    Elite Developers
                  </span>
                </span>
              </span>
            </motion.h1>

            {/* Premium Subtitle */}
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-white/70 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light px-6 sm:px-8 lg:px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Access <span className="text-blue-400 font-semibold">pre-vetted senior developers</span> in 
              AI/ML, Full-Stack, Cloud & Mobile technologies.{" "}
              <span className="text-yellow-400 font-semibold">From interview to deployment in 5-7 days</span> — 
              no lengthy hiring processes.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg sm:rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300 w-full sm:w-auto transform hover:scale-105"
                  data-testid="button-get-quote"
                >
                  <Link href="/quote">
                    <Rocket className="w-4 h-4 mr-2" />
                    Start Hiring Now
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-yellow-400/70 text-yellow-400 hover:bg-yellow-500/10 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 w-full sm:w-auto transform hover:scale-105 shadow-lg shadow-yellow-500/20"
                  data-testid="button-talk-expert"
                >
                  <Link href="/contact">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </motion.div>
            </motion.div>


          </motion.div>


        </div>

        {/* Properly Centered Discover More Button */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 sm:pb-8 z-20">
          <motion.div
            className="flex flex-col items-center gap-2 sm:gap-3 text-white/80 hover:text-white transition-colors duration-300 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs sm:text-sm font-medium tracking-wider">Discover More</span>
            <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-blue-400/70 hover:border-blue-300 rounded-full flex justify-center relative overflow-hidden shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-400/50">
              <motion.div
                className="w-1 sm:w-1.5 h-3 sm:h-4 bg-gradient-to-b from-blue-400 to-yellow-400 rounded-full mt-2 sm:mt-3"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Developer Expertise Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">Expert Developers</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Access world-class talent across cutting-edge technologies
            </p>
          </motion.div>

          {/* Enhanced Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Brain,
                title: "AI/ML Experts",
                description: "LLM, ChatGPT, Computer Vision",
                gradient: "from-blue-500/20 to-blue-600/10",
                borderGradient: "from-blue-500/40 to-blue-600/20",
                iconBg: "from-blue-500 to-blue-600",
                technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
                bgPattern: "blue"
              },
              {
                icon: Layers,
                title: "Full-Stack Masters",
                description: "MERN, Java, Python ecosystems",
                gradient: "from-yellow-500/20 to-amber-600/10",
                borderGradient: "from-yellow-500/40 to-amber-600/20",
                iconBg: "from-yellow-500 to-amber-600",
                technologies: ["React", "Node.js", "Spring Boot", "Django"],
                bgPattern: "yellow"
              },
              {
                icon: Settings,
                title: "Cloud Architects",
                description: "AWS, Azure, DevOps, Kubernetes",
                gradient: "from-blue-600/20 to-indigo-600/10",
                borderGradient: "from-blue-600/40 to-indigo-600/20",
                iconBg: "from-blue-600 to-indigo-600",
                technologies: ["AWS", "Azure", "Docker", "Terraform"],
                bgPattern: "indigo"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.borderGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
                
                {/* Card Content */}
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base sm:text-lg mb-6 flex-grow">
                    {card.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {card.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs sm:text-sm bg-white/10 backdrop-blur-sm rounded-full text-gray-200 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">Ready to scale your team with expert developers?</p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">
                <MessageCircle className="w-5 h-5 mr-3" />
                Start Your Project Today
              </Link>
            </Button>
          </motion.div>
        </div>
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
