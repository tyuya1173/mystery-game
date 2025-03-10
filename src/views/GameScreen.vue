<template>
  <div class="game-container">
    <GameTimer :clickable="stage === 17" @timerClicked="goToFinalStage" />
    <h2>ステージ {{ stage + 1 }}</h2>
    <img class="quiz-image" :src="require(`@/assets/images/quiz${stage + 1}.png`)" alt="謎解き" />
    <input v-model="answer" placeholder="答えを入力" class="answer-input" />
    <div class="button-group">
      <button @click="checkAnswer">送信</button>
      <button @click="showHint">ヒントを見る</button>
    </div>
    <p v-if="hint">{{ hint }}</p>
    <button class="prev-button" @click="prevStage">前の問題に戻る</button>

    <!-- ステージクリアダイアログ -->
    <div v-if="showDialog" class="dialog-overlay">
      <div class="dialog">
        <p>ステージ {{ stage + 1 }} クリア！</p>
        <button @click="closeDialog">次へ進む</button>
      </div>
    </div>
  </div>
</template>

<script>
import GameTimer from "@/components/GameTimer.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: { GameTimer },
  data() {
    return {
      answer: "",
      showDialog: false, // ステージクリアダイアログの表示制御
      correctAnswers: [
        "さとう", "そり", "かも", "ゆめ", "ぬの", "へや", "むすこ", "ふろく",
        "けにあ", "なわ", "よる", "はれ", "ほね", "ちらし", "ひみつ",
        "えん", "てき", "たいまーをおせ"
      ],
      hint: "",
    };
  },
  computed: {
    ...mapState(["stage"])
  },
  methods: {
    checkAnswer() {
      if (this.answer === this.correctAnswers[this.stage]) {
        this.showDialog = true; // ダイアログを表示
      } else {
        alert("不正解です！");
      }
    },
    closeDialog() {
      this.showDialog = false;
      this.answer = ""; // 入力フォームをリセット
      this.nextStage();
    },
    showHint() {
      this.hint = "ヒント用の別の謎解きを解こう！";
    },
    goToFinalStage() {
      if (this.stage === 17) {
        this.$router.push("/final");
      }
    },
    ...mapMutations(["nextStage", "prevStage"])
  }
};
</script>

<style scoped>
/* 全体を画面いっぱいに表示 */
.game-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
}

/* 画像サイズを調整 */
.quiz-image {
  max-width: 80%;
  max-height: 40vh;
  object-fit: contain;
  margin-bottom: 10px;
}

/* 入力フィールドのスタイル */
.answer-input {
  width: 60%;
  max-width: 300px;
  padding: 8px;
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
}

/* ボタンを並べる */
.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

/* ボタンのスタイル */
button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* 戻るボタンのスタイル */
.prev-button {
  margin-top: 10px;
  background-color: #dc3545;
}

.prev-button:hover {
  background-color: #b52a3a;
}

/* ステージクリアダイアログ */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.dialog p {
  font-size: 18px;
  margin-bottom: 10px;
}

.dialog button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.dialog button:hover {
  background-color: #218838;
}
</style>