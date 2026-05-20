<template>
  <div class="logo-container">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      class="main-logo-svg"
    >
      <g class="skew-group">
        <rect x="15" y="25" width="18" height="50" rx="3" fill="#becfe4" fill-opacity="0.85" />
        <rect x="19" y="31" width="10" height="4" rx="1" fill="#0e0915" />
        <rect x="19" y="39" width="10" height="4" rx="1" fill="#0e0915" />
      </g>
      
      <g class="skew-group">
        <rect x="41" y="15" width="18" height="65" rx="3" fill="#f6847e" />
        <rect x="45" y="23" width="10" height="5" rx="1" fill="#0e0915" />
        <rect x="45" y="33" width="10" height="5" rx="1" fill="#0e0915" />
        <rect x="45" y="43" width="10" height="5" rx="1" fill="#0e0915" />
      </g>
      
      <g class="skew-group">
        <rect x="67" y="30" width="18" height="45" rx="3" fill="#bd3fd8" fill-opacity="0.85" />
        <rect x="71" y="36" width="10" height="4" rx="1" fill="#0e0915" />
        <rect x="71" y="44" width="10" height="4" rx="1" fill="#0e0915" />
      </g>
    </svg>

    <span class="logo-text">mini-Trello</span>
  </div>
</template>

<script setup lang="ts">
// Ren visningskomponent i TypeScript
</script>

<style scoped>
/* Beholder og layout */
.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* SVG Størrelse og den futuristiske gløden */
.main-logo-svg {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 0 6px rgba(168, 218, 220, 0.6));
}

/* Skråstillingen av Trello-kolonnene */
.skew-group {
  transform: skewX(-10deg);
  transform-origin: center;
}

/* Teksten med gradient-effekt */
.logo-text {
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(to right, #becfe4, #f6847e, #bd3fd8);
  
  /* Krysskompatibilitet for tekst-gradient */
  -webkit-background-clip: text; 
  background-clip: text;          /* Standard egenskap for moderne nettlesere */
  -webkit-text-fill-color: transparent;
}
</style>