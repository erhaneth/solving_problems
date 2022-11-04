var object1 = { value: 20 };
var object2 = object1;
var object3 = { value: 20}
console.log(object3)

// context vs scope 

const object4 = {
    a: function(){
        console.log(this)
    }
}

// instantiation 
class Player {
    constructor(name,type){
        console.log('player', this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am${this.name}, I'm a ${this.type}`)
    }
}
class Wizard extends Player {
    constructor(name,type){
        //super() runs function in Player object
        super(name, type)
        console.log('wizard', this);
    }      
    play(){
        console.log(`Weyy I'm ${this.type}`)
    }
}

const wizard1 = new Wizard('Grenny', 'Healer')
const wizard2 = new Wizard('Darky', 'Killer')