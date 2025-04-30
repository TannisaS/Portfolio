
import React from 'react';
import ScrollReveal from './ScrollReveal';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        </ScrollReveal>
        <form
          action="https://formspree.io/f/xkgroqzb"
          method="POST"
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
        >
          <ScrollReveal delay={100}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
