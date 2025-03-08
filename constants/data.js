export const worlds = [
  {
    id: 'world-1',
    imgUrl: '/mineria.jpeg',
    title: 'Minería',
  },
  {
    id: 'world-2',
    imgUrl: '/agricultura.jpeg',
    title: 'Agricultura',
  },
  {
    id: 'world-3',
    imgUrl: '/forestal.jpeg',
    title: 'Forestal',
  },
  {
    id: 'world-4',
    imgUrl: '/portuario.jpeg',
    title: 'Portuario',
  },
  {
    id: 'world-5',
    imgUrl: '/industrial.jpeg',
    title: 'Industrial',
  },
  {
    id: 'world-6',
    imgUrl: '/transport.jpeg',
    title: 'Transporte',
  },
];

export const features = {
  es: [
    'Fácil instalación y mantenimiento',
    'Alertas y notificaciones personalizadas',
    'Monitoreo en tiempo real en cabina o remoto',
  ],
  en: [
    'Easy installation and maintenance',
    'Custom alerts and notifications',
    'Real-time monitoring in-cabin or remotely',
  ],
  pt: [
    'Instalação e manutenção fáceis',
    'Alertas e notificações personalizadas',
    'Monitoramento em tempo real na cabine ou remotamente',
  ],
};

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'Seguridad',
    subtitle:
      'Previene accidentes al detectar variaciones de presión, mejorando el control, la estabilidad y la confiabilidad del vehículo.',
  },
  {
    imgUrl: '/headset.svg',
    title: 'Ahorro',
    subtitle:
      'Optimiza el consumo de combustible, reduce el desgaste de neumáticos y minimiza costos de mantenimiento y reemplazo.',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: '{ Sensors }',
    subtitle:
      'Se instalan ajustándolos al vástago de la válvula del neumático. El monitoreo avanzado incluye una lógica de detección dinámica única en el mercado con altas tasas de muestreo y una protección inigualable.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '{ Pulse TMPMS + Display }',
    subtitle:
      'El primer dispositivo de la línea TPMS+ de PressurePro, PULSE, ofrece a los usuarios una opción de visualización dentro de la cabina, integrando nuestra lista completa de funciones avanzadas en un diseño atractivo y fácil de usar.',
  },
  {
    imgUrl: '/planet-08.png',
    title: '{ Link - HD, LT y UR }',
    subtitle:
      'Un componente clave para aplicaciones en flotas y fabricantes de equipos originales (OE), así como para configuraciones de acople y desacople, ya sean independientes o integradas. Los productos LINK cuentan con un resistente y avanzado gabinete certificado.',
  },
  {
    imgUrl: '/planet-088.png',
    title: '{ Fx }',
    subtitle:
      'FX brinda a los usuarios una gestión de neumáticos líder en el mercado, con un valor inigualable. Aprovecha dispositivos inteligentes existentes y las aplicaciones personalizadas de TPMS de PressurePro para ofrecer un monitoreo de neumáticos potente.',
  },
];

export const socials = [
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    link: 'https://www.linkedin.com/company/pressureprotpms/',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
    link: 'https://www.facebook.com/PressureProTPMS/?locale=es_LA' ,
  },
];

export const industries = [
  {
    id: 'mineria',
    name: 'Minería',
    imgUrl: '/mineria.jpeg',
    solutions: [
      {
        title: 'Monitoreo de Flotas',
        description: 'Sistema integral de monitoreo para flotas mineras que permite el seguimiento en tiempo real de la presión y temperatura de los neumáticos.',
        imgUrl: '/mining-fleet.jpg'
      },
      {
        title: 'Prevención de Accidentes',
        description: 'Sistema de alertas tempranas para prevenir fallas en neumáticos y reducir tiempos de inactividad.',
        imgUrl: '/mining-safety.jpg'
      }
    ]
  },
  // Repite para cada industria...
];
