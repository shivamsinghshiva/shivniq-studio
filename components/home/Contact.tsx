"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
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
  alert(JSON.stringify(error));
}
    setLoading(false);
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <span className="text-purple-600 font-semibold">
            CONTACT US
          </span>

          <h2 className="text-5xl font-black mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}
          <div>

            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Tell us about your project and we'll get back to you
              within 24 hours.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-500">
                  hello@shivniqstudio.com
                </p>
              </div>

              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-gray-500">
                  +91 9876543210
                </p>
              </div>

              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-gray-500">
                  Uttar Pradesh, India
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white rounded-3xl shadow-lg p-8 space-y-6"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full border rounded-xl px-5 py-4 outline-none focus:border-purple-600"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full border rounded-xl px-5 py-4 outline-none focus:border-purple-600"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border rounded-xl px-5 py-4 outline-none focus:border-purple-600"
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="w-full border rounded-xl px-5 py-4 outline-none focus:border-purple-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 py-4 text-white font-bold hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}