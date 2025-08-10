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
      title: "Pre-vetted Developers",
      description: "Senior-level developers with proven expertise and track record",
      color: "bg-primary-500",
    },
    {
      icon: Rocket,
      title: "Fast Onboarding",
      description: "Get your team up and running in days, not weeks",
      color: "bg-accent-emerald",
    },
    {
      icon: Clock,
      title: "Flexible Hiring",
      description: "Hourly, monthly, or project-based engagement models",
      color: "bg-secondary-500",
    },
    {
      icon: Brain,
      title: "AI & LLM Expertise",
      description: "Cutting-edge AI integrations and LLM implementations",
      color: "bg-accent-cyan",
    },
  ];

  const techDomains = [
    {
      icon: Layers,
      title: "MERN + LLM Developers",
      description: "Full-stack web apps integrated with AI chatbots, content generators, and automation.",
      technologies: ["MongoDB", "React", "Node.js", "LangChain"],
      gradient: "from-primary-50 to-primary-100",
      badgeColor: "bg-primary-500",
    },
    {
      icon: Coffee,
      title: "Java Full Stack Developers",
      description: "Enterprise-grade scalable solutions with modern Java frameworks.",
      technologies: ["Spring Boot", "Hibernate", "Angular", "Microservices"],
      gradient: "from-amber-50 to-amber-100",
      badgeColor: "bg-accent-amber",
    },
    {
      icon: SiPython,
      title: "Python + LLM Developers",
      description: "AI-driven backend systems, data pipelines, and natural language applications.",
      technologies: ["Django", "Flask", "Hugging Face", "AI APIs"],
      gradient: "from-emerald-50 to-emerald-100",
      badgeColor: "bg-accent-emerald",
    },
    {
      icon: Settings,
      title: "DevOps Engineers",
      description: "CI/CD pipelines, cloud automation, and performance monitoring.",
      technologies: ["AWS", "Docker", "Kubernetes"],
      gradient: "from-purple-50 to-purple-100",
      badgeColor: "bg-secondary-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Developers",
      description: "Android, iOS, and cross-platform mobile applications.",
      technologies: ["React Native", "Flutter", "Swift"],
      gradient: "from-cyan-50 to-cyan-100",
      badgeColor: "bg-accent-cyan",
    },
    {
      icon: ChartLine,
      title: "AI & Data Science Experts",
      description: "ML models, AI APIs, predictive analytics, and data insights.",
      technologies: ["TensorFlow", "PyTorch", "MLOps"],
      gradient: "from-purple-50 to-purple-100",
      badgeColor: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-float"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Scale Your Tech Team with{" "}
                <span className="text-accent-cyan">World-Class Developers</span>
                <span className="block text-2xl md:text-3xl font-medium mt-2 opacity-90">
                  On Demand
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                From MERN + LLM experts to Java Full Stack and Python + LLM developers — 
                we bring top tech talent to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button className="bg-accent-amber hover:bg-yellow-400 text-gray-900 px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
                    <Calculator className="w-5 h-5 mr-2" />
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern tech team collaborating in office"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Rudhram Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Why Choose Rudhram?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We provide world-class developers with cutting-edge expertise to accelerate your digital transformation.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-0">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <feature.icon className="text-white text-2xl w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Domains Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Tech Domains We Cover
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive expertise across modern technology stacks and emerging AI technologies.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techDomains.map((domain, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`bg-gradient-to-br ${domain.gradient} dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-0`}>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${domain.badgeColor} rounded-lg flex items-center justify-center mr-4`}>
                        <domain.icon className="text-white text-xl w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {domain.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {domain.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {domain.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className={`${domain.badgeColor} text-white text-sm hover:${domain.badgeColor}/80`}
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
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Tech Team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get started with world-class developers today. Our expert team is ready to help you accelerate your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button className="bg-accent-amber hover:bg-yellow-400 text-gray-900 px-8 py-4 text-lg font-semibold">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900"
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
