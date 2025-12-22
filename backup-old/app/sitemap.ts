export default function sitemap() {
  const baseUrl = 'https://mimar.solutions';

  const routes = [
    '',
    '/sobre',
    '/proyectos',
    '/servicios',
    '/sitios-web',
    '/apps',
    '/blog',
    '/cotizar',
    '/privacidad'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
