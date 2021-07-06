<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="job" class="job-Page">
    <img alt="Vue logo" src="../assets/mcfatLogo.png" />
    <h2>{{ job.title }} <br /><span>in</span> {{ job.location }}</h2>
    <span>Job ID: {{ job.jobId }}</span>
    <p>{{ job.description }}</p>
    <p>The job pays: {{ job.salary }} and it is {{ job.type }}</p>
    <h2>Company info:</h2>

    <h3>{{ job.company }}</h3>
    <h3>Contact: {{ job.contact }}</h3>
    <h3>{{ job.phone }}</h3>
    <div>
      <button v-if="user" @click="handleClick" class="delete">
        Delete Job
      </button>
      <button v-else @click="signUp" class="signup">SIGN UP</button>
    </div>
    <h5>Click below to access College Central Mcfatter</h5>
    <button
      @click="redirect('https://www.collegecentral.com/mcfattertech')"
      class="csb"
    >
      College Central Broward
    </button>
  </div>
</template>

<script>
import getJob from "@/composables/getJob"
import { projectFireStore } from "../firebase/config"
import { useRouter } from "vue-router"
import getUser from "@/composables/getUser"
export default {
  props: ["id"],
  setup(props) {
    const { user } = getUser()
    const router = useRouter()
    const { job, error, load } = getJob(props.id)
    load()

    const handleClick = async () => {
      await projectFireStore.collection("jobs").doc(props.id).delete()

      router.push({ name: "JobList" })
    }
    const signUp = async () => {
      router.push({ name: "SignupForm" })
    }
    const redirect = (link, target = "_blank") => {
      window.open(link, target)
    }

    return { job, error, handleClick, signUp, user, redirect }
  },
}
</script>
<style scoped>
.job-Page {
  background-color: aquamarine;

  margin: 0 auto;
}
.job-Page p {
  padding: 0 25px 0 25px;
  font-weight: bolder;
  line-height: 1.5rem;
  margin-top: 30px;
}
.job-Page h2 {
  padding: 0 16px 0 16px;
  color: blue;
}
.job-Page h3 {
  color: red;
  line-height: 1.4rem;
  margin-top: 30px;
}
.job-Page img {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  padding-bottom: 20px;
}
span {
  font-style: italic;
  color: crimson;
}
button.delete {
  margin: 10px auto;
  margin-bottom: 70px;
  background: crimson;
  color: white;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
button.signup {
  margin: 10px auto;
  padding: 10px;
  border-radius: 20px;
  background: blue;
  color: white;
}
.csb {
  margin: 10px auto;
  padding: 10px;
  border-radius: 20px;
  background: gray;
  color: white;
}
</style>
