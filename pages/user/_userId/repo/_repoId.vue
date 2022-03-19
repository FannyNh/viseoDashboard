<template>
  <main class="main">
    Repo details
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
      <b>url</b>: {{ repo.url }}
    </div>
  </main>
</template>
<script>

export default {
  name: "RepoDetails",
  computed: {
    repo() {
      return this.$store.getters['user/getRepo']
    }
  },
};
</script>
