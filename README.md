# Bravo Trabajos Verticales - Estructura de Archivos

Este proyecto contiene la información organizada de Bravo Trabajos Verticales, empresa especializada en trabajos verticales con cuerda en la Costa Blanca.

## 📁 Estructura de Archivos

### `content.md`
Archivo principal con el contenido de la página web. Incluye:
- Descripción de la empresa
- Servicios ofrecidos
- Ventajas de los trabajos verticales
- Información de contacto

### `data.json`
Archivo de datos estructurado en formato JSON que contiene:
- **Información de contacto:** teléfonos, email, web
- **Ubicación y horarios:** zona de actuación, dirección, horarios
- **Servicios:** lista detallada con precios estimados
- **Ventajas:** características principales
- **Testimonios:** casos de éxito

### `config.yaml`
Archivo de configuración en formato YAML (más legible para edición manual) con la misma información que `data.json`.

## 📞 Datos de Contacto

- **Teléfono:** +34 600 000 000
- **WhatsApp:** +34 600 000 000
- **Email:** info@bravotrabajosverticales.com
- **Web:** www.bravotrabajosverticales.com

## 🗺️ Zona de Actuación

- Calpe
- Benidorm
- Altea
- Alicante

## 🕒 Horarios

- **Lunes a Viernes:** 8:00 - 18:00
- **Sábados:** 9:00 - 14:00
- **Domingos:** Cerrado
- **Emergencias:** 24/7

## 🛠️ Servicios

1. **Pintura y rehabilitación de fachadas** - Desde 15€/m²
2. **Limpieza de patios de luces y cristales** - Desde 80€/intervención
3. **Instalación de sistemas antiaves** - Desde 12€/m lineal
4. **Reparaciones y mantenimiento en altura** - Presupuesto personalizado

## 📝 Cómo Actualizar los Datos

Para modificar la información de contacto o servicios:

1. **Edita `config.yaml`** para cambios rápidos (formato más legible)
2. **O edita `data.json`** directamente si prefieres JSON
3. **Actualiza `content.md`** si cambias información que aparece en el contenido principal

## 🔄 Sincronización

Los archivos `data.json` y `config.yaml` contienen la misma información. Si modificas uno, asegúrate de actualizar el otro para mantener la consistencia.