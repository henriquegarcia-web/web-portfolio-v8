export interface IProject {
  id: string
  images: string[]
  technologies: string[]
}

export const projects = [
  {
    id: 'uniw',
    images: [
      '/projects/1/1.png',
      '/projects/1/2.png',
      '/projects/1/3.png',
      '/projects/1/4.png',
      '/projects/1/5.png',
      '/projects/1/6.png',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Styled Components',
      'Prisma',
    ],
  },
  {
    id: 'mandato-digital',
    images: ['/projects/2/1.png', '/projects/2/2.png'],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
    ],
  },
  {
    id: 'hungry-hub',
    images: [
      '/projects/4/1.png',
      '/projects/4/2.png',
      '/projects/4/3.png',
      '/projects/4/4.png',
      '/projects/4/5.png',
      '/projects/4/6.png',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'Redux',
      'Material UI',
    ],
  },
  {
    id: 'quick-shop',
    images: [
      '/projects/5/1.png',
      '/projects/5/2.png',
      '/projects/5/3.png',
      '/projects/5/4.png',
      '/projects/5/5.png',
      '/projects/5/6.png',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Stripe API',
      'Tailwind CSS',
    ],
  },
] satisfies IProject[]
