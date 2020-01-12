/**
 * 
 * 优先级B的规则:增强可读性
 * 
 * 在Vue中,键名使用PascalCase,kebab-case,camelCase都可以,会进行互相转换.
 * myName == MyName == my-name == my-Name
 * 所以可以在HTML中用kebab-case,在JS中使用PascalCase或者camelCase
 * css使用BEM约定:type-block__element_modifier
 * 
 * 事件名不存在任何自动化的大小写转换,而且在DOM模版中,v-on:myEvent会被转换成v-on:myevent
 * 所以监听事件名最好用kebab-case
 * 
 * 1.把每个组件单独分成文件。
 * 
 * 2.单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，
 * 要么始终是横线连接 (kebab-case)。
 *  例如: MyComponent.vue 或者 my-component.vue
 * 
 * 3.应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 
 * 应该全部以一个特定的前缀开头，
 * 比如 Base、App 或 V。
 * 详情见https://cn.vuejs.org/v2/style-guide/#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E5%90%8D-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90
 *  例如:
 * 		components/
 *		|- BaseButton.vue
 *		|- BaseTable.vue
 *		|- BaseIcon.vue
 * 
 * 
 * 4.只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。
 * 这不意味着组件只可用于一个单页面，而是每个页面只使用一次。
 * 这些组件永远不接受任何 prop，因为它们是为你的应用定制的，
 * 而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，
 * 那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。
 * 
 * 
 * 5.和父组件紧密耦合的子组件应该以父组件名作为前缀命名。
 * 如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。
 * 因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。
 * 
 * 6.组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。
 *  例如:
 * 		components/
 *		|- SearchButtonClear.vue
 *		|- SearchButtonRun.vue
 *		|- SearchInputQuery.vue
 *		|- SearchInputExcludeGlob.vue
 *		|- SettingsCheckboxTerms.vue
 *		|- SettingsCheckboxLaunchOnStartup.vue
 * 
 * 7.在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的,
 * 但在 DOM 模板里永远不要这样做。
 * 自闭合组件表示它们不仅没有内容，而且刻意没有内容。
 * 其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，你的代码也更简洁。
 * 不幸的是，HTML 并不支持自闭合的自定义元素——只有官方的“空”元素。
 * 所以上述策略仅适用于进入 DOM 之前 Vue 的模板编译器能够触达的地方，然后再产出符合 DOM 规范的 HTML。
 * 
 *  例如:
 * 		<!-- 在单文件组件、字符串模板和 JSX 中 -->
 * 		<MyComponent/>
 * 		<!-- 在 DOM 模板中 -->
 * 		<my-component></my-component>
 * 
 * 8.对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的,
 * 但是在 DOM 模板中总是 kebab-case 的。
 * PascalCase 相比 kebab-case 有一些优势：
 * 编辑器可以在模板里自动补全组件名，因为 PascalCase 同样适用于 JavaScript。
 * <MyComponent> 视觉上比 <my-component> 更能够和单个单词的 HTML 元素区别开来，因为前者的不同之处有两个大写字母，后者只有一个横线。
 * 如果你在模板中使用任何非 Vue 的自定义元素，比如一个 Web Component，PascalCase 确保了你的 Vue 组件在视觉上仍然是易识别的。
 * 不幸的是，由于 HTML 是大小写不敏感的，在 DOM 模板中必须仍使用 kebab-case。
 * 还请注意，如果你已经是 kebab-case 的重度用户，那么与 HTML 保持一致的命名约定且在多个项目中保持相同的大小写规则就可能比上述优势更为重要了。在这些情况下，在所有的地方都使用 kebab-case 同样是可以接受的。
 * 
 *  例如:
 * <!-- 在单文件组件和字符串模板中 -->
 * <MyComponent/>
 * <!-- 在 DOM 模板中 -->
 * <my-component></my-component>
 * 或者
 * <!-- 在所有地方 -->
 * <my-component></my-component>
 * 
 * 9.JS/JSX 中的组件名应该始终是 PascalCase 的，
 * 尽管在较为简单的应用中只使用 Vue.component 进行全局组件注册时，可以使用 kebab-case 字符串。
 * 
 * 10.组件名应该倾向于完整单词而不是缩写
 * 编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。
 *  例如:
 * 		components/
 * 		|- StudentDashboardSettings.vue
 * 		|- UserProfileOptions.vue
 * 
 * 11.在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。
 * 我们单纯的遵循每个语言的约定。
 * 在 JavaScript 中更自然的是 camelCase。
 * 而在 HTML 中则是 kebab-case。
 * 
 *  例如:
 * 		JS中:
 * 		props: {
 * 			greetingText: String
 * 		}
 * 
 * 		Html中:
 * 		<WelcomeMessage greeting-text="hi"/>
 * 
 * 12.多个特性的元素应该分多行撰写，每个特性一行。
 * 在 JavaScript 中，用多行分隔对象的多个属性是很常见的最佳实践，因为这样更易读。
 * 模板和 JSX 值得我们做相同的考虑。
 * 	例如:
 * 		<img
 * 			src="https://vuejs.org/images/logo.png"
 * 			alt="Vue Logo"
 * 		>
 * 		<MyComponent
 * 			foo="a"
 * 			bar="b"
 * 			baz="c"
 * 		/>
 * 
 * 13.组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。
 * 	例如:
 * 		<!-- 在模板中 -->
 * {{ normalizedFullName }}
 * // 复杂表达式已经移入一个计算属性
 * computed: {
 *  normalizedFullName: function () {
 *  	return this.fullName.split(' ').map(function (word) {
 *    		return word[0].toUpperCase() + word.slice(1)
 *   	}).join(' ')
 *  }
 * }
 * 
 * 
 * 14.应该把复杂计算属性分割为尽可能多的更简单的属性。
 *  例如:
 * computed: {
 *	  basePrice: function () {
 *		return this.manufactureCost / (1 - this.profitMargin)
 *	  },
 *	  discount: function () {
 *		return this.basePrice * (this.discountPercent || 0)
 *	  },
 *	  finalPrice: function () {
 *		return this.basePrice - this.discount
 *	  }
 *	}
 * 
 * 
 * 15.非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。
 * 在 HTML 中不带空格的特性值是可以没有引号的，
 * 但这鼓励了大家在特征值里不写空格，导致可读性变差。
 * 
 * 	例如:
 * 		<input type="text">
 * 		<AppSidebar :style="{ width: sidebarWidth + 'px' }">
 * 
 * 
 * 16.指令缩写 
 * (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:) 
 * 应该要么都用要么都不用。
 * 
 */