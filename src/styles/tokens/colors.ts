export const colors = {
  brand: {
    primary: '#5b5df0',
    secondary: '#3b82f6',
    accent: '#8b5cf6',
    soft: '#c4b5fd',
    contrast: '#f8fafc',
    fade: 'linear-gradient(135deg, #3b82f6 0%, #5b5df0 52%, #8b5cf6 100%)',
  },
  neutral: {
    white: '#ffffff',
    soft: '#f8fafc',
    light: '#cbd5e1',
    medium: '#94a3b8',
    strong: '#334155',
    dark: '#0f172a',
    darkest: '#020617',
  },
  success: {
    100: '#dcfce7',
    500: '#22c55e',
    700: '#15803d',
  },
  warning: {
    100: '#fef3c7',
    500: '#f59e0b',
    700: '#b45309',
  },
  error: {
    100: '#fee2e2',
    500: '#ef4444',
    700: '#b91c1c',
  },
  info: {
    100: '#dbeafe',
    500: '#0ea5e9',
    700: '#0369a1',
  },
  background: {
    canvas: '#020617',
    subtle: '#0f172a',
    surface: '#111c34',
    elevated: '#16233f',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#cbd5e1',
    tertiary: '#94a3b8',
    inverse: '#020617',
  },
  border: {
    subtle: 'rgba(148, 163, 184, 0.16)',
    strong: 'rgba(148, 163, 184, 0.3)',
    accent: 'rgba(59, 130, 246, 0.45)',
  },
  overlay: {
    light: 'rgba(255, 255, 255, 0.08)',
    strong: 'rgba(2, 6, 23, 0.72)',
  },
  focus: '#93c5fd',
} as const;
