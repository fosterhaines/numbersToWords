const test = require('tape');

const numToWord = require('../numberToWordRefactor');

test('should return Number passed in is not in range when the value is 0', function (t) {
    t.equal('Number passed in is not in range', numToWord(0));
    t.end();
});
test('should return one when the value is 1', function (t) {
    t.equal(numToWord(1),'one');
    t.end();
});
test('should return seven when the value is 7', function(t) {
   t.equal(numToWord(7), 'seven');
   t.end();
});
test('should return ten when the value is 10', function(t) {
    t.equal(numToWord(10),'ten');
    t.end();
});
test('should return eleven when the value is 11', function(t) {
    t.equal(numToWord(11),'eleven');
    t.end();
});
test('should return fourteen when the value is 14', function(t) {
    t.equal(numToWord(14),'fourteen');
    t.end();
});
test('should return twenty two when the value is 22', function(t) {
    t.equal(numToWord(22),'twenty two');
    t.end();
});
test('should return thirty four when the value is 34', function(t) {
    t.equal(numToWord(34),'thirty four');
    t.end();
});
test('should return one hundred and three when the value is 103', function(t) {
    t.equal(numToWord(103),'one hundred and three');
    t.end();
});
test('should return one hundred and eleven when the value is 111', function(t) {
    t.equal(numToWord(111),'one hundred and eleven');
    t.end();
});
test('should return one hundred and twenty when the value is 120', function(t) {
    t.equal(numToWord(120),'one hundred and twenty');
    t.end();
});
test('should return one hundred and twenty one when the value is 121', function(t) {
    t.equal(numToWord(121),'one hundred and twenty one');
    t.end();
});
test('should return one hundred and seventy nine when the value is 179', function(t) {
    t.equal(numToWord(179),'one hundred and seventy nine');
    t.end();
});
test('should return three hundred when the value is 300', function(t) {
    t.equal(numToWord(300),'three hundred');
    t.end();
});
test('should return one thousand when the value is 1000', function(t) {
    t.equal(numToWord(1000),'one thousand');
    t.end();
});
test('should return one thousand and two when the value is 1002', function(t) {
    t.equal(numToWord(1002),'one thousand and two');
    t.end();
});
test('should return one thousand and fifty eight when the value is 1058', function(t) {
    t.equal(numToWord(1058),'one thousand and fifty eight');
    t.end();
});
test('should return one thousand and six hundred and three when the value is 1603', function(t) {
    t.equal(numToWord(1603),'one thousand and six hundred and three');
    t.end();
});
test('should return seven thousand and nine hundred and thirty two when the value is 7932', function(t) {
    t.equal(numToWord(7932),'seven thousand and nine hundred and thirty two');
    t.end();
});
test('should return nine thousand and two hundred and thirty eight when the value is 9238', function(t) {
    t.equal(numToWord(9238),'nine thousand and two hundred and thirty eight');
    t.end();
});
test('should return Number passed in is not in range when the value is 10000', function (t) {
    t.equal('Number passed in is not in range', numToWord(10000));
    t.end();
});
