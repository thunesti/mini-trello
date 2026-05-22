<script setup lang="ts">
import {useBoardStore} from '~/stores/boardStore'

const boardStore = useBoardStore()
</script>

<template>
    <div>
        <h1>Dashboard</h1>

        <div
            v-for="project in boardStore.projects"
            :key="project.id"
        >
            <h2>{{ project.name }}</h2>
        </div>
    </div>
</template>