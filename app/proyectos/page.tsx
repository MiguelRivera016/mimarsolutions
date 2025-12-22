// app/proyectos/page.tsx
'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiExternalLink,
  HiCode,
  HiShoppingCart,
  HiDeviceMobile,
  HiDesktopComputer,
  HiGlobe,
} from 'react-icons/hi';

// Como no tienes proyectos reales aún, vamos a crear ejemplos ficticios pero realistas
const projects = [
  {
    id: 1,
    title: 'Tienda Virtual La Ceiba',
    category: 'ecommerce',
    description: 'E-commerce completo con catálogo de productos, carrito de compras y pagos en línea.',
    image: '/projects/ecommerce-demo.jpg',
    technologies: ['WooCommerce', 'WordPress', 'Stripe'],
    features: ['500+ productos', 'Pagos con tarjeta', 'Envíos automatizados', 'Panel de administración'],
    testimonial: 'Excelente trabajo, muy profesionales y entregaron a tiempo.',
    client: 'La Ceiba Store',
    year: '2024',
    link: '#',
    color: 'purple',
  },
  {
    id: 2,
    title: 'Sistema de Inventario TechPro',
    category: 'sistema',
    description: 'Sistema personalizado para control de inventario con reportes en tiempo real.',
    image: '/projects/sistema-demo.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    features: ['Control de stock', 'Alertas automáticas', 'Reportes detallados', 'Multi-usuario'],
    testimonial: 'El sistema transformó nuestra operación. 100% recomendado.',
    client: 'TechPro Honduras',
    year: '2024',
    link: '#',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Restaurant El Patio',
    category: 'web',
    description: 'Sitio web con menú digital, reservaciones online y galería de platillos.',
    image: '/projects/restaurant-demo.jpg',
    technologies: ['Next.js', 'Tailwind', 'WhatsApp API'],
    features: ['Menú digital', 'Reservaciones online', 'Galería responsiva', 'Integración WhatsApp'],
    testimonial: 'Aumentamos 40% las reservaciones gracias al nuevo sitio.',
    client: 'Restaurant El Patio',
    year: '2024',
    link: '#',
    color: 'green',
  },
  {
    id: 4,
    title: 'App Delivery Express',
    category: 'app',
    description: 'Aplicación móvil para pedidos y entregas con tracking en tiempo real.',
    image: '/projects/app-demo.jpg',
    technologies: ['React Native', 'Firebase', 'Google Maps'],
    features: ['Tracking GPS', 'Notificaciones push', 'Pagos integrados', 'Chat en vivo'],
    testimonial: 'La app superó nuestras expectativas. Clientes felices.',
    client: 'Delivery Express HN',
    year: '2024',
    link: '#',
    color: 'orange',
  },
  {
    id: 5,
    title: 'Clínica Médica San José',
    category: 'web',
    description: 'Portal web con sistema de citas online y expediente digital.',
    image: '/projects/clinica-demo.jpg',
    technologies: ['WordPress', 'Custom Plugin', 'MySQL'],
    features: ['Citas online', 'Portal pacientes', 'Blog médico', 'Multi-idioma'],
    testimonial: 'Profesionalismo y calidad. Muy satisfechos con el resultado.',
    client: 'Clínica San José',
    year: '2024',
    link: '#',
    color: 'red',
  },
  {
    id: 6,
    title: 'Fitness Center Pro',
    category: 'sistema',
    description: 'Sistema de gestión para gimnasio con control de membresías y pagos.',
    image: '/projects/gym-demo.jpg',
    technologies: ['Laravel', 'Vue.js', 'Stripe'],
    features: ['Control membresías', 'Pagos recurrentes', 'Clases y horarios', 'App móvil'],
    testimonial: 'Automatizó todo nuestro proceso. Excelente inversión.',
    client: 'Fitness Center Pro',
    year: '2024',
    link: '#',
    color: 'yellow',
  },
] as const;

type Project = (typeof projects)[number];
type ProjectCategory = Project['category'] | 'todos';

const categories = [
  { id: 'todos', name: 'Todos', icon: HiGlobe },
  { id: 'web', name: 'Sitios Web', icon: HiDesktopComputer },
  { id: 'ecommerce', name: 'E-Commerce', icon: HiShoppingCart },
  { id: 'app', name: 'Apps', icon: HiDeviceMobile },
  { id: 'sistema', name: 'Sistemas', icon: HiCode },
] as const;

const colorBg = {
  purple: 'bg-purple-100',
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  orange: 'bg-orange-100',
  red: 'bg-red-100',
  yellow: 'bg-yellow-100',
} as const;

export default function ProyectosPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('todos');

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'todos' ? projects : projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Proyectos</h1>
            <p className="text-xl text-gray-600">
              Algunos de los negocios que confiaron en nosotros y los resultados que logramos juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as ProjectCategory)}
                whileTap={{ scale: 0.95 }}
                type="button"
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                {category.id === 'todos' && <span className="ml-1 text-sm opacity-75">({projects.length})</span>}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      {/* Placeholder mientras no hay imágenes reales */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-32 h-32 ${colorBg[project.color]} rounded-2xl flex items-center justify-center`}
                        >
                          {project.category === 'ecommerce' && (
                            <HiShoppingCart className="w-16 h-16 text-purple-500" />
                          )}
                          {project.category === 'sistema' && <HiCode className="w-16 h-16 text-blue-500" />}
                          {project.category === 'web' && (
                            <HiDesktopComputer className="w-16 h-16 text-green-500" />
                          )}
                          {project.category === 'app' && (
                            <HiDeviceMobile className="w-16 h-16 text-orange-500" />
                          )}
                        </div>
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-white text-center p-6">
                          <p className="mb-4">{project.description}</p>
                          <button
                            type="button"
                            className="btn btn-ghost bg-white/20 text-white hover:bg-white/30"
                          >
                            Ver Detalles
                            <HiExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>

                      <p className="text-gray-600 mb-4">{project.client}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="badge badge-secondary text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="border-t pt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Características:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {project.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="text-green-500 mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-gray-600 italic">&quot;{project.testimonial}&quot;</p>
                        <p className="text-xs text-gray-500 mt-2">- {project.client}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-gray-500">No hay proyectos en esta categoría aún.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600 mt-2">Proyectos Completados</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 mt-2">Clientes Satisfechos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-2">Soporte Disponible</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-600">2-4</div>
              <div className="text-gray-600 mt-2">Semanas Entrega</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">¿Querés ser nuestro próximo caso de éxito?</h2>
            <p className="text-gray-600 mb-8 text-lg">Contanos tu idea y hagamos realidad tu proyecto digital.</p>

            <a
              href="https://wa.me/50493870479?text=Hola!%20Vi%20sus%20proyectos%20y%20me%20interesa%20trabajar%20con%20ustedes"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar Mi Proyecto
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

