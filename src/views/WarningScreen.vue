<template>
    <div class="warning-screen">
      <h1>警告！</h1>
      <p>あなたのパソコンは乗っ取られました！</p>
      <p>1.5時間以内に全ての謎を解かないと、データが全て抜き取られます！</p>
      <button @click="handleAttack">攻撃に対処する</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleAttack() {
        this.$store.dispatch("startTimer"); // タイマー開始
        this.$router.push("/game"); // ステージ1へ遷移
      }
    }
  };
  </script>
  
  <style scoped>
  .warning-screen {
    text-align: center;
    padding: 50px;
    background-color: black;
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }
  button:hover {
    background-color: darkred;
  }
  </style>