<template>
  <main class="main">
    User Profile
<!--    {{userData}}-->
    <div class="userInfo">
      {{userData.avatar_url}}
      <div>---------</div>
      {{userData.login}}
    </div>
    <div class="repositories">
      {{userData.id}}
      <div>---------</div>
    </div>
  </main>
</template>
<script>
export default {
  name: "IndexPage",
  data() {
    return {
      searchTxt: "",
      userData: this.$store.state.user.user,
    }
  },
};
</script>
