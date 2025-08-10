import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  GraduationCap, 
  Zap, 
  Lightbulb,
  Calculator,
  Users,
  Globe,
  Award,
  Rocket,
  Star,
  Sparkles,
  Building,
  TrendingUp
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

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We build trust in every engagement.",
      color: "text-primary-500"
    },
    {
      icon: GraduationCap,
      title: "Expertise", 
      description: "Only the top 3% of talent.",
      color: "text-secondary-500"
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Rapid response to client needs.",
      color: "text-accent-amber"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing the boundaries of tech solutions.",
      color: "text-accent-cyan"
    }
  ];

  const stats = [
    { number: "500+", label: "Skilled Developers", color: "text-primary-500" },
    { number: "150+", label: "Successful Projects", color: "text-secondary-500" },
    { number: "50+", label: "Global Clients", color: "text-accent-emerald" },
    { number: "99%", label: "Client Satisfaction", color: "text-accent-amber" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900" />
        
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
              linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%)
            `,
            backgroundSize: '400px 400px, 400px 400px, 200px 200px, 60px 60px, 60px 60px'
          }} />
        </div>

        {/* Floating Company Elements */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {/* Company Achievement Orbs */}
          <motion.div
            className="absolute top-1/6 left-1/6 w-28 h-28 rounded-full bg-gradient-to-r from-purple-500/25 to-indigo-500/25 backdrop-blur-sm"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/6 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500/25 to-blue-500/25 backdrop-blur-sm"
            animate={{ 
              y: [0, 12, 0],
              scale: [1, 0.9, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/25 to-purple-500/25 backdrop-blur-sm"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
              <Heart className="w-5 h-5 text-purple-400" />
              <span className="text-white/90 text-sm font-medium">Our Story & Mission</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Building{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Tomorrow
                </span>
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                />
              </span>
              <br />
              Together
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We're more than a tech company. We're <span className="text-purple-400 font-semibold">your trusted partner</span> in 
              digital transformation, dedicated to excellence and innovation.
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
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-10 py-7 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                  data-testid="button-our-story"
                >
                  <Link href="#our-story">
                    <Eye className="w-5 h-5 mr-3" />
                    Our Story
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg font-semibold rounded-2xl transition-all duration-300"
                  data-testid="button-join-us"
                >
                  <Link href="/contact">
                    <Users className="w-5 h-5 mr-3" />
                    Join Our Team
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Company Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { number: "500+", label: "Expert Developers", color: "from-purple-400 to-indigo-400" },
                { number: "150+", label: "Projects Completed", color: "from-indigo-400 to-blue-400" },
                { number: "50+", label: "Global Clients", color: "from-blue-400 to-cyan-400" },
                { number: "99%", label: "Client Satisfaction", color: "from-cyan-400 to-purple-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
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
            <span className="text-sm font-medium">Learn About Us</span>
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

      {/* About Content Section */}
      <section id="our-story" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Rudram Software Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Empowering businesses worldwide with exceptional tech talent and innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                The Rudram Software Solutions is your global partner for on-demand tech talent. We help businesses of all sizes scale their development capabilities with pre-vetted developers in modern and emerging technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Founded with the vision of bridging the gap between innovative businesses and exceptional talent, 
                we have grown to become a trusted partner for companies seeking to accelerate their digital 
                transformation journeys.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern tech office environment with diverse team collaboration"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Mission */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="text-primary-500 w-8 h-8 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To empower businesses with specialized tech professionals who deliver excellence in every project.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="text-secondary-500 w-8 h-8 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To be recognized worldwide as the go-to partner for AI-driven and full-stack development teams.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Heart className="text-accent-emerald w-8 h-8 mr-3" />
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Our Values
                </h3>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                The principles that guide everything we do
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-6`}>
                        <value.icon className={`w-8 h-8 ${value.color}`} />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className={`text-5xl font-bold ${stat.color} mb-4`}>
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Why Choose Rudram?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine deep technical expertise with a commitment to understanding your unique business needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Proven Track Record",
                description: "Over 150 successful projects across diverse industries and technologies.",
                icon: Target
              },
              {
                title: "Expert Talent Pool",
                description: "500+ pre-vetted developers with specialized skills in cutting-edge technologies.",
                icon: GraduationCap
              },
              {
                title: "Flexible Engagement",
                description: "Scalable solutions that adapt to your project requirements and timeline.",
                icon: Zap
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
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
              Ready to Build Your Dream Tech Team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our expert developers can help accelerate your projects and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button className="bg-accent-amber hover:bg-yellow-400 text-gray-900 px-8 py-4 text-lg font-semibold">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
