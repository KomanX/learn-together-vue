<template>
  <div>
    <GoalList v-if="currentComponent === 0" :list="goalList" @open-detail="openDetail" @delete-goal="deleteGoal" @add-goal="addGoal" />
    <GoalDetail v-else :number="currentDetail" @back-to-list="backToList" />
  </div>
</template>

<script>
import GoalList from '@/components/GoalList'
import GoalDetail from '@/components/GoalDetail'

export default {
  name: 'GoalManager',
  components: {
    GoalDetail,
    GoalList
  },
  data() {
    return {
      goalList: [],
      currentComponent: 0,
      currentDetail: -1
    }
  },
  watch: {
    goalList: function(val) {
      let len = val.length
      if (len != 0 && val[len - 1].state == 0) {
        this.currentComponent = 1
        this.currentDetail = val[len - 1]
      } else {
        this.currentComponent = 0
      }
    }
  },
  mounted() {
    let goalList = JSON.parse(window.localStorage.getItem('goalList'))
    if (!goalList) {
      //本地存储中没有goalList
      window.localStorage.setItem('goalList', '[]')
    } else {
      this.goalList = goalList
    }
  },
  methods: {
    openDetail(index) {
      this.currentComponent = 1
      this.currentDetail = index
    },
    addGoal() {
      const h = this.$createElement
      this.$msgbox({
        title: '创建新目标',
        message: h('div', null, [
          h(
            'textarea',
            {
              style: {
                width: '100%'
              },
              attrs: {
                placeholder: '请输入你的',
                autofocus: 'autofocus'
              }
            },
            null
          )
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          console.log(value)

          return
        })
        .catch(() => {})
    },
    deleteGoal(index) {
      let deleteGoal_id = this.goalList[index]
      window.localStorage.removeItem(deleteGoal_id)
      this.goalList.splice(index, 1)
      window.localStorage.setItem('goalList', JSON.stringify(this.goalList))
    },
    backToList() {
      this.currentComponent = 0
    },
    getID() {
      return new Date().toLocaleDateString().toString()
    }
  }
}
</script>

<style scoped></style>
