<template>
  <div>
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
    questions: Array,
  },
};
</script>

<style>
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
 
  background: var(--clr-purple);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

main {
  min-height: 100vh;
  /* using flex because of better browser support */
  display: flex;
  justify-content: center;
  align-items: center;
}




</style>