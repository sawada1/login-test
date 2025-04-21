import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  let router = useRouter();
  const dialog = ref(false);
  const firstName = ref('admin');
  const password = ref('admin');
  const messages = ref<string[]>([])
  const messages2 = ref<string[]>([])
  const isLoggedIn = ref<boolean>(localStorage.getItem("login") === 'true')

const onSubmit = () => {
    if (firstName.value === 'admin' && password.value === 'admin') {
        dialog.value = false;
        firstName.value = '';
        password.value = '';
        isLoggedIn.value = true;
        localStorage.setItem("login", 'true');
        messages2.value.push('Login successful!')

    } else {
        messages.value.push('Both first name and password must be "admin"')
        // alert('Both first name and password must be "admin"')
    }
}

const logOut = () => {
    isLoggedIn.value = false;
    dialog.value = false;
    localStorage.removeItem("login");
    messages2.value.push('Log Out successful!')
    router.push('/');
}



  return { count, doubleCount, increment , isLoggedIn , onSubmit , messages2 , messages , logOut }
})
