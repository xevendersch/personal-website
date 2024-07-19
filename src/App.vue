<template>
  <v-app>
    <HeaderView />
    <v-main>
      <router-view></router-view>
    <!-- CARDS -->
    </v-main>
    <FooterView />>
  </v-app>
</template>

<script>
import FooterView from "@/components/Footer.vue";
import HeaderView from "@/components/Header.vue";

export default {
  name: 'App',
  components: {
    FooterView,
    HeaderView,
  },
}
</script>

