import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mt-3 mb-4">
            Start Your{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have an idea? Let&apos;s bring it to life. Reach out and let&apos;s discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-secondary rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">contact@akshaytechnologies.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="relative mt-12">
                <div className="w-32 h-32 bg-primary/10 rounded-full absolute -bottom-4 -right-4" />
                <div className="w-20 h-20 bg-accent/10 rounded-full absolute -bottom-8 right-12" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-secondary font-medium mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-secondary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-secondary font-medium mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-secondary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-secondary font-medium mb-2 text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-secondary"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-secondary font-medium mb-2 text-sm">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-secondary resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Chat
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
