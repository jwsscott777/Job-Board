<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Name" v-model="name">
      <input type="email" required placeholder="email" v-model="email">
      <button>Submit</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import { projectFireStore, timestamp } from '../firebase/config';
export default {
    setup() {
        const name = ref('')
        const email = ref('')
        const router = useRouter();

        const handleSubmit = async () => {
           const studentInfo = {
                name: name.value,
                email: email.value,
                createdAt: timestamp()
           }
            const res = await projectFireStore.collection("students").add(studentInfo);
     

            router.push({ name: "JobList"});
        }

        return { name, email, handleSubmit }
    }

}
</script>

<style>
form {
    width: 300px;
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
}
</style>