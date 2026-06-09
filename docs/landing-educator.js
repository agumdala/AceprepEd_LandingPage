/* AcePrep Landing — Educator Page */
const { Button: EduDSButton } = window.AcePrepDesignSystem_b92a75;

function EducatorHero({ layout, noAnim }) {
  const isSplit = layout === 'split';
  return React.createElement('div', { className: `lp-hero lp-hero--${layout}` },
    React.createElement('div', { className: 'lp-hero__inner' },
      React.createElement('div', null,
        React.createElement(AnimReveal, { noAnim },
          React.createElement('p', { className: 'lp-hero__eyebrow' }, 'For Educators')
        ),
        React.createElement(AnimReveal, { noAnim, delay: 1 },
          React.createElement('h1', { className: 'lp-hero__heading' }, 'Bringing educators back into every learning moment.')
        ),
        React.createElement(AnimReveal, { noAnim, delay: 2 },
          React.createElement('p', { className: 'lp-hero__sub' },
            'Supporting your students achieve their academic goals outside the classroom \u2014 and looping you into how they\u2019re doing in the process.'
          )
        ),
        React.createElement(AnimReveal, { noAnim, delay: 3 },
          React.createElement('div', { className: 'lp-hero__ctas' },
            React.createElement(EduDSButton, { variant: 'accent', pill: true }, 'Book a Demo'),
            React.createElement(EduDSButton, { variant: 'ghost', pill: true }, 'Watch Overview')
          )
        )
      ),
      React.createElement('div', { className: 'lp-hero__mockup' },
        React.createElement(AnimReveal, { noAnim, delay: isSplit ? 2 : 4 },
          React.createElement(SyllabusCalendarMockup, null)
        )
      )
    )
  );
}

function EducatorProblem({ noAnim }) {
  const items = [
    { icon: React.createElement(IconCheck, { size: 18 }), text: 'Student accountability' },
    { icon: React.createElement(IconCheck, { size: 18 }), text: 'Study plan adherence' },
    { icon: React.createElement(IconCheck, { size: 18 }), text: 'Progress visibility' },
    { icon: React.createElement(IconCheck, { size: 18 }), text: 'Early intervention' },
  ];
  return React.createElement(Section, { id: 'edu-problem', alt: true },
    React.createElement('div', { className: 'lp-split' },
      React.createElement('div', null,
        React.createElement(AnimReveal, { noAnim },
          React.createElement('p', { className: 'lp-section__eyebrow' }, 'The Problem')
        ),
        React.createElement(AnimReveal, { noAnim, delay: 1 },
          React.createElement('h2', { className: 'lp-section__heading' },
            'Students spend most of their learning time outside the classroom.'
          )
        ),
        React.createElement(AnimReveal, { noAnim, delay: 2 },
          React.createElement('p', { className: 'lp-section__sub' },
            'Educators often lack visibility into how students prepare, study, and progress between classes. Our platform bridges that gap by helping students stay accountable while providing educators with actionable insights.'
          )
        ),
        React.createElement(AnimReveal, { noAnim, delay: 3 },
          React.createElement('div', { className: 'lp-checklist' },
            items.map((item, i) =>
              React.createElement('div', { key: i, className: 'lp-checklist__item' },
                React.createElement('span', { className: 'lp-checklist__icon' }, item.icon),
                item.text
              )
            )
          )
        )
      ),
      React.createElement(AnimReveal, { noAnim, delay: 2 },
        React.createElement(ClassProgressMockup, null)
      )
    )
  );
}

function EducatorBenefits({ noAnim }) {
  const benefits = [
    { icon: React.createElement(IconBarChart, { size: 22 }), title: 'Keep Students On Track', desc: 'Monitor academic progress between classes with real-time dashboards and weekly summaries.' },
    { icon: React.createElement(IconBell, { size: 22 }), title: 'Identify Struggling Students Earlier', desc: 'Receive insights and risk alerts before students fall behind on their coursework.' },
    { icon: React.createElement(IconShield, { size: 22 }), title: 'Increase Student Accountability', desc: 'Help students build consistent study habits with structured plans and progress tracking.' },
    { icon: React.createElement(IconClock, { size: 22 }), title: 'Save Time', desc: 'Reduce manual follow-ups and administrative overhead with automated reporting.' },
  ];
  return React.createElement(Section, { id: 'edu-benefits', white: true },
    React.createElement(AnimReveal, { noAnim },
      React.createElement('p', { className: 'lp-section__eyebrow', style: { textAlign: 'center' } }, 'Benefits')
    ),
    React.createElement(AnimReveal, { noAnim, delay: 1 },
      React.createElement('h2', { className: 'lp-section__heading lp-section__heading--center' },
        'Everything you need to support student success.'
      )
    ),
    React.createElement('div', { className: 'lp-features lp-features--4' },
      benefits.map((b, i) =>
        React.createElement(FeatureCard, { key: i, icon: b.icon, title: b.title, desc: b.desc, noAnim, delay: i + 1 })
      )
    )
  );
}

function EducatorCredibility({ noAnim }) {
  const credentials = [
    {
      icon: React.createElement(IconTarget, { size: 28 }),
      place: '2nd Place',
      event: 'LMU Hackathon (Startup Weekend)',
      desc: 'Recognized for innovative approach to bridging the educator-student gap outside the classroom.'
    },
    {
      icon: React.createElement(IconTarget, { size: 28 }),
      place: '3rd Place',
      event: 'LMU Hackathon (Best Bootcamp)',
      desc: 'Back-to-back recognition for building technology that keeps educators connected to student progress.'
    },
    {
      icon: React.createElement(IconShield, { size: 28 }),
      place: 'Spring 2026 Cohort',
      event: 'LMU Startup Incubator',
      desc: 'Selected for LMU\u2019s competitive startup incubator to scale the platform and deepen educator impact.'
    },
  ];
  return React.createElement(Section, { id: 'edu-credibility', alt: true },
    React.createElement(AnimReveal, { noAnim },
      React.createElement('p', { className: 'lp-section__eyebrow', style: { textAlign: 'center' } }, 'Credibility')
    ),
    React.createElement(AnimReveal, { noAnim, delay: 1 },
      React.createElement('h2', { className: 'lp-section__heading lp-section__heading--center' },
        'Built and recognized at LMU.'
      )
    ),
    React.createElement('div', { className: 'lp-features lp-features--3', style: { marginTop: 'var(--space-10)' } },
      credentials.map((c, i) =>
        React.createElement(AnimReveal, { key: i, noAnim, delay: i + 2 },
          React.createElement('div', { className: 'lp-feature-card', style: { textAlign: 'center', alignItems: 'center' } },
            React.createElement('div', { className: 'lp-feature-card__icon', style: { margin: '0 auto var(--space-5)' } }, c.icon),
            React.createElement('div', { style: { fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', marginBottom: '4px' } }, c.place),
            React.createElement('div', { style: { fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-steel)', marginBottom: 'var(--space-4)' } }, c.event),
            React.createElement('div', { className: 'lp-feature-card__desc' }, c.desc)
          )
        )
      )
    )
  );
}

function EducatorTestimonials({ noAnim }) {
  const testimonials = [
    { initials: 'CM', name: 'Cameron', role: 'Student · Rochester Tech', quote: 'The practice test feature is actually insane' },
    { initials: 'EN', name: 'Ebube', role: 'Student · LMU', quote: 'I used it to track all my exams during finals' },
    { initials: 'PG', name: 'Pranav', role: 'Student · UCI', quote: 'The google calendar integration is a lifesaver' },
  ];
  return React.createElement(Section, { id: 'edu-testimonials', white: true },
    React.createElement(AnimReveal, { noAnim },
      React.createElement('p', { className: 'lp-section__eyebrow', style: { textAlign: 'center' } }, 'Testimonials')
    ),
    React.createElement(AnimReveal, { noAnim, delay: 1 },
      React.createElement('h2', { className: 'lp-section__heading lp-section__heading--center' }, 'What Students Are Saying')
    ),
    React.createElement(TestimonialCarousel, { testimonials, noAnim })
  );
}

function EducatorPilot({ noAnim }) {
  const benefits = [
    { icon: React.createElement(IconTarget, { size: 18 }), title: 'Dedicated onboarding', text: 'We\u2019ll set everything up and train your team.' },
    { icon: React.createElement(IconUsers, { size: 18 }), title: 'Priority support', text: 'Direct access to our team throughout the pilot.' },
    { icon: React.createElement(IconBarChart, { size: 18 }), title: 'Impact report', text: 'Detailed analytics on student engagement and outcomes.' },
    { icon: React.createElement(IconClock, { size: 18 }), title: 'No commitment', text: 'Try free for 60 days with no obligation to continue.' },
  ];
  return React.createElement(Section, { id: 'edu-pilot', alt: true },
    React.createElement('div', { className: 'lp-pilot-grid' },
      React.createElement('div', null,
        React.createElement(AnimReveal, { noAnim },
          React.createElement('p', { className: 'lp-section__eyebrow' }, 'Get Started')
        ),
        React.createElement(AnimReveal, { noAnim, delay: 1 },
          React.createElement('h2', { className: 'lp-section__heading' }, 'Interested in running a pilot?')
        ),
        React.createElement(AnimReveal, { noAnim, delay: 2 },
          React.createElement('p', { className: 'lp-section__sub' },
            'See how the platform can support your students and provide meaningful visibility into their learning journey.'
          )
        ),
        React.createElement(AnimReveal, { noAnim, delay: 3 },
          React.createElement('div', { className: 'lp-pilot-benefits' },
            benefits.map((b, i) =>
              React.createElement('div', { key: i, className: 'lp-pilot-benefit' },
                React.createElement('div', { className: 'lp-pilot-benefit__icon' }, b.icon),
                React.createElement('div', { className: 'lp-pilot-benefit__text' },
                  React.createElement('strong', null, b.title), b.text
                )
              )
            )
          )
        )
      ),
      React.createElement(AnimReveal, { noAnim, delay: 2 },
        React.createElement('div', null,
          React.createElement(PilotForm, { noAnim })
        )
      )
    )
  );
}

function EducatorPage({ layout, noAnim }) {
  return React.createElement('div', null,
    React.createElement(EducatorHero, { layout, noAnim }),
    React.createElement(EducatorProblem, { noAnim }),
    React.createElement(EducatorBenefits, { noAnim }),
    React.createElement(EducatorCredibility, { noAnim }),
    React.createElement(EducatorTestimonials, { noAnim }),
    React.createElement(EducatorPilot, { noAnim }),
    React.createElement(CTABanner, {
      heading: 'Bring visibility back into student learning.',
      ctaLabel: 'Schedule Your Demo',
      noAnim
    }),
    React.createElement(LandingFooter, null)
  );
}

window.EducatorPage = EducatorPage;
