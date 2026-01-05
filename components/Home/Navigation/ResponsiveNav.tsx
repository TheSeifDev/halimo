'use client';

import { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const ResponsiveNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl flex items-center justify-between">

        {/* LOGO */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
          <Image
            src="/logo.jpg"
            alt="Logo"
            fill
            draggable={false}
            className="object-cover"
            priority
          />
        </div>


        {/* GLASS NAV (DESKTOP LINKS ONLY) */}
        <header
          className="
            hidden md:flex
            items-center
            px-6 py-3
            rounded-full
            bg-[#0E2A3A]/60
            backdrop-blur-xl
            border border-white/15
            shadow-lg
          "
        >
          <Nav />
        </header>

        {/* MENU BUTTON (SEPARATE) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="
            md:hidden
            w-11 h-11
            flex items-center justify-center
            rounded-full
            bg-[#0E2A3A]/70
            backdrop-blur-xl
            border border-white/20
            text-white
            transition-all duration-300
            hover:scale-105 hover:bg-[#0E2A3A]/80
            active:scale-95
          "
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <MobileNav open={menuOpen} setOpen={setMenuOpen} />
    </>
  );
};

export default ResponsiveNav;
