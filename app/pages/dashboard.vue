<script setup lang="ts">
    import type { User} from '~/types/types'
    import {useBoardStore} from '~/stores/boardStore'

    const userStore = useUserStore()
    const boardStore = useBoardStore()

    // Sjekker om sesjonen finnes i localStorage når siden laster
    userStore.initializeAuth()

    // Sikrer trygg uthenting av data, og gir fallback-verdier hvis brukeren ikke er lastet inn ennå
    const currentUser = computed<User>(() => ({
        username: userStore.user?.username || '',
        name: userStore.user?.name || 'Gjest',
        avatarUrl: userStore.user?.avatarUrl || '',
    }))

    function handleLogout() {
        // Storen oppdateres kun her etter et EMIT fra komponenten nedenfor
        userStore.logout()
    }
</script>

<template>
    <div class="dashboard-container">
        <AppHeader :user="currentUser" @logout="handleLogout" />
        
        <main class="dashboard-content">
            <p>> VELKOMMEN TILBAKE, {{ currentUser.name }} _</p>
        </main>
    </div>
    <div class="projects-section">
        <h1>Projects</h1>
        <div
            v-for="project in boardStore.projects"
            :key="project.id"
        >
            <h2>{{ project.name }}</h2>
        </div>
    </div>
</template>