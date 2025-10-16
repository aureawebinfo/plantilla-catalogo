/* 
===============================================
  DCASA - DECORACIÓN DE INTERIORES
  JavaScript para interactividad y animaciones
  Copyright © 2025 Áurea Web (https://aurea-web.com)
  Todos los derechos reservados
===============================================
*/

// ==================== DATOS DE PRODUCTOS ====================
const productsData = {
    'sofa-nordic': {
        title: 'Sofá Nórdico Premium',
        category: 'Muebles',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop',
        description: 'Sofá de diseño escandinavo con estructura de madera maciza y tapizado en tela de alta calidad. Perfecto para crear un ambiente acogedor y elegante en tu sala de estar. Sus líneas limpias y tonos neutros se adaptan a cualquier estilo decorativo.',
        specs: [
            'Dimensiones: 220cm x 90cm x 85cm',
            'Tapizado en tela premium resistente',
            'Estructura de madera de pino maciza',
            'Cojines de espuma de alta densidad',
            'Patas de madera con acabado natural',
            'Capacidad: 3-4 personas',
            'Estilo: Escandinavo/Minimalista'
        ]
    },
    'mesa-oak': {
        title: 'Mesa Centro Oak',
        category: 'Muebles',
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop',
        description: 'Mesa de centro elaborada en madera de roble maciza con acabado natural que resalta la belleza de la veta. Diseño minimalista y atemporal que aporta calidez a cualquier espacio. Perfecta como punto focal de tu sala.',
        specs: [
            'Dimensiones: 120cm x 60cm x 45cm',
            'Material: Roble macizo 100%',
            'Acabado: Barniz natural mate',
            'Grosor de tablero: 4cm',
            'Peso: 35kg aproximadamente',
            'Tratamiento anti-humedad',
            'Estilo: Natural/Moderno'
        ]
    },
    'estanteria-minimal': {
        title: 'Estantería Minimal',
        category: 'Muebles',
        image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&h=800&fit=crop',
        description: 'Estantería de diseño minimalista con líneas puras y funcionalidad excepcional. Perfecta para organizar libros, plantas y objetos decorativos. Su diseño versátil permite usarla en sala, oficina o dormitorio.',
        specs: [
            'Dimensiones: 180cm x 80cm x 30cm',
            'Material: MDF de alta densidad',
            'Acabado: Laminado mate',
            '5 niveles de almacenamiento',
            'Capacidad: 15kg por estante',
            'Fácil montaje con instrucciones',
            'Estilo: Minimalista/Industrial'
        ]
    },
    'sillon-reading': {
        title: 'Sillón Reading',
        category: 'Muebles',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
        description: 'Sillón individual diseñado para el máximo confort en tus momentos de lectura y descanso. Respaldo ergonómico y tapizado suave que invita a la relajación. Un elemento imprescindible para crear tu rincón de lectura ideal.',
        specs: [
            'Dimensiones: 85cm x 90cm x 95cm',
            'Tapizado en chenille suave',
            'Estructura interna de madera maciza',
            'Relleno de espuma viscoelástica',
            'Reposabrazos acolchados',
            'Capacidad de peso: 120kg',
            'Estilo: Contemporáneo/Acogedor'
        ]
    },
    'cortinas-lino': {
        title: 'Cortinas Lino Natural',
        category: 'Cortinas',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
        description: 'Cortinas elaboradas en lino 100% natural, confeccionadas a medida según tus necesidades. Permiten el paso suave de la luz creando ambientes cálidos y naturales. Material transpirable y duradero que aporta elegancia atemporal.',
        specs: [
            'Material: Lino 100% natural',
            'Confección a medida',
            'Acabado con dobladillo reforzado',
            'Incluye sistema de colgado',
            'Opacidad: Media (filtra luz)',
            'Disponible en varios colores naturales',
            'Fácil mantenimiento y lavado'
        ]
    },
    'cortinas-blackout': {
        title: 'Cortinas Blackout Elegance',
        category: 'Cortinas',
        image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&h=800&fit=crop',
        description: 'Cortinas blackout de diseño elegante que bloquean hasta el 99% de la luz exterior. Ideales para dormitorios, salas de cine en casa o cualquier espacio donde necesites control total de la iluminación. Combinan funcionalidad y estética sofisticada.',
        specs: [
            'Bloqueo de luz: 99%',
            'Aislamiento térmico y acústico',
            'Confección a medida',
            'Tela triple capa de alta densidad',
            'Sistema de rieles incluido',
            'Varios colores disponibles',
            'Fácil instalación y mantenimiento'
        ]
    },
    'roller-bamboo': {
        title: 'Roller Bambú Natural',
        category: 'Cortinas',
        image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=800&fit=crop',
        description: 'Cortinas roller elaboradas con fibras de bambú natural, perfectas para espacios que buscan un estilo orgánico y sostenible. Control preciso de luz con sistema de fácil manejo. Resistentes y ecológicas.',
        specs: [
            'Material: Bambú natural 100%',
            'Sistema roller de cadena',
            'Filtro de luz natural ajustable',
            'Fabricación a medida',
            'Material ecológico y sostenible',
            'Resistente a la humedad',
            'Ideal para ventanas grandes'
        ]
    },
    'lampara-geometric': {
        title: 'Lámpara Geometric',
        category: 'Lámparas',
        image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop',
        description: 'Lámpara colgante de diseño geométrico moderno que se convierte en el punto focal de cualquier estancia. Su estructura metálica crea juegos de luz y sombra únicos. Perfecta para comedores, salas o espacios de trabajo.',
        specs: [
            'Altura ajustable: hasta 120cm',
            'Diámetro: 40cm',
            'Material: Metal con acabado mate',
            'Socket: E27 (bombilla no incluida)',
            'Potencia máxima: 60W',
            'Cable textil trenzado',
            'Estilo: Moderno/Industrial'
        ]
    },
    'lampara-wood': {
        title: 'Lámpara Wood Standing',
        category: 'Lámparas',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop',
        description: 'Lámpara de pie con base y detalles en madera natural que aporta calidez y elegancia. Pantalla en tela que difunde luz cálida ideal para crear ambientes acogedores. Perfecta para rincones de lectura o junto a sofás.',
        specs: [
            'Altura total: 160cm',
            'Base de madera maciza',
            'Pantalla de tela beige',
            'Socket: E27',
            'Interruptor de pie',
            'Cable de 2 metros',
            'Estilo: Natural/Contemporáneo'
        ]
    },
    'lampara-pendant': {
        title: 'Pendant Minimal',
        category: 'Lámparas',
        image: 'https://images.unsplash.com/photo-1543198126-a8ad8a47ab0e?w=800&h=800&fit=crop',
        description: 'Lámpara colgante minimalista de diseño simple pero impactante. Su forma pura y acabado elegante la hacen versátil para cualquier espacio. Ideal para crear iluminación focal sobre mesas o islas de cocina.',
        specs: [
            'Altura regulable: 60-150cm',
            'Diámetro: 25cm',
            'Material: Vidrio opalino',
            'Socket: E27',
            'Luz difusa y uniforme',
            'Sistema de anclaje al techo incluido',
            'Estilo: Minimalista/Escandinavo'
        ]
    },
    'lampara-table': {
        title: 'Lámpara Table Decor',
        category: 'Lámparas',
        image: 'https://images.unsplash.com/photo-1550360584-3fbb4de4e3df?w=800&h=800&fit=crop',
        description: 'Lámpara de mesa decorativa con diseño elegante que funciona como elemento ornamental y funcional. Perfecta para mesitas de noche, escritorios o consolas. Su luz cálida crea atmósferas íntimas y acogedoras.',
        specs: [
            'Altura: 45cm',
            'Base cerámica con acabado mate',
            'Pantalla de lino',
            'Socket: E14',
            'Interruptor en cable',
            'Luz ambiental cálida',
            'Estilo: Clásico/Moderno'
        ]
    },
    'espejo-circular': {
        title: 'Espejo Circular Wood',
        category: 'Accesorios',
        image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop',
        description: 'Espejo circular con marco artesanal de madera natural. Pieza decorativa que amplía espacios y aporta luminosidad. Su diseño atemporal se adapta a cualquier estilo decorativo, desde nórdico hasta bohemio.',
        specs: [
            'Diámetro total: 80cm',
            'Diámetro de espejo: 60cm',
            'Marco en madera maciza',
            'Acabado natural barnizado',
            'Espejo de 4mm de grosor',
            'Sistema de colgado incluido',
            'Peso: 5kg aproximadamente'
        ]
    },
    'jarrones-ceramic': {
        title: 'Set Jarrones Ceramic',
        category: 'Accesorios',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=800&fit=crop',
        description: 'Set de tres jarrones de cerámica artesanal en tonos neutros. Diseño minimalista con texturas suaves que aportan elegancia a cualquier espacio. Perfectos para flores frescas, ramas secas o como elemento decorativo por sí solos.',
        specs: [
            'Set de 3 piezas diferentes',
            'Alturas: 25cm, 20cm, 15cm',
            'Material: Cerámica artesanal',
            'Acabado mate en tonos neutros',
            'Base con tratamiento anti-deslizante',
            'Resistentes e impermeables',
            'Estilo: Minimalista/Natural'
        ]
    },
    'cuadros-abstract': {
        title: 'Cuadros Abstract Art',
        category: 'Accesorios',
        image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=800&fit=crop',
        description: 'Set de cuadros con arte abstracto contemporáneo en tonos neutros y cálidos. Impresos en lienzo de alta calidad con bastidor de madera. Perfectos para crear una galería de arte en tu hogar y añadir personalidad a tus paredes.',
        specs: [
            'Set de 3 cuadros',
            'Medidas: 60x80cm, 50x70cm, 40x60cm',
            'Impresión en lienzo canvas',
            'Bastidor de madera de 3cm',
            'Tintas de alta durabilidad',
            'Listos para colgar',
            'Arte exclusivo diseñado por artistas'
        ]
    },
    'cojines-texture': {
        title: 'Cojines Texture Mix',
        category: 'Accesorios',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=800&fit=crop',
        description: 'Set de cojines decorativos con diferentes texturas y tonalidades armónicas. Elaborados en tejidos naturales de alta calidad con rellenos hipoalergénicos. Perfectos para añadir confort y estilo a sofás y camas.',
        specs: [
            'Set de 4 cojines',
            'Medidas: 45x45cm',
            'Fundas en algodón, lino y chenille',
            'Relleno hipoalergénico',
            'Cremalleras invisibles',
            'Lavable a máquina (fundas)',
            'Varios diseños y texturas'
        ]
    },
    'reloj-wall': {
        title: 'Reloj Wall Minimal',
        category: 'Accesorios',
        image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&h=800&fit=crop',
        description: 'Reloj de pared de diseño minimalista que combina funcionalidad y estética. Números claros y manecillas elegantes sobre fondo neutro. Un elemento decorativo que aporta sofisticación sin recargar el espacio.',
        specs: [
            'Diámetro: 30cm',
            'Material: Metal y vidrio',
            'Movimiento de cuarzo silencioso',
            'Números arábigos grandes',
            'Funciona con pila AA (no incluida)',
            'Sistema de colgado incluido',
            'Garantía de precisión'
        ]
    },
    'alfombra-natural': {
        title: 'Alfombra Natural Fiber',
        category: 'Accesorios',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=800&fit=crop',
        description: 'Alfombra tejida a mano con fibras naturales que aporta calidez y textura al suelo. Su diseño atemporal y material sostenible la hacen perfecta para salones, dormitorios o entradas. Duradera y fácil de mantener.',
        specs: [
            'Medidas: 200x150cm',
            'Material: Yute y algodón',
            'Tejido artesanal',
            'Grosor: 1.5cm',
            'Base antideslizante',
            'Material ecológico y sostenible',
            'Fácil limpieza con aspiradora'
        ]
    }
};

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initProductFilters();
    initProductModals();
    initContactForm();
    initSmoothScroll();
});

// ==================== NAVEGACIÓN ====================
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            
            // Actualizar aria-expanded
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.classList.remove('no-scroll');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('no-scroll');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });
}

// ==================== ANIMACIONES DE SCROLL ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: dejar de observar después de la animación
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos a animar
    const animatedElements = document.querySelectorAll(
        '.about-card, .gallery-item, .product-card, .product-card-large, ' +
        '.testimonial-card, .contact-item, .contact-form'
    );

    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Parallax suave en hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// ==================== FILTROS DE PRODUCTOS ====================
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card-large');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Actualizar botón activo
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            // Filtrar productos con animación
            productCards.forEach((card, index) => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'todos' || cardCategory === category) {
                    setTimeout(() => {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });

            // Scroll suave a la sección de productos
            const catalogSection = document.querySelector('.catalog-section');
            if (catalogSection) {
                const offset = 100;
                const elementPosition = catalogSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== MODALES DE PRODUCTOS ====================
function initProductModals() {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    const detailButtons = document.querySelectorAll('.btn-details');

    // Abrir modal
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card-large');
            const productId = card.getAttribute('data-product');
            const productData = productsData[productId];

            if (productData) {
                openModal(productData);
            }
        });
    });

    // Cerrar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Función para abrir modal
    function openModal(product) {
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalCategory = document.getElementById('modalCategory');
        const modalDescription = document.getElementById('modalDescription');
        const modalSpecs = document.getElementById('modalSpecs');

        // Llenar contenido
        modalImage.src = product.image;
        modalImage.alt = product.title;
        modalTitle.textContent = product.title;
        modalCategory.textContent = product.category;
        modalDescription.textContent = product.description;

        // Llenar especificaciones
        modalSpecs.innerHTML = '';
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            modalSpecs.appendChild(li);
        });

        // Mostrar modal
        modal.classList.add('active');
        document.body.classList.add('no-scroll');

        // Focus en el botón de cerrar para accesibilidad
        setTimeout(() => modalClose.focus(), 100);
    }
}

// ==================== FORMULARIO DE CONTACTO ====================
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores
        const nombre = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const telefono = this.querySelector('input[type="tel"]').value;
        const mensaje = this.querySelector('textarea').value;

        // Validación básica
        if (!nombre || !email || !mensaje) {
            showNotification('Por favor completa todos los campos requeridos', 'error');
            return;
        }

        // Simular envío (aquí se conectaría con un backend real)
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        setTimeout(() => {
            showNotification('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// ==================== NOTIFICACIONES ====================
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 2rem',
        background: type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: '9999',
        animation: 'slideInRight 0.4s ease',
        maxWidth: '400px',
        fontSize: '1rem',
        fontWeight: '500'
    });

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 3000);
}

// Agregar animaciones de notificación al documento
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces vacíos o solo con #
            if (href === '#' || href === '') return;

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== LAZY LOADING DE IMÁGENES ====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==================== OPTIMIZACIÓN DE RENDIMIENTO ====================
// Throttle function para optimizar eventos de scroll
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function para optimizar eventos de resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== ACCESIBILIDAD MEJORADA ====================
// Trap focus dentro del modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Aplicar trap focus al modal cuando se abra
const modal = document.getElementById('productModal');
if (modal) {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (modal.classList.contains('active')) {
                trapFocus(modal);
            }
        });
    });
    
    observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
}

// ==================== ANIMACIONES ADICIONALES ====================
// Contador animado para números (opcional)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Efecto de escritura (typewriter)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==================== PREVENCIÓN DE ERRORES ====================
// Manejo global de errores
window.addEventListener('error', function(e) {
    console.error('Error capturado:', e.message);
    // Aquí se podría enviar el error a un servicio de logging
});

// ==================== DETECCIÓN DE PREFERENCIAS DEL USUARIO ====================
// Detectar preferencia de movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Reducir o eliminar animaciones
    document.documentElement.style.setProperty('--transition-fast', '0.01ms');
    document.documentElement.style.setProperty('--transition-normal', '0.01ms');
    document.documentElement.style.setProperty('--transition-slow', '0.01ms');
}

// ==================== PERFORMANCE MONITORING ====================
// Monitorear rendimiento de carga
window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`Tiempo de carga: ${pageLoadTime}ms`);
        
        // Aquí se podría enviar a analytics
        // analytics.track('page_load', { time: pageLoadTime });
    }
});

// ==================== INICIALIZACIÓN FINAL ====================
console.log('%c🏠 Dcasa - Decoración de Interiores', 'color: #8B7355; font-size: 20px; font-weight: bold;');
console.log('%c✨ Desarrollado por Áurea Web', 'color: #A0826D; font-size: 14px;');
console.log('%c🌐 https://aurea-web.com', 'color: #6B5745; font-size: 12px;');

// ==================== FIN DEL SCRIPT ====================

/*
Diseño inspirado en la calidez de los materiales naturales y el confort del hogar moderno,
combinando tonos neutros, texturas de madera y animaciones suaves para reflejar elegancia y armonía.

Copyright © 2025 Áurea Web (https://aurea-web.com)
Todos los derechos reservados.
*/
            