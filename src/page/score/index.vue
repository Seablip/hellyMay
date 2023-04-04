<template>
  <div class="scores_container">
    <div v-show="showHide" class="cover_container" @click="isShowCover">
      <img src="../../images/5-2.png" alt="分享引导" />
    </div>
    <div class="scores_grade_container">
      <div class="grade">{{ score }}分!</div>
      <div class="grade_descr">{{ scoreTips }}</div>
    </div>
    <div class="share_button" @click="isShowCover"></div>
    <div class="scores_share_container">
      <div class="share_descr">关注葡萄之家，获取答案</div>
      <div class="share_code">
        <img src="../../images/4-4.png" alt="二维码" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "score",
  data() {
    return {
      showHide: false, //点击分享遮罩是否显示
      score: 0, //分数
      scoreTips: "", //分数提示
      rightAnswer: [2, 7, 12, 13, 18], //正确答案
      scoreTipsArr: ["你说，是不是把知识都还给小学老师了？", "还不错，但还需要继续加油哦！", "不要嘚瑟还有进步的空间！", "智商离爆表只差一步了！", "你也太聪明啦，葡萄之家欢迎你！"]
    };
  },
  computed: {
    ...mapState(["answerid"])
  },

  methods: {
    isShowCover() {
      this.showHide = !this.showHide;
    },
    //计算分数
    computedScore() {
      this.answerid.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    //根据分数显示提示
    getScoreTip: function () {
      let index = Math.ceil(this.score / 20) - 1;
      index = index < 0 ? 0 : index;
      this.scoreTips = this.scoreTipsArr[index];
    }
  },
  created() {
    this.computedScore();
    this.getScoreTip();
  }
};
</script>
<style lang="scss" scoped>
// 背景图片
.scores_container,
.cover_container {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url("../../images/4-1.jpg") no-repeat;
  background-size: 100% 100%;
}
.cover_container {
  background: url("../../images/5-1.png") no-repeat;
  z-index: 20;
  opacity: 0.92;
  img {
    height: 10.975rem;
    width: 11.95rem;
    position: fixed;
    top: 0.5rem;
    left: 50%;
    margin-left: -5.975rem;
  }
}
// 成绩样式
.scores_grade_container {
  width: 9.7rem;
  height: 9.1rem;
  background-image: url("../../images/4-2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin: 1.2rem auto 0;
  .grade {
    position: absolute;
    width: 9rem;
    top: 4.7rem;
    left: 0.6rem;
    color: #a51d31;
    font-weight: 700;
    // 文本字符的笔触宽度和笔触颜色。
    -webkit-text-stroke: 0.05rem #a51d31;
    font-size: 1.4rem;
    text-align: center;
  }
  .grade_descr {
    position: absolute;
    width: 9rem;
    top: 7rem;
    text-align: center;
    color: #3e2415;
    left: 0.6rem;
    font-size: 0.65rem;
  }
}
// 分享按钮
.share_button {
  background-image: url("../../images/4-3.png");
  background-repeat: no-repeat;
  background-position: 0.3rem 0;
  background-size: contain;
  position: relative;
  margin: 0.8rem auto 0;
  width: 5.825rem;
  height: 2.4rem;
}
// 分享样式
.scores_share_container {
  margin: 1.5rem auto 0;
  .share_descr {
    width: 100%;
    color: #664718;
    font-size: 0.475rem;
    font-family: Microsoft YaHei;
    text-align: center;
    font-weight: 500;
  }
  .share_code {
    height: 5.3rem;
    width: 5.3rem;
    margin: 0.5rem auto 0;
    img {
      width: 100%;
    }
  }
}
</style>
