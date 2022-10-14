const nemo = ['nemo'];
const everychar = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

const large = new Array(1000).fill('nemo');
function findNemo(array) {
    let time0 = performance.now();
    for (let i =0; i < array.length; i++ ){
        if(array[i]==='nemo'){
            console.log("Found NEMO!");
        }
    }
    let time1 = performance.now();
    console.log('Call to find Nemo took ' + (time1-time0) + " milliseconds");
}
findNemo(large)
// console.log("helooooo");