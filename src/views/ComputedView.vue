<template>
  <h1>Computed</h1>
  <div>Count: {{ state.counter.currentValue }}</div>
  <p v-if="isCounterBlocked === true">The counter has reached the max</p>
  <p>
    <button @click="increment()">Increment</button>
  </p>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    // we define a reactive variable
    const state = reactive({
      counter: {
        currentValue: 1,
        max: 10,
      },
    });

    const isCounterBlocked = computed<boolean>(() => {
      return state.counter.currentValue >= state.counter.max;
    });

    // we need to use the value keyword as for ref
    console.log(`counter is blocked ${isCounterBlocked.value}`);

    // a method to act on the variuble
    function increment() {
      // we use the computed prop here
      if (!isCounterBlocked.value === true) {
        ++state.counter.currentValue;
      } else {
        console.log("The counter has reached the maximum");
      }
    }

    return {
      state,
      increment,
      isCounterBlocked,
    };
  },
});
</script>
