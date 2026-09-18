import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Work", description: "Selected live products built by Oluwalana Faith across AI, Web3, careers and business growth." };

export default function Work() {
  return <main className="inner-page work-page"><header className="page-heading"><span className="eyebrow">01 / Work</span><h1>Selected <em>projects.</em></h1><p>Four different problems. Four products developed to make information clearer and experiences easier to use.</p></header><div className="work-list">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></main>;
}
