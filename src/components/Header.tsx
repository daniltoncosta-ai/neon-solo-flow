import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="font-display text-xl font-bold tracking-widest text-foreground">
          SOLO<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <Button variant="neon" size="sm">
            Otimizar Operação
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden glass border-t border-border px-4 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="neon" size="sm" className="w-fit">
            Otimizar Operação
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
