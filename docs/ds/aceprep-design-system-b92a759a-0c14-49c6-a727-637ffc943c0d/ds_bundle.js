/* @ds-bundle: {"format":3,"namespace":"AcePrepDesignSystem_b92a75","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ChatBubble","sourcePath":"components/feedback/ChatBubble.jsx"},{"name":"EventChip","sourcePath":"components/feedback/EventChip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NumberBadge","sourcePath":"components/forms/NumberBadge.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"NoteCallout","sourcePath":"components/surfaces/NoteCallout.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"c2d0c2061999","components/feedback/Badge.jsx":"6ba4a75b2db1","components/feedback/ChatBubble.jsx":"f4eb91ada1a6","components/feedback/EventChip.jsx":"81f4ef9ebc5c","components/forms/Input.jsx":"2975e1b87080","components/forms/NumberBadge.jsx":"7070787d6736","components/navigation/NavBar.jsx":"bec71b41d0f4","components/surfaces/Card.jsx":"0e79f67fe8c5","components/surfaces/NoteCallout.jsx":"f9ccd8dfb99c","ui_kits/aceprep-web/ClassSchedule.jsx":"b3007e6d73e8","ui_kits/aceprep-web/LandingHero.jsx":"68c3c61c5aee","ui_kits/aceprep-web/OnboardingChat.jsx":"1109e58ddb05","ui_kits/aceprep-web/SyllabusCalendar.jsx":"1ffe7a828236","ui_kits/aceprep-web/app.jsx":"34486b411043","ui_kits/aceprep-web/components.jsx":"65100b5ac4cf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AcePrepDesignSystem_b92a75 = window.AcePrepDesignSystem_b92a75 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: "0.45rem 1rem",
    fontSize: "0.8125rem"
  },
  md: {
    padding: "0.7rem 1.4rem",
    fontSize: "0.875rem"
  },
  lg: {
    padding: "0.9rem 1.8rem",
    fontSize: "1rem"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--color-ink-800)",
    color: "var(--text-on-dark)",
    border: "1.5px solid var(--color-ink-800)",
    boxShadow: "var(--shadow-button)"
  },
  accent: {
    background: "var(--color-steel-500)",
    color: "var(--text-on-accent)",
    border: "1.5px solid var(--color-steel-500)",
    boxShadow: "var(--shadow-button)"
  },
  ghost: {
    background: "var(--surface-card)",
    color: "var(--text-primary)",
    border: "1.5px solid var(--outline-strong)",
    boxShadow: "none"
  },
  dashed: {
    background: "transparent",
    color: "var(--text-muted)",
    border: "1.5px dashed var(--outline-dashed)",
    boxShadow: "none"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  pill = false,
  disabled = false,
  onClick,
  type = "button"
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const style = {
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-medium)",
    lineHeight: 1.2,
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
    cursor: disabled ? "default" : "pointer",
    display: block ? "flex" : "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    width: block ? "100%" : "auto",
    transition: "transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)",
    opacity: disabled ? 0.55 : 1,
    transform: hover && !disabled ? "translateY(-1px)" : "translateY(0)",
    ...v,
    ...s
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const TONES = {
  exam: {
    dot: "var(--event-exam)",
    fg: "var(--event-exam)"
  },
  quiz: {
    dot: "var(--event-quiz)",
    fg: "var(--event-quiz)"
  },
  study: {
    dot: "var(--event-study)",
    fg: "var(--event-study)"
  },
  personal: {
    dot: "var(--event-personal)",
    fg: "var(--event-personal)"
  },
  success: {
    dot: "var(--status-success)",
    fg: "var(--status-success)"
  },
  warning: {
    dot: "var(--status-warning)",
    fg: "var(--status-warning)"
  },
  danger: {
    dot: "var(--status-danger)",
    fg: "var(--status-danger)"
  },
  info: {
    dot: "var(--color-steel-500)",
    fg: "var(--color-steel-700)"
  },
  neutral: {
    dot: "var(--color-ink-400)",
    fg: "var(--color-ink-600)"
  }
};
function Badge({
  children,
  tone = "neutral",
  solid = false,
  dot = false
}) {
  const t = TONES[tone] || TONES.neutral;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    padding: "0.32rem 0.7rem",
    borderRadius: "var(--radius-pill)"
  };
  const style = solid ? {
    ...base,
    background: t.dot,
    color: "#fff"
  } : {
    ...base,
    background: "var(--surface-card)",
    color: t.fg,
    border: `1px solid ${t.fg}`
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, dot && !solid && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: t.dot,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ChatBubble.jsx
try { (() => {
function ChatBubble({
  children,
  from = "team",
  author
}) {
  const isUser = from === "user";
  const wrap = {
    display: "flex",
    flexDirection: "column",
    alignItems: isUser ? "flex-end" : "flex-start",
    gap: "0.25rem"
  };
  const bubble = isUser ? {
    background: "var(--surface-card)",
    color: "var(--text-primary)",
    border: "1.5px solid var(--outline-strong)"
  } : {
    background: "var(--color-steel-100)",
    color: "var(--text-primary)",
    border: "1.5px solid var(--color-steel-300)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      padding: "0 0.5rem"
    }
  }, author), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "78%",
      padding: "0.6rem 1rem",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-snug)",
      ...bubble
    }
  }, children));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EventChip.jsx
try { (() => {
const COLORS = {
  exam: "var(--event-exam)",
  quiz: "var(--event-quiz)",
  study: "var(--event-study)",
  personal: "var(--event-personal)",
  synced: "var(--event-synced)"
};
function EventChip({
  label,
  type = "study",
  time,
  bar = false
}) {
  const color = COLORS[type] || COLORS.study;
  if (bar) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: 10,
        borderRadius: 4,
        background: color,
        width: "100%"
      },
      title: label
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      background: color,
      color: "#fff",
      borderRadius: "var(--radius-xs)",
      padding: "0.4rem 0.6rem",
      boxShadow: "var(--shadow-md)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1.25
    }
  }, label), time && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.6875rem",
      opacity: 0.9
    }
  }, time));
}
Object.assign(__ds_scope, { EventChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EventChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  badge,
  pill = false,
  block = true,
  disabled = false,
  style = {}
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      background: "var(--surface-card)",
      border: `1.5px solid ${focus ? "var(--color-steel-500)" : "var(--outline-strong)"}`,
      borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
      padding: "0.7rem 1.1rem",
      width: block ? "100%" : "auto",
      boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, badge, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-primary)"
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/NumberBadge.jsx
try { (() => {
const SIZES = {
  sm: 24,
  md: 30,
  lg: 38
};
const FONT = {
  sm: "0.75rem",
  md: "0.875rem",
  lg: "1rem"
};
function NumberBadge({
  value,
  size = "md",
  tone = "ink"
}) {
  const d = SIZES[size] || SIZES.md;
  const bg = tone === "accent" ? "var(--color-steel-500)" : "var(--color-ink-900)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: "var(--text-on-dark)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: FONT[size] || FONT.md,
      lineHeight: 1
    }
  }, value);
}
Object.assign(__ds_scope, { NumberBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NumberBadge.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  brand = "AcePrep",
  logoSrc,
  links = ["Home", "Games", "About Us", "Why AceTest", "Log In"],
  active,
  user,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      height: "var(--nav-height)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--space-10)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      height: 30,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-title)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "-0.01em"
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, links.map(link => {
    const isActive = link === active;
    return /*#__PURE__*/React.createElement("button", {
      key: link,
      onClick: () => onNavigate && onNavigate(link),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-on-dark)",
        fontFamily: "inherit",
        fontSize: "var(--text-sm)",
        fontWeight: isActive ? "var(--weight-semibold)" : "var(--weight-medium)",
        opacity: isActive ? 1 : 0.85,
        paddingBottom: 2,
        borderBottom: isActive ? "2px solid var(--color-steel-300)" : "2px solid transparent"
      }
    }, link);
  }), user && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      opacity: 0.95
    }
  }, user)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  variant = "framed",
  title,
  action,
  radius = "lg",
  padding,
  style = {}
}) {
  const radiusVar = `var(--radius-${radius})`;
  if (variant === "dark") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-dark)",
        color: "var(--text-on-dark)",
        borderRadius: radiusVar,
        padding: padding ?? "var(--pad-card)",
        ...style
      }
    }, (title || action) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: children ? "var(--space-4)" : 0
      }
    }, title && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-title)",
        fontWeight: "var(--weight-semibold)"
      }
    }, title), action), children);
  }
  const isPlain = variant === "plain";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: isPlain ? "1px solid var(--outline-hairline)" : "var(--border-frame) solid var(--outline-strong)",
      borderRadius: radiusVar,
      padding: padding ?? "var(--pad-card)",
      boxShadow: isPlain ? "var(--shadow-sm)" : "none",
      color: "var(--text-primary)",
      ...style
    }
  }, (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: children ? "var(--space-4)" : 0
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-title)",
      fontWeight: "var(--weight-semibold)"
    }
  }, title), action), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/NoteCallout.jsx
try { (() => {
function NoteCallout({
  children,
  pointer = "left",
  title = "Note:",
  style = {}
}) {
  const tail = {
    position: "absolute",
    width: 16,
    height: 16,
    background: "var(--surface-card)",
    transform: "rotate(45deg)"
  };
  const tailPos = pointer === "left" ? {
    left: -9,
    top: 32,
    borderLeft: "var(--border-frame) solid var(--outline-strong)",
    borderBottom: "var(--border-frame) solid var(--outline-strong)"
  } : pointer === "right" ? {
    right: -9,
    top: 32,
    borderRight: "var(--border-frame) solid var(--outline-strong)",
    borderTop: "var(--border-frame) solid var(--outline-strong)"
  } : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-card)",
      border: "var(--border-frame) solid var(--outline-strong)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-4) var(--space-5)",
      boxShadow: "var(--shadow-card)",
      maxWidth: 300,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-secondary)",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-primary)"
    }
  }, title, " "), children, tailPos && /*#__PURE__*/React.createElement("span", {
    style: {
      ...tail,
      ...tailPos
    }
  }));
}
Object.assign(__ds_scope, { NoteCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/NoteCallout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aceprep-web/ClassSchedule.jsx
try { (() => {
// Class Schedule planner — "My Schedule" with numbered class slots + notes.
function ClassSchedule({
  classes,
  onChangeClass,
  onAddClass,
  onAttach,
  onLogDates
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-page"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ["Home", "Plan", "Class Schedule"]
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-layout"
  }, /*#__PURE__*/React.createElement(NoteCallout, {
    pointer: "right",
    style: {
      maxWidth: 220,
      marginTop: 90
    }
  }, "Attach each class' ", /*#__PURE__*/React.createElement("strong", null, "syllabus"), ". Add classes using the ", /*#__PURE__*/React.createElement("strong", null, "\"+\""), " button and delete classes with the ", /*#__PURE__*/React.createElement("strong", null, "\"Edit\""), " button."), /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    className: "cs-board",
    title: "My Schedule",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm"
    }, "Edit")
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-grid"
  }, classes.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "cs-slot",
    key: i
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Enter Class Name",
    value: c,
    onChange: e => onChangeClass(i, e.target.value),
    badge: /*#__PURE__*/React.createElement(NumberBadge, {
      value: i + 1
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: () => onAttach(i)
  }, "Attach Syllabus")))), /*#__PURE__*/React.createElement("button", {
    className: "cs-add",
    onClick: onAddClass
  }, "+")), /*#__PURE__*/React.createElement(NoteCallout, {
    pointer: "left",
    style: {
      maxWidth: 220,
      marginTop: 40
    }
  }, "To start planning for your exams, enter the ", /*#__PURE__*/React.createElement("strong", null, "classes"), " you're enrolled in for next semester.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: onLogDates
  }, "Log Exam Dates")));
}
window.ClassSchedule = ClassSchedule;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aceprep-web/ClassSchedule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aceprep-web/LandingHero.jsx
try { (() => {
// Landing heroes — "Welcome to AcePrep" waitlist + "Coming Soon" beta.
function MiniBrowser({
  children,
  url = "www.aceprep.net"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mini-browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mini-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mini-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mini-url"
  }, url)), /*#__PURE__*/React.createElement("div", {
    className: "mini-body"
  }, children));
}
function MiniCalendar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mini-cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-cal-nav"
  }, /*#__PURE__*/React.createElement("span", null, "My Calendar")), /*#__PURE__*/React.createElement("div", {
    className: "mini-cal-grid"
  }, Array.from({
    length: 28
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mini-cal-cell"
  }, i === 10 && /*#__PURE__*/React.createElement("span", {
    className: "mini-cal-bar mini-cal-bar--exam"
  }), i === 10 && /*#__PURE__*/React.createElement("span", {
    className: "mini-cal-bar mini-cal-bar--quiz"
  }), i === 17 && /*#__PURE__*/React.createElement("span", {
    className: "mini-cal-bar mini-cal-bar--study"
  })))));
}
function LandingHero({
  variant = "welcome",
  onBookDemo,
  booked
}) {
  const isComing = variant === "coming-soon";
  if (isComing) {
    return /*#__PURE__*/React.createElement("div", {
      className: "lp-wrap"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/aceprep-logo.png",
      alt: "AcePrep",
      className: "lp-logo"
    }), /*#__PURE__*/React.createElement("h1", {
      className: "lp-head lp-head--coming"
    }, "Coming Soon"), /*#__PURE__*/React.createElement("p", {
      className: "lp-sub"
    }, "AcePrep is opening up to a limited group of schools. Book a demo to see how it keeps your students on track \u2014 and you in the loop."), /*#__PURE__*/React.createElement("div", {
      className: "lp-cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      pill: true,
      onClick: onBookDemo
    }, booked ? "Thanks — we'll be in touch!" : "Book a demo")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "lp-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/aceprep-logo.png",
    alt: "AcePrep",
    className: "lp-logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "lp-eyebrow"
  }, "For educators"), /*#__PURE__*/React.createElement("h1", {
    className: "lp-head"
  }, "Bringing educators back into every learning moment"), /*#__PURE__*/React.createElement("p", {
    className: "lp-sub"
  }, "Supporting your students achieve their academic goals outside the classroom \u2014 and looping you into how they're doing in the process."), /*#__PURE__*/React.createElement("div", {
    className: "lp-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    pill: true,
    onClick: onBookDemo
  }, booked ? "Thanks — we'll be in touch!" : "Book a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    pill: true,
    onClick: onBookDemo
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    className: "lp-mock"
  }, /*#__PURE__*/React.createElement(MiniBrowser, null, /*#__PURE__*/React.createElement(MiniCalendar, null))));
}
window.LandingHero = LandingHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aceprep-web/LandingHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aceprep-web/OnboardingChat.jsx
try { (() => {
// Onboarding chat — "Let's get to know you better!" adaptive questionnaire.
const ONBOARD_STEPS = [{
  title: "Class Schedule",
  prompts: ["Welcome! Let's build your plan.", "How many classes are you taking this semester?"],
  placeholder: "Type a number from 1-8"
}, {
  title: "Sleep Schedule",
  prompts: ["Your sleep is important!", "Ideally, how many hours of sleep would you like to get every night?"],
  placeholder: "Type in a number from 0-12 here"
}, {
  title: "Study Style",
  prompts: ["Almost done!", "How many hours can you study on a typical weekday?"],
  placeholder: "Type a number from 0-8"
}];
function OnboardingChat({
  step,
  answers,
  draft,
  onDraft,
  onSubmit,
  onPrev,
  onNext
}) {
  const s = ONBOARD_STEPS[step];
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-page ob-page"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ["Home", "Plan", "Get Started"]
  }), /*#__PURE__*/React.createElement("h1", {
    className: "ace-page-title ob-title"
  }, "Let's get to know you better!"), /*#__PURE__*/React.createElement("div", {
    className: "ob-stage"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ob-nav",
    onClick: onPrev,
    disabled: step === 0,
    "aria-label": "Previous"
  }, "<"), /*#__PURE__*/React.createElement(CardStage, null, /*#__PURE__*/React.createElement(Card, {
    variant: "framed",
    className: "ob-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ob-card-head"
  }, /*#__PURE__*/React.createElement(NumberBadge, {
    value: step + 1,
    tone: "ink"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ob-card-title"
  }, s.title)), /*#__PURE__*/React.createElement("div", {
    className: "ob-thread"
  }, s.prompts.map((p, i) => /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: "team",
    author: i === 0 ? "AT Team" : null
  }, p)), answers[step] != null && answers[step] !== "" && /*#__PURE__*/React.createElement(ChatBubble, {
    from: "user",
    author: "You"
  }, answers[step])), /*#__PURE__*/React.createElement("form", {
    className: "ob-input",
    onSubmit: e => {
      e.preventDefault();
      onSubmit();
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: s.placeholder,
    value: draft,
    onChange: e => onDraft(e.target.value)
  })))), /*#__PURE__*/React.createElement("button", {
    className: "ob-nav",
    onClick: onNext,
    "aria-label": "Next"
  }, ">")), /*#__PURE__*/React.createElement("div", {
    className: "ob-dots"
  }, ONBOARD_STEPS.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ob-dot" + (i === step ? " is-active" : "")
  }))));
}
window.OnboardingChat = OnboardingChat;
window.ONBOARD_STEPS = ONBOARD_STEPS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aceprep-web/OnboardingChat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aceprep-web/SyllabusCalendar.jsx
try { (() => {
// Syllabus Calendar — month grid with color-coded events + assessment sidebar.
const CAL_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// April 2026 starts on a Wednesday (index 3). 30 days.
const CAL_EVENTS = {
  8: [{
    type: "quiz",
    label: "Bio Quiz"
  }, {
    type: "exam",
    label: "Calc Exam"
  }],
  15: [{
    type: "study",
    label: "Study: Chem"
  }, {
    type: "personal",
    label: "Soccer"
  }],
  22: [{
    type: "exam",
    label: "History Midterm"
  }],
  27: [{
    type: "study",
    label: "Study: Calc"
  }, {
    type: "quiz",
    label: "Lit Quiz"
  }]
};
function SyllabusCalendar({
  onBack
}) {
  const firstDow = 3; // Wed
  const daysInMonth = 30;
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const today = 15;
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-page"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ["Home", "Plan", "Syllabus Calendar"]
  }), /*#__PURE__*/React.createElement("h1", {
    className: "ace-page-title sc-title"
  }, "Syllabus Calendar"), /*#__PURE__*/React.createElement("div", {
    className: "sc-layout"
  }, /*#__PURE__*/React.createElement(SideTab, null, "Syllabus Events Only"), /*#__PURE__*/React.createElement(Card, {
    variant: "framed",
    className: "sc-cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-toolbar"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "\u2039 Prev"), /*#__PURE__*/React.createElement("span", {
    className: "sc-month"
  }, "APRIL 2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Next \u203A")), /*#__PURE__*/React.createElement("div", {
    className: "sc-grid sc-head"
  }, CAL_DAYS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "sc-dow"
  }, d))), /*#__PURE__*/React.createElement("div", {
    className: "sc-grid sc-body"
  }, cells.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sc-cell" + (d === today ? " is-today" : "") + (d == null ? " is-off" : "")
  }, d && /*#__PURE__*/React.createElement("span", {
    className: "sc-date"
  }, d), /*#__PURE__*/React.createElement("div", {
    className: "sc-events"
  }, (CAL_EVENTS[d] || []).map((ev, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    className: "sc-bar sc-bar--" + ev.type,
    title: ev.label
  }))))))), /*#__PURE__*/React.createElement("aside", {
    className: "sc-side"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "framed",
    className: "sc-side-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-side-title"
  }, "Upcoming Assessments"), /*#__PURE__*/React.createElement("div", {
    className: "sc-assess"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-assess-row"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "exam",
    dot: true
  }, "Exam"), /*#__PURE__*/React.createElement("span", null, "Calc Exam \xB7 Apr 8")), /*#__PURE__*/React.createElement("div", {
    className: "sc-assess-row"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "quiz",
    dot: true
  }, "Quiz"), /*#__PURE__*/React.createElement("span", null, "Bio Quiz \xB7 Apr 8")), /*#__PURE__*/React.createElement("div", {
    className: "sc-assess-row"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "exam",
    dot: true
  }, "Exam"), /*#__PURE__*/React.createElement("span", null, "History \xB7 Apr 22")))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    block: true,
    onClick: onBack
  }, "\u2190 Back to classes"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true
  }, "Next: Study Materials \u2192"), /*#__PURE__*/React.createElement(Card, {
    variant: "framed",
    className: "sc-side-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-side-title"
  }, "Classes"), /*#__PURE__*/React.createElement("div", {
    className: "sc-chips"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Biology"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Calculus"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "History"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Literature"))), /*#__PURE__*/React.createElement(NoteCallout, {
    pointer: "none"
  }, "Study sessions are scheduled around your exams automatically. Tap an event to remove it."))));
}
window.SyllabusCalendar = SyllabusCalendar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aceprep-web/SyllabusCalendar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aceprep-web/app.jsx
try { (() => {
// AcePrep web — interactive click-through shell tying the screens together.
const {
  useState
} = React;
function App() {
  const [screen, setScreen] = useState("Landing");
  const [booked, setBooked] = useState(false);
  const [classes, setClasses] = useState(["Biology", "Calculus", "", "", "", ""]);
  const [obStep, setObStep] = useState(0);
  const [obAnswers, setObAnswers] = useState({});
  const [obDraft, setObDraft] = useState("");
  const navLinks = ["Home", "Games", "About Us", "Why AceTest", "Log In"];
  const activeLink = screen === "Syllabus Calendar" ? "Games" : screen === "Onboarding" ? "Log In" : "Home";
  const changeClass = (i, v) => setClasses(cs => cs.map((c, j) => j === i ? v : c));
  const addClass = () => setClasses(cs => [...cs, ""]);
  const submitOb = () => {
    if (obDraft.trim() === "") return;
    setObAnswers(a => ({
      ...a,
      [obStep]: obDraft.trim()
    }));
    setObDraft("");
    setTimeout(() => {
      if (obStep < window.ONBOARD_STEPS.length - 1) setObStep(s => s + 1);else setScreen("Class Schedule");
    }, 350);
  };
  const prevOb = () => setObStep(s => Math.max(0, s - 1));
  const nextOb = () => {
    if (obStep < window.ONBOARD_STEPS.length - 1) setObStep(s => s + 1);else setScreen("Class Schedule");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-app"
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: navLinks,
    active: activeLink,
    user: screen === "Syllabus Calendar" ? "Hello, Sebastian" : null,
    onNavigate: l => {
      if (l === "Log In") setScreen("Onboarding");else if (l === "Games") setScreen("Syllabus Calendar");else setScreen("Landing");
    }
  }), screen === "Landing" && /*#__PURE__*/React.createElement(LandingHero, {
    variant: "welcome",
    booked: booked,
    onBookDemo: () => {
      setBooked(true);
      setTimeout(() => setScreen("Onboarding"), 700);
    }
  }), screen === "Class Schedule" && /*#__PURE__*/React.createElement(ClassSchedule, {
    classes: classes,
    onChangeClass: changeClass,
    onAddClass: addClass,
    onAttach: () => {},
    onLogDates: () => setScreen("Syllabus Calendar")
  }), screen === "Onboarding" && /*#__PURE__*/React.createElement(OnboardingChat, {
    step: obStep,
    answers: obAnswers,
    draft: obDraft,
    onDraft: setObDraft,
    onSubmit: submitOb,
    onPrev: prevOb,
    onNext: nextOb
  }), screen === "Syllabus Calendar" && /*#__PURE__*/React.createElement(SyllabusCalendar, {
    onBack: () => setScreen("Class Schedule")
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aceprep-web/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aceprep-web/components.jsx
try { (() => {
// AcePrep UI Kit — shared primitives (mirror of the design-system components,
// self-contained so the kit renders standalone). All assign to window.
const {
  useState
} = React;

/* ---------- NavBar ---------- */
function NavBar({
  links,
  active,
  user,
  onNavigate,
  logoSrc
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "ace-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ace-nav-brand"
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    className: "ace-nav-logo"
  }), /*#__PURE__*/React.createElement("span", null, "AcePrep")), /*#__PURE__*/React.createElement("nav", {
    className: "ace-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: "ace-nav-link" + (l === active ? " is-active" : ""),
    onClick: () => onNavigate && onNavigate(l)
  }, l)), user && /*#__PURE__*/React.createElement("span", {
    className: "ace-nav-user"
  }, user)));
}

/* ---------- Breadcrumb ---------- */
function Breadcrumb({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-crumb"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it
  }, /*#__PURE__*/React.createElement("span", {
    className: "ace-crumb-item"
  }, it), i < items.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "ace-crumb-sep"
  }, "<"))));
}

/* ---------- Button ---------- */
function Button({
  children,
  variant = "primary",
  size = "md",
  block,
  pill,
  disabled,
  onClick,
  type = "button"
}) {
  const cls = ["ace-btn", `ace-btn--${variant}`, `ace-btn--${size}`];
  if (block) cls.push("is-block");
  if (pill) cls.push("is-pill");
  return /*#__PURE__*/React.createElement("button", {
    className: cls.join(" "),
    disabled: disabled,
    onClick: onClick,
    type: type
  }, children);
}

/* ---------- NumberBadge ---------- */
function NumberBadge({
  value,
  size = "md",
  tone = "ink"
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `ace-numbadge ace-numbadge--${size} ace-numbadge--${tone}`
  }, value);
}

/* ---------- Card ---------- */
function Card({
  children,
  variant = "framed",
  title,
  action,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ace-card ace-card--${variant} ${className}`,
    style: style
  }, (title || action) && /*#__PURE__*/React.createElement("div", {
    className: "ace-card-head"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "ace-card-title"
  }, title), action), children);
}

/* ---------- NoteCallout ---------- */
function NoteCallout({
  children,
  pointer = "left",
  title = "Note:",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ace-note ace-note--${pointer}`,
    style: style
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "ace-note-lead"
  }, title, " "), children);
}

/* ---------- Input ---------- */
function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  badge,
  pill,
  onKeyDown,
  autoFocus
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-input" + (pill ? " is-pill" : "")
  }, badge, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onKeyDown: onKeyDown,
    autoFocus: autoFocus
  }));
}

/* ---------- Badge ---------- */
function Badge({
  children,
  tone = "neutral",
  solid,
  dot
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ace-badge ace-badge--" + tone + (solid ? " is-solid" : "")
  }, dot && !solid && /*#__PURE__*/React.createElement("span", {
    className: "ace-badge-dot"
  }), children);
}

/* ---------- ChatBubble ---------- */
function ChatBubble({
  children,
  from = "team",
  author
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-chatrow ace-chatrow--" + from
  }, author && /*#__PURE__*/React.createElement("span", {
    className: "ace-chat-author"
  }, author), /*#__PURE__*/React.createElement("div", {
    className: "ace-bubble ace-bubble--" + from
  }, children));
}

/* ---------- SideTab (vertical rotated label) ---------- */
function SideTab({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-sidetab"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ace-sidetab-text"
  }, children));
}

/* ---------- CardStage (faint stacked cards behind) ---------- */
function CardStage({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ace-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ace-stage-ghost ace-stage-ghost--l"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ace-stage-ghost ace-stage-ghost--r"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ace-stage-front"
  }, children));
}
Object.assign(window, {
  NavBar,
  Breadcrumb,
  Button,
  NumberBadge,
  Card,
  NoteCallout,
  Input,
  Badge,
  ChatBubble,
  SideTab,
  CardStage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aceprep-web/components.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.EventChip = __ds_scope.EventChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NumberBadge = __ds_scope.NumberBadge;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NoteCallout = __ds_scope.NoteCallout;

})();
