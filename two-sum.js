var twoSum = function(nums, target) {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
        console.log(`Checking index ${i} with value ${nums[i]}`)
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                console.log(`Found indices: ${i} and ${j} with values: ${nums[i]} and ${nums[j]}`);
                indices.push([i, j]);
            }
        }
    }
    return indices;
};
const nums = [2, 7, 11, 15, 3, 6, 4, 8, 10, 5, 9, 1, 39, 3, 12, 14, 18, 20, 22, 24];
const target = 21;

const result = twoSum(nums, target);
console.log(result);