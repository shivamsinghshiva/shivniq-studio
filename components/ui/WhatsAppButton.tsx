"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "9517468734";

  const message = encodeURIComponent(
    "Hello Shivniq Studio! I would like to discuss a project."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shivniq Studio on WhatsApp"
      className="fixed bottom-8 left-6 sm:left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}