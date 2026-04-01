import { Network, Cog, Code, Users } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Consultoria de Processos",
    description: "Mapeamento completo da sua operação logística para identificar falhas e gargalos operacionais.",
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    description: "Redução de tarefas manuais com automações inteligentes que aceleram sua cadeia de suprimentos.",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Sistemas",
    description: "Criação de softwares sob medida para cobrir as lacunas tecnológicas da sua empresa.",
  },
  {
    icon: Users,
    title: "Treinamento e Alinhamento",
    description: "Capacitação da sua equipe e alinhamento de procedimentos para garantir que a tecnologia traga resultados reais.",
  },
];

const Services = () => (
  <section id="servicos" className="relative py-24 grain-overlay grid-bg">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">Soluções</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-glow-cyan">Nossas Soluções</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group glass rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 animate-glow-border"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:box-glow-cyan transition-all duration-500">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-sm font-semibold mb-3 tracking-wide">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
