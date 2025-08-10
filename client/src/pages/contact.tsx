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
  MessageSquare
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to build your dream tech team? Let's discuss your project requirements and find the perfect developers for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
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
