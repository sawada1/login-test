import { ref } from 'vue'
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api.ts';

export const useProductsStore = defineStore('products', () => {
    interface Product{
        userId: number;
        id: number;
        title: string;
        body: string;
      }
      const products = ref<Product[]>([]);
      const product = ref<Product>();
      const loading = ref(false);
      const loading2 = ref(false);
      const getProducts = async () => {
        loading.value = false;
        const result = await useApi().get<Product[]>('posts');
        if (result.status === 200) {
          products.value = result.data;
          loading.value = true;
        }
      }

      const getProduct = async (id:number | string) => {
        loading2.value = false;
        const result = await useApi().get<Product>(`posts/${id}`);
        if (result.status === 200) {
            product.value = result.data;
            loading2.value = true;
        }
    }

  return { getProducts , getProduct , loading , loading2 , products , product }
})
