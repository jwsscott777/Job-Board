
<template>
 <h1>Job Listings</h1>
  <div class="jobs">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="error">{{ error }}</div>
    <div v-if="jobs.length">
       <JobCard v-for="job in jobs" :key="job.id" :job="job"/>
    </div>
   <div v-else>
   <Rotation />
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

import JobCard from "@/components/JobCard.vue";
import getJobs from "@/composables/getJobs";
import Rotation from "@/components/Rotation.vue";

export default {
  name: "JobList",
  components: {
    JobCard,
    Rotation
    
  },
  setup() {
    const { jobs, error, load } = getJobs();

    load()

    return { jobs, error }
  }
};
</script>

<style scoped>
.jobs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
