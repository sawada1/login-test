<template>
    <div style="min-height: 100vh;">
        <v-container class="margin-top">
            <div v-if="!store.loading2" class="d-flex align-center justify-center" style="height: 100vh;">
                <v-progress-circular color="primary" indeterminate :size="128" :width="9"></v-progress-circular>
            </div>
            <div v-else>
                <img src="https://placehold.co/600x400" class="w-100"
                    style="height: 400px; object-fit: cover; border-radius: 16px;" alt="">
                <h1> {{ store.product?.title }} </h1>
                <p> {{ store.product?.body }} </p>
            </div>

        </v-container>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue';
import { useProductsStore } from '@/stores/products'
const store = useProductsStore();
const route = useRoute()
const userId = route.params.id;
onMounted(() => {
    store.getProduct(userId);
});
</script>
<style lang="">

</style>