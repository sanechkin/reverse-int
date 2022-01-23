module.exports = function reverse (n) {
  let number = (n < 0) ? n = 0-n : n = n;
  let arr = String(number);
  let answer = arr.split('').reverse().join('');
    return answer;
}