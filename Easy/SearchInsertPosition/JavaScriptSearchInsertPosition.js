/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let insertPos;

    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(target == nums[mid]){
            return mid;
        }else if(target < nums[mid]){
            end = mid - 1;
            insertPos = start;
           
        }else{
            start = mid + 1;
            insertPos = mid + 1;
        }
    }
    
    return insertPos;
};