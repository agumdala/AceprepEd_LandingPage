/* AcePrep Landing — Main App (Choice Screen + Routing + Tweaks) */
const { useState: useAppState, useEffect: useAppEffect, useCallback: useAppCallback } = React;

const LANDING_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "split",
  "animations": true
}/*EDITMODE-END*/;

/* ---- Choice Screen ---- */
function ChoiceScreen({ onSelect }) {
  return React.createElement('div', { className: 'lp-choice' },
    React.createElement('div', { className: 'lp-choice__logo' },
      React.createElement('img', { src: 'assets/aceprep-logo.png', alt: 'AcePrep' })
    ),
    React.createElement('h1', { className: 'lp-choice__heading' }, 'Who are you?'),
    React.createElement('p', { className: 'lp-choice__sub' },
      'Choose your experience to learn how our platform helps you succeed.'
    ),
    React.createElement('div', { className: 'lp-choice__cards' },
      React.createElement('div', {
        className: 'lp-choice__card',
        onClick: () => onSelect('educator')
      },
        React.createElement('div', { className: 'lp-choice__card-icon' },
          React.createElement(IconGradCap, { size: 32 })
        ),
        React.createElement('h2', { className: 'lp-choice__card-title' }, 'I\u2019m an Educator/Tutor'),
        React.createElement('p', { className: 'lp-choice__card-desc' },
          'Support students beyond the session while staying connected to their progress.'
        ),
        React.createElement('span', { className: 'lp-choice__card-cta' },
          'Explore Educator Features', React.createElement(IconArrowRight, { size: 16 })
        )
      ),
      React.createElement('div', {
        className: 'lp-choice__card',
        onClick: () => onSelect('student')
      },
        React.createElement('div', { className: 'lp-choice__card-icon' },
          React.createElement(IconBookOpen, { size: 32 })
        ),
        React.createElement('h2', { className: 'lp-choice__card-title' }, 'I\u2019m a Student'),
        React.createElement('p', { className: 'lp-choice__card-desc' },
          'Stay organized, motivated, and on track to achieve your academic goals.'
        ),
        React.createElement('span', { className: 'lp-choice__card-cta' },
          'Explore Student Features', React.createElement(IconArrowRight, { size: 16 })
        )
      )
    )
  );
}

/* ---- App ---- */
function App() {
  /*const [t, setTweak] = useTweaks(LANDING_DEFAULTS);*/
  const [view, setView] = useAppState('choice');
  const [phase, setPhase] = useAppState('active'); // 'active' | 'exit' | 'enter'

  const noAnim = !t.animations;
  const heroLayout = t.heroLayout;

  const transitionTo = useAppCallback((target) => {
    setPhase('exit');
    setTimeout(() => {
      setView(target);
      window.scrollTo(0, 0);
      setPhase('enter');
      // Use a longer delay to ensure layout is stable before animating in
      setTimeout(() => setPhase('active'), 50);
    }, 280);
  }, []);

  const handleSelect = useAppCallback((path) => transitionTo(path), [transitionTo]);
  const handleBack = useAppCallback(() => transitionTo('choice'), [transitionTo]);

  const scrollToSection = useAppCallback((label) => {
    const idMap = {
      'Features': view === 'educator' ? 'edu-benefits' : 'stu-features',
      'How It Works': view === 'educator' ? 'edu-problem' : 'stu-how',
      'Testimonials': view === 'educator' ? 'edu-testimonials' : 'stu-proof',
      'Pilot Program': 'edu-pilot',
      'Impact': 'edu-impact',
    };
    const el = document.getElementById(idMap[label]);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [view]);

  const eduLinks = ['Features', 'How It Works', 'Impact', 'Testimonials', 'Pilot Program'];
  const stuLinks = ['Features', 'How It Works', 'Testimonials'];

  const pageClass = phase === 'exit' ? 'page-exit' : phase === 'enter' ? 'page-enter' : 'page-active';

  return React.createElement('div', { className: noAnim ? 'no-anim' : '' },
    view !== 'choice' && React.createElement(LandingNav, {
      onBack: handleBack,
      links: view === 'educator' ? eduLinks : stuLinks,
      ctaLabel: view === 'educator' ? 'Book a Demo' : 'Get Started',
      onCTA: () => {
        const target = view === 'educator' ? 'edu-pilot' : null;
        if (target) {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
      onLinkClick: scrollToSection
    }),
    React.createElement('div', { className: pageClass },
      view === 'choice' && React.createElement(ChoiceScreen, { onSelect: handleSelect }),
      view === 'educator' && React.createElement(EducatorPage, { layout: heroLayout, noAnim }),
      view === 'student' && React.createElement(StudentPage, { layout: heroLayout, noAnim })
    ),
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
