import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-black text-purple-500">
              Shivniq Studio
            </h2>

            <p className="mt-5 sm:mt-6 text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base">
              We create premium websites, web applications,
              mobile apps and AI solutions for startups and
              businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-gray-400">

              <li>
                <Link
                  href="#home"
                  className="hover:text-purple-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="hover:text-purple-500 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-purple-500 transition"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="hover:text-purple-500 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-bold">
              Services
            </h3>

            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-gray-400">

              <li>Web Development</li>
              <li>App Development</li>
              <li>UI / UX Design</li>
              <li>AI Solutions</li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-bold">
              Follow Us
            </h3>

            <div className="flex gap-5 mt-5 sm:mt-6 text-2xl">

              <a
                href="https://www.facebook.com/profile.php?id=100081135260918"
                aria-label="Facebook"
                className="text-gray-400 hover:text-purple-500 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/shivam_singh_shiva_?igsh=MXc1N2o1Mm1qdHN4OA=="
                aria-label="Instagram"
                className="text-gray-400 hover:text-purple-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-singh-4b5923348/"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-purple-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/shivamsinghshiva?tab=repositories"
                aria-label="GitHub"
                className="text-gray-400 hover:text-purple-500 transition"
              >
                <FaGithub />
              </a>

            </div>

            <p className="mt-7 sm:mt-8 text-gray-400">
              Email:
            </p>

            <p className="text-purple-400 break-all">
              shivniqstudio@sgmail.com
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-7 sm:pt-8 text-center text-gray-500 text-sm sm:text-base">

          © 2026{" "}
          <span className="text-purple-500 font-semibold">
            Shivniq Studio
          </span>
          . All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}