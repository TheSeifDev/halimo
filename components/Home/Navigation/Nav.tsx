'use client';

import { Navlinks } from '@/constant/consant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-4">
        {Navlinks.map((link, index) => {
          const isActive = pathname === link.url;
          const isLast = index === Navlinks.length - 1;

          return (
            <li key={link.id} className="relative">
              <Link
                href={link.url}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isLast
                    ? `
                      px-5 py-2 rounded-full
                      text-sm font-medium
                      text-[#0E2A3A]
                      bg-[#EFE6D8]
                      transition-all duration-300
                      hover:bg-[#e6dccd]
                      hover:shadow-md
                      active:scale-95
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-[#EFE6D8]/50
                    `
                    : `
                      group relative px-3 py-2 rounded-full
                      text-sm font-medium
                      text-white/70
                      transition-all duration-300
                      hover:text-white
                      active:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-white/30
                    `
                }
              >
                {/* Label */}
                <span className="relative z-10">
                  {link.label}
                </span>

                {/* Hover / Active glow (non-contact) */}
                {!isLast && (
                  <span
                    className={`
                      absolute inset-0 -z-10
                      rounded-full
                      bg-white/10
                      opacity-0 scale-95
                      transition-all duration-300
                      group-hover:opacity-100 group-hover:scale-100
                      ${isActive ? 'opacity-100 scale-100' : ''}
                    `}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
