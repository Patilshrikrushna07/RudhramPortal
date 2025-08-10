import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUp, Calculator } from "lucide-react";

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
      title: "AI-Powered Learning Management System",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "EdTech startup team collaborating on AI learning platform",
      challenge: "US-based EdTech startup needed an AI-powered LMS with automated tutoring in 4 months.",
      solution: "Provided a team of MERN + LLM developers integrating ChatGPT for personalized learning paths.",
      impact: [
        { metric: "70% reduction in content creation time", icon: ArrowUp },
        { metric: "45% boost in student engagement", icon: ArrowUp }
      ],
      testimonial: "Rudhram's developers were game changers for our AI journey. They delivered beyond expectations.",
      badgeColor: "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
    },
    {
      id: 2,
      industry: "FinTech", 
      title: "Enterprise Banking Platform",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      alt: "Financial services team developing banking application",
      challenge: "Regional bank needed to modernize their core banking system with microservices architecture.",
      solution: "Deployed Java Full Stack team with Spring Boot expertise for scalable, secure banking solutions.",
      impact: [
        { metric: "300% improvement in transaction processing", icon: ArrowUp },
        { metric: "60% reduction in system downtime", icon: ArrowUp }
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
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real results from real clients who scaled their tech teams with Rudhram. 
              Discover how we've helped businesses transform their operations with world-class developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white dark:bg-gray-800">
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
