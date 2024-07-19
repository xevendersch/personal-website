<template>
    <v-container class="d-flex justify-center">
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="10" lg="8">
          <h1 class="d-flex justify-center font-weight-bold mb-6">Education History</h1>
          <v-divider class="mb-2"></v-divider>
          <v-timeline align="start">
            <v-timeline-item
              v-for="(item, index) in education"
              :key="index"
              :color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card class="pa-4 mt-auto" outlined>
                <v-card-title class="headline font-weight-bold">{{ item.school }}</v-card-title>
                <v-card-subtitle>{{ item.degree }} in {{ item.field }}</v-card-subtitle>
                <v-card-text>{{ item.period }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'EducationHistory',
    data() {
      return {
        education: [
          {
            school: 'Jenderal Soedirman University',
            degree: 'Bachelor of Engineering',
            field: 'Electrical Engineering',
            period: '2017 - 2021',
            color: 'primary',
            icon: 'mdi-school'
          },
          {
            school: 'Nara Institute of Science and Technology',
            degree: 'Master of Engineering',
            field: 'Data Science',
            period: '2021 - 2023',
            color: 'primary',
            icon: 'mdi-laptop'
          },
          {
            school: 'Nara Institute of Science and Technology',
            degree: 'Doctor of Engineering',
            field: 'Data Science',
            period: '2023 - 2026 (expected)',
            color: 'primary',
            icon: 'mdi-laptop'
          },
          // Add more education items here
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  
  .font-weight-bold {
    font-weight: bold;
  }
  </style>