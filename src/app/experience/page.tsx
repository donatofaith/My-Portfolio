import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Experience", description: "Professional experience and education of Faith Oluwalana." };

export default function Experience() {
  return <main className="inner-page experience-page"><header className="page-heading"><span className="eyebrow">Experience</span><h1>Work that shaped <em>how I build.</em></h1><p>Roles spanning technology support and website operations, alongside the products I develop.</p></header><div className="experience-list"><article className="experience-item"><div className="experience-date"><span className="experience-dot" />Sep 2024 — Present</div><div><span className="small-label">Pacsa International School</span><h2>IT Personnel</h2><p>Part of the school&apos;s IT team since September 2024.</p></div></article><article className="experience-item"><div className="experience-date"><span className="experience-dot" />Website administration</div><div><span className="small-label">Mybuyence · Real estate platform</span><h2>Website Administrator</h2><p>Managed website content, platform operations and digital assets. Organised property listings, maintained navigation and supported day-to-day website functionality.</p></div></article></div><section className="experience-outro"><span className="eyebrow">In practice</span><h2>Experience informs the work. The work keeps me learning.</h2><Link href="/work" className="inline-link">Explore my projects ↗</Link></section></main>;
}
