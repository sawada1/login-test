<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —  <strong> khaled sawada </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'

// Social media icons array
const icons = ref([
  {
    text: 'mdi-facebook',
    link: '',
  },
  {
    text: 'mdi-twitter',
    link: '',
  },
  {
    text: 'mdi-linkedin',
    link: '',
  },
  {
    text: 'mdi-instagram',
    link: '',
  },
])
</script>
