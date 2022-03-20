<template>
  <main class="main">
    <section class="infoUser">
      <h2 class="infoUser__name"> User Profile {{ userData.login }}</h2>
      <div class="infoUser__img"><img :src="userData.avatar_url" alt="avatar user"/></div>
    </section>
    <h3 class=" mt-32 mb-32">
      Repo details
    </h3>
    <div class="repoInfo  p-16">
      <div>
        <b>name</b>: {{ repo.name }}
      </div>
      <div>
        <b>language</b>: {{ repo.language }}
      </div>
      <div>
        <b>stargazers_count</b>: {{ repo.stargazers_count }}
      </div>
      <div>
        <b>description</b>: {{ repo.description }}
      </div>
      <div>
        <b>created_at</b>: {{ repo.created_at }}
      </div>
      <div>
        <b>updated_at</b>: {{ repo.updated_at }}
      </div>
      <div>
        <b>url</b>: <a :href="repo.url">{{ repo.url }} </a>
      </div>
    </div>
  </main>
</template>
<script>

export default {
  name: "RepoDetails",
  data() {
    return {
      userData: this.$store.state.user.user,
    }
  },
  computed: {
    repo() {
      return this.$store.getters['user/getRepo']
    }
  },
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
.repoInfo{
  background-color: $light-blue;
  border: 1px solid $blue;
  border-radius: $border-radius-big;
  width: 80%;
  min-height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>