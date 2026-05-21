import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/profile.png";
import sokoposImg from "@/assets/sokopos.png";
import procurbosseImg from "@/assets/procurbosse.png";
import aeroopsImg from "@/assets/aeroops.png";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, Shield, Network, Monitor, Printer, Server, Eye } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Isaac Njoroge — IT Support & Systems Administrator" },
      { name: "description", content: "Portfolio of Isaac Njoroge Nduati — IT Support, Systems Administration, and Web projects. Based in Nyeri, Kenya." },
      { property: "og:title", content: "Isaac Njoroge — IT Support & Systems Administrator" },
      { property: "og:description", content: "IT Support specialist and builder of modern web experiences." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" },
    ],
  }),
});

const projects = [
  {
    name: "SokoMtaani",
    url: "https://sokopos.edgeone.app",
    tagline: "Smart POS for modern Kenyan businesses",
    blurb: "A point-of-sale platform built for African retailers. Manage sales, inventory, and payments with M-Pesa integration, stock tracking, and analytics — simple enough for any shop, powerful enough to grow with the business.",
    stack: ["React", "Tailwind", "M-Pesa"],
    image: sokoposImg,
  },
  {
    name: "EL5 MediProcure",
    url: "https://procurbosse.edgeone.app",
    tagline: "Health procurement system — Embu Level 5",
    blurb: "A secure procurement and vendor management platform designed for hospital operations. Tracks requisitions, suppliers, and approvals with role-based access — built around the realities of clinical purchasing.",
    stack: ["React", "TypeScript", "PWA"],
    image: procurbosseImg,
  },
  {
    name: "AeroOps Nexus",
    url: "https://aeroops.edgeone.app",
    tagline: "Enterprise ground operations dashboard",
    blurb: "A clean operations interface for aviation ground teams — tracking flights, crew, and maintenance schedules. Built to make complex logistics feel calm and controllable.",
    stack: ["React", "Tailwind", "Dashboard"],
    image: aeroopsImg,
  },
];

const skills = [
  { icon: Network, title: "Network Operations", items: "IP config, RJ45 crimping, switch/router oversight" },
  { icon: Monitor, title: "Workstation Deployment", items: "Full lifecycle: assembly, OS install, handover" },
  { icon: Shield, title: "Security & Compliance", items: "Data Protection Act (2019), access control, audits" },
  { icon: Printer, title: "Printers & Peripherals", items: "USB & network printers, drivers, maintenance" },
  { icon: Eye, title: "CCTV & Surveillance", items: "Installation, cabling, preventive maintenance" },
  { icon: Server, title: "Tier 1 & 2 Support", items: "50+ users supported, manual ticketing, escalation" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl">Isaac<span className="text-primary">.</span></a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-6">
              <span className="w-8 h-px bg-primary" /> Available for work
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-6">
              Isaac Njoroge<br />
              <span className="italic text-primary">builds & supports</span><br />
              reliable systems.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              IT Support & Systems Administrator with 4+ years across desktop support, networking, and media systems. I also design and ship web apps that solve real operational problems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition inline-flex items-center gap-2">
                View projects <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="mailto:Njorogeisaac069@gmail.com" className="px-6 py-3 rounded-full border border-border hover:bg-secondary transition font-medium">
                Email me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary blur-3xl rounded-full" />
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden" style={{ background: "radial-gradient(at 30% 20%, oklch(0.32 0.08 290), oklch(0.18 0.04 280) 70%)", boxShadow: "var(--shadow-glow)" }}>
              <img src={profile} alt="Isaac Njoroge" className="absolute inset-0 w-full h-full object-contain object-bottom" />
            </div>
          </div>

        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-3">Selected work</div>
              <h2 className="font-display text-4xl md:text-5xl">Live projects</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs hidden md:block">Three shipped products solving real operational problems.</p>
          </div>

          <div className="grid gap-8">
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative grid md:grid-cols-2 gap-0 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-secondary">
                  <img src={p.image} alt={`${p.name} screenshot`} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-sm text-muted-foreground font-mono mb-3">0{i + 1} — Live</div>
                  <h3 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="text-muted-foreground italic mb-4">{p.tagline}</p>
                  <p className="leading-relaxed mb-6">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{s}</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    Visit live site <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-3">About</div>
            <h2 className="font-display text-4xl md:text-5xl">A bit about me.</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
            <p>
              I'm currently leading IT desk operations at the <strong className="text-primary">Anglican Church of Kenya</strong>, where I support 50+ users across hardware, software, and network issues — from crimping cables to deploying workstations to running live AV for services.
            </p>
            <p>
              Earlier in 2025 I completed an industrial attachment in the ICT department at <strong className="text-primary">Embu Level 5 Hospital</strong>, handling MIS support, printer fleets across wards, and the careful work of operating inside a clinical environment governed by Kenya's Data Protection Act.
            </p>
            <p className="text-muted-foreground">
              On the side, I build web applications — practical tools for retail, procurement, and operations teams. I like systems that are calm under pressure and software that respects the people using it.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-display text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years in IT support</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Users supported daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-widest text-primary mb-3">Capabilities</div>
            <h2 className="font-display text-4xl md:text-5xl">What I do well.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div key={s.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition">
                <s.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Contact</div>
          <h2 className="font-display text-5xl md:text-6xl mb-6">
            Let's <span className="italic text-primary">work together.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Open to IT support, systems administration, and web development roles. Freelance projects welcome too.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <a href="mailto:Njorogeisaac069@gmail.com" className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition">
              <Mail className="w-5 h-5 text-primary mx-auto mb-3" />
              <div className="text-xs text-muted-foreground mb-1">Email</div>
              <div className="text-sm break-all group-hover:text-primary transition">Njorogeisaac069@gmail.com</div>
            </a>
            <a href="tel:+254116647894" className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition">
              <Phone className="w-5 h-5 text-primary mx-auto mb-3" />
              <div className="text-xs text-muted-foreground mb-1">Phone</div>
              <div className="text-sm group-hover:text-primary transition">+254 116 647 894</div>
            </a>
            <div className="p-6 rounded-xl bg-card border border-border">
              <MapPin className="w-5 h-5 text-primary mx-auto mb-3" />
              <div className="text-xs text-muted-foreground mb-1">Based in</div>
              <div className="text-sm">Othaya, Nyeri, Kenya</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Isaac Njoroge Nduati</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><Github className="w-4 h-4" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
