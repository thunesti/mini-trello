<script setup lang="ts">
    import { useBoardStore } from '~/stores/boardStore';

    const route = useRoute()
    const boardStore = useBoardStore()

    // Henter ut ID-en fra URL-en (f.eks. /project/1715364820)
    // Siden Date.now() lager tall, konverteres rute-parameteren til et Number
    const projectId = Number(route.params.id)

    // Finner prosjektet i storen som matcher ID-en
    const currentProject = computed(() => {
        return boardStore.projects.find(p => p.id === projectId)
    })
</script>

<template>
    <div class="project-page-container">
        <main v-if="currentProject" class="project-content">
            <header class="project-page-header">
                <NuxtLink to="/dashboard" class="back-link">
                    &lt; Tilbake til dashboard
                </NuxtLink>
                <h1 class="project-title">{{ currentProject.name }}</h1>
            </header>

            <div class="trello-board">
                <p style="color: #64748B;">
                    Prosjekt-ID: {{ currentProject.id }}
                </p>
                </div>
        </main>

        <main v-else class="error-container">
            <p class="error-text">404: PROSJEKTET FINNES IKKE ELLER ER SLETTET.</p>
            <NuxtLink to="/dashboard" class="back-link">Gå tilbake</NuxtLink>
        </main>
    </div>
</template>

<style scoped>
    .project-page-container {
        padding: 40px 24px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .project-page-header {
        margin-bottom: 30px;
    }

    .back-link {
        color: #64748B;
        text-decoration: none;
        font-family: monospace;
        font-size: 0.85rem;
        transition: color 0.2s ease;
    }

    .back-link:hover {
        color: #4DEEEA;
    }

    .project-title {
        font-size: 2rem;
        color: #E2E8F0;
        margin: 15px 0 0 0;
        letter-spacing: -0.5px;
    }

    .trello-board {
        background-color: #161B22;
        border: 1px solid #30363D;
        border-radius: 8px;
        padding: 24px;
        min-height: 400px;
    }

    .error-container {
        text-align: center;
        padding: 100px 0;
    }

    .error-text {
        color: #FF8C00;
        font-family: monospace;
        margin-bottom: 20px;
    }
</style>