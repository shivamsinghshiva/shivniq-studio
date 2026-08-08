"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-black text-purple-600"
        >
          Shivniq Studio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-200">
          <Link
            href="#home"
            className="hover:text-purple-600 transition"
          >
            Home
          </Link>

          <Link
            href="#services"
            className="hover:text-purple-600 transition"
          >
            Services
          </Link>

          <Link
            href="#portfolio"
            className="hover:text-purple-600 transition"
          >
            Portfolio
          </Link>

          <Link
            href="#contact"
            className="hover:text-purple-600 transition"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          <Button>
            Start Project
          </Button>

        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={19} className="text-yellow-400" />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Menu Button */}
          <button
            type="button"
            className="text-gray-800 dark:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">

          <div className="flex flex-col p-6 gap-6 text-gray-800 dark:text-gray-200">

            <Link
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Home
            </Link>

            <Link
              href="#services"
              onClick={() => setOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Services
            </Link>

            <Link
              href="#portfolio"
              onClick={() => setOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Portfolio
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Contact
            </Link>

            <Button>
              Start Project
            </Button>

          </div>

        </div>
      )}
    </nav>
  );
}