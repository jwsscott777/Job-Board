
<template>
  <div id="app">
    <div id="nav">
    <router-link to="/">Job List</router-link> |
    
    <router-link v-if="user" to="/create">Add Job</router-link> |
    <router-link v-if="!user" to="/login" >Admin</router-link>
    <router-link v-if="user" to="/nameList" >Students</router-link>
    <button v-if="user" @click="handleLogout">Admin LogOut</button>
  </div>
  <router-view />
  </div>
</template>

<script>
import useLogout from "./composables/useLogout"
import getUser from "./composables/getUser"
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("logged out");
        router.push({ name: 'JobList'});
      }
    }
    

    return { user, handleLogout }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #040a11;
  background-color: rgb(203, 247, 232);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  
}
h4 {
  font-size: 20px;
}
#nav button {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px auto;
  color: azure;
  background: crimson;
  border-radius: 20px;
}


</style>
