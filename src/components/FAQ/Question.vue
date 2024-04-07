<template>
  <!-- Question component original source that has been modified: https://codesandbox.io/p/sandbox/vue3-accordion-bwdxx?file=%2Fsrc%2FApp.vue-->
  <article class="question">
    <!-- Header section -->
    <header>
      <!-- Question title -->
      <h4 @click="toggleAccordion" class="question-title">{{ title }}</h4>
      <!-- Button for toggling accordion -->
      <button class="btn" @click="toggleAccordion">
        <!-- SVG icons for toggle button -->
        <svg v-show="expanded" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
        </svg>
        <svg v-show="!expanded" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </button>
    </header>
    <!-- Content section -->
    <div :style="contentStyle" class="content">
      <!-- Information paragraph -->
      <p :style="infoStyle" class="info-faq">{{ info }}</p>
    </div>
  </article>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Question",
  props: {
    // Title of the question
    title: String,
    // Information related to the question
    info: String,
  },
  setup() {
    // Reactive variable to track if the accordion is expanded or not
    const expanded = ref(false);

    // Method to toggle the accordion
    const toggleAccordion = () => {
      expanded.value = !expanded.value;
    };

    // Computed property to dynamically style the content height based on accordion state
    const contentStyle = computed(() => {
      return { "max-height": expanded.value ? "100px" : 0 };
    });

    // Computed property to dynamically style the opacity of information paragraph based on accordion state
    const infoStyle = computed(() => {
      return { opacity: expanded.value ? 1 : 0 };
    });

    return { expanded, toggleAccordion, contentStyle, infoStyle };
  },
};
</script>

<style scoped>
/* Styling for the question */
.question {
  padding: 1rem 1.5rem;
  border: 2px solid rgb(210, 184, 157);
  margin-bottom: 1rem;
  border-radius: 5px;
}

/* Styling for the question title */
.question h4 {
  text-transform: none;
  line-height: 1.5;
}

/* Styling for the question paragraph */
.question p {
  color: black;
  margin-bottom: 0;
  margin-top: 0.5rem;
}

/* Styling for the header section */
.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Styling for the question title within the header */
.question header h4 {
  margin-bottom: 0;
}

/* Styling for the button */
.btn {
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: rgb(210, 184, 157);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
  z-index: 1;
}

/* Styling for the question title cursor */
.question-title {
  cursor: pointer;
}

/* Styling for the content section */
.content {
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* Styling for the information paragraph */
.info-faq {
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  margin-right: 30px;
  margin-bottom: 30px;
  bottom: 0;
  right: 0;
  font-size: 20px;
  color: rgb(255, 255, 255);
}
</style>
