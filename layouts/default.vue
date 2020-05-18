<template>
  <v-app>
    <Nav/>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Nav from './partials/Nav';

  export default {
    components: {
      Nav
    },
  }
</script>
