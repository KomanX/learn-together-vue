/**
 * 
 * https://cn.vuejs.org/v2/guide/events.html
 * 
 * dom事件会发生传播,
 * 传播机制:
 * 		当一个button被点击时,
 * 		自上而下的捕获阶段,从window对象一直传导到button,
 * 			每个节点被遍历到时,都会触发相应的捕获点击事件.
 * 		找到目标阶段,找到了相应的button,触发button的捕获点击事件.
 * 		离开目标阶段,触发button的冒泡点击事件
 * 		自下而上的冒泡阶段,从button一直传导到window对象,
 * 			每个节点被遍历到时,都会触发相应的冒泡点击事件
 * 
 * 用vue中,监听事件默认设置的是冒泡事件,
 * 除非添加.capture修饰符才能设置捕获事件.
 * 
 * <div @click="divclick">
 * 		<p @click="pclick"></p>
 * </div>
 * 
 * 若点击p,则会触发pclick,再触发divclick.
 * 
 * 如果不想要冒泡,则需要添加.stop修饰符,
 * 如<p @click.stop="pclick"></p>
 * 
 * 
 * 
 * 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，
 * 但是像单选框、复选框等类型的输入控件可能会将 value 特性用于不同的目的。
 * 
 * 在组件上时,
 * 		v-model="data"  
 * 		等同于
 * 		v-bind:value:"data"
 * 		v-on:input:"data=$event"
 * 
 * 在input上时,
 * 		v-model="data"  
 * 		等同于
 * 		v-bind:value:"data"
 * 		v-on:input:"data=$event.target.value"
 * 
 * 所以想要外部组件用v-model就能实现 内容input输入内容与data数据的双向绑定,
 * 就需要将data作为一个prop输入组件,(假设命名为data-value)
 * 内部input设置为
 * 		v-bind:value:"data-value"
 * 		v-on:input:"$emit('input',$event.target.value)"
 * 
 * 
 * vue中用$listeners来记录父级组件的所有监听器,以对象的形式
 * 例如: {
 *	 		input:function(){...}
 * 			click:function(){...}
 *       }
 * 
 * 将原生事件绑定到组件,如何实现和相关注意事项
 * 以及
 * template内容如以下的组件
 * 
 * <label>
 *     {{ label }}
 *     <input>
 * </label>
 * 
 * 如果想要在使用组件时,如同直接使用input,还需要做相应处理
 * 详情见:
 * https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6
 * 
 * 
 * .sync修饰符
 * 子组件如何对父组件的内容进行修改,
 * 详情见:
 * https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6
 */