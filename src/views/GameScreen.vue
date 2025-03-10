<template>
  <div>
    <GameTimer />
    <h2>ステージ {{ stage + 1 }}</h2>
    <img :src="require(`@/assets/images/quiz${stage + 1}.png`)" alt="謎解き" />
    <input v-model="answer" placeholder="答えを入力" />
    <button @click="checkAnswer">送信</button>
    <button v-if="stage === 17" @click="goToFinalStage">タイマーを押す</button>
    <button @click="showHint">ヒントを見る</button>
    <p v-if="hint">{{ hint }}</p>
    <button @click="prevStage">前の問題に戻る</button>
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
        this.nextStage();
      } else {
        alert("不正解です！");
      }
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