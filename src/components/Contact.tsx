import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Join our early access waitlist or connect with the founding team. 
            We'd love to collaborate with partners aligned with long-term crypto infrastructure.
          </p>
          
          <Button 
            size="lg" 
            className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow px-8"
            asChild
          >
            <a href="mailto:contact@fliprisk.ai">
              <Mail className="mr-2 w-5 h-5" />
              contact@fliprisk.ai
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
