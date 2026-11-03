'use client';

import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <button aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" onClick={() => setOpen(!open)}>
      <span /><span />
    </button>
    <div className={`mobile-nav ${open ? 'is-open' : ''}`} id="mobile-nav">
      <a href="/#work" onClick={close}>Work</a>
      <a href="/#about" onClick={close}>About</a>
      <a href="/#expertise" onClick={close}>Expertise</a>
      <a href="/#contact" onClick={close}>Get in touch <span aria-hidden>↗</span></a>
    </div>
  </>;
}
