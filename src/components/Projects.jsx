import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const filters = ['All Projects', 'Websites', 'Web Apps', 'Mobile Apps', 'ML / AI'];

const projects = [
  {
    name: 'Kisan Saathi — Farmer Platform',
    desc: 'A full-stack digital farming assistant with crop advisory, market prices, weather updates, community forum, expense tracker, and multi-language (Hindi, Gujarati, Marathi) support.',
    tech: ['React', 'Node.js', 'MongoDB', 'i18n'],
    category: 'Web Apps',
    color: 'from-green-500 to-emerald-600',
    github: 'https://github.com/Akshayaguni/Farmer-App',
    live: 'https://farmer-app-nine.vercel.app/',
    icon: (
      <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Electrician Business Website',
    desc: 'Professional electrician business website with service cards, project gallery, lightbox modal, testimonials, pricing section, and contact form with WhatsApp integration.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    category: 'Websites',
    color: 'from-yellow-400 to-orange-500',
    github: 'https://github.com/Akshayaguni/electrician',
    live: 'https://electrician-phi.vercel.app/',
    icon: (
      <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Catering Service Dashboard',
    desc: 'Feature-rich dashboard for Indian catering businesses with KPI tiles, orders calendar, menu packages with INR pricing, GST calculator, staff management, and finance tracking.',
    tech: ['TypeScript', 'React Native', 'Expo'],
    category: 'Mobile Apps',
    color: 'from-rose-400 to-red-500',
    github: 'https://github.com/Akshayaguni/Catering-app',
    live: 'https://catering-app-murex.vercel.app/',
    icon: (
      <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    name: 'Sealed Unit Glass Configurator',
    desc: 'E-commerce glass unit configurator with single/double/triple glazed options, interactive shape rotation previews, cart system, and full checkout flow.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    category: 'Web Apps',
    color: 'from-sky-400 to-blue-600',
    github: 'https://github.com/Akshayaguni/Sealed-unit-',
    live: 'https://sealed-unit.vercel.app/',
    icon: (
      <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: 'Nadaan Parinde',
    desc: 'Creative React website featuring Roast Mode 2.0 with interactive animations, modern UI design, and smooth user experience. Deployed on Vercel.',
    tech: ['React', 'Vite', 'JavaScript'],
    category: 'Websites',
    color: 'from-indigo-500 to-purple-600',
    github: 'https://github.com/Akshayaguni/nadaan-parinde',
    live: 'https://nadaan-parinde.vercel.app/',
    icon: (
      <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'SweetSnap',
    desc: 'Android mobile application built with Kotlin for capturing and sharing sweet moments. Native Android development with modern architecture.',
    tech: ['Kotlin', 'Android', 'Gradle'],
    category: 'Mobile Apps',
    color: 'from-violet-500 to-purple-700',
    github: 'https://github.com/Akshayaguni/sweetsnap',
    icon: (
      <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Portfolio Website',
    desc: 'Personal portfolio website showcasing skills, projects, and resume with a clean responsive design. Features about section, project cards, and contact info.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Websites',
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/akkipatel14/Portpholio',
    icon: (
      <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Jago Kishan — ML Farmer Aid',
    desc: 'Machine learning project to help farmers with crop recommendations and paddy disease detection using data-driven models and image classification.',
    tech: ['Python', 'Jupyter Notebook', 'ML'],
    category: 'ML / AI',
    color: 'from-teal-400 to-green-600',
    github: 'https://github.com/akkipatel14/Jago_kishan',
    icon: (
      <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();
  const [active, setActive] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    active === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mt-3 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            A showcase of our recent work and successful project deliveries.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active === f
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-light text-gray-600 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.name}
              className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              {/* Project Visual */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="opacity-0 group-hover:opacity-100 bg-white text-secondary px-5 py-2.5 rounded-lg font-semibold text-sm transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    Quick Preview
                  </button>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.icon}
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-primary/5 text-primary px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Live Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-secondary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-56 bg-gradient-to-br ${selectedProject.color} relative`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute inset-0 flex items-center justify-center">
                {selectedProject.icon}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-3">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {selectedProject.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-medium bg-primary/10 text-primary px-4 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live Demo
                  </a>
                )}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${selectedProject.live ? '' : 'flex-1 '}bg-secondary hover:bg-secondary/90 text-white py-3 rounded-xl font-semibold transition-all text-center inline-flex items-center justify-center gap-2 px-6`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="border border-gray-200 text-secondary py-3 px-6 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
