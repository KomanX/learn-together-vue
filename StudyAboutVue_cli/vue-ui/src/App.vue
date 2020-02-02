<template>
  <div id="app">
    <goal-manager />
  </div>
</template>

<script>
import GoalManager from './components/GoalManager'
export default {
  name: 'app',
  components: {
    GoalManager
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
