var dE = require('../')
var log = console.log

var a1 = 1, b1 = 2
log('a1 == b1 ', dE(a1, b1))

var a2 = 2, b2 = '2'
log('a2 == b2 ', dE(a2, b2))

var a3 = 3, b3 = '3'
log('a3 === b3 ', dE(a2, b2, {strict: true}))

var a5 = new Date, b5 = new Date
log('a5 == b5 ', dE(a5, b5))

var a4 = {foo: 123, bar: 234}, b4 = {foo: 123, bar: 234}
log('a4 == b4 ', dE(a4, b4))

var a7 = null, b7 = undefined
log('a7 == b7 ', dE(a7, b7))

var a8 = [1, 2, 3], b8 = [1, 2, 3]
log('a8 == b8', dE(a8, b8))

var a9 = [1, 2, 3], b9 = [1, 3, 3]
log('a9 == b9', dE(a9, b9))

var a10 = {foo: [1,2,3], bar: {name: 'bar', weight: 24}}
var b10 = {foo: [1,2,3], bar: {name: 'bar', weight: 25}}
var c10 = {foo: [1,2,3], bar: {name: 'bar', weight: 24}}
log('a10 == b10', dE(a10, b10))
log('a10 == c10', dE(a10, c10))
