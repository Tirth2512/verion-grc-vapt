import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, ArrowRight } from "lucide-react";

const certifications = [
  {
    name: "ISO 27001",
    fullName: "Information Security Management System",
    description: "The international standard for information security management. Demonstrates your organization's commitment to protecting sensitive data through a systematic approach.",
    benefits: [
      "Protect sensitive information assets",
      "Build customer trust and confidence",
      "Meet regulatory requirements",
      "Reduce security incident costs",
      "Gain competitive advantage",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "ISO 22301",
    fullName: "Business Continuity Management System",
    description: "The global standard for business continuity management. Ensures your organization can continue operating during and after disruptions.",
    benefits: [
      "Minimize business disruption",
      "Protect critical business functions",
      "Enhance organizational resilience",
      "Improve stakeholder confidence",
      "Meet client requirements",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "ISO 20000",
    fullName: "IT Service Management System",
    description: "The international standard for IT service management. Demonstrates your ability to deliver quality IT services efficiently.",
    benefits: [
      "Improve service delivery",
      "Align IT with business needs",
      "Increase customer satisfaction",
      "Optimize IT processes",
      "Reduce operational costs",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "ISO 9001",
    fullName: "Quality Management System",
    description: "The world's most recognized quality management standard. Shows your commitment to consistent quality and customer satisfaction.",
    benefits: [
      "Enhance customer satisfaction",
      "Improve process efficiency",
      "Increase market credibility",
      "Drive continuous improvement",
      "Reduce waste and errors",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "DPDP",
    fullName: "Digital Personal Data Protection",
    description: "Compliance with India's Digital Personal Data Protection Act. Essential for organizations handling personal data of Indian citizens.",
    benefits: [
      "Legal compliance assurance",
      "Protect personal data",
      "Build customer trust",
      "Avoid hefty penalties",
      "Demonstrate data responsibility",
    ],
    color: "from-rose-500 to-pink-500",
  },
];

const process = [
  {
    step: "1",
    title: "Gap Analysis",
    description: "We assess your current state against the certification requirements to identify gaps.",
  },
  {
    step: "2",
    title: "Roadmap Development",
    description: "Create a detailed implementation plan with timelines and milestones.",
  },
  {
    step: "3",
    title: "Implementation",
    description: "Deploy necessary controls, policies, and procedures with our guidance.",
  },
  {
    step: "4",
    title: "Internal Audit",
    description: "Conduct thorough internal audits to ensure readiness for certification.",
  },
  {
    step: "5",
    title: "Certification Audit",
    description: "Support during the external audit process to achieve certification.",
  },
];

const Certifications = () => {
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
              <span className="text-gradient">Certifications</span> We Help You Achieve
            </h1>
            <p className="text-xl text-muted-foreground">
              Navigate the complex world of compliance with our expert guidance. 
              We support you through every step of your certification journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center`}
                    >
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{cert.name}</h2>
                      <p className="text-muted-foreground">{cert.fullName}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    {cert.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="hero">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div
                  className={`p-8 rounded-2xl bg-muted/50 border border-border ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {cert.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Certification Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that has helped over 150 organizations achieve 
              their certification goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-dark text-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Certified?
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
              Let us help you navigate the certification process. Schedule a free 
              consultation to discuss your requirements.
            </p>
            <Link to="/contact">
              <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Certification Journey
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;
