import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Entramos na sua operação e operamos lado a lado para encontrar a raiz do problema.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Planejamento",
    description: "Desenhamos a arquitetura da solução, desde o software até o fator humano.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implantação",
    description: "Desenvolvemos os sistemas, automatizamos as rotinas e treinamos a sua equipe.",
  },
];

const Methodology = () => (
  <section id="metodologia" className="relative py-24 grain-overlay">
    <div className="container mx-auto px-4 max-w-3xl relative z-10">
      <div className="text-center mb-16">
        <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">Metodologia</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-glow-purple">Como Atuamos</h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent hidden sm:block" />

        <div className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6 items-start opacity-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center bg-background box-glow-cyan">
                <step.icon className="text-primary" size={20} />
              </div>
              <div>
                <span className="text-primary/60 font-display text-xs tracking-widest">{step.number}</span>
                <h3 className="font-display text-lg font-semibold mt-1 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Methodology;
