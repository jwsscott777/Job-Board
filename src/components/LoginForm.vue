<template>
<h1>This page is for Admin only</h1>
<p>Please return to the Job-List page if you are a student.</p>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{ error }}</div>
      <button class="btn">Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from "../composables/useLogin"
import { useRouter } from "vue-router"
export default {
    setup(props, context) {
        const email = ref('')
        const password = ref('')

        const router  = useRouter()

        const { error, login } = useLogin()

        const handleSubmit = async () => {
           await login(email.value, password.value)
           if (!error.value) {
               context.emit('login')
               router.push({ name: "JobList"});
           } 
           if (error.value) {
               email.value = ''
               password.value = ''
           }
           
        }

        return { email, password, handleSubmit, error }
    }

}
</script>

<style scoped>
form {
    width: 300px;
    height: 80vh;
    margin: 20px auto;
}
label {
    display: block;
    margin: 20px 0 auto;
}
input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
p {
    color: crimson;
}
.btn {
    padding: 5px 20px 5px 20px;
    margin-top: 20px;
    background: blue;
    color: white;
    border-radius: 20px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>