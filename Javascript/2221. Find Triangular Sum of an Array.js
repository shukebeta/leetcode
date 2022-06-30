/**
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = (nums) => {
  while(nums.length > 1) {
    nums = nums.slice(0, nums.length - 1).map((num, index) =>  (num + nums[index + 1]) % 10)
  }
  return nums[0]
}
