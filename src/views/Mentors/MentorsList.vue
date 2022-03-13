<template>
  <v-container fluid>
    <v-row justify="center" v-if="mentors.length > 0">
      <v-checkbox
        v-for="area in uniqueAreas"
        :key="area"
        :label="area"
        :value="area"
        v-model="selectedAreas"
        @change="passRenderedMentors"
      ></v-checkbox>

      <v-col cols="12" md="4" v-for="mentor in toBeRendered" :key="mentor.id">
        <mentorItem :mentor="mentor" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import mentorItem from "@/components/Mentors/mentorItem.vue";

export default {
  watch: {
    selectedAreas(newVal, oldVal) {
      if (oldVal.length > newVal.length) {
        const removed = [];
        // console.log(newVal, oldVal);
        //get last element of old val
        oldVal.map((e) => {
          return !newVal.includes(e) && removed.push(e);
        });
        //we get the removed area
        this.removedElement = removed;
      }
    },
    removedElement(newVal) {
      this.toBeRendered.map((e) => {
        if (e.areas.includes(newVal[0]) && e.areas.length == 1) {
          //getIndex in arr
          const idx = this.toBeRendered.indexOf(e);
          this.toBeRendered.splice(idx, 1);
        }
      });
    },
  },
  data() {
    return {
      uniqueAreas: null,
      selectedAreas: [],
      toBeRendered: [],
      removedElement: [],
    };
  },
  components: {
    mentorItem,
  },
  methods: {
    getMentorsTech() {
      //get all techs
      let getAreas = this.mentors.flatMap((e) => {
        return e.areas;
      });

      let uniqueAreas = getAreas.filter((pointer, index) => {
        return getAreas.indexOf(pointer) === index;
      });
      this.uniqueAreas = uniqueAreas;
    },
    passRenderedMentors() {
      if (this.selectedAreas.length > 0) {
        this.selectedAreas.map((x) => {
          //['frontend','backend']
          return this.mentors.filter((e) => {
            return e.areas.includes(x) && this.pushElement(e);
            // return this.pushElement(e);
          });
        });
      } else {
        this.toBeRendered = [];
      }

      // this.toBeRendered.push(x);
    },
    pushElement(e) {
      // console.log(e);
      const index = this.toBeRendered.indexOf(e);
      index > -1 || this.toBeRendered.push(e);
    },
    deleteElement(e) {
      const index = this.toBeRendered.indexOf(e);
      // console.log("ddd", e.areas[0], x);
      if (index > -1 && e.areas.length == 1) {
        //already exist need to be remove
        // console.log(e);
        // console.log(
        //   this.toBeRendered.filter((x) => {
        //     if (x.areas[0] == e.areas[0]) {
        //       console.log(x.areas[0], e.areas[0]);
        //       const index = this.toBeRendered.indexOf(x.areas);
        //       this.toBeRendered.splice(index, 1);
        //     }
        //   })
        // );
      }
    },
  },
  computed: {
    ...mapGetters({
      mentors: "mentors/mentors",
    }),
  },
  created() {
    this.getMentorsTech();
    // this.passRenderedMentors();
  },
};
</script>
