function scream(n) {
    let scream = ""
    for(let i = 0; i < n; i++){
        if(i % 2=== 0){
        scream += "a"

        }else {
            scream += "A"
        }
        
    }
    return scream
}
scream(5)
scream(10)

module.exports = scream;