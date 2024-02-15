<script lang="ts">
import { defineComponent } from "vue";
import HeaderLineComponent from "@/components/HeaderLine/HeaderLineComponent.vue";
export default defineComponent({
  name: "KontaktView",
  components: {
    HeaderLineComponent,
  }
  });
</script>

<template>
  <div>
    <div class="position-relative">
      <HeaderLineComponent class="position-absolute top-0"/>
    </div>
      kontakt
  </div>
</template>
