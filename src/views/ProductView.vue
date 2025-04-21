<template>
    <div style="min-height: 100vh;">
        <v-container class="margin-top">
            <div v-if="!loading" class="d-flex align-center justify-center" style="height: 100vh;">
                <v-progress-circular color="primary" indeterminate :size="128" :width="9"></v-progress-circular>
            </div>
            <div v-else>
                <img src="https://placehold.co/600x400" class="w-100"
                    style="height: 400px; object-fit: cover; border-radius: 16px;" alt="">
                <h1> {{ product?.title }} </h1>
                <p> {{ product?.body }} </p>
            </div>

        </v-container>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useApi } from '@/composables/api.ts';
import { onMounted, ref } from 'vue';
const loading = ref(false);
const route = useRoute()
const userId = route.params.id;
const product = ref();
const getData = async () => {
    loading.value = false;
    const result = await useApi().get(`posts/${userId}`);
    if (result.status === 200) {
        product.value = result.data;
        loading.value = true;
    }
}
onMounted(() => {
    getData();
});
</script>
<style lang="">

</style>