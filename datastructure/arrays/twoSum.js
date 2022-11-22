var twoSum = function(nums, target) {
    let complements = {}
    for(let i = 0; i < nums.length; i++ ){
        if(nums[i] in complements){
            return [complements[nums[i]],i]
        } else {
            let neededNumber = target - nums[i]
            complements[neededNumber] = i  
        }
    }
};