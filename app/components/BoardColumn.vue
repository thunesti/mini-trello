<script>
import TaskCard from './TaskCard.vue';
const headerlist = ["Test","Test2"]
const desclist = ["Test text","Test text again"]
</script>
<template>
    <div>
        <TaskCard v-for="x in headerlist"></TaskCard>
    </div>
</template>