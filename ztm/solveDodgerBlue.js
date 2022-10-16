const nemo = ['nemo'];
const everychar = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

const large = new Array(100).fill('nemo');
function findNemo(array) {
    
    for (let i =0; i < array.length; i++ ){
        console.log('runnn')
        if(array[i]==='nemo'){
            console.log("Found NEMO!");
            break;
        }
    }
    
   
}
findNemo(everychar)
// // console.log("helooooo"); 

// const boxes = [1,3,5,6,7];

// function grabFirstTwo(boxes){
//     console.log(boxes[0]);
//     console.log(boxes[1]);
// }
// grabFirstTwo(boxes)
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//     let a = 10; // O(1)
//     a = 50 + 3; // O(1)
  
//     for (let i = 0; i < input.length; i++) { // O(n)
//       anotherFunction(); // O(n)
//       let stranger = true; // O(n)
//       a++; // O(n)
//     }
//     return a; // O(1)
//   }
//   // big O(3 + 4n) == O(n)