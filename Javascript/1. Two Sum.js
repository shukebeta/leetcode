/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let container = {}
  for(let i = 0; i < nums.length; i++) {
    let val = nums[i]
    if(container[target - val] !== undefined) {
      return [i, container[target - val]]
    }
    container[val] = i
  }
}
