/**
 * 优先级A的规则:规避错误
 * 
 * 
 * 1.组件名应该始终是多个单词的.
 * 这样做可以避免跟现有的以及未来的 HTML 元素相冲突，
 * 因为所有的 HTML 元素名称都是单个单词的.
 * 
 * 2.组件的 data 必须是一个函数.
 * 当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，
 * 它的值必须是返回一个对象的函数。
 * 
 * 例子:
 * Vue.component('some-comp', {
 * data: function () {
 *   return {
 *     foo: 'bar'
 *   }
 * 	}
 * })
 * // In a .vue file
 * export default {
 * data () {
 *   return {
 *     foo: 'bar'
 *   }
 *  }
 * }
 * // 在一个 Vue 的根实例上直接使用对象是可以的，
 * // 因为只存在一个这样的实例。
 * new Vue({
 * 	data: {
 *   foo: 'bar'
 *  }
 * })
 * 
 * 
 * 3.Prop 定义应该尽量详细。
 * 在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。
 * 
 * 例子:
 * props: {
 *  status: String
 * }
 * // 更好的做法！
 * props: {
 *  status: {
 *   type: String,
 *   required: true,
 *   validator: function (value) {
 *     return [
 *       'syncing',
 *       'synced',
 *       'version-conflict',
 *       'error'
 *     ].indexOf(value) !== -1
 *   }
 *  }
 * }
 * 
 * 
 * 4.为 v-for 设置键值
 * 在组件上总是必须用 key 配合 v-for，
 * 以便维护内部组件及其子树的状态。
 * 甚至在元素上维护可预测的行为，
 * 比如动画中的对象固化 (object constancy)，也是一种好的做法。
 * 
 * 
 * 5.永远不要把 v-if 和 v-for 同时用在同一个元素上。
 * 
 * 否则每次渲染时都会重新渲染整个列表.
 * 详情见https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81
 * 
 * 如果需要同时用到v-if和v-for,
 * 可以用computed属性计算出所需列表,再用v-for进行遍历
 * 
 * 
 * 
 * 6.为组件样式设置作用域
 * 利用class名来约束样式作用域,
 * 可以使用 CSS Modules，一个基于 class 的类似 BEM 的策略.
 * 或者BEM约定,使用唯一的class名.
 * 		-   中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。
 *		__  双下划线：双下划线用来连接块和块的子元素
 *		_   单下划线：单下划线用来描述一个块或者块的子元素的一种状态
 *      
 *		type-block__element_modifier
 * 
 * 		例如:
 * 			用户列表下的按钮成功状态  user-list__button_succeed
 * 
 * 7.私有属性名
 * 使用模块作用域保持不允许外部访问的函数的私有性。
 * 如果无法做到这一点，
 * 就始终为插件、混入等不考虑作为对外公共 API 的自定义私有属性使用 $_ 前缀。
 * 并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。
 * 
 * 
 * var myGreatMixin = {
 *  // ...
 *  methods: {
 *   $_myGreatMixin_update: function () {
 *     // ...
 *   }
 *  }
 * }
 * // 甚至更好！
 * var myGreatMixin = {
 * 	// ...
 * 	methods: {
 *   publicMethod() {
 *     // ...
 *     myPrivateFunction()
 *   }
 * 	}
 * }
 *
 * function myPrivateFunction() {
 * 	// ...
 * }
 * 
 * export default myGreatMixin
 * 
 * 
 */