<template>
  <div class="blank-layout">
    <NuxtPage />
  </div>
</template>

<style scoped>
  .blank-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;    /* Legger header og main under hverandre */
      justify-content: center;   /* Sentrerer innholdet vertikalt (opp/ned) */
      align-items: center;       /* Sentrerer BÅDE logo-headeren og main horisontalt (høyre/venstre) */
      
      gap: 24px;                 /* Gir et perfekt, fast mellomrom mellom logoen og kortet */
      padding: 20px;
      box-sizing: border-box;
  }
</style>