import reduce from '../src/reduce';
var expect = require('chai').expect;

describe('减法函数的测试', function () {
    it('1 减 3 等于 -2', function () {
        expect(reduce(1,3)).to.be.equal(-2);
    })
    it('10 减 3 等于 6', function () {
        expect(reduce(10,3)).to.be.equal(6);
    })
})