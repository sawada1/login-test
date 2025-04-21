<template>
    <div class="margin-top">
        <v-container>
            <h1> Categories </h1>
            <v-data-table-server v-model:items-per-page="store.itemsPerPage" :headers="store.headers" :items="store.serverItems"
                :items-length="store.totalItems" :loading="store.loading" item-value="name"
                @update:options="store.loadItems"></v-data-table-server>
        </v-container>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoriesStore } from '@/stores/categories'
const store = useCategoriesStore();

onMounted(() => {
    store.getCategories();
});

</script>
<style></style>