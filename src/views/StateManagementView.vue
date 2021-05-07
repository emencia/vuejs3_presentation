<template>
  <h1>State management</h1>
  <h2>Component one</h2>
  <component-one></component-one>
  <h2>Component two</h2>
  <component-two></component-two>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ComponentOne from "@/components/state_management/ComponentOne.vue";
import ComponentTwo from "@/components/state_management/ComponentTwo.vue";

export default defineComponent({
  components: {
    ComponentOne,
    ComponentTwo,
  },
  setup() {
    // we define a reactive variable
    const myvar = ref(1);

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
