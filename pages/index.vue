<template>
  <main class="main">
    <SearchBar/>
    <div class="usersList">
      <div
          class="usersList__user"
          v-for="user in getSearchResults"
           :key="user.id">
          <div class="usersList__user__card" @click="saveUser({
        avatar_url: user.avatar_url,
        login: user.login,
        id: user.id,
        repos_url: user.repos_url,
      }
           )">
            <NuxtLink class="card" :to="'/user/'+user.id">
              <div class="card__img"><img :src="user.avatar_url" alt="avatar user"/></div>
              <h3 class="card__name">{{ user.login }}</h3>
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
<style lang="scss">
.usersList{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 200px auto;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__user{
    width: 200px;
    height: 110px;
    overflow: hidden;
    border-radius: $border-radius-small;
    margin: 4px;
    &__card{
      height: 100%;
      .card{
        height: 100%;
        display: block;
        background-color: $blue;
        border: 1px solid $blue;
        position: relative;
        &__img{
          height: 50px;
          width: 50px;
          border-radius: $border-radius-small;
          overflow: hidden;
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          z-index: 4;
          top: 10px;
          img{
            height: 100%;
            width: auto;
          }
        }
        &__name{
          background-color: $light-blue;
          position: absolute;
          font-size: $font-size-s;
          font-weight: $medium-font-weight;
          text-align: center;
          bottom: 0;
          height: 70px;
          width: 100%;
          line-height: 70px;
          color: $blue;
        }
      }
    }
  }
}

</style>
