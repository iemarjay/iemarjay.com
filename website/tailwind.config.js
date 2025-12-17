/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            pre: {
              backgroundColor: '#1e1e2e',
              color: '#cdd6f4',
              borderRadius: '0.5rem',
              padding: '1rem 1.25rem',
              overflowX: 'auto',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: '#e5e7eb',
            },
            'thead th': {
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontWeight: '600',
              backgroundColor: '#f9fafb',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              borderBottomWidth: '1px',
              borderBottomColor: '#e5e7eb',
            },
            'tbody tr:hover': {
              backgroundColor: '#f9fafb',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
