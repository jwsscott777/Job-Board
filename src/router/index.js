import { createRouter, createWebHistory } from "vue-router";
import JobList from "../views/JobList.vue";
import JobDetails from "../views/JobDetails.vue";
import Create from "../views/Create.vue";
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm";
import NameDetails from "../views/NameDetails.vue";
import NameList from "../views/NameList.vue";

const routes = [
  {
    path: "/",
    name: "JobList",
    component: JobList,
  },
  {
    path: "/jobs/:id",
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  {
    path: "/create",
    name: "Create",
    component: Create, 
  },
  {
    path: "/signup",
    name: "SignupForm",
    component: SignupForm
  },
  {
    path: "/login",
    name: "LoginForm",
    component: LoginForm
  },
  {
    path: "/student/:id",
    name: "NameDetails",
    component: NameDetails,
    props: true,

  },
  {
    path: "/nameList",
    name: "NameList",
    component: NameList,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
