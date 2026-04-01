import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";

const WHATSAPP_URL = "https://wa.me/5542999359438?text=Olá! Gostaria de conversar sobre soluções logísticas.";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img src={heroImg} alt="Armazém logístico com tecnologia" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/80" />
    <div className="absolute inset-0 grain-overlay grid-bg" />

    {/* Gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-display tracking-widest uppercase">
        Tecnologia &amp; Logística
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-glow-cyan opacity-0 animate-fade-in-up">
        O Futuro da Sua Logística Começa na Tecnologia.
      </h1>

      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        A SOLO é mais que uma empresa de tecnologia. Entramos na sua operação, identificamos gargalos e implantamos soluções completas para escalar seus resultados.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="neon" size="lg" className="gap-3">
            <MessageCircle size={20} />
            Falar com um Especialista
          </Button>
        </a>
        <Button variant="neon-outline" size="lg" asChild>
          <a href="#servicos">Saiba Mais</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
