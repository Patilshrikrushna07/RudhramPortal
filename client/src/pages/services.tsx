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
  Calculator
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
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text px-4 sm:px-0">
              Staff Augmentation Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              At The Rudhram Software Solutions, we deliver specialized staff augmentation services to help you scale your development capabilities instantly. Whether you need MERN + LLM, Java Full Stack, or Python + LLM experts, our talent pool covers every modern technology stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
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
