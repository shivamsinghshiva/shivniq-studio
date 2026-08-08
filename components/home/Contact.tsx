"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">

        {/* Heading */}
        <div className="text-center">
          <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">
            CONTACT US
          </span>

          <h2 className="text-4xl sm:text-5xl font-black mt-4 text-gray-900 dark:text-white">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mt-14 sm:mt-20">

          {/* Left */}
          <div className="flex flex-col justify-center">

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h3>

            <p className="mt-5 sm:mt-6 text-gray-600 dark:text-gray-300 leading-7 sm:leading-8 max-w-xl">
              Tell us about your project and we'll get back to you
              within 24 hours.
            </p>

            <div className="mt-8 sm:mt-10 space-y-6">

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Email
                </h4>

                <p className="mt-1 text-gray-500 dark:text-gray-400 break-all">
                  shivniqstudio@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Phone
                </h4>

                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  +91 9517468734
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Location
                </h4>

                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Uttar Pradesh, India
                </p>
              </div>

            </div>
          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-xl dark:shadow-black/30 p-5 sm:p-8 space-y-5 sm:space-y-6"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition"
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition resize-none"
            />

            {/* Success */}
            {status === "success" && (
              <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/40 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-400">
                ✅ Your message has been sent successfully!
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-400">
                ❌ Failed to send your message. Please try again.
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 py-3.5 sm:py-4 text-white font-bold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}