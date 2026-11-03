import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { projects, archive } from '@/lib/projects';

const services = [
  { number: '01/', icon: 'service-branding.png', title: 'Brand identity', text: 'Logos, visual languages and cohesive identity systems that make a brand feel like itself.', tags: ['LOGOS', 'TYPOGRAPHY', 'GUIDELINES'] },
  { number: '02/', icon: 'service-packaging.png', title: 'Packaging & print', text: 'Distinctive packaging, physical touchpoints and editorial design that earn a closer look.', tags: ['PACKAGING', 'POSTERS', 'EDITORIAL'] },
  { number: '03/', icon: 'service-digital.png', title: 'Digital creatives', text: 'Campaign graphics, social assets and digital compositions with a recognizable voice.', tags: ['SOCIAL', 'CAMPAIGNS', 'CONTENT'] }
];

export default function HomePage() {
  return <>
    <div className="hero-outer" id="top">
      <header className="hero">
        <div className="hero-nav content-width">
          <Link href="/#top" className="brand-link" aria-label="Sehas W — back to top"><Image src="/assets/logo.png" alt="Sehas W" width={216} height={38} priority /></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a><a href="#about">About</a><a href="#expertise">Expertise</a><a className="nav-contact" href="#contact">Get in touch</a>
          </nav>
          <MobileNav />
        </div>
        <div className="hero-copy hero-copy-left">
          <h1><span className="hero-kicker">Hey, I’m a</span><span>Creative</span><span>Designer.</span></h1>
          <p>Turning ideas into thoughtful<br className="desktop-break"/> visuals</p>
        </div>
        <div className="hero-copy hero-copy-right">
          <p className="right-kicker">DESIGN IS NOT JUST HOW<br/> IT LOOKS.</p>
          <p className="right-title">It’s how<br/> it feels.</p>
          <span className="right-rule" aria-hidden="true" />
        </div>
        <div className="hero-giant" aria-hidden="true">sehas</div>
        <Image className="hero-person" src="/assets/hero-portrait.png" width={622} height={925} alt="Sehas Walukularachchi" priority />
      </header>
      <div className="expertise-strip content-width" aria-label="Design disciplines">
        <span>ONE DESIGNER. MANY MEDIUMS.</span>
        <div><span>BRANDING</span><span>PACKAGING</span><span>ART DIRECTION</span><span>PRINT &amp; DIGITAL</span></div>
      </div>
    </div>

    <main className="main-frame">
      <section className="about-section" id="about">
        <div className="section-inner about-inner">
          <p className="eyebrow">[ ABOUT ME ]</p>
          <h2 className="display-heading about-heading">Designer.<br/>Visual thinker.<br/>Curious mind.</h2>
          <p className="about-description">I’m <strong>Sehas Walukularachchi</strong>, an independent graphic designer exploring how ideas can become memorable visual experiences. My work moves between branding,<br className="wide-only"/> packaging, editorial design and digital campaigns.</p>
          <a href="#expertise" className="pill-button button-red">More about collaborating</a>
        </div>
      </section>

      <section className="work-section bordered-section" id="work">
        <div className="section-inner">
          <div className="section-lead work-lead">
            <div><p className="eyebrow">[ SELECTED WORK ]</p><h2 className="display-heading">Some things<br/>I’ve <em>made.</em></h2></div>
            <p className="lead-description">Different challenges, different aesthetics. A selection of visual explorations across the things I love to create.</p>
          </div>
          <div className="project-grid">
            {projects.map(project => <Link href={`/projects/${project.slug}`} className="project-card" key={project.slug} aria-label={`View ${project.title} project`}>
              <div className="project-cover"><Image src={project.cover} width={570} height={370} alt={`${project.title} project placeholder`} sizes="(max-width: 700px) 100vw, 50vw" /></div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="thinking-section bordered-section" id="thinking">
        <div className="section-inner section-lead thinking-grid">
          <div><p className="eyebrow">[ THE THINKING BEHIND IT ]</p><h2 className="display-heading">Not just<br/>making things<br/><em>look good.</em></h2></div>
          <div className="thinking-right"><p>For me, design is about giving<br className="desktop-break"/> ideas a voice people want to listen to.</p><p className="thinking-subline">Clear thinking. Strong visuals. A little unexpected energy</p><a href="#expertise" className="pill-button button-red">My approach</a><div className="good-ideas" aria-hidden="true">GOOD<span>✳</span><br/>IDEAS</div></div>
        </div>
      </section>

      <section className="services-section bordered-section" id="expertise">
        <div className="section-inner">
          <div className="section-lead services-lead"><div><p className="eyebrow">[ WHAT I DO ]</p><h2 className="display-heading">A few ways<br/>I can <em>help.</em></h2></div><p className="lead-description">Thoughtful visuals for ideas that deserve to be seen, understood and remembered.</p></div>
          <div className="services-grid">
            {services.map(service => <article className="service-card" key={service.number}>
              <p className="service-number">{service.number}</p>
              <Image src={`/assets/${service.icon}`} alt="" width={76} height={77} className="service-icon" />
              <h3>{service.title}</h3>
              <p className="service-description">{service.text}</p>
              <div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="archive-section bordered-section" id="archive">
        <div className="section-inner">
          <div className="section-lead archive-lead"><div><p className="eyebrow">[ THE SHORTLIST ]</p><h2 className="display-heading">More from<br/>the <em>archive.</em></h2></div><p className="lead-description">An alternate way to explore the work. One project at a time.</p></div>
          <div className="archive-list">
            {archive.map(item => <Link className="archive-item" href={`/projects/${item.slug}`} key={item.number}>
              <span className="archive-number">{item.number}</span>
              <span className="archive-name"><span className="archive-category">{item.category}</span><strong>{item.title}</strong></span>
              <span className="archive-arrow" aria-hidden="true">↗</span>
            </Link>)}
          </div>
        </div>
      </section>
      <div className="pre-footer-spacer" aria-hidden="true" />
    </main>
    <footer className="contact-section" id="contact"><div className="section-inner section-lead contact-grid"><div><p className="eyebrow contact-eyebrow">[ HAVE SOMETHING IN MIND ]</p><h2 className="display-heading">Let’s make<br/>it <em>happen.</em></h2></div><div className="contact-side"><p>Have a project, collaboration or a good idea?<br/>I’d love to hear about it.</p><a className="pill-button button-light" href="mailto:sehas.rw@gmail.com">Email me</a><a className="contact-email" href="mailto:sehas.rw@gmail.com">sehas.rw@gmail.com</a></div></div></footer>
  </>;
}
