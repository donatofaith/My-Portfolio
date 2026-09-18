import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function Home() {
  return <main className="home-page">
    <section className="hero-area"><div className="hero-kicker"><span className="little-star">✳</span> Software development / Digital products</div><h1>Building digital<br />products with <em>clarity</em><br />and purpose<span className="end-dot">.</span></h1><div className="hero-tail"><p>I&apos;m Oluwalana Faith, a software developer turning complex ideas into useful, reliable and people-centred products.</p><Link href="/work" className="button-dark">Explore my work <span>↗</span></Link></div><div className="hero-accent" aria-hidden="true"><span>OF</span></div></section>
    <section className="home-featured"><div className="section-head"><div><span className="eyebrow">01 / Selected work</span><h2>Ideas made real.</h2></div><Link href="/work" className="inline-link">All projects ↗</Link></div><div className="featured-grid">{projects.slice(0,2).map(project => <ProjectCard key={project.slug} featured project={project} />)}</div></section>
    <section className="home-statement"><span className="eyebrow">My approach</span><p>I work across <em>design awareness</em>, code and connected data to make ambitious products easier to use.</p><Link href="/about">More about me <span>↗</span></Link></section>
    <section className="home-next"><div><span className="eyebrow">A little more context</span><h2>Beyond the interface.</h2><p>Explore the skills and real-world experience behind the work.</p></div><div className="home-next-links"><Link href="/capabilities">Capabilities <span>↗</span></Link><Link href="/experience">Experience <span>↗</span></Link></div></section>
  </main>;
}
