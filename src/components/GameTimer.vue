<template>
    <div class="timer">残り時間: {{ formattedTime }}</div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    computed: {
      ...mapState(["timeRemaining"]),
      formattedTime() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
      },
    },
  };
  </script>