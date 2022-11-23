<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Acciones de capacitación y sensibilización
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Las acciones de capacitación son adelantadas en todo tipo de contexto en el cual se requiera ampliar el conocimiento de un tema específico. Estas acciones se ven relacionadas en cualquier nivel de la sociedad, aunque en algunos casos no se imparten las temáticas necesarias para la prevención del riesgo de desastres. La educación ambiental propone estrategias para llevar el conocimiento en temáticas ambientales a las comunidades que están en zonas vulnerables y que puedan atravesar por una situación de emergencia.
        p.mb-0 La capacitación comunitaria permite que los conceptos claves se afiancen y se pongan en práctica para evitar futuras catástrofes ambientales. El objetivo principal de educar en temas de riesgos ambientales es la toma de conciencia frente a las acciones que puedan acarrear afectaciones directas a la salud humana y a los recursos naturales.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img01.svg")
    
    .BGIMG01.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema1/img08.svg")
        .col-lg-8
          p.text-white.mb-0 Las estrategias que se desarrollen necesitan la adopción de normas estandarizadas con las cuales se pueda cuantificar las pérdidas y brindar asistencia en el establecimiento de prioridades que mejoren la planificación y el desarrollo de políticas;  al igual que la formulación y puesta en práctica de programas de capacitación y sensibilización de las comunidades que se encuentran en zonas de alta vulnerabilidad. Se pretende así un cambio de mentalidad y de aporte a la sociedad mediante el cuidado del medio ambiente y de la salud humana cuando se está en zonas de altas pendientes o que tengan cambios climáticos abruptos que puedan acarrear daños de inmensas magnitudes.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Se ha comprobado que la comunicación dentro de las comunidades es un elemento esencial en función del despliegue y la práctica de políticas para reducir los desastres. Los grupos vulnerables, especialmente en los países en desarrollo, se ven forzados por las circunstancias a adoptar medidas basadas en la experiencia de limitar las pérdidas que causan los desastres. A menudo estas comunidades muestran capacidades extraordinarias para impedir que se presenten pérdidas físicas y económicas cuando las condiciones de vida de las personas que se encuentran en zonas rurales son precarias, con riesgo constante de la integridad física.
        p.mb-0 La comunicación tiene ciertas funciones dependiendo de la manera en que se divulgue y las personas que la reciben. Las principales formas de comunicarse dentro de las comunidades se describen a continuación:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img02.svg")

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR01")
          div(titulo="Función representativa")
            p.mb-0 En su mayoría, con hechos o noticias determinadas que son divulgadas de manera equilibrada.
          div(titulo="Función emotiva")
            p.mb-0 Es cuando la comunicación conlleva sentimientos o emociones y se logra transmitir esa misma sensación al receptor del mensaje.
          div(titulo="Función apelativa")
            p.mb-0 El objetivo de la comunicación debe ser captar la atención del receptor con la intención de generar influencia en hechos que deben transcurrir.
          div(titulo="Función metalingüística")
            p.mb-0 Es aquella mediante la cual se hace explícito el uso correcto de las normas de la lengua y que deben ser puestas en práctica.
          div(titulo="Función poética")
            p.mb-0 Hace referencia a la estética del mensaje; en su mayoría es utilizada en temas publicitarios.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img03.svg")

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.img-inv.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img04.svg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Los procesos de comunicación de los planes de trabajo se han de realizar de manera acertada y concreta para que la información sea de total comprensión. Los actores sociales y grupos focales deben ser capaces de expresar a la comunidad, por medio de procesos de capacitación, los riesgos sanitarios en los que se incurre dentro de cada grupo de personas.<br><br>La finalidad de estos procesos de comunicación es #[b generar acciones de promoción y prevención de riesgos sanitarios que pueden desencadenar en problemáticas de salud que afecten la calidad de vida] de las personas que participan activamente en las comunidades.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Metodología y didácticas para la capacitación y sensibilización
    
    p Todas las actividades que pretendan concientizar a las comunidades promueven cambios de comportamiento que conducen a la cultura de reducción del riesgo ya que el conocimiento puede ser impartido a todos los actores de la sociedad a través de educación, difusiones públicas, emisiones radiales y televisivas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img05.svg")
      .col-lg-8
        p La tarea de educar y sensibilizar a las poblaciones es el principal soporte para impulsar el desarrollo sostenible de una manera constante y permanente, por ende, es necesario que se orienten los esfuerzos en torno al diseño, implementación y masificación de campañas, de manera directa, a través de todos los medios de comunicación nacionales, regionales, locales y comunitarios.
        p.mb-0 Un medio que se ha venido utilizando en los últimos años para capacitar y sensibilizar a las comunidades son las redes sociales, las cuales han agregado un alto grado de divulgación del conocimiento de manera virtual y pueden alcanzar niveles mucho más altos de aceptación en la sociedad. Estos medios permiten la difusión de información de manera sistematizada, en donde todos y cada uno de los participantes de una comunidad pueden tener acceso a la información, lo que permite una pluralidad en temas de conocimiento del riesgo. 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-secundario.p-4
        p.mb-0 La sensibilidad de las personas despierta cuando ocurre un desastre que genera daños y pérdidas humanas y materiales. Sin embargo, a medida que transcurre el tiempo y que los hechos dejan de aparecer en los medios nacionales, o en la información de redes sociales, ese interés y esa sensibilidad sobre el problema tienden a descender. Únicamente perdura el sentimiento de solidaridad que se puede manifestar de muchas maneras, como la ayuda humanitaria.

    p Para incrementar el nivel de sensibilidad de las personas alrededor de las emergencias es necesario:

    .BGM02.px-md-5.px-4.pb-3.mb-4(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-9
          img(src="@/assets/curso/tema1/img06.svg")
    
    .BGIMG02.px-md-5.px-4(data-aos="zoom-in")
      AcordionA(tipo="b" clase-tarjeta="BGR01")
        div(titulo="Concientizar")
          p.mb-0 Concientizar sobre la importancia de los riesgos y su relación con la calidad de vida de la población, sus responsabilidades frente a los riesgos y su compromiso y participación en la gestión de riesgos de desastres.
        div(titulo="Adelantar")
          p.mb-0 Adelantar acciones para que la sociedad entienda que la responsabilidad es de todos en la construcción de los riesgos, para que conozca y se sensibilice frente a la responsabilidad y el compromiso que deben asumir frente a la reducción de los riesgos y desastres.
        div(titulo="Diseñar")
          p.mb-0 Diseñar y recrear herramientas de comunicación y difusión que contribuyan al fortalecimiento de las capacidades de la sociedad en torno a la gestión de riesgos, faciliten el acceso a información y al conocimiento en torno al tema, promuevan la participación de la población y contribuyan además a empoderar a las comunidades y localidades a través del manejo del lenguaje y de los mensajes de forma clara y culturalmente apropiada para la toma de decisiones.
        div(titulo="Crear")
          p.mb-0 Crear campañas de sensibilización establecidas mediante estrategias que planteen alternativas de comunicar el conocimiento de prevención de riesgos. La metodología se debe seleccionar según el grupo poblacional al cual se le vaya a impartir esta campaña, mientras los niveles de vulnerabilidad deben influir en la separación de los grupos.
        div(titulo="Propósito")
          p.mb-0 El propósito de toda campaña de sensibilización es reducir los riesgos; por lo tanto, representa una herramienta que se puede utilizar en los preparativos que se requieran ante una emergencia mediante la notificación con sistemas de alertas temprana y la interacción con los programas de recuperación, construcción o restauración ante una situación de desastre. Al mismo tiempo, las campañas son un instrumento de toma de conciencia sobre los riesgos, y un motor para impulsar y promover la participación de la gente y su compromiso con una vida más segura, el bienestar y el desarrollo humano sostenible.
        div(titulo="Proceso")
          p.mb-0 Para que se consolide el proceso de sensibilización en procesos de prevención del riesgo se requiere de un compromiso permanente de los entes de atención a emergencias y de las comunidades que se encuentran en zonas de alta vulnerabilidad. Las dos partes deben ejercer sus funciones dentro de la sociedad de manera organizada y proyectada a un fin común que promueva el bienestar físico y emocional, el cambio de conductas y el refuerzo de comportamientos seguros que disminuyan de manera eficaz el riesgo.

    .BGIMG03.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4
          img(src="@/assets/curso/tema1/img07.svg")
        .col-lg-8
          p.text-white En pro de cuidar la salud de las personas y reducir los efectos que los riesgos tienen dentro de las comunidades es necesaria la implementación de medidas de prevención y de corrección. 
          p.text-white.mb-0 Se entiende por medidas preventivas aquellas que se toman antes de que se genere el daño y con las cuales se intenta eliminar o reducir las diferentes causas que lo puedan provocar. Las medidas correctivas son aquellas que no están encaminadas a evitar el riesgo, pero sí a reducir o eliminar los daños a la salud que se presenten en un grupo social.

    p A su vez, existen medidas de protección colectiva dirigidas a proteger a todos los ciudadanos de una misma comunidad; contrario a las medidas de protección individual utilizadas en individuos particulares que también pueden llegar a transmitir enfermedades a los demás miembros de su círculo social.
    p.mb-5 Las actividades didácticas y de sensibilización son las que usualmente se llevan a cabo para generar un aprendizaje de manera grupal con el fin de que los participantes puedan resolver dudas entre ellos. Algunas de las acciones que más se manejan son las siguientes: 

    .BGIMG02.px-md-5.px-4(data-aos="zoom-in")
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
          .h4.text-center Mesa redonda
          p.text-center Se trata de una reunión en la que un grupo de expertos están coordinados por un moderador y exponen puntos de vista sobre un tema común.
          p.text-center.mb-0 Al finalizar las exposiciones, el moderador hace un resumen de las coincidencias y diferencias; posteriormente se invita al participante a formular preguntas que puedan aclarar las dudas que se tengan sobre algún tema específico.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
          .h4.text-center Phillips 66
          p.text-center.mb-0 Un grupo grande se divide en subgrupos de seis personas para discutir durante seis minutos un tema y llegar a una conclusión. Cada uno de los grupos genera informes de los cuales se extraen conclusiones generales. Por lo general, esta técnica se utiliza para recopilar conocimientos previos que los participantes puedan tener frente a un tema.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
          .h4.text-center Juego de roles
          p.text-center.mb-0 Dos o más personas representan una situación real con la finalidad de que el grupo pueda comprender mejor el tema propuesto.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
          .h4.text-center Foro
          p.text-center.mb-0 El grupo, moderado por el docente, expresa informal y libremente sus ideas y opiniones sobre un asunto.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
          .h4.text-center Interrogatorio
          p.text-center.mb-0 Para esta técnica se formulan cuestionamientos que permitan obtener información de los alumnos sobre procedimientos, habilidades, conceptos, sentimientos o experiencias que se relacionen con la temática.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
          .h4.text-center Estudio de caso
          p.text-center.mb-0 Se describe una situación real o ficticia siguiendo el planteamiento de un problema al que los estudiantes deben dar solución. 
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
          .h4.text-center Exposición
          p.text-center.mb-0 Técnica en la que un estudiante realiza ante un grupo la presentación oral de un tema.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
          .h4.text-center Lluvia de ideas
          p.text-center.mb-0 Consiste en que un grupo de alumnos lanza ideas que otro grupo anota. Posteriormente se analizan las ideas destacadas, se descartan las que no se relacionan con el tema y se eligen las ideas más interesantes.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
          .h4.text-center Diálogos simultáneos
          p.text-center.mb-0 Esta técnica se utiliza para dar soluciones rápidas a un tema específico luego de confrontar puntos de vista. Aquí participan varios equipos que discuten el problema durante un corto tiempo. 
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop')
          .h4.text-center Simposio
          p.text-center.mb-0 Un grupo de expertos habla por turnos ante una audiencia. Esta clase de conferencia se emplea para ampliar la información sobre un tema.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img19.svg' alt='AvatarTop')
          .h4.text-center Debate o discusión guiada
          p.text-center.mb-0 Se basa en el intercambio informal de ideas, información u opiniones. Lo realizan grupos de alumnos que, moderados por otro estudiante que funge de guía, plantean interrogantes para conducir la discusión.
        .BGR03.p-4
          .row.justify-content-center.mb-3
            .col-lg-7.col-5
              img(src='@/assets/curso/tema1/img20.svg' alt='AvatarTop')
          .h4.text-center Dramatización
          p.text-center.mb-0 Es la interpretación “teatral” de una situación o problemática. Puede emplearse para ensayar las sugerencias o soluciones propuestas que lleven a resolver un problema o situación de la vida real.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="flip-up")
        .cajon-b.color-acento-botones.img-full.p-3
          p.mb-0 De las actividades anteriores viene la concertación, la cual es definida como un proceso de toma de decisiones basado en acuerdos entre el Estado, los empresarios y los sindicatos. Su carácter es de codeterminación de las políticas y no simplemente de consulta de estas a los actores claves. Se trata de un proceso que obliga al Gobierno a asumir el compromiso de adoptar políticas públicas específicas sobre los acuerdos.
      .col-lg-10.mb-4
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/tema1/img21.svg")
          .col-lg-8
            p Es necesario que se examinen cuáles son los determinantes externos, es decir, se requiere analizar el entorno que tiene influencia en el proceso. También se debe establecer el contenido de las agendas de concertación para definir la posición de cada uno de los actores. 
            p.mb-0 La concertación no ha podido convertirse en una práctica institucionalizada dentro de una democracia deliberativa. En la mayoría de los casos estas concertaciones terminan siendo acuerdos sin impactos duraderos y que solo han sido fachadas de consensos que no resuelven los problemas por los que en primera instancia se convoca. 
      .col-lg-10(data-aos="flip-up")
        .cajon.color-primario.p-4
          p.mb-0 La idea principal de la concertación es la búsqueda de acuerdos nacionales que sean empleados para la transformación social, de tal manera que se establezcan políticas que contribuyan al desarrollo de la democracia y la equidad.
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Técnicas participativas para la capacitación comunitaria
    
    .BGIMG02.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-10.mb-4
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img22.svg")
            .col-lg-8
              p Está comprobado que la participación de la gente es uno de los elementos primordiales para el desarrollo y puesta en marcha de políticas que promuevan la reducción de desastres. La mayoría de las diferentes comunidades vulnerables, especialmente en países que están en desarrollo, se encuentran forzadas a adoptar medidas basadas en las circunstancias de vida en las que se encuentren. 
              p.mb-0 Los grupos más vulnerables muchas veces muestran capacidades extraordinarias para impedir pérdidas a causa de desastres, de esta manera se ilustran los méritos en la incorporación de enfoques de base en la gestión de riesgos que son numerosos, a pesar de que con mucha frecuencia la adopción de estos enfoques debe enfrentar obstáculos innecesarios.
        .col-lg-10.mb-4
          .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-up")
            p Las autoridades locales necesitan tomar decisiones basadas en situaciones específicas relacionadas con la vulnerabilidad frente a diferentes peligros. También se deben desarrollar herramientas para evaluar el riesgo, a ser utilizadas por los encargados de planificar la utilización territorial, tomando en consideración las experiencias adquiridas durante la década anterior en el ámbito nacional y global.
            p.mb-0  Con el fin de que se generen sociedades que sean resistentes a los desastres y que puedan impedir pérdidas humanas, económicas y sociales, se debe incluir a las comunidades como participantes de todos los niveles en la puesta en marcha de los planes de reducción de riesgo de desastres que se adelanten. 
          p.mb-0 La comunicación se presenta de diferentes maneras entre los diferentes actores sociales presentes en cada comunidad, dentro de las más destacadas maneras se encuentran: 
    
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img23.svg' alt='AvatarTop')
          .BGR04.p-4
            .h4.text-center.mt-5 Comunicación verbal
            p.mb-0 Se realiza mediante la palabra, es decir, mediante el uso oral o escrito de signos lingüísticos. Cuando es oral, se da  con palabras habladas, bien sea frente a frente o mediante el uso de algún medio de comunicación.
      .col-xl-4.col-lg-5.col-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img24.svg' alt='AvatarTop')
          .BGR04.p-4
            .h4.text-center.mt-5 Comunicación no verbal
            p.mb-0 Es toda aquella comunicación que no es dependiente de la palabra para lograr transmitir un mensaje con claridad. Se presenta por medio de movimientos, gestos y sonidos.              
      .col-lg-10.mb-4
        .cajon-b.color-acento-botones.img-full.p-3(data-aos="flip-up")
          p.mb-0 Las técnicas de concertación de acciones para los diferentes actores sociales y territoriales se deben adelantar de manera programada y organizada para que el mensaje que se quiere transmitir sea eficaz y se desarrolle con los parámetros de tiempo establecidos.
        p.ms-3.mb-0 Para una adecuada impartición del conocimiento es necesario comprender las necesidades y capacidades del grupo al cual se le va a dictar la capacitación con el fin de determinar las técnicas que se van a utilizar. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img25.svg")
      .col-lg-8(data-aos="fade-left")
        .cajon-b.color-primario.img-end.p-3
          p Dependiendo del número de personas que participen, la capacitación se podrá dividir en grupos más pequeños. Cuando los grupos se dividen en máximo diez personas, la interacción directa entre sus miembros es mucho más factible. Cuando las superan, se pueden realizar tareas tales como exposiciones o discusiones en las que se expongan los diferentes puntos de vista de cada cual. Sin embargo, cuando los grupos superan las cuarenta personas no son factibles las interacciones directas entre los miembros; por tal razón no es recomendable realizarlas de esta manera.
          p.mb-0 Los grupos se pueden formar de dos maneras: la primera es de modo natural, cuando el expositor o docente da un tiempo para que se organicen de manera libre dichos grupos, momento en el que se determinan el mínimo y el máximo de integrantes por cada uno. La segunda, es la formación artificial de los equipos, en donde el docente es el encargado de dividir el grupo de acuerdo con las necesidades educativas.

    .h4 Fijación de objetivos
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-9
        img(src="@/assets/curso/tema1/img26.svg")
    
    .h4 Encuentros entre entidades de salud y gestores territoriales

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Técnicas de sistematización y registros de capacitación y sensibilización
    
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 La sistematización es una herramienta que permite consolidar cualquier proceso de aprendizaje y reflexionar mediante la revisión de lo vivido desde una perspectiva que permita afianzar los conocimientos de forma individual y grupal. Es un proceso en el cual se documenta y se analiza una experiencia, evento o proyecto en particular que tiene conocimientos, los cuales generan buenas prácticas y se distinguen por: 
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img27.svg")
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      AcordionA(tipo="b" clase-tarjeta="BGR01")
        div(titulo="Sistematización")
          p.mb-0 Mediante la sistematización se fomenta la toma de conciencia sobre lo aprendido a través de la experiencia con la ayuda de técnicas que conducen a reflexionar sobre lo vivido y realizado por un equipo o una organización. Sistematizando es posible generar nuevos productos de conocimiento, ajustar el curso de un proyecto o hasta incidir en el diseño de políticas públicas.
        div(titulo="Conocimiento")
          p.mb-0 Para una adecuada impartición del conocimiento es necesario comprender las necesidades y capacidades del grupo al cual se le va a dictar la capacitación con el fin de determinar las técnicas a utilizar.
        div(titulo="Expresión")
          p.mb-0 La expresión es la manera de demostrar ideas y pensamientos hacia una persona en particular o un grupo; es una técnica de comunicación que no necesariamente debe ser escrita o hablada, sino que también se puede dar por medio de movimientos faciales o corporales.
        div(titulo="Lenguaje")
          p.mb-0 Según las formas del lenguaje, existen diferentes maneras de expresión mediante las cuales se hace entender una idea, entre ellas: artística, literaria, poética, teatral, corporal y facial.

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.img-inv.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img28.svg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 La expresión oral es el conjunto de técnicas que determinan las pautas generales a tener en cuenta para que la comunicación oral sea efectiva y sirve como un instrumento para comunicar acerca de procesos u objetos. Es necesario entender que la expresión oral es más amplia que el habla, pues requiere de elementos paralingüísticos para que su significado final sea completo; se necesita, entonces, no solo conocimiento del idioma, sino también de elementos no verbales que aportan validez a lo que se quiere expresar.<br><br>La expresión escrita expone de forma ordenada utilizando signos gráficos convencionales, cualquier pensamiento o idea. 

    .BGIMG02.px-md-5.px-4.pb-2.mb-4(data-aos="zoom-in")
      p.mb-5 Existen diferentes tipos de textos de expresión escrita:
      SlyderF.mb-4(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img29.svg' alt='AvatarTop')
          .BGR04A.p-4
            .h4.text-center.mt-5 Mapas conceptuales
            p.mb-0 Se utilizan para exhibir gráficamente los conceptos y relaciones que se presentan entre ellos. Los conceptos son extraídos de textos u otros contenidos.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img30.svg' alt='AvatarTop')
          .BGR04A.p-4
            .h4.text-center.mt-5 Carta
            p.mb-0 A pesar de ser una de las formas más antiguas de expresión escrita, y dependiendo de lo que se quiera dar a conocer, sigue siendo la más acertada. Las cartas pueden ser personales, comerciales, oficiales o formales.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img31.svg' alt='AvatarTop')
          .BGR04A.p-4
            .h4.text-center.mt-5 Oficio
            p.mb-0 Es una manera de comunicación escrita que proviene del gobierno, ya sea federal, estatal o municipal. Este puede ser de carácter exterior o interior.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img32.svg' alt='AvatarTop')
          .BGR04A.p-4
            .h4.text-center.mt-5 Memorando
            p.mb-0 Se utiliza en ámbitos organizacionales para dar a conocer a niveles subordinados la toma de decisiones u órdenes.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img33.svg' alt='AvatarTop')
          .BGR04A.p-4
            .h4.text-center.mt-5 Artículo
            p.mb-0 Es un escrito breve que puede hacer referencia a política, ciencia, cultura o educación. Los artículos son escritos, en su mayoría, por personas especialistas en los temas que abordan en ellos.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img34.svg' alt='AvatarTop')
          .BGR04A.p-4
            .h4.text-center.mt-5 Ensayo
            p.mb-0 Se expone allí la interpretación personal del autor frente a un tema específico, bien sea de exposición de ideas, críticas o creaciones propias.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img35.svg' alt='AvatarTop')
          .BGR04A.p-4
            .h4.text-center.mt-5 Informe
            p.mb-0 Es la exposición escrita de un trabajo técnico y académico en la cual se aportan datos y valoraciones acertadas para la toma de decisiones.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Informe y comunicación de los programas de capacitación y sensibilización
    
    p Para el adecuado registro y control de los datos obtenidos es necesario recurrir a técnicas estadísticas que permitan la visualización y tener en cuenta la variabilidad a la hora de tomar decisiones. Entre las más utilizadas podemos resaltar:

    .BGIMG04.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
            .h4 Hoja de recopilación de datos
            p.mb-0 Es un documento en el que, de forma sencilla y estructurada, se recoge todo tipo de datos para un posterior análisis. La hoja está diseñada para indicar la frecuencia de la observación y  en favor de los datos que se recogen y se apuntan. Esta hoja de recopilación se utiliza para medir defectos en productos, las causas de dichos defectos, la clasificación de los productos que están defectuosos y la variación de sus características.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img36.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
            .h4 Diagrama de Pareto
            p.mb-0 Es una forma de representar los datos dentro de un gráfico de frecuencias, de manera que estén organizados de mayor a menor. De esta forma se pueden identificar las principales causas de la mayor parte de los errores cometidos. Ese diagrama se utiliza para identificar y dar prioridad a los problemas más relevantes de cada proceso organizacional.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img37.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
            .h4 Diagrama de dispersión
            p.mb-0 Permite estudiar la existencia de una relación entre dos variables. Es de gran utilidad en la solución de problemas de un proceso, ya que se puede comprobar qué factores influyen en la dispersión de una característica de calidad.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img38.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
            .h4 Diagrama causa-efecto
            p.mb-0 Es una herramienta usada para estudiar de manera estructurada todas las posibles causas que pueden generar variaciones en un proceso. Dentro de las causas más comunes se encuentran las 6M: variaciones en las máquinas o equipos, en el material de entrado al proceso, en el método o procedimiento, en los operarios o mano de obra, en el medio ambiente y en las medidas.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img39.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
            .h4 Histograma
            p.mb-0 Es la presentación de las medidas ordenadas en filas y columnas en las que se determina un número máximo y uno mínimo. Posteriormente se agregan dos columnas en donde se registran los números máximos y mínimos por fila de los anteriormente señalados. El histograma se utiliza para obtener una comunicación efectiva de la variabilidad del sistema, mostrar resultados de los cambios, identificar anormalidades y comparar la variabilidad con los límites que se especificaron.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img40.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
            .h4 Estratificación
            p.mb-0 Permite la clasificación de la información recolectada sobre características de calidad. Esta información debe ser clasificada de acuerdo con los operadores de cada proceso, con la seguridad de que los factores hayan sido asumidos por cada uno de ellos.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img41.svg")

    .BGIMG01.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4.mt-4.p-2
          img(src="@/assets/curso/tema1/img42.svg")
        .col-lg-8
          p.text-white La evaluación formativa tiene lugar durante el proceso de enseñanza-aprendizaje y como finalidad busca detectar las dificultades y los progresos de los estudiantes. 
          p.text-white.mb-0 La evaluación formativa autonomiza al estudiante y le ofrece la iniciativa de conducción de su propio proceso de aprendizaje y la posibilidad de una profundización, de un cambio y de una consolidación en los procesos del aprendizaje.

    p Estas son algunas características de la evaluación formativa: 
    
    .row.justify-content-center.BGR01.p-4.mb-4
      .col-lg-9(data-aos="zoom-in")
        img(src="@/assets/curso/tema1/img43.svg")

    .BGIMG02.px-md-5.px-4.py-4
      p.mb-5 Existen diferentes tipos de técnicas que son utilizadas en los procesos de evaluación para poder identificar en cuál de ellos, específicamente, se están presentando falencias. Las siguientes son algunas técnicas:

      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img44.svg")
            .col
              p.mb-0 Análisis de prácticas docentes
          <hr style="margin: 0.2em">
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img45.svg")
            .col
              p.mb-0 Ensayos libres
          <hr style="margin: 0.2em">
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img46.svg")
            .col
              p.mb-0 Encuestas
          <hr style="margin: 0.2em">
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img47.svg")
            .col
              p.mb-0 Observación directa
          <hr style="margin: 0.2em">
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img48.svg")
            .col
              p.mb-0 Corrección de actividades
        .col-lg-4.col-8
          .row.justify-content-center(data-aos="fade-left")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img49.svg")
            .col
              p.mb-0 Elaboración de proyectos
          <hr style="margin: 0.2em">
          .row.justify-content-center(data-aos="fade-left")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img50.svg")
            .col
              p.mb-0 Desarrollo de técnicas de estudio
          <hr style="margin: 0.2em">
          .row.justify-content-center(data-aos="fade-left")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img51.svg")
            .col
              p.mb-0 Listas de control
          <hr style="margin: 0.2em">
          .row.justify-content-center(data-aos="fade-left")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema1/img52.svg")
            .col
              p.mb-0 Cuestionarios

      p Los criterios de evaluación y sus especificaciones se determinan por:
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-primario
          .BGIMG05.p-4(titulo="Criterios de evaluación")
            .h4 Criterios de evaluación
            p.mb-0 Son el referente específico para evaluar el aprendizaje de los estudiantes ya que describen lo que se quiere valorar y lo que se espera que el alumno logre, tanto en competencias como en conocimiento.
          .BGIMG05.p-4(titulo="Especificaciones")
            .h4 Especificaciones
            p.mb-0 Estas permiten definir en los criterios de evaluación los resultados de aprendizaje y concretar lo que el estudiante debe saber hacer y comprender en dicha asignatura. Los resultados deben ser medibles, observables y evaluables.
          .BGIMG05.p-4(titulo="Finalidad")
            .h4 ¿Cuál es la finalidad de los criterios de evaluación y las especificaciones?
            p.mb-0 Ambos deben ser los referentes para la comprobación del grado de adquisición de las competencias y el logro de los objetivos de la etapa en las evaluaciones continua y final de la materia.
          .BGIMG05.p-4(titulo="Origen")
            .h4 Criterios de evaluación según su origen
            ul.lista-ul--color.ms-4
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Personales
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Disciplinarios
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | De la institución educacional
          .BGIMG05.p-4(titulo="Uso")
            .h4 Criterios de evaluación de acuerdo con la forma de su uso para juzgar
            ul.lista-ul--color.ms-4
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Analíticos
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Holísticos
          .BGIMG05.p-4(titulo="Aplicación")
            .h4 Criterios de evaluación de acuerdo con el momento de aplicación de la situación de evaluación
            ul.lista-ul--color.ms-4
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Antes
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Después    
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img53.svg")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img54.svg")
      .col-lg-8(data-aos="fade-left")
        .cajon-b.color-acento-botones.img-end-a.p-3
          p.mb-0 La medición del aprendizaje es una práctica que está directamente relacionada con la educación y que ha venido aumentando de manera significativa en los últimos años. Estos procesos se adelantan para poder examinar el desarrollo y la posible consecución de las expectativas a través de la complejidad del aprendizaje.

    p Las funciones de la medición del aprendizaje son: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img55.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR05.p-4
            .h4.ms-5 Obtener
            p.mb-0.ms-5 Obtener información para la toma de decisiones que impacten el mejoramiento del estudiante.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img56.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR05.p-4
            .h4.ms-5 Identificar
            p.mb-0.ms-5 Identificar el desempeño del estudiante dentro de los criterios y estándares establecidos.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img57.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR05.p-4
            .h4.ms-5 Conocer y trabajar
            p.mb-0.ms-5 Conocer y trabajar con criterios claros, conocidos y predefinidos.
      .col-lg-5.col-10(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img58.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR05.p-4
            .h4.ms-5 Comunicar
            p.mb-0.ms-5 Comunicar al estudiante acerca del proceso y resultado de la medición para que mejore su aprendizaje.

    p Se pueden utilizar hasta seis fórmulas para evaluar lo que aprenden los estudiantes según el objetivo y el momento. Ahora se explicará en qué consiste cada una de las seis formas de evaluar propuestas:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsC.color-primario
        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Evaluación diagnóstica")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img60.svg")
          .col-lg-6
            .h4 Evaluación diagnóstica
            p.mb-0 Evalúa las fortalezas, debilidades, conocimientos y habilidades de un alumno antes de la formación. Sirve para conocer el punto de partida, como una base desde la cual se trabajan los conocimientos que los alumnos van a adquirir durante el programa formativo.
        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Evaluación formativa")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img61.svg")
          .col-lg-6
            .h4 Evaluación formativa
            p.mb-0 Evalúa el rendimiento de un alumno durante la formación. Por lo general, se produce regularmente durante todo el proceso de instrucción; es como un repaso para poder revisar la idoneidad de la formación recibida en caso de que fuese necesario realizar modificaciones al método de enseñanza.
        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Evaluación sumativa")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img62.svg")
          .col-lg-6
            .h4 Evaluación sumativa
            p.mb-0 Mide el rendimiento de un estudiante al final de la formación. Es la forma de saber qué ha aprendido y qué no.
        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Evaluación por medias")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img63.svg")
          .col-lg-6
            .h4 Evaluación por medias
            p.mb-0 Compara el desempeño de un estudiante con el de otros compañeros (as). Es una especie de evaluación grupal o “demográfica” que ayuda al docente a obtener medias y sacar conclusiones generales.
        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Evaluación basada en objetivos")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img64.svg")
          .col-lg-6
            .h4 Evaluación basada en objetivos
            p.mb-0 Mide el rendimiento de un alumno frente a una meta o un objetivo específico o estándar. Consigue la obtención de datos y conclusiones más concretas sobre los procesos de enseñanza y aprendizaje.
        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Evaluación intermedia o de referencia")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img65.svg")
          .col-lg-6
            .h4 Evaluación intermedia o de referencia
            p.mb-0 Evalúa el rendimiento del alumno por intervalos de tiempo. Normalmente coincide con el final de períodos de calificación: meses, trimestres, etc. Ayuda a predecir el rendimiento de los estudiantes en las evaluaciones acumulativas de final de año.
            
    .BGIMG03.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4
          img(src="@/assets/curso/tema1/img66.svg")
        .col-lg-7
          p.text-white Las listas de asistencia son todos aquellos documentos que tienen como finalidad llevar un registro de la presencia de personas en un evento que puede ser único o puede tener continuidad. El seguimiento a la asistencia es una actividad que ayuda a gestionar la participación en eventos, clases o reuniones de todo tipo. 
          p.text-white.mb-0 En los aspectos educativos las listas son esenciales para rastrear la presencia y el aporte de los estudiantes, así como las veces en que se presentan ausencias o tardanzas. El objetivo principal de estos listados es que se puedan resolver problemas de una forma eficiente a fin de establecer tiempos y entregables de las actividades académicas. 

    p Estos formatos también son empleados para tener un control dentro de las organizaciones, bien sea durante una capacitación o en la asistencia puntual a los sitios de trabajo. Estos instrumentos también se utilizan para entregar recompensas por la puntualidad y asistencia. 
    p Para que estos listados puedan cumplir con su objetivo es necesario que contengan varios indicadores individuales y algunos otros según la complejidad que se tenga. Algunos de los ítems que se encuentran en estos listados son: 

    .BGIMG02.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-8
          PasosA.color-acento-contenido(tipo="n")
            .row.justify-content-around.align-items-center(data-aos="fade-right")
              .col
                p.mb-0 Nombre del instructor, maestro o encargado de impartir la capacitación
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1/img67.svg")
            .row.justify-content-around.align-items-center(data-aos="fade-left")
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1/img68.svg")
              .col
                p.mb-0 Nombre del curso, evento o materia que se impartirá
            .row.justify-content-around.align-items-center(data-aos="fade-right")
              .col
                p.mb-0 Fechas y horas en las que llevará a cabo
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1/img69.svg")
            .row.justify-content-around.align-items-center(data-aos="fade-left")
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1/img70.svg")
              .col
                p.mb-0 Nombre y firma de los asistentes
            .row.justify-content-around.align-items-center(data-aos="fade-right")
              .col
                p.mb-0 Nombre de la institución o empresa
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1/img71.svg")
            .row.justify-content-around.align-items-center(data-aos="fade-left")
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1/img72.svg")
              .col
                p.mb-0 Logos
            .row.justify-content-around.align-items-center(data-aos="fade-right")
              .col
                p.mb-0 Datos de contacto de los asistentes, correo electrónico o número de teléfono
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1/img73.svg")
            .row.justify-content-around.align-items-center(data-aos="fade-left")
              .col-lg-2.col-3
                img(src="@/assets/curso/tema1/img74.svg")
              .col
                p.mb-0 Firma del instructor

    .row.justify-content-center.align-items-center
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img75.svg")
      .col-lg-7(data-aos="fade-left")
        .cajon-b.color-acento-contenido.p-3
          p.mb-0 #[b Estimado aprendiz]: hemos llegado al final del componente formativo. Esperamos que continúe recorriendo este camino lleno de aprendizajes y recuerde explorar los recursos que se encuentran disponibles. Diríjase al menú principal en donde encontrará la síntesis del tema abordado, una actividad didáctica, material complementario, entre otros recursos.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
