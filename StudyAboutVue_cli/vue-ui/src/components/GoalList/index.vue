<template>
  <div>
    <div>
      我的目标
      <span @click="$emit('add-goal')">+</span>
    </div>
    <div>
      <ul>
        <li v-for="item in goalList" :key="item.id" :class="{ doneGoal: item.state == 1 }">
          <div>{{ item.msg }}</div>
          <div>开始时间：{{ item.startTime }}</div>
          <div v-if="item.state == 1">结束时间：{{ item.endTime }}</div>
          <div>
            <span @click="$emit('open-detail')">
              查看
            </span>
            <span @click="$emit('delete-goal')">X</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoalList',
  props: ['list'],
  data() {
    return {
      goalList: []
    }
  },
  mounted() {
    this.goalList = this.list.map(e => {
      let { msg, state, startTime, endTime } = JSON.parse(window.localStorage.getItem(e))
      return {
        id: e,
        msg: msg,
        state: state,
        startTime: startTime,
        endTime: endTime
      }
    })
  }
}
</script>

<style scoped></style>
