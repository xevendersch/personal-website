<template>
    <v-app-bar app color="white" dense flat>
      <v-container class="d-flex flex-wrap">
        <v-row align="center" no-gutters class="w-100">
          <v-col cols="auto">
            <router-link to="/" class="no-underline">
              <v-toolbar-title>
                <span class="font-weight-bold" style="color: #273469;">XEV<span style="color: #6C5CE7;">.id</span></span>
              </v-toolbar-title>
            </router-link>
          </v-col>
  
          <v-spacer></v-spacer>
  
          <v-col class="d-none d-md-flex" cols="auto">
            <v-btn text :to="'/'">Home</v-btn>
            <v-btn text :to="'/resume'">Resume</v-btn>
            <v-btn text :to="'/blog'">Blogs</v-btn>
            <v-btn text :to="'/connect'">Connect</v-btn>
          </v-col>
  
          <!-- <v-col class="d-none d-md-flex" cols="auto">
            <v-btn
              color="orange"
              variant="tonal"
              class="ml-4"
              href="https://www.buymeacoffee.com/"
              target="_blank"
            >
              Buy Me A Coffee
            </v-btn>
          </v-col> -->
  
          <v-col class="d-flex d-md-none" cols="auto">
            <v-menu bottom left>
              <template v-slot:activator="{ props }">
                <v-btn icon="mdi-menu" v-bind="props">
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="link in menuLinks" :key="link.text" @click="$router.push(link.route)">
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
                <!-- <v-list-item href="https://www.buymeacoffee.com/" target="_blank">
                  <v-list-item-title>Buy Me A Coffee</v-list-item-title>
                </v-list-item> -->
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'HeaderView',
    data() {
      return {
        menuLinks: [
          { text: 'Home', route: '/' },
          { text: 'Resume', route: '/resume' },
          { text: 'Blogs', route: '/blog' },
          { text: 'Connect', route: '/connect' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .no-underline {
    text-decoration: none;
  }
  .w-100 {
    width: 100%;
  }
  </style>