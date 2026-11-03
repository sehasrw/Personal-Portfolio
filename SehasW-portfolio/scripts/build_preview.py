"""Generate a standalone HTML preview from the same design text and image assets.
Run from repository root: python3 scripts/build_preview.py
"""
from pathlib import Path
from html import escape
import shutil

ROOT=Path(__file__).resolve().parent.parent
DEST=ROOT/'preview'
DEST.mkdir(exist_ok=True)
for folder in ['assets','cases']:
    shutil.copytree(ROOT/'public'/folder,DEST/folder,dirs_exist_ok=True)
css=(ROOT/'app/globals.css').read_text().replace("@import 'tailwindcss';",'')
(DEST/'style.css').write_text(css)
js="""document.querySelectorAll('.menu-toggle').forEach(b=>b.addEventListener('click',()=>{const open=b.classList.toggle('is-open');b.setAttribute('aria-expanded',open);document.querySelector('.mobile-nav').classList.toggle('is-open',open)}));document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.menu-toggle').classList.remove('is-open');document.querySelector('.mobile-nav').classList.remove('is-open')}));"""
(DEST/'script.js').write_text(js)
projects=[
 ('aevix','AEVIX','BRAND IDENTITY & LOGO DESIGN','aevix.png','aevix.webp'),
 ('nineleven-labs','Nineleven Labs','BRAND IDENTITY & LOGO DESIGN','nineleven-labs.png','nineleven-labs.webp'),
 ('naturifresh','Naturi Fresh','SOCIAL MEDIA CAMPAIGN','naturifresh.png','naturifresh.webp'),
 ('ccre-lands','CCRE Lands','SOCIAL MEDIA CAMPAIGN','ccre-lands.png','ccre-lands.webp'),
 ('pearl-isle-foods','Pearl Isle Foods','SOCIAL MEDIA CAMPAIGN','pearl-isle-foods.png','pearl-isle-foods.webp'),
 ('hotel-ravo','Hotel RAVO UI/UX Redesign','UI/UX DESIGN','hotel-ravo.png','hotel-ravo.webp')]
services=[
 ('01/','service-branding.png','Brand identity','Logos, visual languages and cohesive identity systems that make a brand feel like itself.',['LOGOS','TYPOGRAPHY','GUIDELINES']),
 ('02/','service-packaging.png','Packaging & print','Distinctive packaging, physical touchpoints and editorial design that earn a closer look.',['PACKAGING','POSTERS','EDITORIAL']),
 ('03/','service-digital.png','Digital creatives','Campaign graphics, social assets and digital compositions with a recognizable voice.',['SOCIAL','CAMPAIGNS','CONTENT'])]
archive=[('01','Packaging & Identity','Sandila Cinnamon','sandila-cinnamon'),('02','Identity & Logo Design','Nineleven Labs','nineleven-labs'),('03','Brand Identity','AEVIX','aevix'),('04','Social Media Campaign','NaturiFresh','naturifresh')]
pre='''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Sehas Walukularachchi — independent creative designer."><title>Sehas W — Creative Designer</title><link rel="stylesheet" href="/style.css"></head><body>'''
hero='''<div class="hero-outer" id="top"><header class="hero"><div class="hero-nav content-width"><a href="/#top" class="brand-link" aria-label="Sehas W — back to top"><img src="/assets/logo.png" width="216" height="38" alt="Sehas W"></a><nav class="desktop-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#expertise">Expertise</a><a class="nav-contact" href="#contact">Get in touch</a></nav><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button><div class="mobile-nav" id="mobile-nav"><a href="#work">Work</a><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div></div><div class="hero-copy hero-copy-left"><h1><span class="hero-kicker">Hey, I’m a</span><span>Creative</span><span>Designer.</span></h1><p>Turning ideas into thoughtful<br class="desktop-break"> visuals</p></div><div class="hero-copy hero-copy-right"><p class="right-kicker">DESIGN IS NOT JUST HOW<br> IT LOOKS.</p><p class="right-title">It’s how<br> it feels.</p><span class="right-rule" aria-hidden="true"></span></div><div class="hero-giant" aria-hidden="true">sehas</div><img class="hero-person" src="/assets/hero-portrait.png" width="622" height="925" alt="Sehas Walukularachchi"></header><div class="expertise-strip content-width"><span>ONE DESIGNER. MANY MEDIUMS.</span><div><span>BRANDING</span><span>PACKAGING</span><span>ART DIRECTION</span><span>PRINT &amp; DIGITAL</span></div></div></div>'''
about='''<main class="main-frame"><section class="about-section" id="about"><div class="section-inner about-inner"><p class="eyebrow">[ ABOUT ME ]</p><h2 class="display-heading about-heading">Designer.<br>Visual thinker.<br>Curious mind.</h2><p class="about-description">I’m <strong>Sehas Walukularachchi</strong>, an independent graphic designer exploring how ideas can become memorable visual experiences. My work moves between branding,<br class="wide-only"> packaging, editorial design and digital campaigns.</p><a href="#expertise" class="pill-button button-red">More about collaborating</a></div></section>'''
leadwork='''<section class="work-section bordered-section" id="work"><div class="section-inner"><div class="section-lead work-lead"><div><p class="eyebrow">[ SELECTED WORK ]</p><h2 class="display-heading">Some things<br>I’ve <em>made.</em></h2></div><p class="lead-description">Different challenges, different aesthetics. A selection of visual explorations across the things I love to create.</p></div><div class="project-grid">'''
for slug,title,category,cover,case in projects:
 leadwork+=f'<a class="project-card" href="/projects/{slug}/" aria-label="View {escape(title)} project"><div class="project-cover"><img src="/assets/{cover}" width="570" height="370" alt="{escape(title)} project placeholder"></div><p class="project-category">{escape(category)}</p><h3>{escape(title)}</h3></a>'
leadwork+='''</div></div></section>'''
thinking='''<section class="thinking-section bordered-section" id="thinking"><div class="section-inner section-lead thinking-grid"><div><p class="eyebrow">[ THE THINKING BEHIND IT ]</p><h2 class="display-heading">Not just<br>making things<br><em>look good.</em></h2></div><div class="thinking-right"><p>For me, design is about giving<br class="desktop-break"> ideas a voice people want to listen to.</p><p class="thinking-subline">Clear thinking. Strong visuals. A little unexpected energy</p><a href="#expertise" class="pill-button button-red">My approach</a><div class="good-ideas" aria-hidden="true">GOOD<span>✳</span><br>IDEAS</div></div></div></section>'''
serv='''<section class="services-section bordered-section" id="expertise"><div class="section-inner"><div class="section-lead services-lead"><div><p class="eyebrow">[ WHAT I DO ]</p><h2 class="display-heading">A few ways<br>I can <em>help.</em></h2></div><p class="lead-description">Thoughtful visuals for ideas that deserve to be seen, understood and remembered.</p></div><div class="services-grid">'''
for num,icon,title,description,tags in services:
 serv+=f'''<article class="service-card"><p class="service-number">{num}</p><img class="service-icon" src="/assets/{icon}" alt="" width="76" height="77"><h3>{title}</h3><p class="service-description">{description}</p><div class="service-tags">{''.join('<span>'+t+'</span>' for t in tags)}</div></article>'''
serv+='</div></div></section>'
arch='''<section class="archive-section bordered-section" id="archive"><div class="section-inner"><div class="section-lead archive-lead"><div><p class="eyebrow">[ THE SHORTLIST ]</p><h2 class="display-heading">More from<br>the <em>archive.</em></h2></div><p class="lead-description">An alternate way to explore the work. One project at a time.</p></div><div class="archive-list">'''
for num,cat,title,slug in archive:
 arch+=f'<a class="archive-item" href="/projects/{slug}/"><span class="archive-number">{num}</span><span class="archive-name"><span class="archive-category">{cat}</span><strong>{title}</strong></span><span class="archive-arrow" aria-hidden="true">↗</span></a>'
arch+='''</div></div></section><div class="pre-footer-spacer" aria-hidden="true"></div></main>'''
footer='''<footer class="contact-section" id="contact"><div class="section-inner section-lead contact-grid"><div><p class="eyebrow contact-eyebrow">[ HAVE SOMETHING IN MIND ]</p><h2 class="display-heading">Let’s make<br>it <em>happen.</em></h2></div><div class="contact-side"><p>Have a project, collaboration or a good idea?<br>I’d love to hear about it.</p><a class="pill-button button-light" href="mailto:sehas.rw@gmail.com">Email me</a><a class="contact-email" href="mailto:sehas.rw@gmail.com">sehas.rw@gmail.com</a></div></div></footer>'''
home_html=pre+hero+about+leadwork+thinking+serv+arch+footer+'<script src="/script.js"></script></body></html>'
home_html=home_html.replace('src="/', 'src="').replace('href="/', 'href="')
(DEST/'index.html').write_text(home_html)
for index,(slug,title,category,cover,case) in enumerate(projects+[('sandila-cinnamon','Sandila Cinnamon','PACKAGING & IDENTITY',None,None)]):
 nextproject=projects[(index+1)%len(projects)][0] if index<len(projects) else projects[0][0]
 nextname=projects[(index+1)%len(projects)][1] if index<len(projects) else projects[0][1]
 content=f'''<main class="case-page"><header class="case-header content-width"><a href="/#top"><img src="/assets/logo.png" alt="Sehas W" width="216" height="38"></a><a class="case-back" href="/#work"><span aria-hidden="true">↖</span> Back to work</a></header><div class="case-intro content-width"><p class="eyebrow">[ SELECTED WORK / {category} ]</p><h1 class="display-heading">{title}<span class="case-period">.</span></h1><div class="case-intro-bottom"><span>PROJECT PRESENTATION</span><span>SCROLL TO EXPLORE ↓</span></div></div>'''
 if case:
  content+=f'<div class="case-artwork"><img src="/cases/{case}" alt="{title} full project presentation"></div>'
 else:
  content+='<div class="case-pending"><span class="eyebrow">[ IN PROGRESS ]</span><h2>Something good<br>is on its way.</h2><p>The Sandila Cinnamon presentation is still being prepared.</p></div>'
 content+=f'''<div class="case-bottom-nav content-width"><a href="/#work">← All projects</a><a href="/projects/{nextproject}/"><span>UP NEXT</span><strong>{nextname} <span aria-hidden="true">↗</span></strong></a></div><footer class="case-footer"><span>© 2026 Sehas W</span><a href="mailto:sehas.rw@gmail.com">Let’s make it happen ↗</a></footer></main>'''
 target=DEST/'projects'/slug
 target.mkdir(parents=True,exist_ok=True)
 case_html=(pre.replace('<title>', '<base href="../../"><title>')+content+'</body></html>')
 case_html=case_html.replace('src="/', 'src="').replace('href="/', 'href="').replace('href="#', 'href="index.html#')
 (target/'index.html').write_text(case_html)
print('Preview generated at',DEST)
