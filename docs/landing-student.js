/* AcePrep Landing — Student Page */
const { Button: StuDSButton } = window.AcePrepDesignSystem_b92a75;

function StudentHero({ layout, noAnim }) {
  return React.createElement('div', { className: `lp-hero lp-hero--${layout}` },
    React.createElement('div', { className: 'lp-hero__inner' },
      React.createElement('div', null,
        React.createElement(AnimReveal, { noAnim },
          React.createElement('p', { className: 'lp-hero__eyebrow' }, 'For Students')
        ),
        React.createElement(AnimReveal, { noAnim, delay: 1 },
          React.createElement('h1', { className: 'lp-hero__heading' },
            'Keeping you on track to meet your academic goals this semester.'
          )
        ),
        React.createElement(AnimReveal, { noAnim, delay: 2 },
          React.createElement('p', { className: 'lp-hero__sub' },
            'Never miss a deadline. Stay organized, motivated, and confident with a personalized study plan built around your academic schedule.'
          )
        ),
        React.createElement(AnimReveal, { noAnim, delay: 3 },
          React.createElement('div', { className: 'lp-hero__ctas' },
            React.createElement(StuDSButton, { variant: 'accent', pill: true }, 'Get Started Free'),
            React.createElement(StuDSButton, { variant: 'ghost', pill: true }, 'Watch Demo')
          )
        )
      ),
      React.createElement('div', { className: 'lp-hero__mockup' },
        React.createElement(AnimReveal, { noAnim, delay: layout === 'split' ? 2 : 4 },
          React.createElement(SyllabusCalendarMockup, null)
        )
      )
    )
  );
}

function StudentHowItWorks({ noAnim }) {
  return React.createElement(Section, { id: 'stu-how', alt: true },
    React.createElement('div', { className: 'lp-split' },
      React.createElement('div', null,
        React.createElement(AnimReveal, { noAnim },
          React.createElement('p', { className: 'lp-section__eyebrow' }, 'How It Works')
        ),
        React.createElement(AnimReveal, { noAnim, delay: 1 },
          React.createElement('h2', { className: 'lp-section__heading' }, 'How do we do it?')
        ),
        React.createElement(AnimReveal, { noAnim, delay: 2 },
          React.createElement('p', { className: 'lp-section__sub' },
            'We house all of your academic deadlines in one place and automatically generate an adaptive study plan directly on your calendar. You\u2019ll always know what to study, when to study it, and how to stay ahead of upcoming exams, assignments, and projects.'
          )
        ),
        React.createElement(AnimReveal, { noAnim, delay: 3 },
          React.createElement('div', { className: 'lp-checklist', style: { marginTop: 'var(--space-6)' } },
            ['View your calendar', 'Auto-generated study plan', 'Track your progress', 'Adaptive rescheduling'].map((item, i) =>
              React.createElement('div', { key: i, className: 'lp-checklist__item' },
                React.createElement('span', { className: 'lp-checklist__icon' }, React.createElement(IconCheck, { size: 16 })),
                item
              )
            )
          )
        )
      ),
      React.createElement(AnimReveal, { noAnim, delay: 2 },
        React.createElement('div', { style: { borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: 'var(--border-frame) solid var(--outline-strong)', aspectRatio: '16/9' } },
          React.createElement('iframe', {
            src: 'https://drive.google.com/file/d/1tsf4RetQpbMzjBYtgatyAISmICN7feTx/preview',
            style: { width: '100%', height: '100%', border: 'none' },
            allow: 'autoplay; encrypted-media',
            allowFullScreen: true
          })
        )
      )
    )
  );
}

function StudentFeatures({ noAnim }) {
  const features = [
    {
      icon: React.createElement(IconLayers, { size: 22 }),
      title: 'All Your Deadlines in One Place',
      desc: 'Sync assignments, exams, projects, and coursework from all your classes into a single unified calendar.'
    },
    {
      icon: React.createElement(IconCalendar, { size: 22 }),
      title: 'Personalized Study Plans',
      desc: 'Automatically generated schedules tailored to your workload, learning style, and available time.'
    },
    {
      icon: React.createElement(IconRefresh, { size: 22 }),
      title: 'Adaptive Scheduling',
      desc: 'Plans adjust automatically when priorities change, deadlines shift, or you need to reschedule.'
    },
  ];
  return React.createElement(Section, { id: 'stu-features', white: true },
    React.createElement(AnimReveal, { noAnim },
      React.createElement('p', { className: 'lp-section__eyebrow', style: { textAlign: 'center' } }, 'Features')
    ),
    React.createElement(AnimReveal, { noAnim, delay: 1 },
      React.createElement('h2', { className: 'lp-section__heading lp-section__heading--center' },
        'Built for how students actually study.'
      )
    ),
    React.createElement('div', { className: 'lp-features lp-features--3' },
      features.map((f, i) =>
        React.createElement(FeatureCard, { key: i, icon: f.icon, title: f.title, desc: f.desc, noAnim, delay: i + 1 })
      )
    )
  );
}

function TimelineStep({ index, title, desc, noAnim }) {
  const [ref, visible] = useReveal(0.2);
  return React.createElement('div', {
    ref,
    className: `lp-timeline__step${visible || noAnim ? ' is-visible' : ''}`,
    style: noAnim ? {} : { opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: `opacity 0.5s ${index * 0.1}s var(--ease-out), transform 0.5s ${index * 0.1}s var(--ease-out)` }
  },
    React.createElement('div', { className: 'lp-timeline__badge' }, index + 1),
    React.createElement('div', { className: 'lp-timeline__title' }, title),
    React.createElement('div', { style: { fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' } }, desc)
  );
}

function StudentJourney({ noAnim }) {
  const steps = [
    { title: 'Take short questionnaire', desc: 'System understands how you prefer to learn' },
    { title: 'Upload Course Syllabuses', desc: 'We take all of your exam,quiz, and assn deadlines, and house them in one place' },
    { title: 'View Home for upcoming deadlines', desc: 'We notify you if you have anything coming up within the next 7 days' },
    { title: 'If Exists: Upload Study Materials for upcoming exam', desc: 'Input any relevant materials regarding exam coming up(notes,pptx,etc)' },
    { title: 'Generate personalized sudy plan', desc: 'Stay ahead of deadlines and walk into exams feeling prepared.' },
  ];
  return React.createElement(Section, { id: 'stu-journey', alt: true },
    React.createElement(AnimReveal, { noAnim },
      React.createElement('p', { className: 'lp-section__eyebrow' }, 'Your Journey')
    ),
    React.createElement(AnimReveal, { noAnim, delay: 1 },
      React.createElement('h2', { className: 'lp-section__heading' }, 'From signup to success in 5 steps.')
    ),
    React.createElement('div', { className: 'lp-timeline' },
      steps.map((s, i) =>
        React.createElement(TimelineStep, { key: i, index: i, title: s.title, desc: s.desc, noAnim })
      )
    )
  );
}

function StudentSocialProof({ noAnim }) {
  const metrics = [
    { value: 5, suffix: '+', label: 'Hours saved weekly on average' },
    { value: 87, suffix: '%', label: 'Report improved organization' },
    { value: 92, suffix: '%', label: 'Stay on top of deadlines' },
  ];
  const testimonials = [
    { initials: 'CM', name: 'Cameron', role: 'Student · Rochester Tech', quote: 'The practice test feature is actually insane' },
    { initials: 'EN', name: 'Ebube', role: 'Student · LMU', quote: 'I used it to track all my exams during finals' },
    { initials: 'PG', name: 'Pranav', role: 'Student · UCI', quote: 'The google calendar integration is a lifesaver' },
  ];
  return React.createElement(Section, { id: 'stu-proof', white: true },
    React.createElement(AnimReveal, { noAnim },
      React.createElement('p', { className: 'lp-section__eyebrow', style: { textAlign: 'center' } }, 'Social Proof')
    ),
    React.createElement(AnimReveal, { noAnim, delay: 1 },
      React.createElement('h2', { className: 'lp-section__heading lp-section__heading--center' },
        'Students Are Already Seeing Results'
      )
    ),
    React.createElement('div', { className: 'lp-metrics', style: { gridTemplateColumns: 'repeat(3, 1fr)' } },
      metrics.map((m, i) =>
        React.createElement(MetricCard, { key: i, value: m.value, suffix: m.suffix, label: m.label, noAnim, delay: i + 1 })
      )
    ),
    React.createElement('div', { style: { marginTop: 'var(--space-12)' } },
      React.createElement(AnimReveal, { noAnim },
        React.createElement('h3', { style: { fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-semibold)', textAlign: 'center', marginBottom: 'var(--space-2)' } }, 'What Students Are Saying')
      ),
      React.createElement(TestimonialCarousel, { testimonials, noAnim })
    )
  );
}

function StudentPage({ layout, noAnim }) {
  return React.createElement('div', null,
    React.createElement(StudentHero, { layout, noAnim }),
    React.createElement(StudentHowItWorks, { noAnim }),
    React.createElement(StudentFeatures, { noAnim }),
    React.createElement(StudentJourney, { noAnim }),
    React.createElement(StudentSocialProof, { noAnim }),
    React.createElement(CTABanner, {
      heading: 'Ready to take control of your semester?',
      sub: 'Stop wondering what to study next.',
      ctaLabel: 'Get Started Free',
      secondaryLabel: 'Watch Demo',
      noAnim
    }),
    React.createElement(LandingFooter, null)
  );
}

window.StudentPage = StudentPage;
