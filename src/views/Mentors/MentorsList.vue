<template>
  <v-container fluid>
    <v-row justify="center" v-if="mentors.length > 0">
      <v-col cols="12" md="4" v-for="mentor in mentors" :key="mentor.id">
        <mentorItem :mentor="mentor" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import mentorItem from "@/components/Mentors/mentorItem.vue";

export default {
  components: {
    mentorItem,
  },
  computed: {
    ...mapGetters({
      mentors: "mentors/mentors",
    }),
  },
};
</script>
