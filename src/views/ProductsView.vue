<template>
  <div class="margin-top">
    <v-container>
      <h1> products </h1>
      <div class="">
        <v-row v-if="!store.loading" align="start" no-gutters>
          <v-col v-for="n in 12" :key="n" cols="12" md="6" lg="3">
            <v-skeleton-loader class="ma-3" :elevation="2" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else align="start" no-gutters>
          <v-col v-for="item in store.products" :key="item.id"  cols="12" md="6" lg="3">
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
import { onMounted } from 'vue';
import { useProductsStore } from '@/stores/products'
const store = useProductsStore();

onMounted(() => {
  store.getProducts();
});
</script>
<style>

</style>