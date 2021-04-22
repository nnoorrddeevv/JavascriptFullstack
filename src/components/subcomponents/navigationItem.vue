<template>
    <router-link class="navItem" v-bind:to="routePath">{{linkText}}</router-link>
</template>

<script>
export default {
    
    name: "navigationItem",
    props: ['routePath', 'linkText'],
    setup() {
        
    },
}
</script>

<style scoped>

.navItem 
{
    margin: 0 0.5%;
}

</style>