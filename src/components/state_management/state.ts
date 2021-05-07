import { reactive } from "@vue/reactivity";

// we define a local state that can be shared across components
const state = reactive({
  counter: {
    currentValue: 1,
    max: 10,
  }
});

export default state;