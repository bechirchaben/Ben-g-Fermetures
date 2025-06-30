/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Guardian's Palette
        'primary': '#DC2626', // red-600 - Emergency action, trust-building confidence
        'primary-50': '#FEF2F2', // red-50
        'primary-100': '#FEE2E2', // red-100
        'primary-200': '#FECACA', // red-200
        'primary-300': '#FCA5A5', // red-300
        'primary-400': '#F87171', // red-400
        'primary-500': '#EF4444', // red-500
        'primary-600': '#DC2626', // red-600
        'primary-700': '#B91C1C', // red-700
        'primary-800': '#991B1B', // red-800
        'primary-900': '#7F1D1D', // red-900
        'primary-foreground': '#FFFFFF', // white

        // Secondary Colors
        'secondary': '#1E40AF', // blue-700 - Professional expertise, technical authority
        'secondary-50': '#EFF6FF', // blue-50
        'secondary-100': '#DBEAFE', // blue-100
        'secondary-200': '#BFDBFE', // blue-200
        'secondary-300': '#93C5FD', // blue-300
        'secondary-400': '#60A5FA', // blue-400
        'secondary-500': '#3B82F6', // blue-500
        'secondary-600': '#2563EB', // blue-600
        'secondary-700': '#1D4ED8', // blue-700
        'secondary-800': '#1E3A8A', // blue-800
        'secondary-900': '#1E40AF', // blue-900
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors
        'accent': '#059669', // emerald-600 - Success confirmation, warranty assurance
        'accent-50': '#ECFDF5', // emerald-50
        'accent-100': '#D1FAE5', // emerald-100
        'accent-200': '#A7F3D0', // emerald-200
        'accent-300': '#6EE7B7', // emerald-300
        'accent-400': '#34D399', // emerald-400
        'accent-500': '#10B981', // emerald-500
        'accent-600': '#059669', // emerald-600
        'accent-700': '#047857', // emerald-700
        'accent-800': '#065F46', // emerald-800
        'accent-900': '#064E3B', // emerald-900
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#FFFFFF', // white - Clean precision, premium positioning
        'surface': '#F8FAFC', // slate-50 - Subtle content separation, interface depth
        'surface-100': '#F1F5F9', // slate-100
        'surface-200': '#E2E8F0', // slate-200
        'surface-300': '#CBD5E1', // slate-300

        // Text Colors
        'text-primary': '#111827', // gray-900 - Extended reading, technical specifications
        'text-secondary': '#6B7280', // gray-500 - Supporting information, clear hierarchy
        'text-muted': '#9CA3AF', // gray-400
        'text-inverse': '#FFFFFF', // white

        // Status Colors
        'success': '#10B981', // emerald-500 - Positive reinforcement, completed installations
        'success-50': '#ECFDF5', // emerald-50
        'success-100': '#D1FAE5', // emerald-100
        'success-foreground': '#FFFFFF', // white

        'warning': '#F59E0B', // amber-500 - Urgency without panic, maintenance alerts
        'warning-50': '#FFFBEB', // amber-50
        'warning-100': '#FEF3C7', // amber-100
        'warning-foreground': '#FFFFFF', // white

        'error': '#EF4444', // red-500 - Helpful concern, form validation
        'error-50': '#FEF2F2', // red-50
        'error-100': '#FEE2E2', // red-100
        'error-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#E5E7EB', // gray-200
        'border-muted': '#F3F4F6', // gray-100
        'border-focus': '#3B82F6', // blue-500

        // Action Orange for CTAs
        'action': '#EA580C', // orange-600 - Balances urgency with approachability
        'action-50': '#FFF7ED', // orange-50
        'action-100': '#FFEDD5', // orange-100
        'action-500': '#F97316', // orange-500
        'action-600': '#EA580C', // orange-600
        'action-700': '#C2410C', // orange-700
        'action-foreground': '#FFFFFF', // white
      },
      fontFamily: {
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.2' }],
        '8xl': ['6rem', { lineHeight: '1.2' }],
        '9xl': ['8rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'sm': '0.25rem', // 4px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'emergency': '0 0 20px rgba(220, 38, 38, 0.6)',
        'trust': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-emergency': 'pulse-emergency 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'morph': 'morph 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        'pulse-emergency': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 20px 10px rgba(220, 38, 38, 0.1)',
          },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scaleIn': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      backdropBlur: {
        'security': '8px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
}