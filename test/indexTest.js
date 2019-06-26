const assert = require('chai').assert;

const app = require('../index');

describe('ConvertNumberToWord', function() {
  it('9238 should return nine thousand and two hundred and thirty eight', function() {
      assert.equal(app(9238), 'nine thousand and two hundred and thirty eight', '9238 did not equal nine thousand and two hundred and thirty eight');
  });
  it('1 should return one', function() {
      assert.equal(app(1), 'one', '1 did not equal one');
  });
  it('7 should return seven', function() {
      assert.equal(app(7), 'seven', '7 did not equal seven');
  });
  it('10 should return ten', function () {
      assert.equal(app(10), 'ten', '10 did not equal ten');
  });
  it('11 should return eleven', function () {
      assert.equal(app(11), 'eleven', '11 did not equal eleven');
  });
  it('14 should return fourteen', function () {
      assert.equal(app(14), 'fourteen', '14 did not equal fourteen');
  });
  it('22 should return twenty two', function () {
      assert.equal(app(22), 'twenty two', '22 did not equal twenty two');
  });
  it('34 should return thirty four', function() {
      assert.equal(app(34), 'thirty four', '34 did not equal thirty four');
  });
  it('103 should return one hundred and three', function () {
      assert.equal(app(103), 'one hundred and three', '103 did not equal one hundred and three');
  });
  it('111 should return one hundred and eleven', function () {
      assert.equal(app(111), 'one hundred and eleven', '111 did not equal one hundred and eleven');
  });
  it('120 should return one hundred and twenty', function () {
      assert.equal(app(120), 'one hundred and twenty', '120 did not equal one hundred and twenty');
  });
  it('121 should return one hundred and twenty one', function () {
      assert.equal(app(121), 'one hundred and twenty one', '121 did not equal one hundred and twenty one');
  });
  it('179 should return one hundred and seventy nine',function(){
      assert.equal(app(179), 'one hundred and seventy nine', '179 did not equal one hundred and seventy nine');
  });
  it('300 should return three hundred', function () {
      assert.equal(app(300), 'three hundred', '300 did not equal three hundred');
  });
  it('1000 should return one thousand', function() {
      assert.equal(app(1000), 'one thousand', '1000 did not equal one thousand');
  });
  it('1002 should return one thousand and two',function () {
      assert.equal(app(1002), 'one thousand and two', '1002 did not equal one thousand and two');
  });
  it('1058 should return one thousand and fifty eight',function () {
      assert.equal(app(1058), 'one thousand and fifty eight', '1058 did not equal one thousand and fifty eight');
  });
  it('1603 should return one thousand and six hundred and three',function () {
      assert.equal(app(1603), 'one thousand and six hundred and three', '1603 did not equal one thousand and six hundred and three');
  });
  it('7932 should return seven thousand and nine hundred and thirty two',function () {
      assert.equal(app(7932), 'seven thousand and nine hundred and thirty two', '7932 did not equal seven thousand and nine hundred and thirty two');
  });
  it('0 should return Number passed in is not in range', function () {
      assert.equal(app(0), 'Number passed in is not in range', '0 is not a valid input');
  });
  it('10000 should return Number passed in is not in range', function() {
      assert.equal(app(10000), 'Number passed in is not in range', '10000 is not a valid input');
  });
});
