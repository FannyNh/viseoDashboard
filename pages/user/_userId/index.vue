<template>
  <main class="main">
    User Profile
    <strong>{{ userId }}</strong>
    <!--    {{userData}}-->
    <div class="userInfo">
      {{ user.avatar_url }}
      <div>---------</div>
      {{ user.login }}
    </div>
    <div class="repositories">
      {{ user.id }}
      <div>---------</div>
      <div>
        <ul>
          <li v-for="repo in user.repos" :key="repo.id">
            <div @click="updateState({
            repo:{
                name:repo.name,
                language:repo.language,
                stargazers_count:repo.stargazers_count,
                description:repo.description,
                created_at:repo.created_at,
                updated_at:repo.updated_at,
                url:repo.url,
            }})">
              <NuxtLink :to="'/user/'+userId+'/repo/'+repo.id">
                {{ repo.full_name }}
              </NuxtLink>
            </div>
          </li>

        </ul>
      </div>
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
