import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

type RouteProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return [...projects.map(p => ({ slug: p.slug })), { slug: 'sandila-cinnamon' }]; }
export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return { title: project ? project.title : 'Sandila Cinnamon — Coming soon', description: project ? `${project.title} — creative work by Sehas Walukularachchi.` : 'Project presentation coming soon.' };
}
export default async function ProjectPage({ params }: RouteProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  const isComingSoon = slug === 'sandila-cinnamon';
  if (!project && !isComingSoon) notFound();
  const index = project ? projects.findIndex(p => p.slug === slug) : -1;
  const next = index >= 0 ? projects[(index + 1) % projects.length] : projects[0];
  const title = project?.title ?? 'Sandila Cinnamon';
  const category = project?.category ?? 'PACKAGING & IDENTITY';
  return <main className="case-page">
    <header className="case-header content-width">
      <Link href="/#top" aria-label="Back to Sehas W homepage"><Image src="/assets/logo.png" alt="Sehas W" width={216} height={38}/></Link>
      <Link className="case-back" href="/#work"><span aria-hidden="true">↖</span> Back to work</Link>
    </header>
    <div className="case-intro content-width"><p className="eyebrow">[ SELECTED WORK / {category} ]</p><h1 className="display-heading">{title}<span className="case-period">.</span></h1><div className="case-intro-bottom"><span>PROJECT PRESENTATION</span><span>SCROLL TO EXPLORE ↓</span></div></div>
    {project ? <div className="case-artwork"><Image src={project.presentation} alt={`${title} full project presentation`} width={project.presentationWidth} height={project.presentationHeight} sizes="(max-width: 1100px) 100vw, 1100px" quality={95} priority /></div> : <div className="case-pending"><span className="eyebrow">[ IN PROGRESS ]</span><h2>Something good<br/>is on its way.</h2><p>The Sandila Cinnamon presentation is still being prepared.</p></div>}
    <div className="case-bottom-nav content-width"><Link href="/#work">← All projects</Link><Link href={`/projects/${next.slug}`}><span>UP NEXT</span><strong>{next.title} <span aria-hidden="true">↗</span></strong></Link></div>
    <footer className="case-footer"><span>© {new Date().getFullYear()} Sehas W</span><a href="mailto:sehas.rw@gmail.com">Let’s make it happen ↗</a></footer>
  </main>;
}
