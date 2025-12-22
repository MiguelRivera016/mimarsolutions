'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiX } from 'react-icons/hi';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Hide tooltip after 10 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(false), 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/50493870479?text=Hola!%20Necesito%20información"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="absolute w-3 h-3 bg-green-400 rounded-full top-1 right-1 animate-pulse" />
      </motion.a>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-xl p-4 max-w-xs"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Cerrar"
              type="button"
            >
              <HiX className="w-4 h-4" />
            </button>
            <p className="text-sm font-semibold mb-1">💬 ¿Necesitás ayuda?</p>
            <p className="text-xs text-gray-600">Escribinos por WhatsApp. Respondemos en minutos!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

