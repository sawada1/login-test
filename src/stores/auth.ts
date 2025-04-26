import { ref } from 'vue'
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const dialog = ref(false);
  const firstName = ref('');
  const password = ref('');
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
    }
}

const logOut = () => {
    isLoggedIn.value = false;
    dialog.value = false;
    localStorage.removeItem("login");
    messages2.value.push('Log Out successful!')
    router.push('/');
}



  return {isLoggedIn , onSubmit , messages2 , messages , logOut , firstName , password }
})
