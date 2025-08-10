import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowUp, 
  Calculator, 
  Trophy, 
  Target, 
  Zap, 
  Globe, 
  BarChart3, 
  TrendingUp,
  Sparkles,
  Star
} from "lucide-react";

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

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      industry: "EdTech",
      title: "AI-Powered Learning Platform",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "EdTech startup team collaborating on AI learning platform",
      challenge: "Build an AI-driven LMS with chatbot tutors in 4 months.",
      solution: "Deployed 3 MERN + LLM developers within 6 days. Integrated OpenAI APIs for automated tutoring. Built real-time messaging and progress tracking.",
      impact: [
        { metric: "70% faster content creation", icon: ArrowUp },
        { metric: "45% increase in student engagement", icon: ArrowUp }
      ],
      testimonial: "The Rudhram team was proactive, skilled, and worked as part of our company from day one.",
      badgeColor: "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
    },
    {
      id: 2,
      industry: "FinTech", 
      title: "Banking Digital Transformation",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Financial services team developing banking application",
      challenge: "Modernize legacy systems to cloud-based Java microservices.",
      solution: "Provided 5 Java Full Stack developers with cloud expertise. Migrated 20+ applications without downtime.",
      impact: [
        { metric: "Reduced operational costs by 30%", icon: ArrowUp },
        { metric: "Improved transaction speed by 40%", icon: ArrowUp }
      ],
      testimonial: "The Java expertise delivered by Rudhram transformed our entire banking infrastructure.",
      badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
    },
    {
      id: 3,
      industry: "HealthTech",
      title: "AI Medical Diagnosis Assistant", 
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Healthcare AI development team working on medical data analysis",
      challenge: "Healthcare startup required AI system for analyzing medical reports and providing diagnostic insights.",
      solution: "Python + LLM specialists built NLP models for medical text analysis with HIPAA compliance.",
      impact: [
        { metric: "85% accuracy in preliminary diagnosis", icon: ArrowUp },
        { metric: "50% faster report processing", icon: ArrowUp }
      ],
      testimonial: "Rudhram's AI expertise helped us revolutionize healthcare diagnostics with cutting-edge technology.",
      badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
    },
    {
      id: 4,
      industry: "E-commerce",
      title: "Global Marketplace Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "E-commerce development team building marketplace platform",
      challenge: "International retailer needed a scalable marketplace platform supporting multiple currencies and languages.",
      solution: "Full-stack MERN team with microservices architecture and real-time inventory management.",
      impact: [
        { metric: "400% increase in concurrent users", icon: ArrowUp },
        { metric: "90% reduction in page load times", icon: ArrowUp }
      ],
      testimonial: "Rudhram delivered a world-class platform that handles millions of transactions seamlessly.",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
    },
    {
      id: 5,
      industry: "Manufacturing",
      title: "IoT Production Monitoring System", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Manufacturing IoT monitoring system dashboard",
      challenge: "Manufacturing giant needed real-time production monitoring with predictive maintenance capabilities.",
      solution: "Python + AI team built IoT data processing pipeline with machine learning prediction models.",
      impact: [
        { metric: "35% reduction in equipment downtime", icon: ArrowUp },
        { metric: "20% increase in production efficiency", icon: ArrowUp }
      ],
      testimonial: "The predictive analytics solution has transformed how we manage our production lines.",
      badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      id: 6,
      industry: "Logistics",
      title: "Smart Supply Chain Platform",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Logistics team using supply chain management software",
      challenge: "Logistics company needed intelligent route optimization and automated inventory management system.",
      solution: "Cross-functional team with Java backend, React frontend, and AI-powered optimization algorithms.",
      impact: [
        { metric: "25% reduction in delivery times", icon: ArrowUp },
        { metric: "30% decrease in operational costs", icon: ArrowUp }
      ],
      testimonial: "Rudhram's solution revolutionized our supply chain efficiency and customer satisfaction.",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-secondary-600 bg-grid-pattern">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-700/90 to-secondary-600/90" />
        
        {/* Floating Achievement Icons */}
        <motion.div
          className="absolute top-20 left-10 text-white/20 animate-float"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            delay: 0
          }}
        >
          <Trophy className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-white/20 animate-bounce-slow"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            delay: 2
          }}
        >
          <Target className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 text-white/20 animate-pulse-slow"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            delay: 1
          }}
        >
          <BarChart3 className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute top-60 left-1/4 text-white/20 animate-spin-slow"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            delay: 3
          }}
        >
          <Globe className="w-10 h-10" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-1/3 text-white/20 animate-float"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            delay: 4
          }}
        >
          <TrendingUp className="w-12 h-12" />
        </motion.div>

        {/* Orbiting Elements */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-96 h-96">
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-white/30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
            >
              <Star className="w-6 h-6" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-white/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Zap className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-white/30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2.25 }}
            >
              <Star className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Trophy className="w-5 h-5 text-amber-300" />
              <span className="text-white text-sm font-medium">Success Stories That Inspire</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Client{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent animate-gradient">
                  Success
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 animate-gradient"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
              <br />
              Stories
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover how we've transformed businesses across industries with our expert developers. 
              From AI-powered platforms to enterprise solutions, our success stories speak volumes.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-primary-900 hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                data-testid="button-view-projects"
              >
                <Link href="#case-studies">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Our Projects
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                data-testid="button-start-project"
              >
                <Link href="/contact">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "150+", label: "Projects Delivered", icon: Trophy },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "50+", label: "Industries Served", icon: Globe },
              { number: "40%", label: "Average ROI Boost", icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-amber-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="section-padding bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {caseStudies.map((study) => (
              <motion.div key={study.id} variants={itemVariants}>
                <Card className="bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <img
                        src={study.image}
                        alt={study.alt}
                        className="rounded-xl w-full h-48 object-cover"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <Badge className={`${study.badgeColor} rounded-full text-sm font-medium`}>
                        {study.industry}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Challenge:
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Solution:
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Impact:
                      </h4>
                      <ul className="text-sm space-y-1">
                        {study.impact.map((result, idx) => (
                          <li key={idx} className="flex items-center text-accent-emerald">
                            <result.icon className="w-4 h-4 mr-2" />
                            {result.metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 dark:text-gray-400 text-sm">
                      "{study.testimonial}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Numbers that speak to our success in delivering exceptional results
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "150+", label: "Successful Projects", color: "text-primary-500" },
              { number: "50+", label: "Global Clients", color: "text-secondary-500" },
              { number: "500+", label: "Skilled Developers", color: "text-accent-emerald" },
              { number: "99%", label: "Client Satisfaction", color: "text-accent-amber" }
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have transformed their businesses with our expert developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button className="bg-accent-amber hover:bg-yellow-400 text-gray-900 px-8 py-4 text-lg font-semibold">
                  <Calculator className="w-5 h-5 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900"
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
