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

    // REFS for nye oppgaver i hver kolonne
    const newTodoTitle = ref('')
    const newInProgressTitle = ref('')
    const newDoneTitle = ref('')

    // Funksjon for å legge til oppgave
    function handleAddTask(column: 'todo' | 'inProgress' | 'done', title: string) {
        const cleanTitle = title.trim()
        if (!cleanTitle || !currentProject.value) return

        const newTask = {
            id: Date.now(),
            title: cleanTitle
        }

        currentProject.value[column].push(newTask)

        localStorage.setItem('trello_projects', JSON.stringify(boardStore.projects))

        // Tømmer riktig inputfelt basert på hvilken kolonne vi nettopp la til i
        if (column === 'todo') newTodoTitle.value = ''
        if (column === 'inProgress') newInProgressTitle.value = ''
        if (column === 'done') newDoneTitle.value = ''
    }

    // Slette oppgave
    function handleDeleteTask(column: 'todo' | 'inProgress' | 'done', taskId: number) {
        if (!currentProject.value) return

        // Filtrerer ut oppgaven som matcher ID-en
        currentProject.value[column] = currentProject.value[column].filter(task => task.id !== taskId)

        localStorage.setItem('trello_projects', JSON.stringify(boardStore.projects))
    }
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
                <div class="trello-column">
                    <div class="column-header">
                        <span class="column-dot todo-dot"></span>
                        <h2>TO-DO ({{ currentProject.todo.length }})</h2>
                    </div>
                    
                    <form @submit.prevent="handleAddTask('todo', newTodoTitle)" class="task-form">
                        <input v-model="newTodoTitle" type="text" placeholder="+ NY OPPGAVE..." autocomplete="off" />
                    </form>

                    <div class="column-tasks">
                        <div v-for="task in currentProject.todo" :key="task.id" class="task-card">
                            <div class="task-header">
                                <p class="task-title">{{ task.title }}</p>
                                <button @click="handleDeleteTask('todo', task.id)" class="delete-task-btn">X</button>
                            </div>
                            <span class="task-id">ID-{{ task.id.toString().slice(-4) }}</span>
                        </div>
                    </div>
                </div>

                <div class="trello-column">
                    <div class="column-header">
                        <span class="column-dot progress-dot"></span>
                        <h2>AKTIV ({{ currentProject.inProgress.length }})</h2>
                    </div>

                    <form @submit.prevent="handleAddTask('inProgress', newInProgressTitle)" class="task-form">
                        <input v-model="newInProgressTitle" type="text" placeholder="+ NY OPPGAVE..." autocomplete="off" />
                    </form>

                    <div class="column-tasks">
                        <div v-for="task in currentProject.inProgress" :key="task.id" class="task-card">
                            <div class="task-header">
                                <p class="task-title">{{ task.title }}</p>
                                <button @click="handleDeleteTask('inProgress', task.id)" class="delete-task-btn">X</button>
                            </div>
                            <span class="task-id">ID-{{ task.id.toString().slice(-4) }}</span>
                        </div>
                    </div>
                </div>

                <div class="trello-column">
                    <div class="column-header">
                        <span class="column-dot done-dot"></span>
                        <h2>FERDIG ({{ currentProject.done.length }})</h2>
                    </div>

                    <form @submit.prevent="handleAddTask('done', newDoneTitle)" class="task-form">
                        <input v-model="newDoneTitle" type="text" placeholder="+ NY OPPGAVE..." autocomplete="off" />
                    </form>

                    <div class="column-tasks">
                        <div v-for="task in currentProject.done" :key="task.id" class="task-card">
                            <div class="task-header">
                                <p class="task-title" style="text-decoration: line-through; color: #4A5568;">{{ task.title }}</p>
                                <button @click="handleDeleteTask('done', task.id)" class="delete-task-btn">X</button>
                            </div>
                            <span class="task-id">FERDIG</span>
                        </div>
                    </div>
                </div>
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
        font-size: 0.8rem;
        letter-spacing: 1px;
        transition: color 0.2s ease;
    }

    .back-link:hover {
        color: #4DEEEA;
    }

    .project-title {
        font-size: 2rem;
        font-weight: 700;
        color: #E2E8F0;
        margin: 10px 0 0 0;
        letter-spacing: -0.5px;
    }

    /* Trello-brettet deler seg i 3 kolonner bortover */
    .trello-board {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        align-items: start;
    }

    .trello-column {
        background-color: #161B22;
        border: 1px solid #30363D;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .column-header {
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid #222C3A;
        padding-bottom: 10px;
    }

    .column-header h2 {
        font-size: 0.9rem;
        font-family: monospace;
        letter-spacing: 1px;
        margin: 0;
        color: #64748B;
    }

    /* Små status-prikker */
    .column-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }
    .todo-dot { background-color: #FF8C00; box-shadow: 0 0 8px #FF8C00; }
    .progress-dot { background-color: #4DEEEA; box-shadow: 0 0 8px #4DEEEA; }
    .done-dot { background-color: #238636; box-shadow: 0 0 8px #238636; }

    /* Input-feltene i kolonnene */
    .task-form input {
        width: 100%;
        box-sizing: border-box;
        background-color: #090D14;
        border: 1px solid #222C3A;
        color: #E2E8F0;
        padding: 10px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.8rem;
    }

    .task-form input:focus {
        outline: none;
        border-color: #4DEEEA;
    }

    /* Oppgave-kortene */
    .column-tasks {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .task-card {
        background-color: #0D1117;
        border: 1px solid #222C3A;
        border-radius: 6px;
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .task-title {
        margin: 0;
        font-size: 0.9rem;
        color: #E2E8F0;
        word-break: break-word;
    }

    .task-id {
        font-family: monospace;
        font-size: 0.65rem;
        color: #4A5568;
    }

    .task-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;
    }

    .delete-task-btn {
        background: transparent;
        border: none;
        color: #64748B;
        font-family: monospace;
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        padding: 0;
        transition: color 0.15s ease;
    }

    .delete-task-btn:hover {
        color: #FF4500;
        text-shadow: 0 0 6px #FF4500;
    }

    /* Responsivitet hvis skjermen blir veldig smal */
    @media (max-width: 900px) {
        .trello-board {
            grid-template-columns: 1fr;
        }
    }

    /* Eventuelle feilmeldinger */
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