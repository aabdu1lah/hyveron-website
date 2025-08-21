import React from "react";
import { colors } from "../constants/colors.js";

function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-blackTone via-darkGrey to-blackTone">
            <h2 className="text-3xl md:text-5xl font-bold font-brand text-center mb-12" style={{ color: colors.whiteTone }}>
                Get In Touch
            </h2>
            <div
                className="max-w-xl mx-auto p-8 rounded-xl shadow-lg border"
                style={{ backgroundColor: colors.blackTone, borderColor: colors.verdigris }}
            >
                <p className="text-lg leading-relaxed mb-6 text-center opacity-90" style={{ color: colors.whiteTone }}>
                    Have questions or ready to start a project? We'd love to hear from you!
                </p>
                <form className="space-y-5">
                    {["name", "email"].map((field) => (
                        <div key={field}>
                            <label
                                htmlFor={field}
                                className="block text-sm font-medium mb-1"
                                style={{ color: colors.whiteTone }}
                            >
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                type={field === "email" ? "email" : "text"}
                                id={field}
                                name={field}
                                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2"
                                style={{
                                    backgroundColor: colors.darkGrey,
                                    color: colors.whiteTone,
                                    borderColor: colors.verdigris,
                                }}
                                placeholder={`Your ${field}`}
                            />
                        </div>
                    ))}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-1"
                            style={{ color: colors.whiteTone }}
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2"
                            style={{
                                backgroundColor: colors.darkGrey,
                                color: colors.whiteTone,
                                borderColor: colors.verdigris,
                            }}
                            placeholder="Your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{
                            background: `linear-gradient(90deg, ${colors.verdigris}, #5fd1c7)`,
                            color: colors.whiteTone,
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            alert("Message Sent (placeholder)!");
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
