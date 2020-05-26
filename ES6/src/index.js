/**
 *  Array对象的some方法，返回boolean值
 */
/*
const arr = [{
    name: '张三',
    age: 12
}, {
    name: '李四',
    age: 26
}]
const result = arr.some(item => {
    return item.age > 20
})
console.log(result)
 */


 /**
  * @param { any } item是数组中的项 - 返回值为boolean
  */
 /*
const arr = [{
    name: '张三',
    age: 12
}, {
    name: '李四',
    age: 26
}]
const result = arr.every(item => {
    return item.age > 20
})
console.log(result) // false
*/


/**
 * @param { string } 数组中的项
 * @param { number } 查询开始处的索引值,当为负数时，搜索到0结束，当为正数，搜索到数组长度截止
 */
/*
const arr = ['a', 'b', 'c', 'd']
console.log(arr.includes('a'))      // true
console.log(arr.includes('a', 1))   // false
console.log(arr.includes('c', 1))   // true
console.log(arr.includes('c', -1)) // false
*/


/**
 * @param { any } 数组的项，只要查询到满足条件的，就停止查询，返回查询到项
 */
/*
const arr = [{
    name: '张三',
    age: 12
}, {
    name: '李四',
    age: 26
}]
const result = arr.find(item => {
    return item.age > 20
})
console.log(result) // { name: '李四', age: 26 }
*/


/**
 * @param { any } 查询数组中满足条件的索引值，查询到就返回当前索引值，查询不到返回-1
 */
/*
const arr = [{
    name: '张三',
    age: 12
}, {
    name: '李四',
    age: 26
}]
const index = arr.findIndex(item => {
    return item.age > 20
})
const idx = arr.findIndex(item => {
    return item.age < 10
})
console.log(index) // 1
console.log(idx) // -1s
*/

/**
 * 最终返回一个数组实例
 * @param { string | any } 伪数组对象或可迭代对象
 * @param { callback } 生成的新数组的每个元素都会执行该方法,可选参数
 * @param { thisArg } 执行回调函数时this对象 
 */
/*
const arr1 = Array.from('foo')
console.log(arr1)  // ['f', 'o', 'o']
const arr2 = Array.from([1, 2, 3], item => item * 2)
console.log(arr2) // [2, 4, 6]
function test()  {
    const arr = Array.from(arguments, item => item * 3)
    return arr
}
console.log( test(1, 2, 3) ) // [3, 6, 9]

const arr = [1, 2, 2, 3, 5, 4, 3]
const newArr = Array.from(new Set(arr))
console.log(newArr) // [1, 2, 3, 5, 4]

function test() {
    const arr = Array.from(arguments)
    const newArr = Array.from(new Set(arr))
    console.log(newArr)
}
test(1, 3, 2, 3) // [1, 3, 2]
*/


/* Set对象
const arrSet =  new Set([1, 2, 3, 2])
console.log( arrSet.add('test') )   // {1, 2, 3, 'test' }
console.log( arrSet.has(2) )       // true
console.log( arrSet.size )         // 4
const iterator = arrSet.entries()
for( let [key, value] of iterator) {
    console.log(key)            // 1, 2, 3, 'test'
    console.log(value)          // 1, 2, 3, 'test'
}
console.log( arrSet.delete(2) ) // true
console.log(arrSet)
*/


/*
const map = new Map()
map.set('name', 'francis' )
map.set('age', 20)
console.log(map.get('name'))    // francis
console.log(map.has('name'))    // true
console.log( map.keys() )       // {'name', 'age'}
console.log( map.values() )     // {'francis', 20}
for( let [key, value] of map.entries()) {
    console.log(key, value)     // name francis     // age 20     
}

const mapArr = [['key1', 'value1'], ['key2', 'value2']]
const map2 = new Map(mapArr)
console.log(map2)                   // {'key1' => 'value1', 'key2' => 'value2'}
console.log( Array.from(map2) )     // [['key1', 'value1'], ['key2', 'value2']]
*/


/*
function fn(reslove) {
    setTimeout(() => {
        reslove(123)
    }, 1e3)
}
let p0 = new Promise(fn)        // 返回的是一个Promise对象,状态为pending
p0.then(res => {
    console.log(res)            // 123
})

let p1 = Promise.resolve(234)   // 返回一个Promise对象，状态为resolve
p1.then(res => {
    console.log(res)            // 234
})

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}
*/

/**
 * @param { Promise[] } -需要等待所有的Promise对象全部resolve后，并按照顺序返回数组
 * - 所有Promise对象状态为resolve后程序退出
 */
/*
Promise.all([
    delay(2),
    delay(1),
    delay(8),
    delay(4)
]).then(res => {
    console.log(res)        // [2, 1, 8, 4]
})
*/


/**
 * @param { Promise[] } - 只要有一个Promise对象的状态变为resolve或reject就结束
 */
/*
Promise.race([
    delay(2),
    delay(1),
    delay(3)
]).then(res => {
    console.log(res)        // 1
})
*/
