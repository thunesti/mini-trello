<script setup>
import TaskCard from './TaskCard.vue';
const headerlist = ["Test","Test2"]
const desclist = ["Test text","Test text again"]
</script>
<template>
    <div>
        <TaskCard v-for="(header, i) in headerlist" :header="header" :text="desclist[i]"></TaskCard>
    </div>
</template>