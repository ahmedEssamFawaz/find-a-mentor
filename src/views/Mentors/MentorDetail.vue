<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <template>
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <div class="d-flex justify-space-between">
              <v-card-title
                >{{ ourMentor.firstName }}
                {{ ourMentor.lastName }}</v-card-title
              >
              <v-card-title>{{ ourMentor.hourlyRate }} $</v-card-title>
            </div>

            <v-card-text>
              <div>
                {{ ourMentor.description }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tech skills</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip v-for="areas in ourMentor.areas" :key="areas">{{
                  areas
                }}</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="deep-purple lighten-2"
                text
                :to="`/mentors/${ourMentor.id}/contact`"
              >
                Contact Mentor
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      ourMentor: {},
    };
  },
  created() {
    console.log(this.$route.params.id);

    this.ourMentor = this.$store.getters["mentors/mentors"].find((e) => {
      return e.id == this.$route.params.id;
    });
  },
};
</script>
