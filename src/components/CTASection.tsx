import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section id="contato" className="relative py-28 grain-overlay overflow-hidden">
    {/* Glow background */}
    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-cyan/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[150px]" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-glow-cyan">
        Pronto para eliminar seus gargalos operacionais?
      </h2>
      <p className="text-muted-foreground mb-10 font-body text-lg">
        Agende um diagnóstico gratuito e descubra como a tecnologia pode transformar sua operação.
      </p>
      <Button variant="neon" size="lg">
        Agendar Diagnóstico Gratuito
      </Button>
    </div>
  </section>
);

export default CTASection;
