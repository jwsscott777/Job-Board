
<template>
      <div v-if="error">
     {{ error }}
  </div>
  <div v-if="job" class="job-Page">
      <h2>{{ job.title }}</h2>
      <h2>{{ job.location }}</h2>
      <p>{{ job.description }}</p>
      <p>The job pays: {{ job.salary }} and it is {{ job.type }}</p>
      <h3>{{ job.company }}</h3>
      <h3>Contact: {{ job.contact }}</h3>
      <h3>{{ job.phone }}</h3>
      <div>
          <button v-if="user" @click="handleClick" class="delete">Delete Job</button>
          <button v-else @click="signUp" class="signup">More Info?</button>
      </div>
  </div>
   <div v-else>
       <Rotation />
   </div>
</template>

<script>
import getJob from "@/composables/getJob";
import Rotation from "@/components/Rotation.vue";
import { projectFireStore } from '../firebase/config';
import { useRouter } from 'vue-router';
import getUser from "@/composables/getUser"
export default {
   props: ['id'],
   components: { Rotation },
   setup(props) {
       const { user } = getUser();
       const router = useRouter();
       const { job, error, load } = getJob(props.id);
        load()

        const handleClick = async () => {
            await projectFireStore.collection("jobs").doc(props.id).delete();

            router.push({ name: "JobList" })
        }
        const signUp = async () => {
            router.push({ name: "SignupForm" })
        }

        return { job, error, handleClick, signUp, user }
   }
    
}
</script>
<style scoped>
.job-Page {
  max-width: 1200px;
  margin: 0 auto;
}
.job-Page p {
  color: green;
  padding: 20px;
  line-height: 1.5rem;
  margin-top: 40px;
}
.job-Page h2 {
  padding: auto;
  color: blue;
}
.job-Page h3 {
  color: red;
  line-height: 1.4rem;
  margin-top: 30px;
}
button.delete {
    margin: 10px auto;
    background: crimson;
}
button.signup {
    margin: 10px auto;
    background: green;
}
</style>

