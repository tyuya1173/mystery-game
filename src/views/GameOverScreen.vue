<template>
    <div>
      <h1>ゲームオーバー</h1>
      <p>時間切れです。もう一度挑戦しましょう。</p>
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