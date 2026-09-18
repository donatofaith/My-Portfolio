import Image from "next/image";
import { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <article className={`work-card work-${project.slug} ${featured ? "featured" : ""}`}>
    <a className="work-preview" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} live site`}>
      <div className="browser-chrome"><span className="browser-lights" aria-hidden="true"><i /><i /><i /></span><span className="browser-url">{project.href.replace("https://", "")}</span><span aria-hidden="true">↗</span></div>
      <div className="work-image"><Image src={project.image} alt={`${project.name} website screenshot`} fill sizes={featured ? "(max-width: 900px) 90vw, 50vw" : "(max-width: 900px) 90vw, 70vw"} /></div>
      <span className="image-cta">View live project ↗</span>
    </a>
    <div className="work-card-foot"><div><span className="work-category">{project.number} / {project.field}</span><h3>{project.name}</h3><p>{project.description}</p><span className="work-contribution">{project.contribution}</span></div><a href={project.href} target="_blank" rel="noreferrer" className="round-link" aria-label={`Open ${project.name}`}>↗</a></div>
  </article>;
}
