<template>
  <main class="main">
    <section class="infoUser">
      <h2 class="infoUser__name"> User Profile {{ user.login }}</h2>
      <div class="infoUser__img"><img :src="user.avatar_url" alt="avatar user"/></div>
    </section>
    <div class="repositories">
      <h3 class="card__name mt-32">
        Repositories
      </h3>
        <ul class="repositoriesList">
          <li class="repositoriesList__user" v-for="repo in user.repos" :key="repo.id">
            <div class="repositoriesList__user__card" @click="updateState({
            repo:{
                name:repo.name,
                language:repo.language,
                stargazers_count:repo.stargazers_count,
                description:repo.description,
                created_at:repo.created_at,
                updated_at:repo.updated_at,
                url:repo.url,
            }})">
              <NuxtLink class="card" :to="'/user/'+userId+'/repo/'+repo.id">
                <h4 class="card__name">
                  {{ repo.full_name }}
                </h4>
              </NuxtLink>
            </div>
          </li>

        </ul>
      </div>
  </main>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  name: "UserProfile",
  data() {
    return {
      userData: this.$store.state.user.user,
      userId: this.$route.params.userId
    }
  },
  computed: {
    user(){
      return this.$store.getters['user/getUser']
    }
  },
  methods: {
    ...mapMutations({updateState: 'user/updateState'})
  }
};
</script>
<style lang="scss">
.infoUser{
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: $border-radius-small;
  background-color: $light-blue;
  &__img{
    height: 150px;
    width: 150px;
    border-radius: $border-radius-small;
    overflow: hidden;
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
    font-size: $font-size-xl;
    font-weight: $bold-font-weight;
    text-align: center;
    height: 70px;
    width: 100%;
    line-height: 70px;
    color: $blue;
  }
}
.repositories{
  .repositoriesList{
    position: unset;
    margin: 32px auto;
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &__user{
      width: 100%;
      height: 110px;
      overflow: hidden;
      border-radius: $border-radius-small;
      margin: 4px;
      border: 1px solid $blue;
      &__card{
        height: 100%;
        .card{
          display: block;
          height: 100%;
          color: $blue;
          &__name{
            font-size: $font-size-ml;
            font-weight: $medium-font-weight;
            text-align: center;
            height: 110px;
            width: 100%;
            line-height: 110px;
            color: $blue;
          }
        }
      }
    }

  }
}


</style>