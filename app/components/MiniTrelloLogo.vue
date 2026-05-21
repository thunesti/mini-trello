<template>
  <div class="logo-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="scifi-svg">
      <g class="skew-group">
        <rect x="15" y="25" width="18" height="50" rx="3" fill="#4DEEEA" fill-opacity="0.85" />
        <rect x="19" y="31" width="10" height="4" rx="1" fill="#161B22" />
        <rect x="19" y="39" width="10" height="4" rx="1" fill="#161B22" />
      </g>
      <g class="skew-group">
        <rect x="41" y="15" width="18" height="65" rx="3" fill="#FF007F" />
        <rect x="45" y="23" width="10" height="5" rx="1" fill="#161B22" />
        <rect x="45" y="33" width="10" height="5" rx="1" fill="#161B22" />
        <rect x="45" y="43" width="10" height="5" rx="1" fill="#161B22" />
      </g>
      <g class="skew-group">
        <rect x="67" y="30" width="18" height="45" rx="3" fill="#9D4EDD" fill-opacity="0.85" />
        <rect x="71" y="36" width="10" height="4" rx="1" fill="#161B22" />
        <rect x="71" y="44" width="10" height="4" rx="1" fill="#161B22" />
      </g>
    </svg>
    <span class="logo-text">Mini Trello</span>
  </div>
</template>

<style scoped>
.logo-container {
    display: flex;
    align-items: center;
    gap: 12px;
}
.scifi-svg {
    width: 140px;
    height: 140px;
    filter: drop-shadow(0 0 8px rgba(77, 238, 234, 0.5));
}
.skew-group {
    transform: skewX(-10deg);
    transform-origin: center;
 }

.logo-text {
    font-family: monospace, sans-serif;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: 1.5px;
    background: linear-gradient(to right, #4DEEEA, #FF007F, #9D4EDD);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>