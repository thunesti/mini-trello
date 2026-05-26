<script setup lang="ts">
import { useBoardStore } from '~/stores/boardStore'

const userStore = useUserStore()
const boardStore = useBoardStore()

// Vi henter bare ut navnet til velkomstmeldingen på skjermen
const currentUserName = computed(() => userStore.user?.name || 'Gjest')
</script>

<template>
    <div class="dashboard-container">
        <main class="dashboard-content">
            <p>VELKOMMEN, {{ currentUserName }}!</p>
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