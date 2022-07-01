<template>
  <div>
    <profile v-show="this.status == 0"></profile>
    <lookin v-show="this.status == 1"></lookin>
    <addin v-show="this.status == 2"></addin>
    <lookout v-show="this.status == 3"></lookout>
    <addout v-show="this.status == 4"></addout>
    <statistic v-show="this.status == 5"></statistic>
    <birthcheck v-show="this.status == 6"></birthcheck>
    <addbirthcheck v-show="this.status == 7"></addbirthcheck>
    <skill v-show="this.status == 8"></skill>
  </div>
</template>

<script>
import profile from "../views/profile.vue";
import lookin from "../views/lookin.vue";
import addin from "../views/addin.vue";
import lookout from "../views/lookout.vue";
import addout from "../views/addout.vue";
import statistic from "../views/statistic.vue";
import birthcheck from "../views/birthcheck.vue";
import addbirthcheck from "../views/addbirthcheck.vue";
import skill from "../views/skill.vue";
import { mapState } from "vuex";
export default {
  name: "indexMain",
  components: { profile, lookin, addin, lookout, addout, statistic, birthcheck, addbirthcheck, skill },
  data() {
    return {};
  },
  computed: { ...mapState(["status"]) },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 400px 400px 400px;
  background-color: rgb(235, 232, 232);
}
</style>
