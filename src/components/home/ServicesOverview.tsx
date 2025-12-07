import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, FileCheck, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileCheck,
    title: "GRC Services",
    description:
      "Governance, Risk, and Compliance solutions tailored to your organization's needs. We help you build robust frameworks for sustainable security.",
    features: ["Policy Development", "Risk Assessment", "Compliance Audits"],
  },
  {
    icon: Search,
    title: "VAPT Services",
    description:
      "Vulnerability Assessment and Penetration Testing to identify and remediate security weaknesses before they can be exploited.",
    features: ["Network Testing", "Application Security", "Red Team Exercises"],
  },
  {
    icon: Shield,
    title: "ISO Certification",
    description:
      "End-to-end support for achieving and maintaining ISO certifications including 27001, 22301, 20000, 9001, and DPDP compliance.",
    features: ["Gap Analysis", "Implementation Support", "Certification Assistance"],
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-gradient-mesh relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end cybersecurity services to protect your organization
            and ensure regulatory compliance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl glass border border-white/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
