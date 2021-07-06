<template>
  <div class="signup">
       <img alt="Vue logo" src="../assets/mcfatLogo.png" />
       <h3>Please enter your job interest along with your name and email<br/> so you can be contacted for more information.</h3>
      <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Job Title" v-model="job">
      <input type="text" required placeholder="Name" v-model="name">
      <input type="email" required placeholder="email" v-model="email">
      <button class="btn">Submit</button>
  </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import { projectFireStore, timestamp } from '../firebase/config';
export default {
    setup() {
        const job = ref('')
        const name = ref('')
        const email = ref('')
        const router = useRouter();

        const handleSubmit = async () => {
           const studentInfo = {
               job: job.value,
                name: name.value,
                email: email.value,
                createdAt: timestamp()
           }
            const res = await projectFireStore.collection("students").add(studentInfo);
     
            alert("Thank you! You will be contacted soon.")
            router.push({ name: "JobList"});
        }

        return { job, name, email, handleSubmit }
    }

}
</script>

<style scoped>
.signup {
    background-color: aquamarine;
}
.signup h3 {
    padding: 20px;
}
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
.btn {
    padding: 5px 20px 5px 20px;
    margin-top: 20px;
    background: blue;
    color: white;
    border-radius: 20px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

</style>