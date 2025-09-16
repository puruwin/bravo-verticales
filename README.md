# Bravo Trabajos Verticales - Sitio Web

Sitio web profesional para Bravo Trabajos Verticales, empresa especializada en servicios de acceso vertical y trabajos en altura.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **SEO Optimizado**: Meta tags, schema markup y estructura semántica
- **Accesibilidad**: Cumple con estándares de accesibilidad web
- **Performance**: Carga rápida con Astro y TailwindCSS
- **Componentes Modulares**: Arquitectura escalable y mantenible

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework web moderno para sitios estáticos
- **TypeScript**: Tipado estático para mayor robustez
- **TailwindCSS**: Framework de CSS utilitario
- **HTML5 Semántico**: Estructura accesible y SEO-friendly

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.astro    # Navegación principal
│   ├── HeroSection.astro # Sección hero con CTA
│   ├── TrustSection.astro # Logos clientes y testimonios
│   ├── ServicesSection.astro # Grid de servicios
│   ├── WhyChooseUsSection.astro # Diferenciadores
│   ├── ConversionBlock.astro # CTA intermedio
│   ├── ProjectsGallery.astro # Galería de proyectos
│   ├── ContactSection.astro # Formulario de contacto
│   └── Footer.astro    # Pie de página
├── layouts/
│   └── Layout.astro    # Layout base con SEO
└── pages/
    └── index.astro     # Página principal
```

## 🎨 Paleta de Colores

- **Primario**: #2F45AF (Azul corporativo)
- **Secundario**: #F5B71D (Amarillo/dorado)
- **Texto**: Blanco, gris claro, gris oscuro
- **Fondos**: Blanco, gris claro (#F9FAFB)

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd bravo-verticales

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo en http://localhost:4321

# Producción
npm run build        # Construir para producción
npm run preview      # Vista previa de la build de producción
```

## 📱 Secciones del Sitio

### 1. Hero Section
- Imagen de fondo con overlay
- Headline principal y subheadline
- CTA principal destacado
- Indicadores de confianza

### 2. Trust & Authority
- Logos de clientes reconocidos
- Testimonios con calificaciones
- Enlace a historias de éxito

### 3. Nuestros Servicios
- Grid de 7 servicios principales
- Iconos descriptivos
- Enlaces "Saber Más"
- CTA para ver todos los servicios

### 4. Por Qué Elegirnos
- 4 diferenciadores clave
- Estadísticas de la empresa
- Beneficios adicionales
- Enlace a más información

### 5. Conversion Block
- CTA intermedio destacado
- Indicadores de confianza
- Información de contacto

### 6. Galería de Proyectos
- Grid de proyectos con hover effects
- Categorías de trabajos
- CTA para ver portafolio completo

### 7. Contacto
- Formulario de contacto completo
- Información de contacto
- Sección de emergencias 24/7

## 🔧 Personalización

### Cambiar Colores
Edita `tailwind.config.js`:
```javascript
colors: {
  primary: '#2F45AF',    // Azul corporativo
  secondary: '#F5B71D',  // Amarillo/dorado
}
```

### Actualizar Contenido
- **Servicios**: Edita `ServicesSection.astro`
- **Testimonios**: Modifica `TrustSection.astro`
- **Proyectos**: Actualiza `ProjectsGallery.astro`
- **Información de contacto**: Cambia en `ContactSection.astro` y `Footer.astro`

### Agregar Imágenes
1. Coloca las imágenes en `public/`
2. Actualiza las referencias en los componentes
3. Optimiza las imágenes para web (WebP recomendado)

## 📈 SEO y Performance

### Optimizaciones Incluidas
- Meta tags completos (Open Graph, Twitter Cards)
- Schema markup para negocio local
- Estructura semántica HTML5
- Imágenes optimizadas
- Carga asíncrona de fuentes
- CSS crítico inline

### Métricas de Performance
- Lighthouse Score: 95+ (objetivo)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🎯 Conversión y UX

### CTAs Estratégicos
- Hero: "Obtén tu Cotización Gratuita Hoy"
- Servicios: "Ver Todos los Servicios y Soluciones"
- Intermedio: "Solicitar una Estimación Gratuita"
- Proyectos: "Ver Nuestro Portafolio Completo"
- Contacto: Formulario completo

### Elementos de Confianza
- Testimonios con calificaciones
- Logos de clientes
- Certificaciones de seguridad
- Estadísticas de la empresa
- Información de contacto completa

## 📞 Soporte

Para soporte técnico o consultas sobre el sitio web:
- Email: info@bravotrabajosverticales.com
- Teléfono: +34 XXX XXX XXX

## 📄 Licencia

© 2024 Bravo Trabajos Verticales. Todos los derechos reservados.