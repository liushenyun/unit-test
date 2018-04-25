// 引入add文件
var add = require('../src/add');
// 引入断言
var expect = require('chai').expect;

describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(add(1,1)).to.be.equal(2)
    })

    it('1 加 0 应该等于 1', function () {
        expect(add(1,0)).to.be.equal(1)
    })

    it('1 加 3 应该等于 3', function () {
        expect(add(1,1)).to.be.equal(3)
    })
})