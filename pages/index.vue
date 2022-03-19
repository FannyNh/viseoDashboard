<template>
  <main class="main">
    <SearchBar/>
    <div v-for="user in getSearchResults"
         :key="user.id">
      <div>
        <div @click="saveUser({
        avatar_url: user.avatar_url,
        login: user.login,
        id: user.id,
        repos_url: user.repos_url,
      }
           )">
          <NuxtLink :to="'/user/'+user.id">
            <p>{{ user.login }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapGetters("user", ["getSearchResults"]),
  },
  methods: {
    ...mapActions({saveUser: 'user/saveUser'})
  }

};
</script>
