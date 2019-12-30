/**
 * _.debounce(func, [wait=0], [options={}])
 * 延迟调用函数.
 * 在等待设定的时间后调用函数.
 * 等待过程中,每次再触发函数都会重置计时器,将时间推迟,
 * 实际调用时间会是最后一次触发函数后再等待设定的时间.
 * 
 * func -- 等待调用的函数
 * 
 * wait -- 函数需要等待多少时长才会被调用 默认值为 0 单位为毫秒
 * 
 * options -- 可添加的选项
 * 		leading -- 等待开始前是否调用func 默认为false
 * 					例如: 
 * 					设leading为false,trailing为true
 * 						触发一次func,
 * 							等待wait设定的时间后,调用func
 * 						连续触发多次func,
 * 							根据最后一次触发func的时间+wait 再调用func
 * 					设leading为true,trailing为true
 * 						触发一次func,
 * 							不管wait设为多少,func会被马上调用
 * 						连续触发多次func,
 * 							不管wait设为多少,先马上调用一次func,
 * 							然后再根据最后一次触发func的时间+wait再调用第二次func
 * 		trailing -- 等待结束后是否调用func 默认为true
 * 					例如: 
 * 					设leading为false,trailing为false
 * 							完全不会调用func
 * 					设leading为true,trailing为false
 * 							只会马上调用一次func
 * 		maxWait -- func最多等待多久就会触发一次 单位为毫秒
 * 					默认状态是不设置maxWait,
 * 					只要设置了maxWait的值,哪怕是null undefined NaN也会与默认效果不一样.
 * 					例如:
 * 						maxWait<=wait(maxWait可以为0 负数 null undefined NaN)
 * 						在wait时限内,不管触发多少次func,
 * 						都会在wait时限结束后,触发func一次
 * 						设wait为4000,maxWait为3000,用户在10000ms内不断触发func
 * 						结果:
 * 							4000ms时触发了一次func,8000ms时触发了一次func,
 * 							12000ms时触发了一次func
 * 
 * 						maxWait>wait
 * 						1.最后一次触发func的时间+wait<maxWait 
 * 						设wait为4000,maxWait为8000,用户在3000ms内不断触发func
 * 						结果:
 * 							7000ms时触发了一次func
 * 						
 * 						2.最后一次触发func的时间+wait>maxWait 
 * 						设wait为4000,maxWait为5000,用户在3000ms内不断触发func
 * 						结果:
 * 							5000ms时触发了一次func
 * 						
 * 						3.最后一次触发func的时间大于maxWait
 * 						设wait为4000,maxWait为5000,用户在10500ms内不断触发func
 * 						结果:
 * 							5000ms时触发了一次func,10000ms时触发了一次func,
 * 							14500ms时触发了一次func
 * 							
 * 							
 * 
 * 						
 * 					
 * 
 * 
 * 
 * 
 */

	