import useScrollAnimation from '../hooks/useScrollAnimation';

const benefits = [
  {
    title: 'Modern Technology',
    desc: 'We use the latest frameworks and tools to build future-proof solutions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Fast Development',
    desc: 'Agile development process ensures quick delivery without compromising quality.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Pricing',
    desc: 'Competitive pricing plans that deliver great value for startups and businesses.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Client Satisfaction',
    desc: 'We prioritize your vision and ensure every project exceeds expectations.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Clean Code',
    desc: 'Well-structured, maintainable code that scales with your business needs.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Responsive Design',
    desc: 'Pixel-perfect designs that look stunning on every device and screen size.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Akshay Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            We bring the best combination of quality, speed, and value to every project.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-accent mb-5 group-hover:bg-primary/30 transition-all">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
