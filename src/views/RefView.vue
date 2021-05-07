<template>
  <h1>Ref</h1>
  <div>Ref value: {{ myvar }}</div>
  <p>
    <button @click="mutateFoo()">Mutate ref</button>
  </p>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // we define a reactive variable
    const myvar = ref<number>(1);

    // to read the value of the object we use the value keyword
    console.log(`myvar value is ${myvar.value}`);

    // a method to act on the variuble
    function mutateFoo() {
      ++myvar.value;
    }

    return {
      myvar,
      mutateFoo,
    };
  },
});
</script>
