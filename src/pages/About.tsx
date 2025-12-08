import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every engagement, delivering solutions that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our client relationships.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as trusted partners in their security journey.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We stay ahead of emerging threats with cutting-edge methodologies and tools.",
  },
];



const About = () => {
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
              About <span className="text-gradient">Verion Security</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a team of passionate cybersecurity professionals dedicated to helping
              organizations navigate the complex landscape of digital security and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-primary/5 border border-primary/10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                Our mission is to simplify and strengthen the cybersecurity and compliance journey by delivering intelligent GRC services, precise VAPT assessments, and seamless certification support across frameworks such as ISO 27001, 20000, 9001, 22301, and the DPDP Act of India. We are committed to helping organisations build secure foundations, reduce risk, and achieve continuous compliance through clarity, expertise, and unwavering dedication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-muted"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be the trusted cybersecurity and compliance partner that empowers every organisation—regardless of size—to operate with confidence, resilience, and integrity in a rapidly evolving digital world. We strive to make robust security, strong governance, and global-standard compliance accessible, achievable, and sustainable for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Verion Security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Choose Us</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              What sets Verion Security apart from the rest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Certified Experts", description: "Our team is equipped with industry-leading certifications such as DPO, CEH, OSCP, and ISO 27001 Lead Auditor/Implementer, ensuring deep technical competence and proven expertise. Every engagement is led by professionals who understand global standards, modern attack vectors, and compliance expectations—giving you confidence that your security is in certified hands." },
              { icon: Users, title: "Client-Centric", description: "Since 2011, we have successfully implemented cybersecurity and compliance programs for 30+ organisations across sectors including healthcare, education, power, IT services, and manufacturing. We tailor every assessment, roadmap, and implementation to your unique business processes, ensuring solutions that are practical, scalable, and aligned with your operational realities." },
              { icon: Globe, title: "Industry Experience", description: "With over a decade of hands-on exposure across diverse industry verticals, we bring a mature understanding of real-world risks, regulatory expectations, and sector-specific challenges. Our experience enables us to design security and compliance strategies that work seamlessly in any environment—whether regulated, high-risk, or rapidly scaling." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
