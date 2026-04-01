import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="font-display text-sm tracking-wider text-muted-foreground">
        SOLO<span className="text-primary">.</span> Soluções Logísticas
      </div>
      <p className="text-xs text-muted-foreground font-body">© 2026 SOLO. Todos os direitos reservados.</p>
      <div className="flex gap-4">
        {[Linkedin, Instagram, Mail].map((Icon, i) => (
          <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
