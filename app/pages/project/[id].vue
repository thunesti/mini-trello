<script setup lang="ts">
import {useRoute} from 'vue-router'
import { useBoardStore } from '~/stores/boardStore';

const route = useRoute()
const boardStore = useBoardStore()

const projectId = Number(route.params.id)

const project = boardStore.projects.find(
    (p) => p.id === projectId
)
</script>

<template>
    <div v-if="project">
        <h1>{{ project.name }}</h1>

        <h2>To do</h2>

        <div
            v-for="task in project.todo"
            :key="task.id"
        >
            {{ task.title }}
        </div>

        <h2>Done</h2>

        <div
            v-for="task in project.done"
            :key="task.id"
        >
            {{ task.title }}
        </div>
    </div>
</template>