<template>
  <v-card
    class="mx-auto"
    max-width="400"
    shaped
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">会員登録</v-list-item-title>
            <v-form
              ref="form"
              @submit.prevent="register"
            >
              <v-text-field
                v-model="form.name"
                :counter="10"
                label="名前"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.email"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                :rules="[rules.required]"
                name="password"
                label="パスワード"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>

              <v-text-field
                v-model="form.password_confirmation"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                :rules="[rules.required]"
                name="password_confirmation"
                label="パスワード"
                counter
                @click:append="show2 = !show2"
              ></v-text-field>
              <v-card-actions class="pb-5 justify-center">

                <v-btn
                  color="success"
                  type="submit"
                >
                  登録
                </v-btn>

              </v-card-actions>
            </v-form>
      </v-list-item-content>
    </v-list-item>


  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        show1: false,
        show2: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
        },
      }
    },
    methods: {
      async register() {
        await this.$axios.post('/auth/register', this.form);

        this.$auth.login({data: this.form});
        this.$router.push({name: 'index'});
      }
    }
  }
</script>
