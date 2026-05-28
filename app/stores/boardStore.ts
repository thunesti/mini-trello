import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '~/types/types'

export const useBoardStore = defineStore('board', () => {
    
    // --- STATE ---
    const projects = ref<Project[]>([])

    // --- ACTIONS ---
    // Funksjonen som dashboardet kaller for å dytte inn et nytt prosjekt
    function addProject(projectName: string) {
        const newProject = {
            id: Date.now(),
            name: projectName,
            todo: [],
            inProgress: [],
            done: []
        }

        projects.value.push(newProject)

        // SIKRER LAGRING: Hver gang et prosjekt legges til, lagres hele listen i localStorage
        localStorage.setItem('trello_projects', JSON.stringify(projects.value))
    }

    // Henter de lagrede prosjektene fra nettleseren når appen starter opp
    function initializeBoards() {
        if (import.meta.client) { // Sjekker at koden kjører i nettleseren (og ikke på Nuxt-serveren)
            const savedProjects = localStorage.getItem('trello_projects')
            if (savedProjects) {
                projects.value = JSON.parse(savedProjects)
            }
        }
    }

    return {
        projects,
        addProject,
        initializeBoards
    }
})
