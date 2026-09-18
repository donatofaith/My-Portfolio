"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

function NavIcon({ href }: { href: string }) {
  const paths: Record<string, string> = {
    "/": "m3 10 9-7 9 7v10H3V10Zm6 10v-7h6v7",
    "/work": "M3 6h18v14H3V6Zm6 0V4h6v2M3 11h18",
    "/about": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 8c0-4 3-6 8-6s8 2 8 6",
    "/capabilities": "m12 2 9 10-9 10L3 12l9-10Z",
    "/experience": "M5 3h14v18l-4-2-3 2-3-2-4 2V3Zm3 5h8M8 12h8",
    "/contact": "M4 20 20 4M9 4h11v11",
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[href]} /></svg>;
}

function Icon({ type }: { type: "mail" | "github" | "x" }) {
  if (type === "mail") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  if (type === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5v-2.5c-2.7.6-3.4-1.2-3.4-1.2-.5-1.1-1-1.4-1-1.4 1-.1 1.5.9 1.5.9.9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1 .6 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8V21a9.5 9.5 0 0 0-3-18.5Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h4.1L20 20h-4.1L4 4Zm16 0-6.4 7.3M4 20l6.4-7.3" /></svg>;
}

export default function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const saved = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(saved);
    const timer = window.setTimeout(() => setBooting(false), 550);
    return () => window.clearTimeout(timer);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch { /* storage may be unavailable */ }
  }

  return <><div className={`site-loader ${booting ? "is-loading" : ""}`} role="status" aria-label="Loading portfolio"><span className="loader-mark" aria-hidden="true">F.</span><span className="loader-line" aria-hidden="true" /></div><div className="site-frame">
    <aside className={`profile-sidebar ${menuOpen ? "menu-open" : ""}`}>
      <div className="profile-top">
        <div className="profile-cover"><Link className="profile-photo" href="/" aria-label="Oluwalana Faith, home"><Image src="/projects/portrait.png" alt="Oluwalana Faith" fill priority sizes="(max-width: 760px) 72px, 260px" /></Link></div>
        <div className="profile-identity"><span className="profile-avatar"><Image src="/projects/portrait.png" alt="" fill sizes="72px" /></span><span className="identity-copy"><strong>Oluwalana Faith</strong><span>Software developer</span></span></div>
        <button className="mobile-menu" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button>
      </div>
      <div className="sidebar-inner">
        <p className="sidebar-intro">I build thoughtful digital products across AI, Web3, data and the modern web.</p>
        <nav aria-label="Primary navigation">{links.map(link => <Link key={link.href} onClick={() => setMenuOpen(false)} href={link.href} className={pathname === link.href ? "current" : ""} aria-current={pathname === link.href ? "page" : undefined}><span className="nav-symbol"><NavIcon href={link.href} /></span>{link.label}<span className="nav-trail" aria-hidden="true">↗</span></Link>)}</nav>
        <div className="sidebar-bottom"><div className="social-icons">
          <a href="mailto:donatofaith77@gmail.com" aria-label="Send email"><Icon type="mail" /></a>
          <a href="https://github.com/donatofaith" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon type="github" /></a>
          <a href="https://x.com/Web3Donato" target="_blank" rel="noreferrer" aria-label="X"><Icon type="x" /></a>
        </div><Link className="sidebar-contact" href="/contact" onClick={() => setMenuOpen(false)}>Let&apos;s connect <span>↗</span></Link></div>
      </div>
    </aside>
    <div className="site-main"><header className="topbar"><span className="topbar-name">Oluwalana Faith <span> / {pathname === "/" ? "Home" : pathname.slice(1)}</span></span><div className="topbar-actions"><span className="availability"><i /> Open to opportunities</span><button className="theme-switch" type="button" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} aria-pressed={theme === "dark"} onClick={toggleTheme}><span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span><span>{theme === "light" ? "Dark" : "Light"}</span></button></div></header><div className="page-content" key={pathname}>{children}</div><footer className="site-footer"><span>© {new Date().getFullYear()} Oluwalana Faith</span><span>Design with purpose. Build with clarity.</span></footer></div>
  </div></>;
}
