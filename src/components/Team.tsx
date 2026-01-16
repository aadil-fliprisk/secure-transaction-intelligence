import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Aadil Baeg",
    role: "Co-Founder",
    company: "Ex-Coinbase",
    description: "Software Engineer specializing in crypto backend systems, risk infrastructure, and secure large-scale services powering institutional-grade products.",
    initial: "AB"
  },
  {
    name: "Praveen Fulera",
    role: "Co-Founder", 
    company: "Ex-Google",
    description: "Software Engineer specializing in search infrastructure, distributed systems, and high-reliability backend engineering.",
    initial: "PF"
  }
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32">
      <div className="container relative z-10 px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built by engineers from the world's leading technology and crypto companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-card"
            >
              <div className="flex items-start gap-5">
                {/* Avatar with initials */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary">
                    {member.initial}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-primary font-medium">{member.role}</span>
                    <span className="text-muted-foreground/50">•</span>
                    <span className="text-sm text-muted-foreground">{member.company}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
