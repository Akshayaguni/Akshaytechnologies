import useScrollAnimation from '../hooks/useScrollAnimation';

const skills = [
  'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'UI/UX Design',
  'Next.js', 'TypeScript', 'MongoDB', 'Firebase', 'Git',
];

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image / Visual */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center overflow-hidden">
                {/* Founder photo placeholder */}
                <div className="text-center p-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">AC</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Akshay Chhabhaiya</h3>
                  <p className="text-gray mt-1">Founder & Developer</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white shadow-xl rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-lg">50+</p>
                    <p className="text-gray text-sm">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mt-3 mb-6">
              About Akshay{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Akshay Technologies is a modern digital development company founded by{' '}
              <strong className="text-secondary">Akshay Chhabhaiya</strong>. We specialize in building
              high-quality websites, applications, and digital solutions that help
              businesses grow online.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is to deliver innovative, scalable, and user-friendly digital
              products that empower businesses to succeed in the digital era. We combine
              cutting-edge technology with creative design to create solutions that
              make an impact.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-secondary font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/5 text-primary border border-primary/10 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Let&apos;s Work Together
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
