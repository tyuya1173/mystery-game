<template>
  <div :class="['timer', { clickable: clickable }]" @click="handleClick">
    残り時間: {{ formattedTime }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    clickable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(["timeRemaining"]),
    formattedTime() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  },
  watch: {
    timeRemaining(newTime) {
      if (newTime === 0) {
        this.$router.push("/gameover"); // 時間切れ時にゲームオーバー画面へ遷移
      }
    }
  },
  methods: {
    handleClick() {
      if (this.clickable) {
        this.$emit("timerClicked");
      }
    }
  }
};
</script>

<style scoped>
.timer {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  font-weight: bold;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

/* ステージ17ではタイマーをクリック可能に */
.timer.clickable {
  cursor: pointer;
  transition: background 0.3s ease;
}

.timer.clickable:hover {
  background: darkred;
}
</style>