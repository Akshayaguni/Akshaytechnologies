import useScrollAnimation from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Business Owner',
    text: 'Akshay Technologies delivered an outstanding website for our business. The quality of work, attention to detail, and timely delivery exceeded our expectations. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Startup Founder',
    text: 'Working with Akshay was a fantastic experience. They built our MVP quickly and the product was exactly what we envisioned. Professional, skilled, and great communication.',
    stars: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'Freelance Designer',
    text: 'The portfolio website they created for me is stunning. It perfectly showcases my work and I have received so many compliments from clients. Great value for the price!',
    stars: 5,
  },
  {
    name: 'Sneha Gupta',
    role: 'Marketing Manager',
    text: 'Exceptional development skills and very responsive to our needs. The landing page they built significantly increased our conversion rates. Will definitely work with them again.',
    stars: 4,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-light">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mt-3 mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don&apos;t just take our word for it — hear from our satisfied clients.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <Stars count={t.stars} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-secondary font-semibold text-sm">{t.name}</p>
                  <p className="text-gray text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
