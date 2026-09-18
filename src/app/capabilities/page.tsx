import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, tools, otherSkills } from "@/lib/content";

export const metadata: Metadata = { title: "Capabilities", description: "Explore Oluwalana Faith's work across product development, frontend engineering, AI, data and Web3." };

export default function Capabilities() {
  return <main className="inner-page capabilities-page"><header className="page-heading"><span className="eyebrow">Capabilities</span><h1>From the first idea to the <em>working product.</em></h1><p>A combination of product thinking and practical engineering, shaped around what people actually need.</p></header><div className="capability-grid">{capabilities.map(item => <article className="capability-card" key={item.number}><span className="capability-number">Focus area</span><h2>{item.title}</h2><p>{item.text}</p><span className="capability-mark" aria-hidden="true">↗</span></article>)}</div><section className="tool-section"><span className="eyebrow">The toolkit</span><h2>Tools and technologies.</h2><div className="tool-chips">{tools.map(tool => <span key={tool}>{tool}</span>)}</div><h2 className="skills-heading">More of what I do.</h2><div className="tool-chips">{otherSkills.map(skill => <span key={skill}>{skill}</span>)}</div></section><div className="page-end-link"><Link href="/experience">See my experience <span>↗</span></Link></div></main>;
}
