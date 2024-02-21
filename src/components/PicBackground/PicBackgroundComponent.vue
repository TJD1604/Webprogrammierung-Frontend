<script lang="ts">
import './PicBackgroundComponent.css';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        imagePath: String,
        title: String
    }
});
</script>

<template>
    <div class="pic-background-wrapper">
        <div class="pic-background">
            <img :src="imagePath"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;"> 
            <h1 class="title"> {{ title }}</h1>
        </div>
    </div>
</template>
