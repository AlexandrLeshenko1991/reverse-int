module.exports = function reverse(n) {
    let numb = `${n}`.split('').reverse().join('')
    return parseInt(numb)
}
