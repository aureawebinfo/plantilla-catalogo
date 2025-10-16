// 
// Plantilla desarrollada por Áurea Web  
// Todos los derechos reservados © 2025  
// Sitio web oficial: https://aurea-web.com  
// Esta plantilla está bajo el control de la agencia de desarrollo web Áurea Web.  
//

// Datos de productos para el catálogo
const productos = [
    {
        id: 1,
        nombre: "Mesa de Centro Roble",
        categoria: "muebles",
        descripcion: "Mesa de centro en roble macizo con detalles tallados a mano, perfecta para dar calidez a tu sala de estar.",
        materiales: "Roble macizo, acabado natural con aceite de linaza",
        dimensiones: "120 x 60 x 45 cm",
        precio: 450000,
        imagen: "mesa-centro-roble"
    },
    {
        id: 2,
        nombre: "Cortinas Lino Natural",
        categoria: "cortinas",
        descripcion: "Cortinas personalizadas en lino 100% natural, hechas a medida para controlar perfectamente la luz natural.",
        materiales: "Lino 100% natural, sistema de riel incluido",
        dimensiones: "Personalizadas según medidas",
        precio: 320000,
        imagen: "cortinas-lino"
    },
    {
        id: 3,
        nombre: "Lámpara Tejida Artesanal",
        categoria: "iluminacion",
        descripcion: "Lámpara colgante con estructura tejida a mano en fibras naturales, creando juegos de luz y sombra únicos.",
        materiales: "Fibras naturales, estructura metálica, bombilla LED incluida",
        dimensiones: "Diámetro: 40 cm, Altura: 35 cm",
        precio: 280000,
        imagen: "lampara-tejida"
    },
    {
        id: 4,
        nombre: "Estantería Flotante Nogal",
        categoria: "muebles",
        descripcion: "Estanterías flotantes en nogal con sistema de sujeción invisible, ideal para espacios modernos y minimalistas.",
        materiales: "Nogal macizo, sistema de sujeción metálica",
        dimensiones: "120 x 25 x 5 cm c/u",
        precio: 190000,
        imagen: "estanteria-nogal"
    },
    {
        id: 5,
        nombre: "Cortinas Blackout Aterciopeladas",
        categoria: "cortinas",
        descripcion: "Cortinas con tecnología blackout en textura aterciopelada, perfectas para dormitorios y home theater.",
        materiales: "Mezcla algodón-poliéster con tratamiento blackout",
        dimensiones: "Personalizadas según medidas",
        precio: 380000,
        imagen: "cortinas-blackout"
    },
    {
        id: 6,
        nombre: "Lámpara de Mesa Cerámica",
        categoria: "iluminacion",
        descripcion: "Lámpara de mesa con base de cerámica artesanal y pantalla de lino, ideal para crear ambientes acogedores.",
        materiales: "Cerámica artesanal, pantalla de lino, bombilla LED incluida",
        dimensiones: "Base: 15 x 15 cm, Altura total: 55 cm",
        precio: 125000,
        imagen: "lampara-mesa-ceramica"
    },
    {
        id: 7,
        nombre: "Portarretratos Madera Natural",
        categoria: "decoracion",
        descripcion: "Set de 3 portarretratos en diferentes tamaños, fabricados en madera natural con acabado ecológico.",
        materiales: "Madera de pino, vidrio templado, soporte metálico",
        dimensiones: "15x20 cm, 20x25 cm, 30x40 cm",
        precio: 75000,
        imagen: "portarretratos-madera"
    },
    {
        id: 8,
        nombre: "Espejo Redondo con Marco de Madera",
        categoria: "decoracion",
        descripcion: "Espejo circular con marco de madera torneada, perfecto para entradas y dormitorios.",
        materiales: "Madera de haya, espejo de seguridad",
        dimensiones: "Diámetro: 60 cm, Profundidad: 5 cm",
        precio: 98000,
        imagen: "espejo-redondo-madera"
    },
    {
        id: 9,
        nombre: "Silla de Comedor Diseño Nórdico",
        categoria: "muebles",
        descripcion: "Silla de comedor con diseño nórdico en madera de fresno y asiento tapizado en lana natural.",
        materiales: "Madera de fresno, tapizado en lana 100% natural",
        dimensiones: "45 x 50 x 85 cm",
        precio: 120000,
        imagen: "silla-comedor-nordica"
    },
    {
        id: 10,
        nombre: "Juego de Cojines Lino Bordado",
        categoria: "decoracion",
        descripcion: "Set de 4 cojines decorativos en lino natural con bordados artesanales inspirados en la naturaleza.",
        materiales: "Lino natural, relleno de plumas sintéticas",
        dimensiones: "45 x 45 cm cada uno",
        precio: 65000,
        imagen: "cojines-lino-bordado"
    },
    {
        id: 11,
        nombre: "Lámpara de Pie Arco Diseño",
        categoria: "iluminacion",
        descripcion: "Lámpara de pie con diseño en arco y base de mármol, ideal para iluminar rincones con estilo.",
        materiales: "Estructura metálica, base de mármol, pantalla de tela",
        dimensiones: "Altura: 180 cm, Base: 30 x 30 cm",
        precio: 320000,
        imagen: "lampara-pie-arco"
    },
    {
        id: 12,
        nombre: "Cortinas Transparentes Encaje",
        categoria: "cortinas",
        descripcion: "Cortinas transparentes con patrón de encaje artesanal, perfectas para filtar la luz con elegancia.",
        materiales: "Algodón con patrón de encaje artesanal",
        dimensiones: "Personalizadas según medidas",
        precio: 185000,
        imagen: "cortinas-encaje"
    }
];

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Elementos comunes
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    // Funcionalidad del menú móvil
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navToggle.classList.contains('active'));
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Header con efecto al hacer scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            header.style.background = 'var(--color-blanco)';
        }
    });

    // Animaciones al hacer scroll
    initScrollAnimations();

    // Funcionalidad específica de la página de productos
    if (document.querySelector('.catalogo')) {
        initProductos();
    }

    // Formulario de contacto
    const contactForm = document.getElementById('form-contacto');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validación básica
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (nombre && email && mensaje) {
                // Simulación de envío
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }
});

// Inicializar funcionalidades de la página de productos
function initProductos() {
    const productosContainer = document.getElementById('productos-container');
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const modal = document.getElementById('producto-modal');
    const modalClose = document.querySelector('.modal-close');

    // Cargar productos en el catálogo
    function cargarProductos(categoria = 'todos') {
        productosContainer.innerHTML = '';

        const productosFiltrados = categoria === 'todos'
            ? productos
            : productos.filter(producto => producto.categoria === categoria);

        productosFiltrados.forEach(producto => {
            const productoCard = document.createElement('div');
            productoCard.className = 'producto-card fade-up';
            productoCard.setAttribute('data-categoria', producto.categoria);

            // Formatear precio
            const precioFormateado = new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP'
            }).format(producto.precio);

            productoCard.innerHTML = `
                <div class="producto-img">
                    <div class="image-placeholder"></div>
                </div>
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span class="precio">${precioFormateado}</span>
                </div>
            `;

            // Agregar evento para abrir modal
            productoCard.addEventListener('click', () => abrirModalProducto(producto));

            productosContainer.appendChild(productoCard);
        });

        // Activar animaciones
        setTimeout(() => {
            const cards = document.querySelectorAll('.fade-up');
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, 100);
    }

    // Filtrar productos por categoría
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remover clase active de todos los botones
            filtroBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');

            // Filtrar productos
            const categoria = this.getAttribute('data-categoria');
            cargarProductos(categoria);
        });
    });

    // Abrir modal con información del producto
    function abrirModalProducto(producto) {
        // Formatear precio
        const precioFormateado = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(producto.precio);

        // Actualizar contenido del modal
        document.getElementById('modal-title').textContent = producto.nombre;
        document.getElementById('modal-precio').textContent = precioFormateado;
        document.getElementById('modal-materiales').textContent = producto.materiales;
        document.getElementById('modal-dimensiones').textContent = producto.dimensiones;
        document.querySelector('.modal-desc').textContent = producto.descripcion;

        // Abrir modal
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    // Cerrar modal
    function cerrarModal() {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }

    // Eventos para cerrar modal
    if (modalClose) {
        modalClose.addEventListener('click', cerrarModal);
    }

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            cerrarModal();
        }
    });

    // Cargar todos los productos inicialmente
    cargarProductos();
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Si es una tarjeta con animación escalonada
                if (entry.target.classList.contains('card') || entry.target.classList.contains('producto-card')) {
                    const cards = document.querySelectorAll('.card, .producto-card');
                    cards.forEach((card, index) => {
                        if (card === entry.target) {
                            card.style.transitionDelay = `${index * 0.1}s`;
                        }
                    });
                }
            }
        });
    }, observerOptions);

    // Observar elementos con animaciones
    const animatedElements = document.querySelectorAll('.card, .producto-card, .section-title, .section-subtitle');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}