<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/dashboard">
          <v-list-item-action>
            <v-icon>mdi-desktop-mac-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ダッシュボード</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/auth/register">
          <v-list-item-action>
            <v-icon>mdi-account-edit-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>会員登録</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/dashboard">
          <v-list-item-action>
            <v-icon>mdi-fingerprint</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ログイン</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="orange"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Feeeed</v-toolbar-title>
    </v-app-bar>

  </div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
    }),
  }
</script>
