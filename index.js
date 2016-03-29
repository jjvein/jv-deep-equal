/**
 * deep equal
 * @first: first param
 * @second: second param
 * @opts: Object{strict: Boolean}
 */
var objectKeys = require('jjvein-object-keys')

var deepEqual = module.exports = function(first, second, opts) {

    if(!opts) opts = {}

    //如果两个比较对象就是完全相等，那么则不用考虑。
    if (first === second) return true

    //如果两个都是日期，我们比较这两个日期的getTime()的结果是否相等。
    if (first instanceof Date && second instanceof Date) {
        return first.getTime() === second.getTime() 
    }

    //如果两个都不是对象， 可能是基本类型如string, number, undefined
    if(typeof first !== 'object' && typeof second !== 'object') {
        return (opts && opts.strict) ? first === second : first == second
    }
    else {
        return objectEqual(first, second, opts) 
    }
}
//如果是null或者undefined，无法验证全等.
function nullOrUndefined(a) {
    if(a === null || a === undefined) return true

    return false
}

function objectEqual(first, second, opts) {
   
    var i, len, key
    //if null or undefined, return false
    if(nullOrUndefined(first) || nullOrUndefined(second)) return false

    try{
      var kf = objectKeys(first)
      var sf = objectKeys(second)
    } catch(e) {
        //可能会抛出错误
        return false 
    }
    if(kf.length != sf.length) return false
    //检测一下key的值是否相等
    
    for (i=0; i< len; i++) {
        if(kf[i] != sf[i]) return false
    } 
    //检测值是否相等
    for(i=0; i<len; i++) {
        key = kf[i] 
        if(!deepEqual(first[key], second[key]))
            return false
    }

    return true
}

