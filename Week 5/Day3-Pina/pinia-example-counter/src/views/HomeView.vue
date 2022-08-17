<template>
 <div class="home">
  <h1>Pina Counter</h1>
  <h2>{{storeCounter.count}}</h2>
 <hr/>
  <div class="buttons">

    <button class="button" @click="storeCounter.decreaseCount">Disminuir</button>

    <button class="button" @click="storeCounter.increaseCount">Aumentar</button>
    
  </div>
  
  <div class="oddOrEven">

    <h4>this number is {{storeCounter.oddOrEven}} </h4>

  </div>
 </div>
</template>

<script setup>
import {useCounterStore} from '../stores/counter'

const storeCounter = useCounterStore();
</script>