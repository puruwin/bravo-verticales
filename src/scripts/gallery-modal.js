document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeModalBtn = document.getElementById('close-modal');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!modal || !modalImage || !modalTitle || !modalDescription || !closeModalBtn) {
    return;
  }

  // Gallery data with titles and descriptions for each image
  const galleryData = {
    'reparacion_fach.webp': {
      title: 'Reparación de Fachada',
      description: 'Rehabilitación completa de fachada sin necesidad de andamios. Trabajos verticales profesionales que garantizan resultados de calidad.'
    },
    'patio_luces_1.webp': {
      title: 'Limpieza de Patios de Luces',
      description: 'Acceso seguro a zonas complicadas mediante técnicas de trabajos verticales especializadas.'
    },
    'red_seguridad_1.webp': {
      title: 'Instalación de Redes de Seguridad',
      description: 'Sistemas antiaves profesionales instalados con la máxima seguridad y eficiencia.'
    },
    'reparacion_fach_3.webp': {
      title: 'Mantenimiento de Fachada',
      description: 'Trabajos de altura especializados para el mantenimiento y conservación de edificios.'
    },
    'patio_luces_2.webp': {
      title: 'Limpieza Profesional',
      description: 'Resultados impecables garantizados en la limpieza de patios de luces y zonas de difícil acceso.'
    },
    'red_seguridad_2.webp': {
      title: 'Protección Antiaves',
      description: 'Soluciones duraderas y estéticas para la protección de edificios contra aves.'
    },
    'patio_luces_3.webp': {
      title: 'Limpieza Especializada',
      description: 'Servicios de limpieza en altura para patios de luces con equipos profesionales.'
    },
    'reaparacion_fach_2.webp': {
      title: 'Reparación Especializada',
      description: 'Trabajos de reparación en fachadas con técnicas de trabajos verticales avanzadas.'
    }
  };

  // Function to get image filename from src
  function getImageFilename(imgSrc) {
    return imgSrc.split('/').pop();
  }

  // Function to open modal
  function openModal(imgSrc, imgAlt) {
    const filename = getImageFilename(imgSrc);
    const imageData = galleryData[filename] || { title: 'Trabajo Vertical', description: 'Servicios profesionales de trabajos verticales' };

    modalImage.src = imgSrc;
    modalImage.alt = imgAlt;
    modalTitle.textContent = imageData.title;
    modalDescription.textContent = imageData.description;
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  // Function to close modal
  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }

  // Add click event to each gallery item
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const img = item.querySelector('img');

      if (img) {
        openModal(img.src, img.alt);
      }
    });

    // Add keyboard accessibility
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    const img = item.querySelector('img');
    if (img) {
      item.setAttribute('aria-label', 'Ver imagen: ' + img.alt);
    }

    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  // Close modal events
  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});