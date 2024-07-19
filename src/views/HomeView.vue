<template>
  <v-container fluid class="home-container">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="6" md="10" lg="8" class="text-center">
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" class="mb-4">
            <v-avatar size="300px" class="mx-auto"
            :image="require('@/assets/ava.png')"
            >
            </v-avatar>
          </v-col>
          <v-col cols="12" md="8">
            <h5 class="intro-text">Hi I'm <TypingEffect :strings="['Frontend Developer', 'Web Developer', 'Researcher']" /></h5>
            <h1 class="name-title">Muhammad Alqaaf</h1>
            <p class="description-text">
              a dedicated web developer and researcher, weaving together the art of coding with the science of data. As a doctoral student in Data Science within Computational Systems Biology, I thrive at the intersection of innovation and discovery, transforming complex datasets into meaningful insights and seamless user experiences. Join me on this journey as I push the boundaries of technology and research.
            </p>
            <v-row class="mt-4" justify="center">
              <!-- <v-btn color="primary" outlined class="mx-2">Download CV</v-btn> -->
              <v-btn outlined class="text-none" rounded="lg" variant="text" border :to="'/connect'">Contact</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-divider></v-divider>

  <v-container class="bg-light-blue-lighten-4 mb-6">
    <v-row align="center" no-gutters>
      <v-col align="center">
        <v-text class="text-h5 font-weight-light text-center">Publications</v-text>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row align="center" no-gutters>
      <v-col>
        <v-card class="mx-5" max-width="344" hover>
          <v-card-item>
            <v-card-title class="text-subtitle-2 text-justify">
              The effect of features combination on coloscopy images of cervical cancer using the support vector machine method
            </v-card-title>
            <v-card-subtitle class="text-body-2">
              DOI: http://doi.org/10.11591/ijai.v13.i3.pp2614-2622
            </v-card-subtitle>
          </v-card-item>
          <v-card-text class="text-justify">
            This research proposes the use of image processing techniques to create automatic early detection of cervical cancer based on coloscopy images.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-5" max-width="344" hover>
          <v-card-item>
            <v-card-title class="text-subtitle-2 text-justify">
              Morphological features of lung white spots based on the Otsu and Phansalkar thresholding method
            </v-card-title>
            <v-card-subtitle class="text-body-2">
              DOI: http://doi.org/10.11591/ijeecs.v33.i1.pp530-539
            </v-card-subtitle>
          </v-card-item>
          <v-card-text class="text-justify">
            This research proposes the use of image segmentation techniques to calculate the number of lung areas and white spots on SARS-CoV-2 patient.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-5" max-width="344" hover>
          <v-card-item>
            <v-card-title class="text-subtitle-2 text-justify">
              Morphological characteristics of X-ray thorax images of COVID-19 patients using the Bradley thresholding segmentation
            </v-card-title>
            <v-card-subtitle class="text-body-2">
              DOI: http://doi.org/10.11591/ijeecs.v24.i2.pp1074-1083
            </v-card-subtitle>
          </v-card-item>
          <v-card-text class="text-justify">
            This research proposes the use of image segmentation techniques to develop a COVID-19 early detection system based on X-ray images.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row align="center" no-gutters>
      <v-col>
        <h4 class="font-weight-light text-center">Affiliations</h4>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-4">
      <v-col
        v-for="(affiliation, index) in affiliations"
        :key="index"
        cols="auto"
        class="d-flex justify-center"
      >
        <v-btn :href="affiliation.url" target="_blank" class="pa-0" icon variant="text">
          <v-avatar size="50">
            <v-img :alt="affiliation.name" :src="affiliation.imgSrc"></v-img>
          </v-avatar>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TypingEffect from '../views/TypingEffect.vue';

  export default {
    name: 'HomeView',
    components: {
      TypingEffect
    },
    data() {
      return {
        affiliations: [
          {
            name: 'Unsoed Logo',
            url: 'https://unsoed.ac.id/',
            imgSrc: require('@/assets/unsoed.png')
          },
          {
            name: 'NAIST Logo',
            url: 'https://www.naist.jp/en/',
            imgSrc: require('@/assets/naist.png')
          }
        ]
      };
    }
  };
</script>