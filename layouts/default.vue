<template>
  <v-app>
    <v-app-bar fixed app height="64">
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer></v-spacer>
      <search></search>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/shadow81627/hackernews"
        icon
        title="Github"
      >
        <font-awesome-icon :icon="faGithub" size="2x" fixed-width
      /></v-btn>
    </v-app-bar>
    <v-main role="main">
      <nuxt style="min-height: 100vh" keep-alive />
      <the-footer></the-footer>
    </v-main>
  </v-app>
</template>

<script>
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default {
  data() {
    return {
      faGithub,
      title: 'Daim Hacker News',
    }
  },
}
</script>
