/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a, b) => a - b);
    let mid;
    
    if(arr.length % 2 == 0){
        mid = (arr[arr.length/2] + arr[(arr.length/2) - 1])/2;
    }else{
        mid = arr[Math.floor(arr.length/2)];
    }
    
    return mid;

};