'use client';

import Link from 'next/link';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">M</span>
              </div>
              <span className="text-white font-bold text-xl">MIMAR Solutions</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Desarrollo web profesional y accesible para negocios hondureños. Tu socio tecnológico de confianza.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <span className="sr-only">Facebook</span>f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <span className="sr-only">Instagram</span>ig
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <HiPhone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <a href="tel:50493870479" className="hover:text-white transition-colors">
                    +504 9387-0479
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="w-5 h-5 text-gray-400 mt-0.5" />
                <a href="mailto:mimargrouphn@gmail.com" className="hover:text-white transition-colors">
                  mimargrouphn@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-gray-400 mt-0.5" />
                <span>Tegucigalpa, Honduras</span>
              </li>
              <li className="flex items-start gap-3">
                <HiClock className="w-5 h-5 text-gray-400 mt-0.5" />
                <span>Lun-Sáb: 8AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} MIMAR Solutions. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos
              </Link>
              <span className="text-gray-500">|</span>
              <span className="flex items-center gap-2">Hecho con 💙 en Honduras</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

