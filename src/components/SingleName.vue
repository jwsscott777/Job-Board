<template>
  <router-link
    :to="{ name: 'NameDetails', params: { id: student.id } }"
    class="name-link"
  >
    <div class="name-card">
      <h4>{{ student.name }}</h4>
      <h4>{{ student.email }}</h4>
      <h4>{{ student.job }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["student"],
};
</script>

<style scoped>
.name-card {
  padding: 10px;
  width: 250px;
  cursor: pointer;
   background-color: rgb(203, 247, 232);
  border: 1px solid #39495c;
  border-radius: 25px;
  margin-bottom: 18px;
}
.name-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(4, 106, 240, 0.932);
}
.name-link {
  color: #0d56f1ee;
  text-decoration: none;
}
</style>