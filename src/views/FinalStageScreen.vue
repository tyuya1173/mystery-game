<template>
    <div>
      <h1>最後の試練</h1>
      <p>最後のパスワードを入力してください。</p>
      <input v-model="finalAnswer" placeholder="パスワードを入力" />
      <button @click="checkFinalAnswer">送信</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        finalAnswer: ""
      };
    },
    methods: {
      checkFinalAnswer() {
        if (this.finalAnswer === "こんにちは") {
          this.$router.push("/clear");
        } else {
          alert("間違っています！");
        }
      }
    }
  };
  </script>