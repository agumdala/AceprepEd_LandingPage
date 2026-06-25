/* AcePrep Landing — Main App (Choice Screen + Routing + Tweaks) */
console.log('commit: Add margins between text and border');

const { useState: useAppState, useEffect: useAppEffect, useCallback: useAppCallback } = React;
const { Button: DSButton } = window.AcePrepDesignSystem_b92a75;

const NEWSLETTER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbysjEy9A3Z7Ue1Pkw0K-Y5_d1815WocPGmjiltlPWcZQZxLpW93d9w8FUoJGWorDp1ahA/exec';

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

/* ---- Newsletter Modal (Educator) ---- */
function NewsletterModal({ onClose, onContinue }) {
  const [email, setEmail] = useAppState('');
  const [error, setError] = useAppState('');
  const [subscribed, setSubscribed] = useAppState(false);
  const [submitting, setSubmitting] = useAppState(false);

  useAppEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!email.trim()) { setError('Required'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email'); return; }
    setError('');
    setSubmitting(true);
    try {
      // Apps Script web apps don't answer CORS preflight, so post in no-cors mode.
      // The body still reaches the script as raw JSON (e.postData.contents).
      await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submission: email.trim() })
      });
      setSubscribed(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const bundle = [
    {
      icon: React.createElement(IconTrendUp, { size: 18 }),
      title: 'Insights we’re picking up',
      text: 'Patterns and signals we’re seeing in how students learn and prepare on AcePrep.'
    },
    {
      icon: React.createElement(IconBarChart, { size: 18 }),
      title: 'Broader global trends',
      text: 'What’s shifting across education — so you stay ahead of where learning is headed.'
    },
    {
      icon: React.createElement(IconBell, { size: 18 }),
      title: 'Product updates',
      text: 'New features and improvements to the platform, delivered straight to your inbox.'
    },
  ];

  return React.createElement('div', { className: 'lp-modal__overlay', onClick: onClose },
    React.createElement('div', {
      className: 'lp-modal__card',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'Subscribe to the educator newsletter',
      onClick: (e) => e.stopPropagation()
    },
      React.createElement('button', { className: 'lp-modal__close', 'aria-label': 'Close', onClick: onClose },
        React.createElement(IconX, { size: 18 })
      ),
      subscribed
        ? React.createElement('div', { className: 'lp-modal__success' },
            React.createElement('div', { className: 'lp-modal__icon' }, React.createElement(IconCheck, { size: 22 })),
            React.createElement('h3', { className: 'lp-modal__title' }, 'You’re on the list!'),
            React.createElement('p', { className: 'lp-modal__sub' },
              'Thanks for subscribing. We’ll keep you looped in on insights, trends, and updates.'
            ),
            React.createElement(DSButton, { variant: 'accent', pill: true, block: true, onClick: onContinue },
              'Explore Educator Features'
            )
          )
        : React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'lp-modal__icon' }, React.createElement(IconBell, { size: 22 })),
            React.createElement('p', { className: 'lp-modal__eyebrow' }, 'For Educators & Tutors'),
            React.createElement('h3', { className: 'lp-modal__title' }, 'Stay ahead of the curve.'),
            React.createElement('p', { className: 'lp-modal__sub' },
              'Join our educator newsletter — a bundle of everything worth knowing, in one place:'
            ),
            React.createElement('div', { className: 'lp-modal__bundle' },
              bundle.map((b, i) =>
                React.createElement('div', { key: i, className: 'lp-modal__bundle-item' },
                  React.createElement('div', { className: 'lp-modal__bundle-icon' }, b.icon),
                  React.createElement('div', { className: 'lp-modal__bundle-text' },
                    React.createElement('strong', null, b.title), b.text
                  )
                )
              )
            ),
            React.createElement('form', { className: 'lp-modal__form', onSubmit: handleSubmit },
              React.createElement('div', { className: 'lp-modal__field' },
                React.createElement('input', {
                  className: `lp-form__input${error ? ' is-error' : ''}`,
                  type: 'email',
                  value: email,
                  placeholder: 'you@gmail.com',
                  'aria-label': 'Email address',
                  disabled: submitting,
                  onChange: (e) => { setEmail(e.target.value); if (error) setError(''); }
                }),
                error && React.createElement('span', { className: 'lp-form__error' }, error)
              ),
              React.createElement(DSButton, { variant: 'accent', pill: true, type: 'submit', block: true, disabled: submitting },
                submitting ? 'Subscribing…' : 'Subscribe'
              )
            ),
            React.createElement('button', { className: 'lp-modal__skip', type: 'button', onClick: onContinue },
              'Maybe later — take me to educator features'
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
  const [showNewsletter, setShowNewsletter] = useAppState(false);

  /*const noAnim = !t.animations;*/
  /*const heroLayout = t.heroLayout;*/

  const noAnim = false; // or whatever default you want
  const heroLayout = 'split';

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

  const handleSelect = useAppCallback((path) => {
    if (path === 'educator') { setShowNewsletter(true); return; }
    transitionTo(path);
  }, [transitionTo]);
  const handleBack = useAppCallback(() => transitionTo('choice'), [transitionTo]);

  const proceedToEducator = useAppCallback(() => {
    setShowNewsletter(false);
    transitionTo('educator');
  }, [transitionTo]);

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
    showNewsletter && React.createElement(NewsletterModal, {
      onClose: proceedToEducator,
      onContinue: proceedToEducator
    }),
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
