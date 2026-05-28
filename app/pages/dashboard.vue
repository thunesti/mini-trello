<script setup lang="ts">
    import { useBoardStore } from '~/stores/boardStore'

    const userStore = useUserStore()
    const boardStore = useBoardStore()

    // Henter ut navnet til velkomstmeldingen på skjermen
    const currentUserName = computed(() => userStore.user?.name || 'Gjest')

    // Holder på teksten i inputfeltet
    const newProjectName = ref('')

    function handleCreateProject() {
        const name = newProjectName.value.trim()
        
        if (!name) return
        boardStore.addProject(name)
        newProjectName.value = ''
    }
</script>

<template>
    <div class="dashboard-container" v-if="currentUserName">
        <main class="dashboard-content">
            <section class="welcome-section">
                <p class="welcome-text">HEI, {{ currentUserName }}!</p>
            </section>

            <section class="projects-header">
                <h1 class="section-title">Dine Prosjekter</h1>
                <form @submit.prevent="handleCreateProject" class="add-project-form">
                    <input 
                        v-model="newProjectName"
                        type="text" 
                        placeholder="PROSJEKTNAVN..." 
                        class="project-input"
                        autocomplete="off"
                    />
                    <button type="submit" class="add-project-btn">
                        + Nytt Prosjekt
                    </button>
                </form>
            </section>

            <section class="projects-grid">
                <div
                    v-for="project in boardStore.projects"
                    :key="project.id"
                    class="project-card"
                >
                    <h2 class="project-name">{{ project.name }}</h2>
                    
                    <div class="project-meta">
                        <p class="task-count">5 oppgaver</p>
                        <p class="last-changed">Siste endring: ID-{{ project.id }}</p>
                    </div>
                </div>

                <div v-if="!boardStore.projects || boardStore.projects.length === 0" class="no-projects">
                    <p>Ingen prosjekter funnet. Opprett ditt første over!</p>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
    .dashboard-container {
        min-height: 100vh;
        background-color: #0D1117;
        color: #E2E8F0;
    }

    .dashboard-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 24px;
    }

    /* Velkomst-seksjon */
    .welcome-section {
        margin-bottom: 40px;
    }

    .welcome-text {
        font-family: 'SFMono-Regular', Consolas, monospace;
        color: #4DEEEA;
        font-size: 2rem;
        letter-spacing: 1px;
        font-weight: bold;
    }

    /* Header over prosjekter */
    .projects-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #222C3A;
        padding-bottom: 16px;
        margin-bottom: 30px;
        gap: 20px;
    }

    .section-title {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: -0.5px;
    }

    /* Form-container som samler input og knapp til høyre */
    .add-project-form {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    /* Input-feltet */
    .project-input {
        background-color: #161B22;;
        border: 1px solid #30363D;
        color: #E2E8F0;
        padding: 8px 12px;
        border-radius: 4px;
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.8rem;
        width: 180px;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .project-input::placeholder {
        color: #E2E8F0;
        font-size: 0.75rem;
        letter-spacing: 1px;
    }

    .project-input:focus {
        outline: none;
        border-color: #4DEEEA;
        box-shadow: 0 0 8px rgba(77, 238, 234, 0.3);
    }

    /* Knappen */
    .add-project-btn {
        background: #4DEEEA;
        color: #0D1117;;
        border: none;
        border-radius: 4px;
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.9rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;
        padding: 6px 12px;
        white-space: nowrap;
    }

    .add-project-btn:hover {
        box-shadow: 0 0 15px rgba(77, 238, 234, 0.5);
    }

    /* Prosjekt-grid og kort */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 24px;
    }

    .project-card {
        background-color: #161B22;
        border: 1px solid #30363D;
        border-radius: 8px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 140px;
        cursor: pointer;
        transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;
    }

    .project-card:hover {
        border-color: #4DEEEA;
        box-shadow: 0 4px 20px rgba(77, 238, 234, 0.15);
        transform: translateY(-2px);
    }

    .project-name {
        font-size: 1.15rem;
        color: #E2E8F0;
        margin: 0 0 16px 0;
        font-weight: 600;
    }

    .project-meta {
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.8rem;
    }

    .task-count {
        color: #64748B;
        margin: 0 0 6px 0;
    }

    .last-changed {
        color: #4A5568;
        margin: 0;
        font-size: 0.75rem;
    }

    .no-projects {
        grid-column: 1 / -1;
        text-align: center;
        padding: 40px;
        color: #64748B;
        border: 1px dashed #222C3A;
        border-radius: 8px;
    }
</style>