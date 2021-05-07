<template>
  <h1>Reactive</h1>
  <div>Count: {{ state.counter.currentValue }}</div>
  <p v-if="state.counter.currentValue === state.counter.max">
    The counter has reached the max
  </p>
  <p>
    <button @click="increment()">Increment</button>
  </p>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    // we define a reactive variable
    const state = reactive({
      counter: {
        currentValue: 1,
        max: 10,
      },
    });

    // no need to use value for reactive object
    console.log(`current counter value is ${state.counter.currentValue}`);

    // a method to act on the variuble
    function increment() {
      if (state.counter.currentValue < state.counter.max) {
        ++state.counter.currentValue;
      } else {
        console.log("The counter has reached the maximum");
      }
    }

    return {
      state,
      increment,
    };
  },
});
</script>
