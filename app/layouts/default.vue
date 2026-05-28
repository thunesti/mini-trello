<script setup lang="ts">
import type { User } from '~/types/types'

const userStore = useUserStore()
const boardStore = useBoardStore()

// Initialiserer både brukeren og prosjektene ved oppstart/refresh
userStore.initializeAuth()
boardStore.initializeBoards()


// Pakker ut brukerdataene trygt fra Pinia-storen
const currentUser = computed<User>(() => ({
    username: userStore.user?.username || '',
    name: userStore.user?.name || 'Gjest',
    avatarUrl: userStore.user?.avatarUrl || ''
}))

function handleLogout() {
    // Tar imot emiten fra headeren og rydder opp i storen
    userStore.logout() 
}
</script>

<template>
  <div class="app-layout">
    <AppHeader :user="currentUser" @logout="handleLogout" />
    
    <slot />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  background-color: #0D1117;
}
</style>