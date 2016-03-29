var assert = require('assert')

var dE = require('../')
describe('简单类型测试', function() {

    it('number', function() {
        var a1 = 1, b1 = 1
        assert.equal(true, dE(a1, b1)) 
        var a2 = 1, b2 = 2
        assert.equal(false, dE(a2, b2))
    })

    it('null || undefined', function(){
        var a1 = undefined, b1 = undefined 
        assert.equal(false, dE(a1, b1))
        var a2 = null, b2 = null
        assert.equal(false, dE(a2, b2))
        var a3 = null, b3 = undefined
        assert.equal(false, dE(a3, b3))
    })
})

describe('复杂类型测试', function(){
    it('Array', function() {
        var a1 = [1, 2, 3] , b1 = [1, 2, 3]
        assert.equal(true, dE(a1, b1))

        var a2 = [1, 2, 3], b2 = [1, 3, 2]
        assert.equal(false, dE(a2, b2))

    })

    it('Object', function(){
        var a1 = {foo: 123, bar: 123},
            b1 = {foo: 123, bar: '123'},
            c1 = {bar: 123, foo: 123}
        assert.equal(true, dE(a1, b1))
        assert.equal(false, dE(a1, c1))
    })

    it('Deep Equal Object', function() {
        var a1 = {foo: [1, 2, 3], bar: {name: 'bar', weight: 25}},
            b1 = {foo: [1, 3, 2], bar: {name: 'bar', weight: 24}},
            c1 = {foo: [1, 2, 3], bar: {name: 'bar', weight: 25}},
            d1 = {foo: [1, 2, 3], bar: {name: 'bar', weight: 25}}
        assert.equal(false, dE(a1, b1))
        assert.equal(true, dE(a1, c1))
        assert.equal(true, dE(a1, d1))

    })
})


