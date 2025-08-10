import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  HeadphonesIcon,
  Rocket,
  Zap,
  Globe,
  Users,
  Star,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: Error) => {
      console.error("Contact form error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@rudhramsoft.com",
      color: "bg-primary-500"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "+91-XXXXXXXXXX",
      color: "bg-secondary-500"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Tech Park, Innovation District\nBangalore, Karnataka, India",
      color: "bg-accent-emerald"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-700 via-secondary-500 to-primary-900 bg-grid-pattern">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/90 via-secondary-500/90 to-primary-900/90" />
        
        {/* Floating Communication Icons */}
        <motion.div
          className="absolute top-24 left-12 text-white/20 animate-float"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            delay: 0
          }}
        >
          <Mail className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute top-36 right-20 text-white/20 animate-bounce-slow"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            delay: 1
          }}
        >
          <Phone className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute bottom-36 left-16 text-white/20 animate-pulse-slow"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            delay: 2
          }}
        >
          <HeadphonesIcon className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute top-48 left-1/4 text-white/20 animate-spin-slow"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            delay: 3
          }}
        >
          <MessageSquare className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute bottom-24 right-1/3 text-white/20 animate-float"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            delay: 4
          }}
        >
          <Rocket className="w-12 h-12" />
        </motion.div>

        {/* Orbiting Elements */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-96 h-96">
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white/30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <CheckCircle className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-white/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
            >
              <Clock className="w-7 h-7" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-white/30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Users className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-white/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2.25 }}
            >
              <Globe className="w-7 h-7" />
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
              <MessageSquare className="w-5 h-5 text-cyan-300" />
              <span className="text-white text-sm font-medium">Let's Start Building Together</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get In{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
                  Touch
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 animate-gradient"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
              <br />
              Today
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ready to transform your business with top-tier developers? Let's discuss your vision 
              and build something extraordinary together.
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
                data-testid="button-contact-form"
              >
                <Link href="#contact-form">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
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
                data-testid="button-schedule-call"
              >
                <Link href="tel:+91-XXXXXXXXXX">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Promise */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { 
                icon: Clock, 
                title: "Quick Response", 
                description: "Get a reply within 2 hours",
                accent: "text-cyan-300"
              },
              { 
                icon: CheckCircle, 
                title: "Free Consultation", 
                description: "No-obligation project discussion",
                accent: "text-emerald-300"
              },
              { 
                icon: Users, 
                title: "Expert Matching", 
                description: "Perfect developers for your needs",
                accent: "text-purple-300"
              }
            ].map((promise, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <promise.icon className={`w-8 h-8 ${promise.accent}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {promise.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {promise.description}
                </p>
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
            <span className="text-sm font-medium">Contact us below</span>
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

      {/* Contact Section */}
      <section id="contact-form" className="section-padding bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center text-gray-800 dark:text-white">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          className="w-full"
                          {...form.register("name")}
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-red-500 mt-1">
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full"
                          {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-red-500 mt-1">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full"
                        {...form.register("phone")}
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-red-500 mt-1">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project requirements..."
                        className="w-full"
                        {...form.register("message")}
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-red-500 mt-1">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0`}>
                          <info.icon className="text-white w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="bg-gray-200 dark:bg-gray-600 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                          Interactive Map
                        </p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                          Location: Bangalore, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                        <span className="text-gray-800 dark:text-white font-medium">9:00 AM - 7:00 PM IST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                        <span className="text-gray-800 dark:text-white font-medium">10:00 AM - 4:00 PM IST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                        <span className="text-gray-800 dark:text-white font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              {
                question: "How quickly can you provide developers?",
                answer: "We can typically provide pre-vetted developers within 3-5 business days, depending on your specific requirements and technology stack."
              },
              {
                question: "What is your developer vetting process?",
                answer: "Our developers undergo technical assessments, coding tests, communication evaluations, and reference checks to ensure they meet our high standards."
              },
              {
                question: "Do you offer flexible engagement models?",
                answer: "Yes, we offer hourly, monthly, and project-based engagement models to suit different project requirements and budgets."
              },
              {
                question: "Can I interview the developers before hiring?",
                answer: "Absolutely! We encourage client interviews to ensure the perfect fit between developers and your project requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
