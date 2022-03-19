<template>
  <div className="search-form">
    <div id="search-in-form">
      <input
        id="searchTxt"
        v-model=searchTxt
        placeholder="Search a github user by username"
        type="text"
      />
    </div>
    <button @click="searchUsers(searchTxt)">Search</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      searchTxt: "",
      users: [],
    }
  },

  methods: {
    log(searchTxt) {
      console.log('searchTxt' + searchTxt)
    },
    ...mapActions({
      searchUsers: 'user/searchUsers',
    })
    // this.searchResult = await this.$axios.$get(`https://api.github.com/search/users?q=${this.searchTxt}`).then(res => {
    //   console.log(res)
    //   return res
    // })
  },
};
</script>
