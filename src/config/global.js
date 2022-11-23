export default {
  global: {
    componenteFormativo:
      'Ejecución promotoría para gestión del riesgo en comunidades',
    descripcionCurso:
      'En este componente formativo podrá adquirir conocimientos que le permitan aplicar campañas de capacitación y sensibilización a comunidades para la prevención del riesgo utilizando las diferentes técnicas de expresión y evaluación para determinar que la información impartida fue entendida y adoptada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Acciones de capacitación y sensibilización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Metodología y didácticas para la capacitación y sensibilización',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas participativas para la capacitación comunitaria',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Técnicas de sistematización y registros de capacitación y sensibilización',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Informe y comunicación de los programas de capacitación y sensibilización',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Campañas de sensibilización.',
      referencia:
        'Linda Zilbert. Perú. 2004. CAMPAÑAS DE SENSIBILIZACIÓN Una herramienta para la Gestión del Riesgo. Tomado de internet el 28/09/2022.',
      tipo: 'Guía',
      link:
        'https://docplayer.es/112483838-Campanas-de-sensibilizacion-una-herramienta-para-la-gestion-del-riesgo.html',
    },
    {
      tema: 'Capacitación.',
      referencia:
        'Escuela EGE con Ninfa Bella. Capacitaciones exitosas. Cuatro técnicas de capacitación. YouTube. Tomado de internet el 2/11/2022.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RDP5rTlfjBo',
    },
    {
      tema: 'Sensibilización comunitaria.',
      referencia:
        'Sublimarleo. Campaña de Sensibilización Ambiental. YouTube. Tomado de internet el 2/11/2022.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NBVlukkJJjY',
    },
  ],
  glosario: [
    {
      termino: 'Capacitación',
      significado:
        'es un proceso que ayuda a los seres humanos a adaptarse a las circunstancias que se presenten y permite que puedan responder a ellas de manera eficiente, para ello, es necesario desarrollar habilidades por medio del aprendizaje.',
    },
    {
      termino: 'Comunicación',
      significado:
        'se conoce como el intercambio de información que se produce entre dos o más individuos que tienen como objetivo el aporte y la recepción de información de relevancia para las otras personas.',
    },
    {
      termino: 'Concertación',
      significado:
        'es el acuerdo que se realiza entre dos o más personas sobre una temática específica y que pretende solucionar una problemática social. ',
    },
    {
      termino: 'Concientización ',
      significado:
        'es la acción y efecto resultante de crear conciencia entre la comunidad frente a un tema o fenómeno de importancia.',
    },
    {
      termino: 'Listas de asistencia',
      significado:
        'son todos aquellos documentos que tienen como finalidad llevar un registro de la presencia de personas en un evento que puede ser único o tener una continuidad. El seguimiento a la asistencia es una actividad que ayuda a gestionar la participación en eventos, clases o reuniones de todo tipo. ',
    },
    {
      termino: 'Lluvia de ideas ',
      significado:
        'es una técnica educativa que toma en cuenta los puntos de vista de cada participante y aporta ideas para la solución de un problema específico. ',
    },
    {
      termino: 'Mesa redonda',
      significado:
        'se trata de una técnica en la que un grupo de expertos están coordinados por un moderador y exponen puntos de vista sobre un tema común para aportar al alumno información variada. Al finalizar las exposiciones, el moderador hace un resumen de las coincidencias y diferencias; posteriormente se invita al estudiante a formular preguntas que puedan aclarar las dudas que se tengan sobre algún tema específico.',
    },
    {
      termino: 'Sensibilización',
      significado:
        'tiene por objetivo la concienciación de las personas. Para ello, se pueden realizar acciones de diversa índole: charlas, conferencias, exposiciones, talleres, formación de grupos, concursos, juegos, mercadillos, eventos deportivos o acciones directas en la calle.',
    },
    {
      termino: 'Simposio ',
      significado:
        'reunión en la que un grupo de expertos habla por turnos a los alumnos acerca de un tema. Este recurso se emplea para ampliar la información de un asunto o tema. ',
    },
    {
      termino: 'Sistematización',
      significado:
        'es una herramienta que permite consolidar cualquier proceso de aprendizaje y reflexionar sobre el mismo mediante la revisión de lo vivido o adquirido desde una perspectiva tendiente a afianzar los conocimientos de forma individual y grupal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alaman, Cristina. (2022). Capacitar Para la Reducción del Riesgo en Emergencia y Desastres. Oxfam.',
      link:
        'https://eird.org/pr14/cd/documentos/espanol/CaribeHerramientasydocumentos/Educacion/CapacitarParalaReducciondelRiesgoenEmergenciayDesastres.pdf',
    },
    {
      referencia:
        'BYMBE. (2019). Manual para la sensibilización y estrategias de motivación. Tomado de internet el 2/11/2022.',
      link: 'https://bymbe.eu/media/bymbe-io2-es.pdf',
    },
    {
      referencia:
        'Universidad Cetys (2019). Medición del aprendizaje: Manual para profesores. Cetys.',
      link:
        'https://repositorio.cetys.mx/bitstream/60000/421/1/ManualDeMedici%C3%B3nDelAprendizaje2019.pdf',
    },
    {
      referencia:
        'Zilbert, Linda. (2004). Campañas de sensibilización. Una herramienta para la Gestión del Riesgo. PREDES.',
      link:
        'https://docplayer.es/112483838-Campanas-de-sensibilizacion-una-herramienta-para-la-gestion-del-riesgo.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
