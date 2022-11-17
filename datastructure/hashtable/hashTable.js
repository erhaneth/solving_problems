// let user = {
//     age: 24,
//     name: 'heg',
//     magic: true,
//     interest: 'crypto',
//     scream: function() {
//         console.log('offfffff!');
//     }
// }
// console.log(user.interest) // O(1)
// console.log(user.scream()) // O(1)

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    // _ is shows that this is private property - cant access
    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
    }
}

const myHashTable = new HashTable(50);
// console.log(myHashTable.set('grapes', 1000))
// console.log(myHashTable.get('grapes'))
console.log(myHashTable._hash(21))

