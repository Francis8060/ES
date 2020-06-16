import './index.scss'
import '../../static/css/common.css'
import utils from '~/static/utils/misc.js'
import $ from 'jquery'

utils.setItem('home', function () {
    console.log('这是引入了common')
})

const fn = () => {
    console.log('这是箭头函数')
}
fn()

class Animal {
    constructor (name) {
        this.name = name
    }
}

console.log(new Animal('dog').name, '这是使用了clas定义类')


function * gen() {
    yield 1
}
console.log(gen().next(), '这是使用了generator')

const arr = ['test', 'text', 'type']
console.log(arr.includes('type'), '这是使用了数组includes方法')

