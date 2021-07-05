<template>
  <router-link class="job-link" :to="{ name: 'JobDetails', params: { id: job.id } }">
    <div class="job-card">
<span>Posted on {{ job.postDate }} expires on {{ job.expire }}</span>
<h4>{{ job.title }}</h4>
<p>{{ snippet }}</p>
  </div>
  </router-link>
</template>

<script>
import { computed } from 'vue';
export default {
  name: "JobCard",
  props: ['job'],
  setup(props) {
    const snippet = computed(() => {
      return props.job.description.substring(0,20) + '...'
    })
    return { snippet }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  border-radius: 20px;
  
}
.job-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.job-link {
  text-decoration: none;
}
</style>
