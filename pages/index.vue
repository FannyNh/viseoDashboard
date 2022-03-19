<template>
  <main class="main">
    <SearchBar/>
    <div v-for="user in getSearchResults"
         :key="user.id">
      <div>
        <div @click="updateState({user : user})">
          <NuxtLink :to="'/user/'+user.id" >
            <p>{{ user.login }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapGetters("user", ["getSearchResults"]),
  },
  methods:{
    ...mapMutations(
      // "user", ["updateState"],
      {
        updateState: 'user/updateState'
      }
    )
  }

};
</script>
