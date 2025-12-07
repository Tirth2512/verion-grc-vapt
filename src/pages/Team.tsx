import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

const leadership = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "20+ years in cybersecurity with expertise in GRC and strategic security leadership. Former CISO at Fortune 500 companies.",
    certifications: ["CISSP", "CISM", "ISO 27001 LA"],
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Expert in security architecture and penetration testing. Led security programs for major financial institutions.",
    certifications: ["CEH", "OSCP", "GPEN"],
  },
  {
    name: "Amit Patel",
    role: "Head of GRC",
    bio: "Specialized in regulatory compliance and risk management. Helped 100+ organizations achieve ISO certifications.",
    certifications: ["CISA", "CRISC", "ISO 27001 LA"],
  },
  {
    name: "Sneha Reddy",
    role: "Director of Operations",
    bio: "Ensures seamless delivery of all client engagements. Expert in project management and client success.",
    certifications: ["PMP", "CSM", "ITIL"],
  },
];

const teamValues = [
  {
    title: "Expert Team",
    description: "Our consultants hold multiple industry certifications and bring decades of combined experience.",
  },
  {
    title: "Continuous Learning",
    description: "We invest heavily in training to stay ahead of evolving threats and compliance requirements.",
  },
  {
    title: "Client Success",
    description: "Your success is our priority. We work as an extension of your team to achieve your goals.",
  },
];

const Team = () => {
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
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A team of certified cybersecurity professionals dedicated to protecting 
              your organization and ensuring compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry veterans with a passion for cybersecurity excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-4 rounded-2xl overflow-hidden bg-muted aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-background/20 hover:bg-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-background" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-background/20 hover:bg-primary transition-colors"
                      >
                        <Mail className="h-5 w-5 text-background" />
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team is our greatest asset.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-24 bg-gradient-dark text-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
              We're always looking for talented cybersecurity professionals who share 
              our passion for protecting organizations. Explore career opportunities with us.
            </p>
            <Link to="/contact">
              <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View Openings
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
