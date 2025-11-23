'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(count, to, { duration });

      return controls.stop;
    }
  }, [count, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return unsubscribe;
  }, [rounded]);

  return <span>{displayValue.toLocaleString()}</span>;
}

const stats = [
  {
    value: 1250,
    suffix: '+',
    label: 'Transacciones procesadas hoy',
    icon: '💳',
    color: 'from-blue-500 to-blue-600',
  },
  {
    value: 15000,
    suffix: '+',
    label: 'Productos inventariados',
    icon: '📦',
    color: 'from-purple-500 to-purple-600',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime este mes',
    icon: '⚡',
    color: 'from-green-500 to-green-600',
  },
  {
    value: 24,
    suffix: 'min',
    label: 'Tiempo promedio de respuesta',
    icon: '⏱️',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function LiveStats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 py-20">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
      </div>

      <div className="container-pro relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Estadísticas en tiempo real
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Operando a toda velocidad
          </h2>
          <p className="mt-3 text-lg text-white/90">
            Nuestros sistemas procesando datos en este momento
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl bg-white/10 p-6 text-center backdrop-blur-md ring-1 ring-white/20"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-3xl shadow-lg`}
              >
                {stat.icon}
              </motion.div>

              {/* Value */}
              <div className="mb-2 text-4xl font-extrabold text-white">
                <Counter from={0} to={stat.value} duration={2.5} />
                {stat.suffix}
              </div>

              {/* Label */}
              <p className="text-sm text-white/80">{stat.label}</p>

              {/* Pulse effect */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${stat.color}`}
              />

              {/* Hover glow */}
              <div
                className={`absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 blur-xl transition-opacity group-hover:opacity-50`}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-white/70">
            * Datos actualizados en tiempo real desde nuestros servidores
          </p>
        </motion.div>
      </div>
    </section>
  );
}
