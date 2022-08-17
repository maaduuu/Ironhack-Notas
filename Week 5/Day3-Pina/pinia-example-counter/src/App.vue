

<template>
 <div class="home">
 
  <div class="nav-bar">
  <RouterLink to="/">Home</RouterLink>
  
  <RouterLink to="/about">About</RouterLink>  
  </div>

 <RouterView />

 </div>
        
 
    

  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
</script>

<style>

.nav-bar{
  display: flex;
  justify-content:space-around;
}

.counter{
 align-items: center;
}

.indbutton{
  height: 4rem;
  width: 4rem;
  font-size: 2rem;
  
}

</style>
