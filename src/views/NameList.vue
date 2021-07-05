<template>
  <div v-if="students.length" class="name-list">
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <div v-for="(student, index) in students" :key="student.id" :data-index="index">
        <SingleName :student="student"/>
      </div>
    </transition-group>
  </div>
  <div v-else class="spinBack">
    <Rotation class="spinner" />
    <h1>No sign ups yet</h1>
  </div>
</template>

<script>
import getNames from "@/composables/getNames";
import SingleName from "@/components/SingleName.vue";
import Rotation from "@/components/Rotation.vue";
import gsap from "gsap";
export default {
  name: "NameList",
  components: { SingleName, Rotation },
  props: ["id"],
  setup(props) {
    const { students, error, loadNames } = getNames(props.id);
    loadNames();
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
    return { students, error, beforeEnter, enter };
  },
};
</script>

<style scoped>
.name-list {
  margin: 0, auto;
  padding: 20px;
  color: orange;
  min-height: 80vh;
  background-color: #171e29;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  border-radius: 20px;
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