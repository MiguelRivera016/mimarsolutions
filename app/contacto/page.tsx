// app/contacto/page.tsx
'use client';

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiClock, HiCheck, HiArrowRight } from 'react-icons/hi';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí puedes integrar con tu API o servicio de email
    // Por ahora, redirigimos a WhatsApp con el mensaje
    const message = `Hola! Soy ${formData.name}. 
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio: ${formData.service}
Presupuesto: ${formData.budget}
Mensaje: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="section pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hablemos de Tu Proyecto</h1>
            <p className="text-xl text-gray-600">
              Contanos tu idea y te respondemos en menos de 2 horas. Sin compromiso, sin costo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            <motion.a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group"
            >
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">Respuesta inmediata</p>
            </motion.a>

            <motion.a
              href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors group"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HiPhone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Llamar</h3>
              <p className="text-sm text-gray-600">{SITE_CONFIG.contact.phone}</p>
            </motion.a>

            <motion.a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors group"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HiMail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-gray-600">Respuesta en 2 horas</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 bg-gray-50 rounded-2xl"
            >
              <div className="w-16 h-16 bg-gray-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HiClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Horario</h3>
              <p className="text-sm text-gray-600">{SITE_CONFIG.contact.hours}</p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Solicitar Cotización</h2>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="9999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Servicio Requerido *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="sitio-web">Sitio Web</option>
                    <option value="ecommerce">Tienda Online</option>
                    <option value="app-movil">App Móvil</option>
                    <option value="sistema">Sistema Personalizado</option>
                    <option value="seo">SEO/Marketing</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Presupuesto Estimado</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccionar...</option>
                  <option value="8-15k">L.8,000 - L.15,000</option>
                  <option value="15-30k">L.15,000 - L.30,000</option>
                  <option value="30-50k">L.30,000 - L.50,000</option>
                  <option value="50k+">Más de L.50,000</option>
                  <option value="no-definido">No definido</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Cuéntanos sobre tu proyecto *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe tu proyecto, objetivos, y cualquier detalle importante..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`btn btn-primary btn-lg w-full ${isSubmitted ? 'bg-green-500 hover:bg-green-600' : ''}`}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : isSubmitted ? (
                  <>
                    <HiCheck className="w-5 h-5" />
                    Mensaje Enviado
                  </>
                ) : (
                  <>
                    Enviar Cotización
                    <HiArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Al enviar este formulario, aceptás que te contactemos por WhatsApp o email.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>

            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl">
                <summary className="font-bold cursor-pointer">¿Cuánto tiempo tarda la respuesta?</summary>
                <p className="mt-4 text-gray-600">
                  Respondemos todas las consultas en menos de 2 horas durante horario laboral. Si escribís fuera de
                  horario, te respondemos a primera hora del siguiente día hábil.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl">
                <summary className="font-bold cursor-pointer">¿La cotización tiene costo?</summary>
                <p className="mt-4 text-gray-600">
                  No, la cotización es completamente gratis y sin compromiso. Analizamos tu proyecto y te enviamos una
                  propuesta detallada sin costo.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl">
                <summary className="font-bold cursor-pointer">¿Puedo agendar una reunión?</summary>
                <p className="mt-4 text-gray-600">
                  ¡Por supuesto! Podemos reunirnos virtualmente por Zoom/Meet o presencialmente en Tegucigalpa.
                  Escribinos por WhatsApp para coordinar.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

