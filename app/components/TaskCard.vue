<script>
 export default {
    props: [
        'header',
        'text'
    ]
 }
</script>
<template>
<div>
    <h2>{{ header }}</h2>
    <p> {{ text }}</p>
</div>
</template>