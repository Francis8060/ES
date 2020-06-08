import logo from '@/imgs/logo.png'
// import './styles/index.css'
import './styles/test.scss'
// import 'bootstrap'
import 'boot'
import moment from 'moment'
import 'moment/locale/zh-cn'
import React from 'react'
import { render } from 'react-dom'

moment.locale('zh-cn')
console.log(moment().endOf('day').fromNow())

render(<h1>jsx</h1>, window.root)
// const fn = () => {
//     console.log(2)
// }
// fn()
// const arr = [1, 2, 3]
// console.log( arr.includes(3, 1) )
// const map = new Map()
// map.set('key1', 'value1')
// map.set('key2', 'value2')
// console.log( Array.from(map) )

// @log
// class Animal {
//     name = 'animal'
// }
// const animal = new Animal()
// console.log(animal.name)

// function log (target) {
//     console.log(target)
// }

// console.log('aaa'.includes('1'), 26)

// function * gen () {
//     yield 1
// }
// console.log(gen().next())

// const arr2 = 111
// console.log($, 34)

console.log(logo)
const img = new Image()
img.src = logo
document.body.appendChild(img)


// const xhr = new XMLHttpRequest()
// xhr.open('GET', '/api/user', true)
// xhr.onload = () => {
//     console.log(xhr.response, 47)
// }
// xhr.send()


