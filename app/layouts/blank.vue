<template>
  <div class="blank-layout">
    <NuxtPage />
  </div>
</template>

<style scoped>
  .blank-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      padding: 20px;
      box-sizing: border-box;
  }
</style>