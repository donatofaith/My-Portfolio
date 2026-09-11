import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "PRISM AI",
    category: "AI · Web3 · Crypto Intelligence",
    description:
      "An evidence-first crypto intelligence platform that connects market movement, historical patterns and on-chain activity into one clear investigation workflow.",
    services: [
      "Product design",
      "Full-stack development",
      "AI integration",
    ],
    image: "/projects/prism.png",
    url: "https://prism-ai-gules.vercel.app/",
    theme: "prism",
  },
  {
    number: "02",
    name: "MarketLens AI",
    category: "AI · Web3 · Market Intelligence",
    description:
      "An AI-powered research platform that transforms live Binance market data into accessible market analysis, comparisons and structured reports.",
    services: [
      "Product design",
      "Full-stack development",
      "Market data integration",
    ],
    image: "/projects/marketlens.png",
    url: "https://marketlens-ai-ten.vercel.app/",
    theme: "marketlens",
  },
  {
    number: "03",
    name: "TriveSpot",
    category: "Career Development · Community",
    description:
      "A responsive career platform connecting ambitious individuals with opportunities, practical resources and a community designed to support growth.",
    services: [
      "Frontend development",
      "Responsive UI",
      "Supabase integration",
    ],
    image: "/projects/trivespot.png",
    url: "https://trivespot.vercel.app/",
    theme: "trivespot",
  },
  {
    number: "04",
    name: "eKreativ Business Boost",
    category: "AI Marketing · Business Growth",
    description:
      "An AI-powered marketing experience created to help businesses strengthen their digital presence, improve visibility and attract more customers.",
    services: [
      "Product design",
      "Frontend development",
      "Responsive experience",
    ],
    image: "/projects/ekreativ.png",
    url: "https://ekreativ-business-boost.vercel.app/",
    theme: "ekreativ",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Product Development",
    description:
      "Taking digital products from early ideas to complete, usable and deployable experiences.",
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible interfaces with React, Next.js, TypeScript and modern CSS.",
  },
  {
    number: "03",
    title: "AI & Data Integration",
    description:
      "Connecting products to AI models, live data, analytics and APIs that support practical decisions.",
  },
  {
    number: "04",
    title: "Web3 Products",
    description:
      "Creating clearer experiences around blockchain data, wallets, tokens and crypto intelligence.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 19 19 5M8 5h11v11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m4.5 6 7.5 6 7.5-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.75a9.25 9.25 0 0 0-2.92 18.03c.46.08.63-.2.63-.44v-1.8c-2.56.56-3.1-1.09-3.1-1.09-.42-1.06-1.02-1.34-1.02-1.34-.84-.57.06-.56.06-.56.93.07 1.42.95 1.42.95.82 1.42 2.16 1.01 2.69.77.08-.6.32-1.01.59-1.25-2.05-.23-4.2-1.02-4.2-4.57 0-1.01.36-1.84.95-2.48-.1-.24-.41-1.18.09-2.45 0 0 .78-.25 2.54.95A8.8 8.8 0 0 1 12 7.11a8.7 8.7 0 0 1 2.31.31c1.76-1.2 2.53-.95 2.53-.95.51 1.27.19 2.21.1 2.45.59.64.95 1.47.95 2.48 0 3.56-2.16 4.33-4.21 4.56.33.29.62.85.62 1.72v2.66c0 .24.17.53.63.44A9.25 9.25 0 0 0 12 2.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.3 4h3.76l3.7 4.93L17.08 4h1.63l-5.2 5.93L19 20h-3.76l-4.05-5.4L6.45 20H4.82l5.62-6.4L5.3 4Zm2.42 1.2 8.12 13.6h1.44L9.16 5.2H7.72Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Oluwalana Faith — Home">
          <span className="brand-mark">OF</span>
          <span className="brand-name">Oluwalana Faith</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk
            <ArrowIcon />
          </a>
        </nav>

        <details className="mobile-navigation">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>

          <nav aria-label="Mobile navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Let&apos;s talk</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            Available for selected opportunities
          </div>

          <h1>
            I build digital products that make{" "}
            <span>complex ideas feel clear.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              Product-focused software developer creating intelligent,
              user-centred experiences across AI, Web3, data and the modern web.
            </p>

            <a className="text-link" href="#work">
              Explore selected work
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-label portrait-label-top">
            Based in Nigeria
          </div>

          <Image
            src="/projects/portrait.png"
            alt="Portrait of Oluwalana Faith"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
          />

          <div className="portrait-label portrait-label-bottom">
            Product · Engineering · Intelligence
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>Portfolio</span>
          <span>2026</span>
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selected projects</span>
            <h2>Work built to be useful.</h2>
          </div>

          <p>
            A selection of complete digital products designed and developed
            across intelligence, community and business.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className={`project project-${project.theme}`}
              key={project.name}
            >
              <div className="project-information">
                <span className="project-number">{project.number}</span>

                <div className="project-title">
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                </div>

                <p>{project.description}</p>

                <ul aria-label={`${project.name} services`}>
                  {project.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>

                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                >
                  Visit live project
                  <ArrowIcon />
                </a>
              </div>

              <a
                className="project-preview"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open the live ${project.name} website`}
              >
                <div className="browser-bar">
                  <div className="browser-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="browser-address">
                    {project.url.replace("https://", "")}
                  </span>

                  <span className="browser-arrow">
                    <ArrowIcon />
                  </span>
                </div>

                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.name} website preview`}
                    fill
                    sizes="(max-width: 900px) 100vw, 65vw"
                  />
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-intro">
          <span className="eyebrow light">About me</span>

          <p className="about-statement">
            I turn ambitious product ideas into thoughtful digital experiences
            that people can understand, trust and use.
          </p>
        </div>

        <div className="about-details">
          <div className="about-number">05</div>

          <div className="about-copy">
            <p>
              I&apos;m a product-focused software developer building
              intelligent, user-centred products across AI, Web3, data and the
              modern web.
            </p>

            <p>
              I develop complete platforms involving responsive interfaces,
              backend APIs, databases, blockchain data, AI integrations,
              analytics, SEO and cloud deployment. My work includes crypto
              intelligence systems, wallet investigation tools, career
              platforms and business-growth solutions.
            </p>

            <p>
              Every product begins with the same goal: purposeful design,
              reliable functionality, clear information and a genuine problem
              worth solving.
            </p>
          </div>
        </div>

        <div className="about-marquee" aria-hidden="true">
          <span>Design with purpose</span>
          <i />
          <span>Build with clarity</span>
          <i />
          <span>Ship with confidence</span>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-heading capabilities-heading">
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2>Strategy through execution.</h2>
          </div>

          <p>
            Combining product thinking, design awareness and engineering to
            build experiences that work from interface to deployment.
          </p>
        </div>

        <div className="capabilities-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.title}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <div className="capability-arrow">
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>

        <div className="tools">
          <span>Working with</span>

          <div>
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Supabase</span>
            <span>REST APIs</span>
            <span>Web3</span>
            <span>AI integrations</span>
            <span>Vercel</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-top">
          <span className="eyebrow light">Have a project in mind?</span>

          <h2>
            Let&apos;s build something
            <span> worth remembering.</span>
          </h2>
        </div>

        <div className="contact-bottom">
          <a
            className="email-link"
            href="mailto:donatofit77@gmail.com"
          >
            <span>Start a conversation</span>
            <strong>donatofit77@gmail.com</strong>
            <ArrowIcon />
          </a>

          <div className="social-links" aria-label="Social links">
            <a
              href="mailto:donatofit77@gmail.com"
              aria-label="Send Oluwalana Faith an email"
            >
              <MailIcon />
            </a>

            <a
              href="https://github.com/donatofaith"
              target="_blank"
              rel="noreferrer"
              aria-label="Oluwalana Faith on GitHub"
            >
              <GithubIcon />
            </a>

            <a
              href="https://x.com/Web3Donato"
              target="_blank"
              rel="noreferrer"
              aria-label="Oluwalana Faith on X"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <div className="footer-line">
          <span>© {new Date().getFullYear()} Oluwalana Faith</span>
          <a href="#top">Back to top ↑</a>
          <span>Designed and developed with intention.</span>
        </div>
      </footer>
    </main>
  );
}