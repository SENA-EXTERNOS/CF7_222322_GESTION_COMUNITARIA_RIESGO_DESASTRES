<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.animation-1 #[b Estimado aprendiz]: el componente formativo denominado “Ejecución promotoría para gestión del riesgo en comunidades” describe los contenidos a trabajar en el desarrollo del resultado de aprendizaje llamado “Ejecutar actividades de capacitación, promoción y concienciación en gestión del riesgo de desastres según programa de sensibilización”.
    p.animation-1 Por medio del reconocimiento de la diversidad y los contextos culturales de las comunidades orientaremos estrategias a manera de sensibilización en prevención de riesgos. Para que estos últimos puedan ser afrontados con seriedad, ya sea a nivel nacional o local, se requiere un enfoque sistematizado que pueda ser implementado a grandes escalas, con compromisos y acciones.
    p.animation-1 Explore con atención el siguiente vídeo, el cual le mostrará lo que debe tener presente a la hora de prevenir riesgos físicos, mentales, sanitarios y de trabajo.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
