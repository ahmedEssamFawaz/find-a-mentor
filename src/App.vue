<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">Find a Mentor</div>

      <v-spacer></v-spacer>

      <v-btn text to="/mentors"> All Mentors </v-btn>
      <v-btn text to="/requests"> Requests </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.v-btn--active {
  color: red;
}
</style>
