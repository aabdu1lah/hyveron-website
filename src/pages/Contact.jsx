// src/pages/Contact.jsx
import React from 'react';
import { colors } from '../constants/colors.js';

function ContactSection() {
    return (
        <section id="contact" className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.whiteTone }}>
                Get In Touch
            </h2>
            <div className="max-w-xl mx-auto p-8 rounded-lg shadow-md" style={{ backgroundColor: colors.blackTone, border: `1px solid ${colors.verdigris}` }}>
                <p className="text-lg leading-relaxed mb-6 text-center" style={{ color: colors.whiteTone }}>
                    Have questions or ready to start a project? We'd love to hear from you!
                </p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: colors.whiteTone }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2"
                            style={{ backgroundColor: colors.darkGrey, color: colors.whiteTone, borderColor: colors.verdigris, focusRingColor: colors.verdigris }}
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: colors.whiteTone }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2"
                            style={{ backgroundColor: colors.darkGrey, color: colors.whiteTone, borderColor: colors.verdigris, focusRingColor: colors.verdigris }}
                            placeholder="your@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: colors.whiteTone }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2"
                            style={{ backgroundColor: colors.darkGrey, color: colors.whiteTone, borderColor: colors.verdigris, focusRingColor: colors.verdigris }}
                            placeholder="Your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{ backgroundColor: colors.verdigris, color: colors.whiteTone }}
                        onClick={(e) => { e.preventDefault(); alert('Message Sent (not really, this is a placeholder)!'); }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
