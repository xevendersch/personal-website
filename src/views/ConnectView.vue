<template>
    <v-container class="d-flex justify-center">
        <h1>Coming Soon</h1>
    </v-container>
    <v-divider></v-divider>
    <v-footer>
        <v-container>
            <v-row justify="center">
              <v-col cols="12" md="8" lg="6">
                <v-card class="pa-4">
                  <v-card-title class="text-center">
                    <v-col>
                      <h3 class="font-weight-medium">Send Me a Message</h3>
                      <p class="text-subtitle-1">anything is welcome</p>
                    </v-col>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form" v-model="valid">
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Your name"
                            prepend-inner-icon="mdi-account"
                            v-model="name"
                            :rules="[v => !!v || 'Name is required']"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            label="Your email"
                            prepend-inner-icon="mdi-email"
                            v-model="email"
                            :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'Email must be valid']"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-textarea
                            label="Your message"
                            prepend-inner-icon="mdi-message"
                            v-model="message"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row justify="end">
                        <v-col cols="auto">
                          <v-btn :disabled="!valid" color="primary" @click="submitForm">Submit</v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
    </v-footer>
</template>

<script>
    export default {
        name: 'ConnectView',
        data() {
            return {
                name: '',
                email: '',
                message: '',
                valid: false,
            };
        },
        methods: {
            submitForm() {
                if (this.$refs.form.validate()) {
                    alert(`Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
                }
            },
        },
    };
</script>