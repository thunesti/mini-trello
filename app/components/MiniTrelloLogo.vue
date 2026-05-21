<template>
  <div class="logo-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="scifi-svg">
      
      <g class="skew-group">
        <rect x="15" y="25" width="18" height="50" rx="3" fill="#3A4655" />
        <rect x="19" y="31" width="10" height="4" rx="1" fill="#161B22" />
        <rect x="19" y="39" width="10" height="4" rx="1" fill="#161B22" />
      </g>
      
      <g class="skew-group">
        <rect x="41" y="15" width="18" height="65" rx="3" fill="#3A4655" />
        <rect x="45" y="23" width="10" height="5" rx="1" fill="#4DEEEA" class="active-node" />
        <rect x="45" y="33" width="10" height="5" rx="1" fill="#161B22" />
        <rect x="45" y="43" width="10" height="5" rx="1" fill="#161B22" />
      </g>
      
      <g class="skew-group">
        <rect x="67" y="30" width="18" height="45" rx="3" fill="#3A4655" />
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
      user-select: none;
  }

  .scifi-svg {
      width: 80px;
      height: 80px;
  }

  .skew-group {
      transform: skewX(-10deg);
      transform-origin: center;
  }

  .active-node {
      filter: drop-shadow(0 0 4px rgba(77, 238, 234, 0.8));
  }

  .logo-text {
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #E2E8F0;
  }
</style>