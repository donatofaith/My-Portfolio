import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function Home() {
  return <main className="home-page">
    <section className="intro-stage" aria-labelledby="intro-title">
      <div className="intro-top"><span className="intro-brand"><span className="intro-monogram">F.</span><span>Faith Oluwalana</span></span><span className="intro-available"><i /> Available for new opportunities</span></div>
      <div className="intro-center"><Link className="latest-project" href="/work"><span className="latest-thumb"><Image src={projects[0].image} alt="" fill sizes="34px" /></span><span>Explore my work</span><span aria-hidden="true">↗</span></Link><p className="intro-kicker">SOFTWARE DEVELOPER · PRODUCT BUILDER</p><h1 id="intro-title">Hi, I&apos;m Faith Oluwalana.<br /><span>Building products that <em>matter.</em></span></h1><p className="intro-description">I design and build thoughtful digital experiences across AI, Web3, data and the modern web.</p></div>
      <div className="project-showcase" aria-label="Featured projects"><div className="showcase-track">{[...projects, ...projects].map((project, index) => <a className={`showcase-tile showcase-${project.slug}`} key={`${project.slug}-${index}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} live site`} tabIndex={index >= projects.length ? -1 : 0}><Image src={project.image} alt="" fill sizes="(max-width: 650px) 160px, 205px" /><span className="showcase-caption">{project.name} <span aria-hidden="true">↗</span></span></a>)}</div></div><div className="intro-bottom"><span>SELECTED WORK</span><Link href="/work">View all projects ↗</Link></div>
    </section>
    <section className="home-featured"><div className="section-head"><div><span className="eyebrow">Selected work</span><h2>Ideas made real.</h2></div><Link href="/work" className="inline-link">All projects ↗</Link></div><div className="featured-grid">{projects.slice(0,2).map(project => <ProjectCard key={project.slug} featured project={project} />)}</div></section>
    <section className="home-statement"><span className="eyebrow">My approach</span><p>I work across <em>design awareness</em>, code and connected data to make ambitious products easier to use.</p><Link href="/about">More about me <span>↗</span></Link></section>
    <section className="home-next"><div><span className="eyebrow">A little more context</span><h2>Beyond the interface.</h2><p>Explore the skills and real-world experience behind the work.</p></div><div className="home-next-links"><Link href="/capabilities">Capabilities <span>↗</span></Link><Link href="/experience">Experience <span>↗</span></Link></div></section>
  </main>;
}
