/**
 * 
 * https://cn.vuejs.org/v2/guide/list.html
 */
/**
 * 注意事项1:
 * 
 * 由于 JavaScript 的限制，Vue 不能检测以下数组的变动：
 * 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
 * 当你修改数组的长度时，例如：vm.items.length = newLength
 * 
 * 当以上操作发生时,不会触发响应
 * 
 * 对列表作一下操作才会触发响应
 * push()
 * pop()
 * shift()
 * unshift()
 * splice()
 * sort()
 * reverse()
 * 
 * 或者使用 Vue.set() (也可以是vm.$set(),这是全局方法Vue.set的一个别名)
 * 用Vue.set(vm.items, indexOfItem, newValue)或vm.$set(vm.items, indexOfItem, newValue)
 * 或者vm.items.splice(indexOfItem, 1, newValue)
 * 代替vm.items[indexOfItem] = newValue
 * 
 * 用vm.items.splice(newLength)
 * 代替vm.items.length = newLength
 * 
 */

/**
 * 注意事项2:
 * 
 * 还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除(根级别的响应式属性:data底下的属性)
 * 
 * 对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。
 * 但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性。
 * 例如，对于：
 * var vm = new Vue({
 *  data: {
 *   userProfile: {
 *    name: 'Anika'
 *   }
 *  }
 * })
 * 可以使用Vue.set(vm.userProfile, 'age', 27),
 * 或者vm.$set(vm.userProfile, 'age', 27)
 * 添加一条age响应式属性.
 * 
 * 如果要在userProfile下添加多条属性,最好把将需要的属性组合成一个新的对象然后赋值给userProfile
 * 例如:
 * 将原本的userProfile与需要添加的属性组合成新对象
 * vm.userProfile = Object.assign({}, vm.userProfile, {
 *  age: 27,
 *  favoriteColor: 'Vue Green'
 * })
 * 
 */

