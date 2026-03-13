export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.07)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-accent text-sm font-medium">Available for new projects</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
          Building Powerful
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
          Akshay Technologies helps businesses grow with modern websites, apps,
          and software.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
          <a
            href="#projects"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/20 hover:border-accent text-white hover:text-accent px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5"
          >
            Hire Us
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-16 animate-fade-in-up animation-delay-500">
          {['Modern Technology', 'Fast Delivery', 'Client Focused'].map(
            (badge) => (
              <div key={badge} className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">{badge}</span>
              </div>
            )
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
