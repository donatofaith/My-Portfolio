import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Faith Oluwalana about software products, collaboration and opportunities." };

function ContactIcon({ type }: { type: "mail" | "github" | "x" }) {
  if (type === "mail") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  if (type === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5v-2.5c-2.7.6-3.4-1.2-3.4-1.2-.5-1.1-1-1.4-1-1.4 1-.1 1.5.9 1.5.9.9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1 .6 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8V21a9.5 9.5 0 0 0-3-18.5Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h4.1L20 20h-4.1L4 4Zm16 0-6.4 7.3M4 20l6.4-7.3" /></svg>;
}

export default function Contact() {
  return <main className="inner-page contact-page">
    <span className="eyebrow">Contact</span>
    <div className="contact-hero">
      <h1>Let&apos;s make a good idea <em>real.</em></h1>
      <p>Have a product to build, a problem to untangle or an opportunity to discuss? I&apos;d like to hear about it.</p>
      <a className="contact-mail" href="mailto:donatofaith77@gmail.com"><span>Start a conversation</span><strong>donatofaith77@gmail.com</strong><span aria-hidden="true">↗</span></a>
    </div>
    <div className="contact-links">
      <div><span className="small-label">Connect</span><p>Choose the channel that works for you.</p></div>
      <div className="contact-socials">
        <a href="mailto:donatofaith77@gmail.com" aria-label="Send email"><ContactIcon type="mail" /><span>Email</span></a>
        <a href="https://github.com/donatofaith" target="_blank" rel="noreferrer" aria-label="GitHub"><ContactIcon type="github" /><span>GitHub</span></a>
        <a href="https://x.com/Web3Donato" target="_blank" rel="noreferrer" aria-label="X"><ContactIcon type="x" /><span>X</span></a>
      </div>
    </div>
    <div className="contact-work-link"><span>See what I&apos;ve been building.</span><Link href="/work">Explore my work <span aria-hidden="true">↗</span></Link></div>
  </main>;
}
