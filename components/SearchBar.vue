<template>
  <div class="searchForm">
      <input
        class="searchForm__text"
        v-model=searchTxt
        placeholder="Search a github user by username"
        type="text"
      />
    <button class="searchForm__btn" @click="searchUsers(searchTxt)">Search</button>

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

<style lang="scss" scoped>
.searchForm{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 100px auto;
  width: 80%;
  height: 60px;
  display: flex;
  &__text {
    width: calc(100% - 80px);
    border: $border-radius-small solid $blue;
    border-right: none;
    height: 100%;
    border-radius: $border-radius-small 0 0 $border-radius-small;
    outline: none;
    color: $black;
    &:focus{
      color: $blue;
    }
  }
  &__btn {
    width: 80px;
    height: 100%;
    border: 1px solid $blue;
    background:$blue;
    text-align: center;
    color: $white;
    border-radius: 0 $border-radius-small $border-radius-small 0;
    cursor: pointer;
    font-size: $font-size-ml;
  }
}
</style>
