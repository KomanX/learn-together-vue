/**
 * 
 * RESTfulAPI:
 * 
 *  restful: 遵守了rest 原则 的web服务
 *  REST即表现层状态转化(Representational State Transfer)
 *  rest原则：
 * 		网络上的所有事物都被抽象为资源
 * 		每个资源都有一个唯一的资源标识符
 * 		同一个资源具有多种表现形式(xml,json等)
 * 		对资源的各种操作不会改变资源标识符
 * 		所有的操作都是无状态的
 * 资源(Resources）
 * 		图片，文本。。。都属于资源。 对于restful API来讲接口就是一个资源，资源本身有个指向，那就是url。
 * 		然而url就成为了这个资源的唯一标识符
 * 表现层(Representational)
 * 		来描述资源的一种形式,HTTP请求的头信息中用Accept和Content-Type字段指定，这两个字段才是对”表现层”的描述。
 * 状态转化（State Transfer）
 * 		对资源的各种操作不会改变资源标识符，最基本的操作不过于CDUR(增删改查)，
 * 		然而对于API来讲也是如此：GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源。
 * 		所有的操作都是无状态的，如果按照HTTP方法的语义来暴露资源，
 * 		那么接口将会拥有安全性和幂等性的特性，
 * 		例如GET和HEAD请求都是安全的， 无论请求多少次，都不会改变服务器状态。
 * 		而GET、HEAD、PUT和DELETE请求都是幂等的，无论对资源操作多少次， 结果总是一样的，后面的请求并不会产生比第一次更多的影响。
 * 		无状态服务器是指一种把每个请求作为与之前任何请求都无关的独立的事务的服务器。
 * 
 * 幂等: 操作不管多少次,产生的结果都与操作一次相同.
 * 
 * 实现:
 * 		对一个资源的CDUR(增删改查),具体操作不应该体现在URI中,URI用于指向一个资源,只应该是名词而不存在动词.
 * 		所以,具体操作应该体现在HTTP协议中.
 * 		
 * 		例如:
 * 			/example/createObj
 * 			/example/deleteObj
 * 			/example/updateWholeObj
 * 			/example/updateDataOfObj
 * 			/example/getObj
 * 		以上的URI应该改成
 * 			/example/obj	:POST
 * 			/example/obj	:DELETE
 * 			/example/obj	:PUT
 * 			/example/obj	:PATCH
 * 			/example/obj	:GET
 * 
 * 		POST请求用于创建新内容 —— 非幂等 多次请求会创建多个内容对象
 * 		DELETE请求用于删除内容 —— 幂等
 * 		PUT请求和PATCH请求都是用于更新内容,
 * 			PUT用于更新整个内容,所以需要提交完整的内容对象. 
 * 				—— 幂等	如果没有提交完整的内容对象,那不完整的部分会被清空.
 * 						而且PUT有个create的过程,如果提交的内容对象标识符不存在,则会新建一个内容对象.
 * 			PATCH用于更新指定的部分数据,只需要提交需要更新的数据. —— 幂等 只会更新指定的部分数据,而且没有create过程.
 * 		GET请求用于获取内容. —— 幂等
 */