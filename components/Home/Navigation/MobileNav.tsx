'use client';

import { Navlinks } from '@/constant/consant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

interface MobileNavProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const MobileNav = ({ open, setOpen }: MobileNavProps) => {
  const pathname = usePathname();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-md animate-fadeIn"
      />

      {/* Popup */}
      <div
        className="
          relative z-10 w-[90%] max-w-sm
          rounded-2xl px-8 py-10
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-center
          animate-scaleIn
        "
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-4 right-4
            text-white/70 hover:text-white
            transition-transform duration-300
            hover:rotate-90
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-white/40
          "
          aria-label="Close menu"
        >
          <X size={22} />
        </button>

        {/* Links */}
        <ul className="flex flex-col gap-5 mt-6">
          {Navlinks.map((link, index) => {
            const isLast = index === Navlinks.length - 1;
            const isActive = pathname === link.url;

            return (
              <li key={link.id}>
                <Link
                  href={link.url}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={
                    isLast
                      ? `
                        block w-full
                        mt-3
                        px-5 py-3 rounded-full
                        text-sm font-medium
                        text-[#0E2A3A]
                        bg-[#EFE6D8]
                        transition-all duration-300
                        hover:bg-[#e6dccd]
                        active:scale-95
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-[#EFE6D8]/60
                      `
                      : `
                        block text-lg font-medium
                        rounded-full
                        px-3 py-2
                        transition-all duration-300
                        ${isActive
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'}
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-white/30
                      `
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
