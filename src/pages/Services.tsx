import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  FileCheck,
  Search,
  Shield,
  AlertTriangle,
  Lock,
  Server,
  Globe,
  Smartphone,
  Database,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const grcServices = [
  {
    icon: FileCheck,
    title: "Policy & Framework Development",
    description: "Custom security policies aligned with industry standards and regulatory requirements.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment & Management",
    description: "Comprehensive risk identification, analysis, and mitigation strategies.",
  },
  {
    icon: Shield,
    title: "Compliance Audits",
    description: "Thorough audits to ensure adherence to regulatory and industry standards.",
  },
  {
    icon: Database,
    title: "Third-Party Risk Management",
    description: "Vendor security assessments and supply chain risk management.",
  },
];

const vaptServices = [
  {
    icon: Globe,
    title: "Web Application Testing",
    description: "OWASP-based testing to identify vulnerabilities in web applications.",
  },
  {
    icon: Server,
    title: "Network Penetration Testing",
    description: "Internal and external network security assessments.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Testing",
    description: "Security testing for iOS and Android applications.",
  },
  {
    icon: Lock,
    title: "Red Team Exercises",
    description: "Simulated real-world attacks to test your security defenses.",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your business, goals, and current security posture." },
  { step: "02", title: "Assessment", description: "Comprehensive evaluation of your security controls and gaps." },
  { step: "03", title: "Implementation", description: "Deploying tailored solutions and security frameworks." },
  { step: "04", title: "Validation", description: "Testing and verifying the effectiveness of implemented controls." },
  { step: "05", title: "Continuous Support", description: "Ongoing monitoring, updates, and improvement recommendations." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive cybersecurity solutions tailored to protect your organization
              and ensure regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRC Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <FileCheck className="h-4 w-4" />
              Governance, Risk & Compliance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GRC Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Build a robust security foundation with our governance, risk, and compliance services
              designed to protect your organization and meet regulatory requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {grcServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VAPT Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Search className="h-4 w-4" />
              Security Testing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">VAPT Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Proactive security testing to identify vulnerabilities before they can be
              exploited by malicious actors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {vaptServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A systematic approach to delivering exceptional cybersecurity outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <motion.div
                  animate={{
                    color: ["rgba(var(--primary), 0.2)", "rgba(var(--primary), 1)", "rgba(var(--primary), 0.2)"],
                    textShadow: [
                      "0 0 0px rgba(var(--primary), 0)",
                      "0 0 20px rgba(var(--primary), 0.5)",
                      "0 0 0px rgba(var(--primary), 0)"
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: (processSteps.length - 1) * 1.5,
                    delay: index * 1.5,
                    ease: "easeInOut"
                  }}
                  className="text-5xl font-bold mb-4"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-3 h-6 w-6 text-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Why Choose Our Services?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                We combine deep expertise with a client-centric approach to deliver
                security solutions that truly protect your organization.
              </p>
              <ul className="space-y-4">
                {[
                  "Certified security professionals (CISA, CISSP, CEH)",
                  "Industry-specific compliance expertise",
                  "Proven track record with 150+ clients",
                  "End-to-end implementation support",
                  "Ongoing monitoring and improvement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background/5 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
              <p className="text-white/70 mb-6">
                Schedule a free consultation to discuss your security needs and
                learn how we can help protect your organization.
              </p>
              <Link to="/contact">
                <Button size="lg" className="w-full">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
