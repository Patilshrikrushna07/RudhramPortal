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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spectacular Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        
        {/* Dynamic Mesh Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)
            `,
            backgroundSize: '800px 800px, 600px 600px, 400px 400px, 500px 500px',
            animation: 'mesh-gradient 15s ease infinite'
          }} />
        </div>

        {/* Advanced Particle System */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Floating Tech Orbs */}
          <motion.div
            className="absolute top-1/5 left-1/6 w-32 h-32 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 backdrop-blur-sm border border-violet-400/20"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/4 right-1/5 w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500/30 to-blue-500/30 backdrop-blur-sm border border-indigo-400/20"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-28 h-28 rounded-full bg-gradient-to-r from-cyan-500/30 to-teal-500/30 backdrop-blur-sm border border-cyan-400/20"
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />

          {/* Tech Icon Constellation */}
          <motion.div
            className="absolute top-32 left-1/3 text-violet-400/40"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <SiReact className="w-12 h-12" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/4 text-indigo-400/40"
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 3 }}
          >
            <SiPython className="w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/5 text-cyan-400/40"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 18, repeat: Infinity, delay: 6 }}
          >
            <Coffee className="w-11 h-11" />
          </motion.div>
          <motion.div
            className="absolute bottom-48 right-1/3 text-teal-400/40"
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [0, -360, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 1 }}
          >
            <SiMongodb className="w-9 h-9" />
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
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">Trusted by 150+ Global Companies</span>
              <Rocket className="w-5 h-5 text-violet-400" />
            </motion.div>

            {/* Spectacular Main Headline */}
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Build Your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Dream Team
                </span>
                <motion.div
                  className="absolute -bottom-6 left-0 right-0 h-3 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                />
              </span>
              <br />
              <span className="text-5xl md:text-7xl lg:text-8xl text-white/80 font-light">
                in{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent font-black">
                    5 Days
                  </span>
                </span>
              </span>
            </motion.h1>

            {/* Premium Subtitle */}
            <motion.p
              className="text-xl md:text-3xl text-white/70 max-w-5xl mx-auto leading-relaxed mb-16 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Get <span className="text-violet-400 font-semibold">world-class developers</span> in 
              MERN+AI, Java, Python, DevOps & Mobile.{" "}
              <span className="text-cyan-400 font-semibold">Skip months of hiring</span> —
              start building tomorrow.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-violet-500/30 transition-all duration-300"
                  data-testid="button-get-quote"
                >
                  <Link href="/quote">
                    <Calculator className="w-6 h-6 mr-4" />
                    Get Free Quote
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-8 text-xl font-semibold rounded-2xl transition-all duration-300"
                  data-testid="button-talk-expert"
                >
                  <Link href="/contact">
                    <MessageCircle className="w-6 h-6 mr-4" />
                    Talk to Expert
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Impressive Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {[
                { number: "500+", label: "Expert Developers", color: "from-violet-400 to-purple-400" },
                { number: "5-7", label: "Days to Onboard", color: "from-indigo-400 to-cyan-400" },
                { number: "150+", label: "Projects Delivered", color: "from-cyan-400 to-teal-400" },
                { number: "99%", label: "Client Satisfaction", color: "from-teal-400 to-emerald-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-lg font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Advanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-4 text-white/50">
            <span className="text-sm font-medium tracking-wider">Discover More</span>
            <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-1.5 h-4 bg-gradient-to-b from-violet-400 to-purple-400 rounded-full mt-3"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
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
