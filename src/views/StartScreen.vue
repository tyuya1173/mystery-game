<template>
  <div>
    <h1>謎解きゲーム</h1>
    <button @click="startGame">ゲームスタート</button>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$router.push("/warning"); // 警告画面へ遷移
    }
  }
};
</script>