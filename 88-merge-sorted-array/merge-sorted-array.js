/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let arr1=[];
    let arr2=[];
    for(let i=0;i<=m-1;i++){
         arr1[i]=nums1[i];
    }
    for(let j=0;j<=n-1;j++){
         arr2[j]=nums2[j];
    }
    let res=[...arr1,...arr2].sort((a,b)=>a-b);
    for(let i=0;i<res.length;i++){
        nums1[i]=res[i];
    }
    return res;
}