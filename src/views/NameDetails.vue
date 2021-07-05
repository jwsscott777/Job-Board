<template>
  <div class="name-details">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="error">{{ error }}</div>
    <div v-if="student" class="name">
      <h4>{{ student.name }}</h4>
      <h4>{{ student.email }}</h4>
      
      

      <button v-if="user" @click="handleClick" class="delete">
        Delete Name
      </button>
    </div>
  </div>
</template>

<script>
import getName from "../composables/getName";
import getUser from "../composables/getUser";
import { projectFireStore } from "../firebase/config";
import { useRouter } from "vue-router";
export default {
  props: ["id"],
  setup(props) {
    const router = useRouter();
    const { student, error, loadName } = getName(props.id);
    const { user } = getUser();
    loadName();
    const handleClick = async () => {
      await projectFireStore
        .collection("students")
        .doc(props.id)
        .delete();
      console.log("clicked");
      router.push("/NameList");
    };
    return { student, error, handleClick, getName, user, loadName };
  },
};
</script>

<style>
.name-details {
  background-color: #c2cde2;
}
.name {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
}
.name p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
  color: orange;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
  background: crimson;
}
button.signup {
  margin: 10px auto;
}
</style>