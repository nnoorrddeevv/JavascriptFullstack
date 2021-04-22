<template>
    <div id="nav">
        <navigationItem routePath="/" linkText="(logo)"/>
        <navigationItem routePath="/contact" linkText="Kontakt"/>
        <navigationItem routePath="/about" linkText="Informasjon"/>
        <navigationItem routePath="/products" linkText="Produkter"/>
    </div>
</template>

<script>
import navigationItem from './subcomponents/navigationItem.vue'
export default {
    
    components: 
    {
        navigationItem
    },
    setup() 
    {
        
    },
}
</script>


<style scoped>
#nav 
{
  padding: 30px;
  background-image: linear-gradient(180deg, rgba(43, 61, 79, 0.3), rgba(101, 128, 155, 0));
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav :nth-child(1)  { 
    flex-grow: 10;
    

}
#nav :nth-child(n+2) { 
    flex-grow: 0.5; 
}

#nav a 
{
  color: rgb(43, 61, 79);
  text-decoration: none;
}

#nav a:nth-child(n+2)  {
    border-bottom: 1px solid rgba(43, 61, 79, 0.8);
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>