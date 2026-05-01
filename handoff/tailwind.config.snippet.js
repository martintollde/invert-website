// Drop into tailwind.config.js — extend block.
// Tailwind v3 / v4 compatible.

module.exports = {
  theme: {
    extend: {
      colors: {
        paper: '#ffffff',
        ink: '#0a0a0a',
        signal: '#ee2a2a',
        rule: '#0a0a0a',
        muted: '#888888',
        faint: '#e6e6e6',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'display': '-0.05em',
        'mono-loose': '0.18em',
      },
      borderWidth: {
        'rule': '2px',
      },
      fontSize: {
        // clamp helpers — use via arbitrary `text-[clamp(...)]` if needed
        'display': ['clamp(64px, 9vw, 132px)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        'h1': ['clamp(48px, 6vw, 88px)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
    },
  },
};
