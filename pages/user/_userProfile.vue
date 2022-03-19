<template>
  <main class="main">
    User Profile
    <!--    {{userData}}-->
    <div class="userInfo">
      {{ userData.avatar_url }}
      <div>---------</div>
      {{ userData.login }}
    </div>
    <div class="repositories">
      {{ userData.id }}
      <div>---------</div>
      <div>
        <ul  >
          <li v-for="repo in getUser.repos" :key="repo.id">
            {{ repo.full_name }}
          </li>

        </ul>
      </div>
    </div>
  </main>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "IndexPage",
  data() {
    return {
      searchTxt: "",
      userData: this.$store.state.user.user,
    }
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
};
</script>
