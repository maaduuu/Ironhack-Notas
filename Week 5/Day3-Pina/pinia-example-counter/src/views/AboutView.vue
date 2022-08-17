<template>
  <div class="about">
    <h1>About Pinia Counter</h1>

    <div class="counter">
      <button class="indbutton" @click="storeCounter.increaseCount"> {{storeCounter.count}}</button>
    </div>
  </div>
</template>


<script setup>
import {useCounterStore} from '../stores/counter'

const storeCounter = useCounterStore();
</script>