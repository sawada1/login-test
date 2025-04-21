<template>
  <div class="margin-top">
    <v-container>
      <h1> products </h1>
      <div class="">
        <v-row v-if="!loading" align="start" no-gutters>
          <v-col v-for="n in 12" :key="n" cols="12" md="6" lg="3">
            <v-skeleton-loader class="ma-3" :elevation="2" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else align="start" no-gutters>
          <v-col v-for="item in products" :key="item.id"  cols="12" md="6" lg="3">
            <v-card class="ma-3 d-flex flex-column" hover style="min-height: 230px;" data-aos="fade-up" data-aos-duration="800">
              <v-card-item>
                <v-card-title>
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle>
                  id: {{ item.id }}
                </v-card-subtitle>
              </v-card-item>

              <v-card-text>
                {{ item.body }}
              </v-card-text>
              <router-link class="w-100 pa-2" :to="{ name: 'product', params: { id: item.id } }">
                <v-btn color="primary  w-100"> view </v-btn>
              </router-link>
            </v-card>
          </v-col>
        </v-row>


      </div>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { useApi } from '@/composables/api.ts';
import { onMounted , ref } from 'vue';
interface Product{
  userId: number;
  id: number;
  title: string;
  body: string;
}
const products = ref<Product[]>([]);
const loading = ref(false);
const getData = async () => {
  loading.value = false;
  const result = await useApi().get<Product[]>('posts');
  if (result.status === 200) {
    products.value = result.data;
    loading.value = true;
  }
}
onMounted(() => {
  getData();
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>