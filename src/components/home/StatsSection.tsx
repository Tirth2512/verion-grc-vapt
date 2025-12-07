import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Clients Secured" },
  { value: "500+", label: "Audits Completed" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-dark text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-background/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
