import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "ISO 22301",
    description: "Business Continuity Management",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "ISO 20000",
    description: "IT Service Management",
    color: "from-[hsl(var(--violet))] to-[hsl(var(--purple))]",
  },
  {
    name: "ISO 9001",
    description: "Quality Management Systems",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "DPDP",
    description: "Data Protection & Privacy",
    color: "from-rose-500 to-pink-500",
  },
];

export function CertificationsPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications We Help You Achieve
          </h2>
          <p className="text-muted-foreground text-lg">
            Our expert team guides you through the entire certification process,
            from gap analysis to successful audit completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/certifications">
            <Button variant="hero">
              Explore Certifications <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
