<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-card class="z-nav">
        <v-layout>
            <v-app-bar color="primary" class="px-10 ">
                <div class="d-flex align-center justify-space-between	w-100">
                    <div class="d-flex align-center">
                        <v-app-bar-nav-icon v-if="!drawer" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                        <v-btn v-else @click="drawer = false" icon="mdi mdi-close">
                        </v-btn>
                         
                        <RouterLink to="/" class="text-white">
                            <v-toolbar-title class="text-h5"> Vartur </v-toolbar-title>
                        </RouterLink>
                    </div>
    
                    <div class="px-3 d-flex ga-4">
                        <v-menu v-if="store.isLoggedIn">
                            <template v-slot:activator="{ props }">
                                <button class=" d-flex align-center	 ga-2" color="primary" v-bind="props">
                                    <v-avatar image="https://placehold.co/400" size="45"></v-avatar>
                                    <span class="text-white"> admin</span>
                                </button>
                            </template>
                            <v-list class="px-10 mt-3">
                                <h5 class="font-bold text-center text-h6	">admin</h5>
                                <v-btn @click="store.logOut()" color="primary" class="mt-3"> logout </v-btn>
                            </v-list>
                        </v-menu>
                        <v-dialog v-else v-model="store.dialog" max-width="800" persistent>
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn v-bind="activatorProps" style="background-color: white;" color="primary"> login
                                </v-btn>
                            </template>
                            <v-sheet class="mx-auto form-auth">
                                <v-form @submit.prevent class="pa-3">
                                    <v-text-field v-model="store.firstName" :rules="firstNameRules" label="First name" required />
    
                                    <v-text-field v-model="store.password" :rules="passwordRules" label="Password" type="password"
                                        required />
                                     
                                        <div class="">
                                            <v-btn class="mt-2" type="submit" block @click="store.onSubmit()">Submit</v-btn>
                                            <v-btn class="mt-2" @click="store.dialog = false" type="submit" block>cancel</v-btn>

                                        </div>
                                </v-form>
                            </v-sheet>
                        </v-dialog>
                    </div>

                </div>

            </v-app-bar>

            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
                <div class="pa-4 d-flex flex-column ga-4">
                    <router-link @click="drawer = false" to="/categories" class="text-primary text-h6"> Categories </router-link>
                    <router-link @click="drawer = false" to="/products" class="text-primary text-h6"> Products </router-link>
                </div>
            </v-navigation-drawer>
        </v-layout>

        <v-snackbar-queue v-model="store.messages" color="error"></v-snackbar-queue>
        <v-snackbar-queue v-model="store.messages2" color="success"></v-snackbar-queue>

    </v-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore();
const drawer = ref(false);
const firstNameRules = [
    (value: string) => !!value || 'First name is required',
]

const passwordRules = [
    (value: string) => !!value || 'Password is required',
]


</script>
<style lang="scss">
.form-auth {
    width: 500px;
}
@media (max-width: 770px) {
    .form-auth {
    width: 330px;
}
}
</style>