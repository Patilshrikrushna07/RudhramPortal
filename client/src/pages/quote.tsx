import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertQuoteSchema } from "@shared/schema";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Send,
  Clock,
  DollarSign,
  Users,
  FileText,
  CheckCircle
} from "lucide-react";
import type { InsertQuote } from "@shared/schema";

export default function Quote() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTechRoles, setSelectedTechRoles] = useState<string[]>([]);

  const form = useForm<InsertQuote>({
    resolver: zodResolver(insertQuoteSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      techRoles: [],
      duration: "",
      budget: "",
      description: "",
    },
  });

  const quoteMutation = useMutation({
    mutationFn: async (data: InsertQuote) => {
      return await apiRequest("POST", "/api/quote", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "Your request has been received! Our team will contact you within 24 hours.",
      });
      form.reset();
      setSelectedTechRoles([]);
      setIsSubmitting(false);
    },
    onError: (error: Error) => {
      console.error("Quote form error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: InsertQuote) => {
    if (selectedTechRoles.length === 0) {
      toast({
        variant: "destructive",
        title: "Please select at least one tech role",
        description: "Select the technologies you need for your project.",
      });
      return;
    }
    
    setIsSubmitting(true);
    quoteMutation.mutate({
      ...data,
      techRoles: selectedTechRoles,
    });
  };

  const techRoleOptions = [
    { id: "mern-llm", label: "MERN + LLM Developers", description: "Full-stack with AI integration" },
    { id: "java-fullstack", label: "Java Full Stack", description: "Enterprise solutions" },
    { id: "python-llm", label: "Python + LLM", description: "AI-driven backend" },
    { id: "devops", label: "DevOps Engineers", description: "CI/CD & cloud automation" },
    { id: "mobile", label: "Mobile Developers", description: "iOS, Android, cross-platform" },
    { id: "ai-ml", label: "AI/ML Engineers", description: "Machine learning & data science" },
    { id: "frontend", label: "Frontend Developers", description: "React, Angular, Vue.js" },
    { id: "backend", label: "Backend Developers", description: "Node.js, .NET, GoLang" },
    { id: "qa", label: "QA Engineers", description: "Test automation & quality assurance" },
    { id: "ui-ux", label: "UI/UX Designers", description: "User interface & experience design" },
  ];

  const handleTechRoleChange = (roleId: string, checked: boolean) => {
    if (checked) {
      setSelectedTechRoles([...selectedTechRoles, roleId]);
    } else {
      setSelectedTechRoles(selectedTechRoles.filter(id => id !== roleId));
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Tell us about your project requirements and we'll provide a detailed quote within 24 hours.
              Our expert team is ready to help you build your dream tech team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card border-0 shadow-2xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white flex items-center justify-center">
                    <Calculator className="w-6 h-6 mr-3" />
                    Project Requirements Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Contact Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="fullName" className="text-sm font-medium text-white mb-2 block">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Your full name"
                            className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-white"
                            {...form.register("fullName")}
                          />
                          {form.formState.errors.fullName && (
                            <p className="text-sm text-red-300 mt-1">
                              {form.formState.errors.fullName.message}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="company" className="text-sm font-medium text-white mb-2 block">
                            Company Name *
                          </Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Your company name"
                            className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-white"
                            {...form.register("company")}
                          />
                          {form.formState.errors.company && (
                            <p className="text-sm text-red-300 mt-1">
                              {form.formState.errors.company.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium text-white mb-2 block">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@company.com"
                            className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-white"
                            {...form.register("email")}
                          />
                          {form.formState.errors.email && (
                            <p className="text-sm text-red-300 mt-1">
                              {form.formState.errors.email.message}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium text-white mb-2 block">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-white"
                            {...form.register("phone")}
                          />
                          {form.formState.errors.phone && (
                            <p className="text-sm text-red-300 mt-1">
                              {form.formState.errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Tech Roles Selection */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Required Tech Roles (Select multiple) *
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {techRoleOptions.map((role) => (
                          <div key={role.id} className="flex items-start space-x-3">
                            <Checkbox
                              id={role.id}
                              checked={selectedTechRoles.includes(role.id)}
                              onCheckedChange={(checked) => handleTechRoleChange(role.id, !!checked)}
                              className="mt-1 border-white/30 data-[state=checked]:bg-accent-amber data-[state=checked]:border-accent-amber"
                            />
                            <div className="flex-1">
                              <Label htmlFor={role.id} className="text-white font-medium cursor-pointer">
                                {role.label}
                              </Label>
                              <p className="text-white/70 text-sm">{role.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {selectedTechRoles.length === 0 && form.formState.isSubmitted && (
                        <p className="text-sm text-red-300">
                          Please select at least one tech role
                        </p>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Project Details
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="duration" className="text-sm font-medium text-white mb-2 block">
                            <Clock className="w-4 h-4 inline mr-1" />
                            Project Duration *
                          </Label>
                          <Controller
                            name="duration"
                            control={form.control}
                            render={({ field }) => (
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                  <SelectValue placeholder="Select project duration" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1-3 months">1-3 months</SelectItem>
                                  <SelectItem value="3-6 months">3-6 months</SelectItem>
                                  <SelectItem value="6-12 months">6-12 months</SelectItem>
                                  <SelectItem value="12+ months">12+ months</SelectItem>
                                  <SelectItem value="Ongoing">Ongoing</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {form.formState.errors.duration && (
                            <p className="text-sm text-red-300 mt-1">
                              {form.formState.errors.duration.message}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="budget" className="text-sm font-medium text-white mb-2 block">
                            <DollarSign className="w-4 h-4 inline mr-1" />
                            Budget Range *
                          </Label>
                          <Controller
                            name="budget"
                            control={form.control}
                            render={({ field }) => (
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="$5k-15k">$5k - $15k</SelectItem>
                                  <SelectItem value="$15k-50k">$15k - $50k</SelectItem>
                                  <SelectItem value="$50k-100k">$50k - $100k</SelectItem>
                                  <SelectItem value="$100k+">$100k+</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {form.formState.errors.budget && (
                            <p className="text-sm text-red-300 mt-1">
                              {form.formState.errors.budget.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description" className="text-sm font-medium text-white mb-2 block">
                          Project Description *
                        </Label>
                        <Textarea
                          id="description"
                          rows={5}
                          placeholder="Describe your project requirements, timeline, and any specific technical needs..."
                          className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-white"
                          {...form.register("description")}
                        />
                        {form.formState.errors.description && (
                          <p className="text-sm text-red-300 mt-1">
                            {form.formState.errors.description.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="w-full bg-accent-amber hover:bg-yellow-400 text-gray-900 py-4 px-6 text-lg font-semibold transition-all transform hover:scale-105"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting Request..."
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Get My Custom Quote
                          </>
                        )}
                      </Button>
                      
                      <p className="text-center text-sm text-white/80 mt-4">
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                        Our team will contact you within 24 hours with a detailed quote and next steps.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our streamlined process ensures you get the right talent quickly
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              {
                step: "1",
                title: "Quote Review",
                description: "Our experts analyze your requirements and prepare a detailed proposal with timelines and costs.",
                icon: FileText,
                color: "bg-primary-500"
              },
              {
                step: "2", 
                title: "Developer Matching",
                description: "We match you with pre-vetted developers who have the exact skills and experience you need.",
                icon: Users,
                color: "bg-secondary-500"
              },
              {
                step: "3",
                title: "Quick Onboarding",
                description: "Start working with your new team members within days, not weeks. Full support throughout.",
                icon: CheckCircle,
                color: "bg-accent-emerald"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="text-white w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
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
