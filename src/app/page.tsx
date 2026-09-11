"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    index: "01",
    name: "PRISM AI",
    kicker: "Evidence-first crypto intelligence",
    summary: "A focused investigation workspace connecting market movement, historical patterns and attributable on-chain activity.",
    image: "/projects/prism.png",
    href: "https://prism-ai-gules.vercel.app/",
    meta: ["Product design", "Full-stack", "AI + Web3"],
    style: "signal",
  },
  {
    index: "02",
    name: "MarketLens AI",
    kicker: "Live market research, made legible",
    summary: "An AI research product that turns live Binance market data into useful analysis, comparisons and structured reports.",
    image: "/projects/marketlens.png",
    href: "https://marketlens-ai-ten.vercel.app/",
    meta: ["Product design", "Market data", "AI integration"],
    style: "terminal",
  },
  {
    index: "03",
    name: "TriveSpot",
    kicker: "A clearer path to career growth",
    summary: "A responsive community platform connecting ambitious people with opportunities, resources and a practical support network.",
    image: "/projects/trivespot.png",
    href: "https://trivespot.vercel.app/",
    meta: ["Frontend", "Responsive UI", "Supabase"],
    style: "community",
  },
  {
    index: "04",
    name: "eKreativ",
    kicker: "Digital visibility for growing businesses",
    summary: "An AI-powered marketing experience designed to help businesses sharpen their presence and reach more customers online.",
    image: "/projects/ekreativ.png",
    href: "https://ekreativ-business-boost.vercel.app/",
    meta: ["Product design", "Frontend", "Growth experience"],
    style: "campaign",
  },
];

const capabilities = [
  ["01", "Product thinking", "Shaping the right problem, structure and experience before the interface is built."],
  ["02", "Frontend engineering", "Responsive, accessible interfaces built with React, Next.js, TypeScript and modern CSS."],
  ["03", "AI & data integration", "Connecting products to useful models, APIs, analytics and real-time information."],
  ["04", "Web3 products", "Making wallet, token and blockchain intelligence easier to understand and investigate."],
];

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" /></svg>;
}

function Mail() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6" /></svg>;
}

function Github() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.3 9.3 0 0 0-2.9 18.1c.5.1.6-.2.6-.5v-1.8c-2.6.6-3.1-1.1-3.1-1.1-.4-1.1-1-1.4-1-1.4-.9-.6 0-.6 0-.6.9.1 1.4 1 1.4 1 .8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2.1-.2-4.2-1-4.2-4.6 0-1 .4-1.8 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.2 2.5 1A9 9 0 0 1 12 7.1a9 9 0 0 1 2.3.3c1.8-1.2 2.5-1 2.5-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.5 1 2.5 0 3.6-2.2 4.4-4.2 4.6.3.3.6.8.6 1.7v2.7c0 .3.2.6.6.5A9.3 9.3 0 0 0 12 2.8Z" /></svg>;
}

function XLogo() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 4h3.9l3.7 5 4.4-5h1.6l-5.3 6L19 20h-3.9l-4-5.4L6.3 20H4.7l5.6-6.4L5.2 4Zm2.5 1.2 8.1 13.6h1.5L9.2 5.2H7.7Z" /></svg>;
}

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = ["top", "work", "about", "capabilities", "contact"];
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      let current = "top";
      for (const id of sections) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= 180) current = id;
      }
      if (current) setActive(current);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => { window.removeEventListener("scroll", update); observer.disconnect(); };
  }, []);

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className="studio-nav">
        <a className="identity" href="#top"><span>OF</span><b>Oluwalana Faith</b></a>
        <nav aria-label="Primary navigation">
          {["work", "about", "capabilities"].map((item) => <a className={active === item ? "active" : ""} href={`#${item}`} key={item}>{item}</a>)}
        </nav>
        <a className="nav-cta" href="#contact">Start a project <Arrow /></a>
      </header>

      <section className="dark-hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy" data-reveal>
          <div className="status"><i /> Available for selected opportunities <span>NG / Remote</span></div>
          <p className="hero-role">Product-focused software developer</p>
          <h1>Digital products<br />with <em>clarity</em><br />built in.</h1>
          <div className="hero-intro">
            <p>I design and engineer intelligent, user-centred products across AI, Web3, data and the modern web.</p>
            <a href="#work">Explore the work <Arrow /></a>
          </div>
        </div>
        <div className="portrait-stage" data-reveal>
          <div className="portrait-glow" />
          <div className="portrait-frame">
            <Image src="/projects/portrait.png" alt="Oluwalana Faith" fill priority sizes="(max-width: 850px) 92vw, 42vw" />
            <span className="frame-corner corner-a" /><span className="frame-corner corner-b" />
          </div>
          <div className="portrait-note"><span>01</span><p>Product thinking<br />Design awareness<br />Engineering</p></div>
          <div className="portrait-badge">BUILD<br /><strong>WITH</strong><br />INTENT</div>
        </div>
        <div className="hero-foot"><span>Independent portfolio / 2026</span><span>Scroll to explore ↓</span></div>
      </section>

      <section className="work-intro" id="work">
        <span className="section-code">01 / Selected work</span>
        <h2 data-reveal>Four products.<br /><em>Four different problems.</em></h2>
        <p data-reveal>Each project has its own visual language because each product serves a different kind of user.</p>
      </section>

      <section className="project-stack">
        {projects.map((project) => (
          <article className={`project-scene ${project.style}`} key={project.name} data-reveal>
            <div className="project-copy">
              <div className="project-heading"><span>{project.index}</span><p>{project.kicker}</p></div>
              <h3>{project.name}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="project-tags">{project.meta.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="project-action" href={project.href} target="_blank" rel="noreferrer">View live project <Arrow /></a>
            </div>
            <a className="project-window" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
              <div className="window-bar"><span><i /><i /><i /></span><b>{project.href.replace("https://", "")}</b><Arrow /></div>
              <div className="window-image"><Image src={project.image} alt={`${project.name} website preview`} fill sizes="(max-width: 850px) 94vw, 62vw" /></div>
              <div className="window-hover"><span>Open project</span><Arrow /></div>
            </a>
            <span className="scene-word" aria-hidden="true">{project.index}</span>
          </article>
        ))}
      </section>

      <section className="about-studio" id="about">
        <div className="about-label"><span className="section-code">02 / About</span><p>Thoughtful by default.<br />Curious by practice.</p></div>
        <div className="about-main" data-reveal>
          <h2>I turn ambitious ideas into products people can <em>understand, trust and use.</em></h2>
          <div className="about-columns">
            <p>I&apos;m a product-focused software developer building intelligent, user-centred digital products across AI, Web3, data and the modern web.</p>
            <p>I work across responsive interfaces, backend APIs, databases, blockchain data, AI integrations, analytics, SEO and cloud deployment—always with a focus on solving a real problem.</p>
          </div>
        </div>
        <div className="ticker" aria-hidden="true"><div>DESIGN WITH PURPOSE <i /> BUILD WITH CLARITY <i /> SHIP WITH CONFIDENCE <i /> DESIGN WITH PURPOSE <i /></div></div>
      </section>

      <section className="capability-studio" id="capabilities">
        <div className="capability-top"><span className="section-code">03 / Capabilities</span><h2 data-reveal>From first thought<br />to final deployment.</h2></div>
        <div className="capability-list">
          {capabilities.map(([number, title, description]) => (
            <article key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{description}</p><div><Arrow /></div></article>
          ))}
        </div>
        <div className="toolbelt"><p>Selected toolkit</p><div>{["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "REST APIs", "Web3", "AI integrations", "Vercel", "GitHub"].map((tool) => <span key={tool}>{tool}</span>)}</div></div>
      </section>

      <footer className="studio-contact" id="contact">
        <div className="contact-noise" aria-hidden="true" />
        <span className="section-code">04 / Contact</span>
        <div className="contact-title" data-reveal><p>Have an idea worth building?</p><h2>Let&apos;s make it<br /><em>real.</em></h2></div>
        <a className="contact-email" href="mailto:donatofit77@gmail.com"><span>Start a conversation</span><b>donatofit77@gmail.com</b><Arrow /></a>
        <div className="footer-socials">
          <a href="mailto:donatofit77@gmail.com" aria-label="Email"><Mail /></a>
          <a href="https://github.com/donatofaith" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href="https://x.com/Web3Donato" target="_blank" rel="noreferrer" aria-label="X"><XLogo /></a>
        </div>
        <div className="footer-meta"><span>© 2026 Oluwalana Faith</span><a href="#top">Back to top ↑</a><span>Designed & developed with intention</span></div>
      </footer>
    </main>
  );
}
