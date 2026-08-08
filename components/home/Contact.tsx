"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("✅ Message Sent Successfully!");

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* Heading */}
        <div className="text-center">

          <span className="text-purple-600 dark:text-purple-400 font-semibold">
            CONTACT US
          </span>

          <h2 className="text-5xl font-black mt-4 text-gray-900 dark:text-white">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}
          <div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h3>

            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">
              Tell us about your project and we'll get back to you
              within 24 hours.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Email
                </h4>

                <p className="text-gray-500 dark:text-gray-400">
                  hello@shivniqstudio.com
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Phone
                </h4>

                <p className="text-gray-500 dark:text-gray-400">
                  +91 9876543210
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Location
                </h4>

                <p className="text-gray-500 dark:text-gray-400">
                  Uttar Pradesh, India
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-lg p-8 space-y-6 transition-colors duration-300"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-5 py-4 outline-none focus:border-purple-600 transition"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-5 py-4 outline-none focus:border-purple-600 transition"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-5 py-4 outline-none focus:border-purple-600 transition"
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-5 py-4 outline-none focus:border-purple-600 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 py-4 text-white font-bold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}