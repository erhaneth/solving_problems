function scream(n) {
    let scream = ""
    for(let i = 0; i < n; i++){
        scream += "a"
    }
    return scream
}
scream(5)
scream(10)

module.exports = scream;