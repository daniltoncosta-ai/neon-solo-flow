import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5542999359438?text=Olá! Gostaria de conversar sobre soluções logísticas.";

const CTASection = () => (
  <section id="contato" className="relative py-28 grain-overlay overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-cyan/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[150px]" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-glow-cyan">
        Entre em contato, vamos conversar!
      </h2>
      <p className="text-muted-foreground mb-10 font-body text-lg">
        Fale diretamente conosco pelo WhatsApp e descubra como podemos transformar sua operação.
      </p>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <Button variant="neon" size="lg" className="gap-3">
          <MessageCircle size={20} />
          Falar pelo WhatsApp
        </Button>
      </a>
    </div>
  </section>
);

export default CTASection;
