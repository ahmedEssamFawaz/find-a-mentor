import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/mentors" },
  {
    path: "/mentors",
    name: "home",
    component: () => import("../views/Mentors/MentorsList.vue"),
  },
  {
    path: "/mentors/:id",
    name: "about",
    component: () => import("../views/Mentors/MentorDetail.vue"),
    children: [
      {
        path: "/contact",
        name: "about2",
        component: () => import("../views/Requests/ContactMentor.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "about3",
    component: () => import("../views/Mentors/MentorRegisteration.vue"),
  },
  {
    path: "/requests",
    name: "about4",
    component: () => import("../views/Requests/RequestsReceived.vue"),
  },
  {
    path: "/:notFound(.*)",
    name: "about5",

    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
