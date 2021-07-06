
<template>
 <h1>Job Listings</h1>
  <div class="jobs">
    <img alt="Vue logo" src="../assets/mcfatLogo.png" />
    <div v-if="error">{{ error }}</div>
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
    <div v-for="(job, index) in jobs" :key="job.id" :data-index="index">
       <JobCard :job="job"/>
    </div>
    </transition-group>
    <div v-if="!jobs" class="spinBack">
    <Rotation class="spinner" />
    <h1>No sign ups yet</h1>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

import JobCard from "@/components/JobCard.vue";
import getJobs from "@/composables/getJobs";
import Rotation from "@/components/Rotation.vue";
import gsap from "gsap";

export default {
  name: "JobList",
  components: {
    JobCard,
    Rotation
  },
  setup() {
    const { jobs, error, load } = getJobs();

    load()
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };

    return { jobs, error, beforeEnter, enter }
  }
};
</script>

<style scoped>
.jobs {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aquamarine;
}
.jobs img {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  padding-bottom: 20px;
}
.spinner {
  background-color: #0f5de6;
}
.spinBack {
  background-color: #171e29;
  padding-top: 20px;
  min-height: 80vh;
}
</style>
