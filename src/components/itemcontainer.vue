<template>
  <div class="item_container">
    <header class="top_tips">
      <span v-if="fatherComponent == 'home'" class="num_tip">{{ level }}</span>
      <span v-if="fatherComponent == 'item'" class="num_tip">题目{{ itemNum }}</span>
    </header>
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"> </router-link>
    </div>
    <div v-if="fatherComponent == 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_examination" v-if="itemDetail.length > 0">
          <span class="item_title">{{ itemDetail[itemNum - 1].topic_name }}</span>
          <ul>
            <li v-for="(item, index) in itemDetail[itemNum - 1].topic_answer" :key="index" @click="choosed(index, item.topic_answer_id)">
              <span class="option_style" :class="{ selected: choosedNum == index }">{{ chooseType(index) }}</span>
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
        <!-- 模版 -->
        <div class="item_list_examination" v-if="itemDetail.length === 0">
          <span class="item_title">题目一</span>
          <ul>
            <li>
              <span class="option_style selected">A</span>
              <span class="option_detail">这里是内容</span>
            </li>
            <li>
              <span class="option_style">B</span>
              <span class="option_detail">这里是内容</span>
            </li>
            <li>
              <span class="option_style">C</span>
              <span class="option_detail">这里是内容</span>
            </li>
            <li>
              <span class="option_style">D</span>
              <span class="option_detail">这里是内容</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="next_item button_style" @click="submitAnswer(0)" v-if="itemNum < itemDetail.length"></div>
      <div v-else class="submit_item button_style" @click="submitAnswer(1)"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "itemcontainer",
  data() {
    return {
      itemId: null, // 题目ID 未用到
      choosedNum: null, // 选中答案索引
      choosedId: null // 选中答案ID
    };
  },
  props: ["fatherComponent"],
  computed: {
    ...mapState([
      "answerid",
      "itemNum", //第几题
      "level", //第几周
      "itemDetail", //题目详情
      "timer" //计时器
    ])
  },
  methods: {
    ...mapActions(["addNum", "initializeData"]),
    //选中的答案信息
    /**
     * @param index 选中答案索引
     * @param id 选中答案ID
     */
    choosed(index, id) {
      this.choosedNum = index;
      this.choosedId = id;
    },
    /**
     * @param index 选中答案索引
     */
    chooseType(index) {
      switch (index) {
        case 0:
          return "A";
          break;
        case 1:
          return "B";
          break;
        case 2:
          return "C";
          break;
        default:
          return "D";
          break;
      }
    },
    /**
     * @param type 0 下一题 1:提交
     */
    submitAnswer(type) {
      if (this.choosedNum !== null) {
        // 调用actions中方法
        this.addNum(this.choosedId);
        if (type === 1) {
          // 清理定时器timer
          clearInterval(this.timer);
          // 路由跳转
          this.$router.push("score");
        } else if (type === 0) {
          this.choosedNum = null;
        }
      } else {
        alert("您还没有选择答案哦！");
      }
    }
  },
  created() {
    this.initializeData();
    /*  if (this.fatherComponent === "home") {
      // 去初始化信息 this.$store.dispatch("initializeData");
      this.initializeData();
    } */
  }
};
</script>

<style lang="scss" scoped>
.item_container {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(../images/1-1.jpg) no-repeat;
  background-size: 100% 100%;
}

// header 样式
.top_tips {
  position: absolute;
  right: 1.6rem;
  width: 3.25rem;
  top: -1.3rem;
  height: 7.35rem;
  background-image: url("../images/WechatIMG2.png");
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    text-align: center;
    font-weight: 600;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    color: #a57c50;
    font-size: 0.6rem;
  }
}
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}
// home logo
.home_logo {
  position: absolute;
  background: url("../images/1-2.png");
  background-size: 13.142rem 100%;
  background-position: 100%;
}
// 按钮
.start,
.next_item,
.submit_item {
  background-image: url("../images/1-4.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &.button_style {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    height: 2.1rem;
    width: 4.35rem;
  }
}
// item 相关样式
.item_back {
  background-image: url("../images/2-1.png");
  background-size: 100% 100%;
  &.item_container_style {
  }
  .item_list_examination {
  }
}
// 下一题按钮
.next_item {
  background-image: url("../images/2-2.png");
}
// 提交按钮
.submit_item {
  background-image: url("../images/3-1.png");
}

.item_list_examination {
  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 2.2rem;
  left: 3rem;
  .item_title {
    font-size: 0.65rem;
    color: #fff;
    line-height: 0.7rem;
  }
  li {
    display: flex;
    margin-top: 0.4rem;
    vertical-align: middle;
  }
  .option_style {
    color: #fff;
    border: 1px solid #fff;
    height: 0.725rem;
    width: 0.725rem;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    font-size: 0.5rem;
    &.selected {
      background-color: #ffd400;
      color: #575757;
      border-color: #ffd400;
    }
  }
  .option_detail {
    font-size: 0.6rem;
    margin-left: 0.35rem;
    color: #fff;
    flex: 1;
  }
}
</style>
