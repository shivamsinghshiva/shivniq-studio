import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-black text-purple-500">
              Shivniq Studio
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
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

            <ul className="mt-6 space-y-4 text-gray-400">

              <li>
                <Link href="/" className="hover:text-purple-500">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-purple-500">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-purple-500">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-purple-500">
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

            <ul className="mt-6 space-y-4 text-gray-400">

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

            <div className="flex gap-5 mt-6 text-2xl">

              <FaFacebook className="cursor-pointer hover:text-purple-500 transition" />

              <FaInstagram className="cursor-pointer hover:text-purple-500 transition" />

              <FaLinkedin className="cursor-pointer hover:text-purple-500 transition" />

              <FaGithub className="cursor-pointer hover:text-purple-500 transition" />

            </div>

            <p className="mt-8 text-gray-400">
              Email:
            </p>

            <p className="text-purple-400">
              hello@shivniqstudio.com
            </p>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">

          © 2026 <span className="text-purple-500 font-semibold">
            Shivniq Studio
          </span>. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}