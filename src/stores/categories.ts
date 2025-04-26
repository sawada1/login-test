import { ref } from 'vue'
import { defineStore } from 'pinia';
import { useApi } from '@/composables/api.ts';

export const useCategoriesStore = defineStore('categories', () => {
    interface Users {
        name: string;
        username: string;
        email: string;
        phone: string;
        website: string;
        id: number
    }
    
    // Dummy data
    const users =  ref<Users[]>([])
    
    // Fake API function
    const FakeAPI = {
        async fetch({ page, itemsPerPage, sortBy }: {
            page: number
            itemsPerPage: number
            sortBy: { key: string; order: string }[]
        }): Promise<{ items: Users[]; total: number }> {
            return new Promise(resolve => {
                setTimeout(() => {
                    const start = (page - 1) * itemsPerPage
                    const end = start + itemsPerPage
                    const items = [...users.value]
    
                    if (sortBy.length) {
                        const sortKey = sortBy[0].key as keyof Users
                        const sortOrder = sortBy[0].order
                        items.sort((a, b) => {
                            const aValue = a[sortKey]
                            const bValue = b[sortKey]
                            return sortOrder === 'desc' ? (bValue as number) - (aValue as number) : (aValue as number) - (bValue as number)
                        })
                    }
    
                    const paginated = items.slice(start, end)
                    resolve({ items: paginated, total: items.length })
                }, 500)
            })
        }
    }
    
    // Reactive data
    const itemsPerPage = ref(5)
    const serverItems = ref<Users[]>([])
    const loading = ref(false)
    const totalItems = ref(0)
    
    const getCategories = async () => {
        loading.value = true;
        const result = await useApi().get<Users[]>(`users`);
        if (result.status === 200) {
            users.value = result.data;
            loading.value = false;
        }
    }

    const headers = [
        { title: 'id', align: 'start', key: 'id' },
        { title: 'name', key: 'name', align: 'end' },
        { title: 'username', key: 'username', align: 'end' },
        { title: 'email', key: 'email', align: 'end' },
        { title: 'phone', key: 'phone', align: 'end' },
        { title: 'website', key: 'website', align: 'end' },
    ]
    
    // Data table fetch method
    const loadItems = ({ page, itemsPerPage, sortBy }: {
        page: number
        itemsPerPage: number
        sortBy: { key: string; order: string }[]
    }) => {
        loading.value = true
        FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
            serverItems.value = items
            totalItems.value = total
            loading.value = false
        })
    }


  return { itemsPerPage , serverItems , loading , totalItems , getCategories , headers , loadItems }
})
