import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5542999359438?text=Olá! Gostaria de conversar sobre soluções logísticas.";

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Mail, href: "#" },
  { icon: MessageCircle, href: WHATSAPP_URL },
];

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="font-display text-sm tracking-wider text-muted-foreground">
        SOLO<span className="text-primary">.</span> Soluções Logísticas
      </div>
      <p className="text-xs text-muted-foreground font-body">© 2026 SOLO. Todos os direitos reservados.</p>
      <div className="flex gap-4">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <link.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
