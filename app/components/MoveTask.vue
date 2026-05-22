<script setup lang="ts">

    // Definerer hva komponenten trenger å vite fra oppgavekortet
    const props = defineProps({
        currentStatus: {
            type: String,
            required: true // f.eks. 'todo', 'in_progress' eller 'done'
        }
    })

    // Definerer signalet vi sender ut når en ny liste velges
    const emit = defineEmits(['update-status'])

    // Menyens interne tilstand (åpen/lukket)
    const isOpen = ref(false)
    const menuContainer = ref<HTMLElement | null>(null)

    // Statusalternativer
    const statusOptions = [
        { id: 'todo', label: 'TO-DO' },
        { id: 'in_progress', label: 'PÅGÅR' },
        { id: 'done', label: 'FULLFØRT' }
    ]

    function toggleMenu() {
        isOpen.value = !isOpen.value
    }

    function selectStatus(newStatus: string) {
        if (newStatus !== props.currentStatus) {
            // Sender beskjed til parent om at oppgaven skal flyttes
            emit('update-status', newStatus)
        }
        isOpen.value = false // Lukk menyen etter valg
    }

    // Lukk menyen automatisk hvis brukeren klikker utenfor den
    function handleClickOutside(event: MouseEvent) {
        if (menuContainer.value && !menuContainer.value.contains(event.target as Node)) {
            isOpen.value = false
        }
    }

    // Venter til komponenten er plassert i nettleseren (Mounted):
    onMounted(() => {
        // Nå er det 100% sikkert at 'document' eksisterer! (Finnes ikke på server-siden
        document.addEventListener('click', handleClickOutside)
    })

    // Rydder opp når komponenten fjernes for å unngå minnelekkasje:
    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })
</script>

<template>
    <div class="move-task-container" ref="menuContainer">
        <button @click="toggleMenu" class="trigger-btn">
        FLYTT_OPPGAVE
        </button>

        <div v-if="isOpen" class="dropdown-menu">
            <div class="menu-header">VELG STATUS</div>
            
            <button 
                v-for="status in statusOptions" 
                :key="status.id"
                :class="['menu-item', { active: currentStatus === status.id }]"
                @click="selectStatus(status.id)"
            >
                <span class="prompt" v-if="currentStatus === status.id">></span>
                {{ status.label }}
            </button>
        </div>
    </div>
</template>

<style scoped>
    .move-task-container {
        position: relative;
        display: inline-block;
        font-family: 'SFMono-Regular', Consolas, monospace;
    }

    .trigger-btn {
        background: transparent;
        color: #64748B;
        border: 1px solid #3A4655;
        padding: 6px 12px;
        font-size: 0.75rem;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        letter-spacing: 0.5px;
        transition: all 0.2s ease;
    }

    .trigger-btn:hover {
        color: #4DEEEA;
        border-color: #4DEEEA;
        box-shadow: 0 0 10px rgba(77, 238, 234, 0.2);
    }

    /* Selve dropdown-boksen */
    .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 6px;
        background-color: #161B22;
        border: 1px solid #3A4655;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        z-index: 50;
        min-width: 140px;
        overflow: hidden;
    }

    .menu-header {
        padding: 8px 12px;
        font-size: 0.7rem;
        color: #64748B;
        border-bottom: 1px solid #222C3A;
        font-weight: bold;
        letter-spacing: 1px;
    }

    /* Valgene i menyen */
    .menu-item {
        width: 100%;
        background: transparent;
        border: none;
        color: #E2E8F0;
        padding: 10px 12px;
        font-size: 0.8rem;
        text-align: left;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        font-family: inherit;
        transition: background 0.15s ease;
    }

    .menu-item:hover {
        background-color: #0D1117;
        color: #4DEEEA;
    }

    /* Hvis statusen er den oppgaven allerede har */
    .menu-item.active {
        color: #4DEEEA;
        font-weight: bold;
    }

    .prompt {
        color: #4DEEEA;
        font-weight: bold;
    }
</style>