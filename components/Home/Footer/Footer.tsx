'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navlinks } from '@/constant/consant';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-32">
      {/* Divider */}
      <div className="h-px w-full bg-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-cover"
                draggable={false}
              />
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              A luxury seafood experience inspired by the ocean.
              Fresh ingredients, refined taste, and unforgettable moments.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-medium mb-4">
              Navigation
            </h4>

            <ul className="flex flex-col items-center lg:items-start gap-3">
              {Navlinks.map(link => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="
                      group inline-flex items-center gap-2
                      text-white/70 text-sm
                      transition-all duration-300
                      hover:text-white hover:translate-x-1
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-white/30
                    "
                  >
                    <span
                      className="
                        h-1 w-1 rounded-full
                        bg-white/60
                        opacity-0 scale-0
                        transition-all duration-300
                        group-hover:opacity-100 group-hover:scale-100
                      "
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-medium mb-2">
              Get Our Offers
            </h4>

            <p className="text-white/70 text-sm mb-6 max-w-sm">
              Be the first to receive our latest offers and exclusive updates.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-sm"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                disabled={loading || success}
                className="
                  flex-1
                  px-4 py-3 rounded-full
                  bg-white/10 backdrop-blur-md
                  text-white text-sm
                  placeholder:text-white/50
                  border border-white/20
                  outline-none
                  transition-all duration-300
                  focus:border-white/40
                  focus:bg-white/15
                  disabled:opacity-50
                "
              />

              <button
                type="submit"
                disabled={loading || success}
                className="
                  px-6 py-3 rounded-full
                  text-sm font-medium
                  text-[#0E2A3A]
                  bg-[#EFE6D8]
                  transition-all duration-300
                  hover:bg-[#e6dccd]
                  hover:shadow-md
                  active:scale-95
                  disabled:opacity-60
                  whitespace-nowrap
                "
              >
                {loading ? 'Subscribing…' : success ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>

            {/* Feedback */}
            {error && (
              <p className="mt-3 text-sm text-red-400">
                {error}
              </p>
            )}

            {success && (
              <p className="mt-3 text-sm text-emerald-400">
                You are now subscribed
              </p>
            )}

            {/* Contact info */}
            <div className="mt-6 text-sm text-white/60 space-y-1">
              <p>Alexandria, Egypt</p>
              <p>+20 100 000 0000</p>
              <p>contact@aquarium.com</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} HALEMO Restaurant. All rights reserved.
          </p>

          <p className="text-white/40 text-xs">
            Designed & Developed By TheSeifDev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
