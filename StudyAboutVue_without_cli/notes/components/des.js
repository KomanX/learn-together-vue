/**
 * 
 * 
 * 子组件中添加 prop 来获取 父组件的赋值到子组件上的特性
 * 
 * 父组件利用v-slot="child-data" 来获取子组件 data
 * 
 * <slot></slot>来获取父组件中使用子组件时 子组件标签内的内容
 * 
 * 
 * props
 * 		给对象或者数组定义默认值时,默认值必须从一个工厂函数获取
 * 			例如:
 * 				prop: {
 *     				type: Object,
 *     				// 对象或数组默认值必须从一个工厂函数获取
 *     				default: function () {
 *       				return { message: 'hello' }
 *     				}
 *   			}
 * 
 * 		可以自定义验证函数
 * 			例如:
 * 				 prop: {
 *     				validator: function (value) {
 *       			// 这个值必须匹配下列字符串中的一个
 *       			return ['success', 'warning', 'danger'].indexOf(value) !== -1
 *     				}
 *   			}
 * 
 * 	注意那些 prop 会在一个组件实例创建之前进行验证，
 * 	所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */