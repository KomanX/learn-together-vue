/**
 * _.throttle(func, [wait=0], [options={}])
 * 延迟调用函数,用户在小于wait的时间内不管触发了多少次func,都只会在wait计时结束时触发一次.
 * 
 * 与_.debounce极为相似,option中没有maxWait值,可以设置trailing和leading.
 * 呈现的效果与_.debounce将maxWait,wait设置为相同数值后呈现的效果一样.
 * 
 * 
 * 与_.debounce的具体差异需要深入了解源码后讨论.
 */


