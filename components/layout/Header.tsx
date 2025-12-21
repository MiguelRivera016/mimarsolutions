'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Nosotros', href: '/nosotros' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">MIMAR</span>
              <span className="hidden sm:inline text-gray-500 text-sm ml-2">Solutions</span>
            </div>
            {/* Badge oferta */}
            <span className="badge badge-warning animate-pulse ml-2">
              🔥 -50%
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/50493870479?text=Hola!%20Me%20interesa%20cotizar%20un%20proyecto"
              className="btn btn-ghost btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.292c-.323.896-1.605 1.644-2.616 1.861-.699.146-1.607.26-4.678-.999-3.938-1.616-6.472-5.626-6.667-5.883-.191-.253-1.567-2.085-1.567-3.981 0-1.896 1-2.836 1.354-3.223.354-.387.772-.484 1.029-.484.124 0 .236.006.338.011.259.012.389.029.56.435.211.503.721 1.758.784 1.887.064.129.106.28.021.451-.084.173-.126.28-.253.432-.124.151-.262.338-.375.453-.124.129-.253.267-.109.523.145.258.645 1.063 1.384 1.724.951.849 1.752 1.112 2.001 1.238.248.124.393.106.537-.064.145-.172.621-.726.787-.976.167-.249.333-.208.56-.124.228.084 1.445.681 1.691.805.248.124.413.186.474.29.063.104.063.601-.26 1.497z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="btn btn-primary btn-sm"
            >
              Cotizar Proyecto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/contacto"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn btn-primary btn-sm w-full text-center"
                  >
                    Cotizar Proyecto
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

