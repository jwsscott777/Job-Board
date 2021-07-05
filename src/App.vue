
<template>
  <div id="app">
    <div id="nav">
    <router-link to="/">Job List</router-link> |
    <router-link v-if="!user" to="/login" >Admin</router-link>
    <router-link v-else to="/create">Add Job</router-link> |
    <router-link v-if="user" to="/nameList" >Students</router-link>
    <button v-if="user" @click="handleLogout">LogOut</button>
  </div>
  <router-view />
  </div>
</template>

<script>
import useLogout from "./composables/useLogout"
import getUser from "./composables/getUser"

export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("logged out");
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
  color: #2c3e50;
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
  margin: 10px auto;
  background: crimson;
}


</style>
