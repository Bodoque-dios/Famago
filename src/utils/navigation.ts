
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/productos" },
  { name: "Muebles a pedido", url: "/muebles-a-pedido" },
  /*{ name: "Blog", url: "/blog" },*/
  { name: "Contacto", url: "/contact" },
];

const footerLinks = [
  {
    section: "Tienda",
    links: [
      { name: "Dormitorio", url: "/welcome-to-docs/" },
      { name: "Comedores", url: "/products" },
      { name: "Oficina", url: "/services" },
    ],
  },
  {
    section: "Nosotros",
    links: [
      { name: "Sobre nosotros", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Opiniones", url: "#" },
    ],
  },
  {
    section:"Ayuda",
    links:[
      {name:"Preguntas frecuentes", url:"/faq"},
      {name:"Envios y devoluciones", url:"/envios"},
      {name:"Consejos para el cuidado de muebles", url:"/cuidados"},
      {name:"Contáctanos", url:"/contacto"},
    ]
  }
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};