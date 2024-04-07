<template>
  <!-- Container for displaying questions original source that has been modified: https://codesandbox.io/p/sandbox/vue3-accordion-bwdxx?file=%2Fsrc%2FApp.vue -->
  <div>
    <!-- Iterate over each question and display Question component -->
    <Question
      v-for="question in questions"
      :key="question.id"
      :title="question.title"
      :info="question.info"
    />
  </div>
</template>

<script>
import Question from "./Question.vue";

export default {
  name: "App",
  components: {
    Question,
  },
  props: {
    // Array of questions to be displayed
    questions: Array,
  },
};
</script>

<style>
/* Resetting default styles */
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
body {
  background: var(--clr-purple); /* Background color */
  color: var(--clr-grey-1); /* Text color */
  line-height: 1.5; /* Line height */
  font-size: 0.875rem; /* Font size */
}

main {
  min-height: 100vh; /* Minimum height of the viewport */
  /* Using flexbox for centering content */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
