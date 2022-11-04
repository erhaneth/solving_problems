class MyArray {
    //initial function will run
    constructor() {
        //has 2 data points
         this.length = 0;
         this.data = {};
    }
    // get() access data from memory - go grab it!
    get(index) {
        return this.data[index];
    }
    // add something to the end of MyArray
    push(item) {
        // adding first item to 0th index
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    //delete last item in the MyArray
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--;
        return lastItem
    }
    // takes index parameter that tell us which item should be deleted
    delete(index){
        // create reference whoch item we want to delete
        const item = this.data[index];
        // shifttig data for us with shiftItemes() function
        this.shiftItems(index)
        return item
    }
    // loop thru list shift the item and delete
    shiftItems(index){
        for(let i = index; i < this.length -1; i++){
            // shiftin item to the left by adding one - bc left empty
           this.data[i] = this.data[i + 1];
        }
       delete this.data[this.length-1];
       this.length--;
    }


}
const newArray = new MyArray();
newArray.push('btc')
newArray.push('eth')
newArray.push('sol')
newArray.push('cord')

// newArray.pop();
newArray.delete(2)
newArray.push('ava')
newArray.push('doge')

console.table(newArray)