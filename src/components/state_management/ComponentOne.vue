<template>
  <div>Count: {{ state.counter.currentValue }}</div>
  <p>
    <button @click="simpleIncrement()">Increment</button>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import state from "./state";

export default defineComponent({
  setup() {
    function simpleIncrement() {
      // we mutate the local state here
      ++state.counter.currentValue;
    }

    return {
      state,
      simpleIncrement,
    };
  },
});
</script>
