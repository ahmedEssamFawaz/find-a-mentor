<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <div class="d-flex justify-space-between">
      <v-card-title>{{ mentor.firstName }} {{ mentor.lastName }}</v-card-title>
      <v-card-title>{{ mentor.hourlyRate }} $</v-card-title>
    </div>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tech Skills</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="areas in mentor.areas" :key="areas">{{ areas }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        :to="`/mentors/${mentor.id}/contact`"
      >
        Contact Mentor
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple lighten-2" text :to="`/mentors/${mentor.id}`">
        More Info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["mentor"],
};
</script>
