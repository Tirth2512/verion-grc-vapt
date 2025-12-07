import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-primary text-sm font-medium mb-6"
            >
              <Shield className="h-4 w-4" />
              Trusted Cybersecurity Partner
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Securing Your
              <br />
              <span className="text-gradient">Digital Future</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Comprehensive GRC and VAPT services to help organizations achieve
              compliance and protect against cyber threats. ISO certified excellence.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {["ISO 27001", "ISO 22301", "DPDP Compliant"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center perspective-1000"
          >
            <div className="relative w-[500px] h-[500px] flex items-center justify-center transform-style-3d">
              {/* Central Glowing Orb */}
              <div className="absolute w-64 h-64 rounded-full bg-primary/20 blur-[60px] animate-pulse" />
              <div className="absolute w-48 h-48 rounded-full bg-accent/20 blur-[40px] animate-pulse delay-75" />

              {/* Main Shield Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [-10, 10, -10],
                  rotateX: [-5, 5, -5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 transform-style-3d"
              >
                {/* Shield Icon */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <Shield className="w-full h-full text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

                  {/* Internal Glow */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10" />
                </div>
              </motion.div>

              {/* Gyroscopic Rings */}
              {/* Ring 1 - Vertical Spin */}
              <motion.div
                animate={{ rotateX: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 border-2 border-primary/30 rounded-full transform-style-3d"
                style={{ rotateY: 45 }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_bg-primary]" />
              </motion.div>

              {/* Ring 2 - Horizontal/Tilted Spin */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-96 h-96 border border-accent/40 rounded-full transform-style-3d"
                style={{ rotateX: 60 }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_bg-accent]" />
              </motion.div>

              {/* Ring 3 - Outer Slow Spin */}
              <motion.div
                animate={{ rotateZ: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] border border-primary/20 border-dashed rounded-full"
              >
                <Lock className="absolute top-10 left-10 w-6 h-6 text-primary/60" />
                <CheckCircle className="absolute bottom-10 right-10 w-6 h-6 text-accent/60" />
              </motion.div>

              {/* Scanning Scanning Effect */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
