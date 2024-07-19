<template>
    <v-footer class="d-flex flex-column" app>
        <div class="bg-cyan-lighten-3 d-flex w-100 align-center px-4">
          <strong>Get connected with me!</strong>
    
          <v-spacer></v-spacer>
    
          <v-btn
            v-for="social in socials"
            :key="social.icon"
            :href="social.link"
            class="mx-2"
            icon
            variant="plain"
          >
                <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
        </div>
    
        <div class="px-4 py-2 bg-black text-center w-100">
          {{ new Date().getFullYear() }} — <strong>M.A. aka xev</strong>
        </div>
      </v-footer>
</template>

<script>
  export default {
    name: 'FooterView',
    data: () => ({
        socials: [
            { icon:'mdi-linkedin', link: 'https://www.linkedin.com/in/muhammadalqaaf/' },
            { icon:'mdi-github', link: 'https://www.github.com/xevendersch' },
            { icon:'mdi-instagram', link: 'https://www.instagram.com/mhmmdalqaaf/' },
        ],
    }),
  }
</script>