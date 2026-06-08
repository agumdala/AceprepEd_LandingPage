/* AcePrep Landing — Shared Components */
const { useState, useEffect, useRef, useCallback } = React;
const { Button: DSButton } = window.AcePrepDesignSystem_b92a75;

/* ---- Icons (Lucide-style, 1.5px stroke) ---- */
function Icon({ children, size = 24, sw = 1.5 }) {
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round'
  }, children);
}

function IconGradCap({ size = 24 }) {
  return React.createElement(Icon, { size }, 
    React.createElement('path', { d: 'M22 10v6' }),
    React.createElement('path', { d: 'M2 10l10-5 10 5-10 5z' }),
    React.createElement('path', { d: 'M6 12v5c0 2 6 3 6 3s6-1 6-3v-5' })
  );
}
function IconBookOpen({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
    React.createElement('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
  );
}
function IconBarChart({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('line', { x1: 18, y1: 20, x2: 18, y2: 10 }),
    React.createElement('line', { x1: 12, y1: 20, x2: 12, y2: 4 }),
    React.createElement('line', { x1: 6, y1: 20, x2: 6, y2: 14 })
  );
}
function IconBell({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('path', { d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' }),
    React.createElement('path', { d: 'M13.73 21a2 2 0 0 1-3.46 0' })
  );
}
function IconClock({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
    React.createElement('polyline', { points: '12 6 12 12 16 14' })
  );
}
function IconUsers({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
    React.createElement('circle', { cx: 9, cy: 7, r: 4 }),
    React.createElement('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
    React.createElement('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
  );
}
function IconTarget({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
    React.createElement('circle', { cx: 12, cy: 12, r: 6 }),
    React.createElement('circle', { cx: 12, cy: 12, r: 2 })
  );
}
function IconCalendar({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('rect', { x: 3, y: 4, width: 18, height: 18, rx: 2, ry: 2 }),
    React.createElement('line', { x1: 16, y1: 2, x2: 16, y2: 6 }),
    React.createElement('line', { x1: 8, y1: 2, x2: 8, y2: 6 }),
    React.createElement('line', { x1: 3, y1: 10, x2: 21, y2: 10 })
  );
}
function IconZap({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
  );
}
function IconCheck({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('polyline', { points: '20 6 9 17 4 12' })
  );
}
function IconTrendUp({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }),
    React.createElement('polyline', { points: '17 6 23 6 23 12' })
  );
}
function IconShield({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
  );
}
function IconPlay({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('polygon', { points: '5 3 19 12 5 21 5 3' })
  );
}
function IconArrowRight({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('line', { x1: 5, y1: 12, x2: 19, y2: 12 }),
    React.createElement('polyline', { points: '12 5 19 12 12 19' })
  );
}
function IconArrowLeft({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('line', { x1: 19, y1: 12, x2: 5, y2: 12 }),
    React.createElement('polyline', { points: '12 19 5 12 12 5' })
  );
}
function IconMenu({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('line', { x1: 4, y1: 6, x2: 20, y2: 6 }),
    React.createElement('line', { x1: 4, y1: 12, x2: 20, y2: 12 }),
    React.createElement('line', { x1: 4, y1: 18, x2: 20, y2: 18 })
  );
}
function IconX({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
    React.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18 })
  );
}
function IconLayers({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('polygon', { points: '12 2 2 7 12 12 22 7 12 2' }),
    React.createElement('polyline', { points: '2 17 12 22 22 17' }),
    React.createElement('polyline', { points: '2 12 12 17 22 12' })
  );
}
function IconRefresh({ size = 24 }) {
  return React.createElement(Icon, { size },
    React.createElement('polyline', { points: '23 4 23 10 17 10' }),
    React.createElement('path', { d: 'M20.49 15a9 9 0 1 1-2.12-9.36L23 10' })
  );
}

/* ---- Scroll Reveal Hook ---- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const doneRef = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || doneRef.current) return;
    // Force browser to commit the initial opacity:0 paint
    void el.offsetHeight;
    let obs, t1;
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      // Add class via DOM first to start CSS transition immediately
      el.classList.add('is-visible');
      // Sync React state (for Counter and other consumers)
      setVisible(true);
      if (obs) obs.disconnect();
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t1);
    };
    const check = () => {
      if (doneRef.current) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.05 && rect.bottom > 0) finish();
    };
    const onScroll = () => check();
    // Defer first check by 50ms (after forced reflow)
    t1 = setTimeout(check, 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    try {
      obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) finish(); },
        { threshold, rootMargin: '50px' });
      obs.observe(el);
    } catch(e) {}
    return () => {
      if (obs) obs.disconnect();
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t1);
    };
  }, []);
  return [ref, visible];
}

function AnimReveal({ children, className = '', delay = 0, noAnim = false }) {
  const [ref, visible] = useReveal(0.1);
  const delayClass = delay > 0 ? ` anim-d${delay}` : '';
  if (noAnim) return React.createElement('div', { className }, children);
  return React.createElement('div', {
    ref, className: `anim-reveal${delayClass} ${visible ? 'is-visible' : ''} ${className}`
  }, children);
}

/* ---- Animated Counter ---- */
function Counter({ end, suffix = '', prefix = '', duration = 1800, noAnim = false }) {
  const [ref, visible] = useReveal(0.3);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible || noAnim) { setVal(end); return; }
    let start = 0; const startTime = performance.now();
    function tick(now) {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [visible, end, noAnim]);
  return React.createElement('span', { ref }, prefix, val, suffix);
}

/* ---- Landing Nav ---- */
function LandingNav({ onBack, links = [], ctaLabel, ctaVariant = 'accent', onCTA, onLinkClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h, { passive: true });
    h();
    return () => window.removeEventListener('scroll', h);
  }, []);
  return React.createElement('nav', { className: `lp-nav${scrolled ? ' is-scrolled' : ''}` },
    React.createElement('div', { className: 'lp-nav__logo', onClick: onBack },
      React.createElement('img', { src: 'assets/aceprep-logo.png', alt: 'AcePrep' })
    ),
    React.createElement('div', { className: `lp-nav__center${menuOpen ? ' is-open' : ''}` },
      links.map(l => React.createElement('button', {
        key: l, className: 'lp-nav__link',
        onClick: () => { onLinkClick && onLinkClick(l); setMenuOpen(false); }
      }, l))
    ),
    React.createElement('div', { className: 'lp-nav__right' },
      ctaLabel && React.createElement(DSButton, { variant: ctaVariant, size: 'sm', pill: true, onClick: onCTA }, ctaLabel),
      React.createElement('button', { className: 'lp-nav__menu-btn', onClick: () => setMenuOpen(!menuOpen) },
        menuOpen ? React.createElement(IconX, { size: 20 }) : React.createElement(IconMenu, { size: 20 })
      )
    )
  );
}

/* ---- Section Wrapper ---- */
function Section({ id, alt, white, children, className = '' }) {
  const bg = white ? 'lp-section--white' : alt ? 'lp-section--alt' : '';
  return React.createElement('section', { id, className: `lp-section ${bg} ${className}` },
    React.createElement('div', { className: 'lp-section__inner' }, children)
  );
}

/* ---- Feature Card ---- */
function FeatureCard({ icon, title, desc, noAnim, delay = 0 }) {
  return React.createElement(AnimReveal, { delay, noAnim },
    React.createElement('div', { className: 'lp-feature-card' },
      React.createElement('div', { className: 'lp-feature-card__icon' }, icon),
      React.createElement('div', { className: 'lp-feature-card__title' }, title),
      React.createElement('div', { className: 'lp-feature-card__desc' }, desc)
    )
  );
}

/* ---- Metric Card ---- */
function MetricCard({ value, suffix, prefix, label, noAnim, delay = 0 }) {
  return React.createElement(AnimReveal, { delay, noAnim },
    React.createElement('div', { className: 'lp-metric-card' },
      React.createElement('div', { className: 'lp-metric-card__value' },
        React.createElement(Counter, { end: value, suffix, prefix, noAnim })
      ),
      React.createElement('div', { className: 'lp-metric-card__label' }, label)
    )
  );
}

/* ---- Testimonial Carousel ---- */
function TestimonialCarousel({ testimonials, noAnim }) {
  const [idx, setIdx] = useState(0);
  const count = testimonials.length;
  useEffect(() => {
    if (noAnim) return;
    const iv = setInterval(() => setIdx(i => (i + 1) % count), 5000);
    return () => clearInterval(iv);
  }, [count, noAnim]);
  return React.createElement(AnimReveal, { noAnim },
    React.createElement('div', { className: 'lp-testimonials' },
      React.createElement('div', { className: 'lp-testimonials__track', style: { transform: `translateX(-${idx * (100 / Math.min(count, 3))}%)` } },
        testimonials.map((t, i) =>
          React.createElement('div', { key: i, className: 'lp-testimonial-card' },
            React.createElement('div', { className: 'lp-testimonial-card__quote' },
              '\u201C', t.quote || 'Testimonial placeholder — real quote coming soon.', '\u201D'
            ),
            React.createElement('div', { className: 'lp-testimonial-card__author' },
              React.createElement('div', { className: 'lp-testimonial-card__avatar' }, t.initials || '?'),
              React.createElement('div', null,
                React.createElement('div', { className: 'lp-testimonial-card__name' }, t.name || 'Name'),
                React.createElement('div', { className: 'lp-testimonial-card__role' }, t.role || 'Role · Institution')
              )
            )
          )
        )
      ),
      React.createElement('div', { className: 'lp-testimonials__nav' },
        testimonials.map((_, i) =>
          React.createElement('button', {
            key: i, className: `lp-testimonials__dot${i === idx ? ' is-active' : ''}`,
            onClick: () => setIdx(i)
          })
        )
      )
    )
  );
}

/* ---- Mini Browser Frame ---- */
function MiniBrowserFrame({ children, url = 'aceprep.net' }) {
  return React.createElement('div', { className: 'mini-browser' },
    React.createElement('div', { className: 'mini-browser__bar' },
      React.createElement('span', { className: 'mini-browser__dot' }),
      React.createElement('span', { className: 'mini-browser__dot' }),
      React.createElement('span', { className: 'mini-browser__dot' }),
      React.createElement('span', { className: 'mini-browser__url' }, url)
    ),
    React.createElement('div', { className: 'mini-browser__body' }, children)
  );
}

/* ---- Educator Dashboard Mockup (Topic Struggles Ranking) ---- */
function DashboardMockup() {
  const topics = [
    { rank: 1, topic: 'Organic Chemistry', students: 34, pct: 82, color: 'var(--event-exam)' },
    { rank: 2, topic: 'Linear Algebra', students: 28, pct: 68, color: 'var(--event-exam)' },
    { rank: 3, topic: 'Cell Biology', students: 21, pct: 51, color: 'var(--status-warning)' },
    { rank: 4, topic: 'Thermodynamics', students: 16, pct: 39, color: 'var(--status-warning)' },
    { rank: 5, topic: 'Literary Analysis', students: 9, pct: 22, color: 'var(--event-study)' },
  ];
  return React.createElement(MiniBrowserFrame, { url: 'app.aceprep.net/dashboard' },
    React.createElement('div', { className: 'mock-dash' },
      React.createElement('div', { className: 'mock-sidebar' },
        React.createElement('div', { className: 'mock-sidebar__item is-active' },
          React.createElement('span', { className: 'mock-sidebar__dot', style: { background: 'var(--color-steel)' } }), 'Dashboard'
        ),
        React.createElement('div', { className: 'mock-sidebar__item' },
          React.createElement('span', { className: 'mock-sidebar__dot', style: { background: 'var(--color-ink-300)' } }), 'Students'
        ),
        React.createElement('div', { className: 'mock-sidebar__item' },
          React.createElement('span', { className: 'mock-sidebar__dot', style: { background: 'var(--color-ink-300)' } }), 'Topics'
        ),
        React.createElement('div', { className: 'mock-sidebar__item' },
          React.createElement('span', { className: 'mock-sidebar__dot', style: { background: 'var(--color-ink-300)' } }), 'Reports'
        )
      ),
      React.createElement('div', { className: 'mock-main' },
        React.createElement('div', { className: 'mock-stats' },
          React.createElement('div', { className: 'mock-stat' },
            React.createElement('div', { className: 'mock-stat__val' }, '128'),
            React.createElement('div', { className: 'mock-stat__lbl' }, 'Students')
          ),
          React.createElement('div', { className: 'mock-stat' },
            React.createElement('div', { className: 'mock-stat__val', style: { color: 'var(--color-steel)' } }, '87%'),
            React.createElement('div', { className: 'mock-stat__lbl' }, 'Engagement')
          ),
          React.createElement('div', { className: 'mock-stat' },
            React.createElement('div', { className: 'mock-stat__val', style: { color: 'var(--event-exam)' } }, '5'),
            React.createElement('div', { className: 'mock-stat__lbl' }, 'At-Risk Topics')
          )
        ),
        React.createElement('div', { style: { fontSize: 11, fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 } }, 'Topics Students Struggle With'),
        topics.map((t, i) =>
          React.createElement('div', { key: i, className: 'mock-progress' },
            React.createElement('span', { style: { width: 14, flexShrink: 0, fontWeight: 600, color: 'var(--text-muted)', fontSize: 10 } }, t.rank),
            React.createElement('span', { style: { width: 100, flexShrink: 0 } }, t.topic),
            React.createElement('div', { className: 'mock-progress__bar' },
              React.createElement('div', { className: 'mock-progress__fill', style: { width: t.pct + '%', background: t.color } })
            ),
            React.createElement('span', { style: { width: 40, textAlign: 'right', fontSize: 10, color: 'var(--text-muted)' } }, t.students + ' students')
          )
        ),
        React.createElement('div', { className: 'mock-alert', style: { borderColor: 'var(--status-warning)', background: 'rgba(245,158,11,0.06)', color: 'var(--status-warning)' } },
          React.createElement(IconBell, { size: 12 }), React.createElement('span', null, 'Organic Chemistry flagged for review')
        )
      )
    )
  );
}

/* ---- Educator Problem Section Mockup (Class Progress) ---- */
function ClassProgressMockup() {
  return React.createElement(MiniBrowserFrame, { url: 'app.aceprep.net/analytics' },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 10 } },
      React.createElement('div', { style: { fontSize: 13, fontWeight: 600 } }, 'Class Overview'),
      React.createElement('div', { className: 'mock-stats' },
        React.createElement('div', { className: 'mock-stat' },
          React.createElement('div', { className: 'mock-stat__val', style: { color: 'var(--event-study)', fontSize: 'var(--text-h3)' } }, '78%'),
          React.createElement('div', { className: 'mock-stat__lbl' }, 'Class Progress')
        ),
        React.createElement('div', { className: 'mock-stat' },
          React.createElement('div', { className: 'mock-stat__val', style: { fontSize: 'var(--text-h3)' } }, '4.2'),
          React.createElement('div', { className: 'mock-stat__lbl' }, 'Avg Hours/Week')
        ),
        React.createElement('div', { className: 'mock-stat' },
          React.createElement('div', { className: 'mock-stat__val', style: { color: 'var(--event-exam)', fontSize: 'var(--text-h3)' } }, '3'),
          React.createElement('div', { className: 'mock-stat__lbl' }, 'Struggling Topics')
        )
      ),
      React.createElement('div', { style: { fontSize: 11, fontWeight: 600, marginTop: 4 } }, 'Avg Topic Struggles'),
      [
        { topic: 'Organic Chemistry', pct: 78, color: 'var(--event-exam)' },
        { topic: 'Linear Algebra', pct: 62, color: 'var(--status-warning)' },
        { topic: 'Thermodynamics', pct: 45, color: 'var(--status-warning)' },
      ].map((t, i) =>
        React.createElement('div', { key: i, className: 'mock-progress' },
          React.createElement('span', { style: { width: 110, flexShrink: 0 } }, t.topic),
          React.createElement('div', { className: 'mock-progress__bar' },
            React.createElement('div', { className: 'mock-progress__fill', style: { width: t.pct + '%', background: t.color } })
          ),
          React.createElement('span', { style: { width: 28, textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 500 } }, t.pct + '%')
        )
      ),
      React.createElement('div', { style: { fontSize: 11, fontWeight: 600, marginTop: 4 } }, 'Weekly Study Hours'),
      React.createElement('div', { style: { display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 } },
        [3.1, 4.5, 5.2, 3.8, 4.9, 4.0, 3.5].map((h, i) =>
          React.createElement('div', { key: i, style: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 } },
            React.createElement('div', { style: { width: '80%', height: Math.round(h * 8), background: i === 2 ? 'var(--color-steel)' : 'var(--color-steel-100)', borderRadius: 3, transition: 'height 0.3s' } }),
            React.createElement('span', { style: { fontSize: 8, color: 'var(--text-muted)' } }, ['M','T','W','T','F','S','S'][i])
          )
        )
      )
    )
  );
}

/* ---- Student Calendar Mockup ---- */
function StudentCalendarMockup() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const events = { 3: 'study', 7: 'exam', 10: 'quiz', 14: 'study', 17: 'study', 21: 'exam' };
  const colors = { study: 'var(--event-study)', exam: 'var(--event-exam)', quiz: 'var(--event-quiz)' };
  return React.createElement(MiniBrowserFrame, { url: 'app.aceprep.net/calendar' },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        React.createElement('span', { style: { fontWeight: 600, fontSize: 13 } }, 'My Calendar'),
        React.createElement('span', { style: { fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' } }, 'OCT 2026')
      ),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 } },
        days.map(d => React.createElement('div', { key: d, style: { textAlign: 'center', fontSize: 9, fontWeight: 600, color: 'var(--text-muted)', padding: '4px 0', letterSpacing: '0.05em' } }, d)),
        Array.from({ length: 28 }, (_, i) => {
          const day = i + 1;
          const ev = events[day];
          return React.createElement('div', { key: i, style: { textAlign: 'center', padding: '6px 2px', borderRadius: 6, fontSize: 10, position: 'relative', background: day === 14 ? 'var(--color-steel-50)' : 'transparent', fontWeight: day === 14 ? 600 : 400 } },
            day,
            ev && React.createElement('div', { style: { width: '80%', height: 3, borderRadius: 2, background: colors[ev], margin: '2px auto 0' } })
          );
        })
      ),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 } },
        React.createElement('div', { style: { fontSize: 11, fontWeight: 600 } }, 'Today\u2019s Plan'),
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', background: 'rgba(16,185,129,0.08)', borderRadius: 6, fontSize: 11 } },
          React.createElement('div', { style: { width: 4, height: 20, borderRadius: 2, background: 'var(--event-study)', flexShrink: 0 } }),
          React.createElement('div', null,
            React.createElement('div', { style: { fontWeight: 500 } }, 'Study: Biology Ch. 8'),
            React.createElement('div', { style: { fontSize: 10, color: 'var(--text-muted)' } }, '3:00 PM \u2013 4:30 PM')
          )
        ),
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', background: 'rgba(59,130,246,0.08)', borderRadius: 6, fontSize: 11 } },
          React.createElement('div', { style: { width: 4, height: 20, borderRadius: 2, background: 'var(--event-quiz)', flexShrink: 0 } }),
          React.createElement('div', null,
            React.createElement('div', { style: { fontWeight: 500 } }, 'Review: Calc Practice Set'),
            React.createElement('div', { style: { fontSize: 10, color: 'var(--text-muted)' } }, '5:00 PM \u2013 6:00 PM')
          )
        )
      )
    )
  );
}

/* ---- Educator Hero Mockup (Syllabus Calendar) ---- */
function SyllabusCalendarMockup() {
  var evC = { exam: '#EF4444', quiz: '#3B82F6', study: '#10B981' };
  var weeks = [
    [{d:1},{d:2},{d:3},{d:4},{d:5},{d:6},{d:7}],
    [{d:8},{d:9,ev:[{l:'Faith: Off-Campus S...',t:'study'}]},{d:10},{d:11},{d:12,ev:[{l:'Pstat: Quiz 4',t:'quiz'}]},{d:13},{d:14}],
    [{d:15},{d:16,ev:[{l:'Faith: Final Paper To...',t:'exam'}]},{d:17,ev:[{l:'Pstat: Final Exam',t:'exam'}]},{d:18},{d:19},{d:20,ev:[{l:'Faith: Christianity W...',t:'study'}]},{d:21}],
    [{d:22},{d:23},{d:24},{d:25},{d:26},{d:27,ev:[{l:'Quiz',t:'quiz'}]},{d:28}],
    [{d:29},{d:30,ev:[{l:'Faith: Muslim Traditi...',t:'study'}]},{d:31},{d:1,m:1,ev:[{l:'Test',t:'exam'}]},{d:2,m:1},{d:3,m:1},{d:4,m:1}],
  ];
  var dayH = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  var hCS = { fontSize:11, fontWeight:600, textAlign:'center', padding:'8px 4px', color:'#64748B', letterSpacing:'0.06em', borderBottom:'1px solid #E2E8F0', borderRight:'1px solid #E2E8F0' };
  var cS = { borderRight:'1px solid #E2E8F0', borderBottom:'1px solid #E2E8F0', padding:'4px 5px', height:52, display:'flex', flexDirection:'column', gap:2, overflow:'hidden' };
  var chip = function(l, t, k) {
    return React.createElement('div', { key: k, style: { fontSize:9, padding:'2px 6px', borderRadius:3, background:evC[t], color:'#fff', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', fontWeight:500, lineHeight:'1.6' } }, l);
  };
  var cell = function(data, key) {
    return React.createElement('div', { key: key, style: cS },
      React.createElement('span', { style: { fontSize:12, fontWeight:400, color: data.m ? '#CBD5E1' : '#334155' } }, data.d < 10 ? '0' + data.d : '' + data.d),
      data.ev && data.ev.map(function(e, i) { return chip(e.l, e.t, i); })
    );
  };

  return React.createElement('div', { style: { background:'#F8FAFC', borderRadius:18, padding:20, boxShadow:'0 8px 40px -12px rgba(15,23,42,0.12)' } },
    /* Title */
    React.createElement('div', { style: { fontWeight:600, fontSize:18, textAlign:'center', marginBottom:12, color:'var(--text-primary)', letterSpacing:'-0.01em' } }, 'Syllabus Calendar'),
    React.createElement('div', { style: { display:'flex', gap:14 } },
      /* Calendar main */
      React.createElement('div', { style: { flex:1, minWidth:0 } },
        /* Month header bar — dark like the real site */
        React.createElement('div', { style: {
          display:'flex', alignItems:'center', justifyContent:'space-between',
          padding:'8px 14px', background:'var(--color-ink)',
          borderRadius:12, marginBottom:6,
        }},
          React.createElement('span', { style: { fontSize:10, padding:'3px 10px', background:'rgba(255,255,255,0.15)', color:'#fff', borderRadius:6, fontWeight:500 } }, '\u2039 Prev'),
          React.createElement('span', { style: { fontSize:13, fontWeight:600, letterSpacing:'0.06em', color:'#fff' } }, 'MARCH 2026'),
          React.createElement('span', { style: { fontSize:10, padding:'3px 10px', background:'rgba(255,255,255,0.15)', color:'#fff', borderRadius:6, fontWeight:500 } }, 'Next \u203A')
        ),
        /* Calendar grid */
        React.createElement('div', { style: { display:'grid', gridTemplateColumns:'repeat(7,1fr)', border:'1px solid #E2E8F0', borderRadius:8, overflow:'hidden', background:'#fff' } },
          dayH.map(function(d,i) { return React.createElement('div', { key:'h'+i, style: hCS }, d); }),
          weeks.flatMap(function(week,wi) { return week.map(function(c,di) { return cell(c, wi*7+di); }); })
        )
      ),
      /* Sidebar */
      React.createElement('div', { style: { width:130, display:'flex', flexDirection:'column', gap:8, flexShrink:0, paddingTop:0 } },
        /* Upcoming Assessments */
        React.createElement('div', { style: { background:'#fff', border:'1.5px solid var(--outline-strong)', borderRadius:12, padding:'12px 10px', textAlign:'center' } },
          React.createElement('div', { style: { fontWeight:600, fontSize:13, marginBottom:2 } }, 'Upcoming'),
          React.createElement('div', { style: { fontWeight:600, fontSize:13, marginBottom:6 } }, 'Assessments'),
          React.createElement('div', { style: { fontSize:9, color:'#94A3B8', lineHeight:1.4 } }, 'No quizzes or exams in the next 7 days')
        ),
        /* Nav buttons */
        React.createElement('div', { style: { padding:'6px 10px', borderRadius:8, background:'linear-gradient(135deg,#7EC8FF,#2C6FDF)', color:'#fff', fontSize:9, fontWeight:600, textAlign:'center' } }, '\u2190 Back to Classes'),
        React.createElement('div', { style: { padding:'6px 10px', borderRadius:8, background:'linear-gradient(135deg,#7EC8FF,#2C6FDF)', color:'#fff', fontSize:9, fontWeight:600, textAlign:'center' } }, 'Next: Study Materials \u2192'),
        /* Classes */
        React.createElement('div', { style: { background:'#fff', border:'1.5px solid var(--outline-strong)', borderRadius:12, padding:'10px 10px' } },
          React.createElement('div', { style: { fontWeight:600, fontSize:13, textAlign:'center', marginBottom:8 } }, 'Classes'),
          ['Faith','Pstat','pstat'].map(function(cls) {
            return React.createElement('div', { key:cls, style: { display:'flex', alignItems:'center', gap:8, fontSize:11, padding:'3px 0' } },
              React.createElement('div', { style: { width:14, height:14, border:'1.5px solid var(--outline-strong)', borderRadius:3, flexShrink:0 } }),
              cls
            );
          })
        )
      )
    )
  );
}

/* ---- Pilot / Demo Form ---- */
function PilotForm({ noAnim }) {
  const [form, setForm] = useState({ name: '', institution: '', email: '', students: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.institution.trim()) e.institution = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.students.trim()) e.students = 'Required';
    else if (isNaN(form.students) || Number(form.students) < 1) e.students = 'Enter a number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const field = (key, label, type = 'text', fullWidth = false) => {
    return React.createElement('div', { className: `lp-form__field${fullWidth ? ' lp-form__field--full' : ''}` },
      React.createElement('label', { className: 'lp-form__label' }, label),
      React.createElement('input', {
        className: `lp-form__input${errors[key] ? ' is-error' : ''}`,
        type, value: form[key],
        placeholder: label,
        onChange: e => { setForm({ ...form, [key]: e.target.value }); if (errors[key]) setErrors({ ...errors, [key]: null }); }
      }),
      errors[key] && React.createElement('span', { className: 'lp-form__error' }, errors[key])
    );
  };

  if (submitted) {
    return React.createElement('div', { className: 'lp-form__success' },
      React.createElement('h3', null, 'Thank you!'),
      React.createElement('p', null, 'We\u2019ll reach out within 24 hours to schedule your demo.')
    );
  }

  return React.createElement('form', { className: 'lp-form', onSubmit: handleSubmit },
    field('name', 'Full Name'),
    field('institution', 'Institution'),
    field('email', 'Email Address', 'email'),
    field('students', 'Number of Students', 'text'),
    React.createElement('div', { className: 'lp-form__field--full', style: { gridColumn: '1 / -1' } },
      React.createElement(DSButton, { variant: 'accent', type: 'submit', block: true }, 'Book a Demo')
    )
  );
}

/* ---- CTA Banner ---- */
function CTABanner({ heading, sub, ctaLabel, ctaVariant = 'accent', onCTA, secondaryLabel, noAnim }) {
  return React.createElement('div', { className: 'lp-cta-banner' },
    React.createElement(AnimReveal, { noAnim },
      React.createElement('div', { className: 'lp-cta-banner__inner' },
        React.createElement('h2', { className: 'lp-cta-banner__heading' }, heading),
        sub && React.createElement('p', { className: 'lp-cta-banner__sub' }, sub),
        React.createElement('div', { className: 'lp-cta-banner__actions' },
          React.createElement(DSButton, { variant: ctaVariant, pill: true, onClick: onCTA }, ctaLabel),
          secondaryLabel && React.createElement(DSButton, { variant: 'ghost', pill: true, onClick: onCTA,
            style: { borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }
          }, secondaryLabel)
        )
      )
    )
  );
}

/* ---- Footer ---- */
function LandingFooter() {
  return React.createElement('footer', { className: 'lp-footer' },
    React.createElement('span', null, '\u00A9 2026 AcePrep. All rights reserved.'),
    React.createElement('span', null, 'Privacy \u00B7 Terms \u00B7 Contact')
  );
}

/* ---- Export ---- */
Object.assign(window, {
  IconGradCap, IconBookOpen, IconBarChart, IconBell, IconClock, IconUsers, IconTarget,
  IconCalendar, IconZap, IconCheck, IconTrendUp, IconShield, IconPlay,
  IconArrowRight, IconArrowLeft, IconMenu, IconX, IconLayers, IconRefresh,
  AnimReveal, Counter, useReveal, LandingNav, Section, FeatureCard, MetricCard,
  TestimonialCarousel, MiniBrowserFrame, DashboardMockup, StudentCalendarMockup,
  SyllabusCalendarMockup, ClassProgressMockup, PilotForm, CTABanner, LandingFooter
});
