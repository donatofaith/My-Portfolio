import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Oluwalana Faith about software products, collaboration and opportunities." };

export default function Contact() {
  return <main className="inner-page contact-page"><span className="eyebrow">05 / Contact</span><div className="contact-hero"><span className="contact-spark" aria-hidden="true">✳</span><h1>Let&apos;s make a good idea <em>real.</em></h1><p>Have a product to build, a problem to untangle or an opportunity to discuss? I&apos;d like to hear about it.</p><a className="contact-mail" href="mailto:donatofaith77@gmail.com"><span>Start a conversation</span><strong>donatofaith77@gmail.com</strong><span aria-hidden="true">↗</span></a></div><div className="contact-links"><div><span className="small-label">Find me elsewhere</span><p>Follow the work or say hello.</p></div><div><a href="https://github.com/donatofaith" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://x.com/Web3Donato" target="_blank" rel="noreferrer">X ↗</a><Link href="/work">Projects ↗</Link></div></div></main>;
}
