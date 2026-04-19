export const themeConfig = {
  colors: {
    primary: '#5B21B6',
    primaryLight: '#7C3AED',
    primaryDark: '#3B0E8C',
    primaryMuted: '#EDE9FE',
    primarySoft: '#F5F3FF',
    accent: '#F59E0B',
    accentLight: '#FDE68A',
    accentDark: '#B45309',
    background: '#F8F5F2',
    charcoal: '#1F2937',
    charcoalLight: '#374151',
    muted: '#6B7280',
    border: '#E5E7EB',
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'Cormorant Garamond',
    body: 'DM Sans',
  },
  transitions: {
    fast: 0.2,
    base: 0.35,
    slow: 0.5,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;
