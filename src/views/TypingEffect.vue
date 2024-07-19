<template>
    <span class="typed-text" ref="typedOutput"></span>
  </template>
  
  <script>
  import Typed from 'typed.js';
  
  export default {
    name: 'TypingEffect',
    props: {
      strings: {
        type: Array,
        required: true
      }
    },
    mounted() {
      const options = {
        strings: this.strings,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true
      };
  
      this.typed = new Typed(this.$refs.typedOutput, options);
    },
    beforeUnmount() {
      // Destroy the instance to prevent memory leaks
      if (this.typed) {
        this.typed.destroy();
      }
    }
  };
  </script>
  
  <style scoped>
  .typed-text {
    color: #007bff; /* Blue color */
  }
  </style>