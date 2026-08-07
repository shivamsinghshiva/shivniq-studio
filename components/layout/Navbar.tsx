"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-black text-purple-600"
        >
          Shivniq Studio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Contact</Link>

        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button>Start Project</Button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-6 gap-6">

            <Link href="#" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              Portfolio
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
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