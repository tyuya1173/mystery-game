<template>
    <div>
      <h1>おめでとう！</h1>
      <p>全ての謎を解きました！</p>
      <button @click="restartGame">最初からやり直す</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      restartGame() {
        this.$store.commit("resetTime");
        this.$store.commit("prevStage", 0);
        this.$router.push("/");
      }
    }
  };
  </script>