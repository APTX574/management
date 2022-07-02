<template>
  <div>
    <profile v-show="this.status == 0"></profile>
    <Income v-show="this.status == 1"></Income>
    <addin v-show="this.status == 2"></addin>
    <lookout v-show="this.status == 3"></lookout>
    <addout v-show="this.status == 4"></addout>
    <statistic v-show="this.status == 5"></statistic>
    <setting v-show="this.status == 6"></setting>
    <addbirthcheck v-show="this.status == 7"></addbirthcheck>
    <skill v-show="this.status == 8"></skill>
  </div>
</template>

<script>
import profile from "../views/profile.vue";
import Income from "../views/Income.vue";
import addin from "../views/addin.vue";
import lookout from "../views/lookout.vue";
import addout from "../views/addout.vue";
import statistic from "../views/statistic.vue";
import setting from "../views/setting.vue";
import addbirthcheck from "../views/addbirthcheck.vue";
import skill from "../views/skill.vue";
import { mapState } from "vuex";

export default {
  name: "indexMain",
  components: {profile, Income,  addin, lookout, addout, statistic, setting, addbirthcheck, skill },
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
