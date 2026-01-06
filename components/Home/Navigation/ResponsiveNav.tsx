'use client';

import { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Image from 'next/image';
import { Menu, MapPin, Languages } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ResponsiveNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Placeholder for language switch (ready for next-intl)
  const toggleLanguage = () => {
    console.log('Switch language AR / EN');
  };

  return (
    <>
      {/* NAV WRAPPER */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl flex items-center justify-between gap-3">

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

        {/* DESKTOP NAV */}
        <header
          className="
            hidden md:flex
            items-center gap-3
            px-5 py-3
            rounded-full
            bg-[#0E2A3A]/60
            backdrop-blur-xl
            border border-white/15
            shadow-lg
          "
        >
          <Nav />

          {/* Divider */}
          <span className="w-px h-6 bg-white/20 mx-1" />

          {/* Map */}
          <button
            onClick={() => router.push('/location')}
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              text-white/80
              transition-all duration-300
              hover:bg-white/10 hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-white/30 cursor-pointer
            "
            aria-label="Location"
          >
            <MapPin size={18} />
          </button>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              text-white/80
              transition-all duration-300
              hover:bg-white/10 hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-white/30 cursor-pointer
            "
            aria-label="Switch language"
          >
            <Languages size={18} />
          </button>
        </header>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Map */}
          <button
            onClick={() => router.push('/location')}
            className="
              w-11 h-11
              flex items-center justify-center
              rounded-full
              bg-[#0E2A3A]/70
              backdrop-blur-xl
              border border-white/20
              text-white
              transition-all duration-300
              hover:scale-105
              active:scale-95
            "
            aria-label="Location"
          >
            <MapPin size={20} />
          </button>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="
              w-11 h-11
              flex items-center justify-center
              rounded-full
              bg-[#0E2A3A]/70
              backdrop-blur-xl
              border border-white/20
              text-white
              transition-all duration-300
              hover:scale-105
              active:scale-95
            "
            aria-label="Switch language"
          >
            <Languages size={20} />
          </button>

          {/* Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              w-11 h-11
              flex items-center justify-center
              rounded-full
              bg-[#0E2A3A]/70
              backdrop-blur-xl
              border border-white/20
              text-white
              transition-all duration-300
              hover:scale-105
              active:scale-95
            "
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <MobileNav open={menuOpen} setOpen={setMenuOpen} />
    </>
  );
};

export default ResponsiveNav;
