/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if(numRows === 1) return s

  const up = 'up'
  const down = 'down'
  let result = []
  for(let i = 0;  i < numRows; i++) {
    result[i] = []
  }

  let index = 1
  let rows = 0
  let direction = down
  for(let char of s) {
    result[rows].push(char)
    if (direction === down) {
      if(rows < numRows - 1) {
        rows += 1
      }
      else {
        direction = up
        rows -= 1
      }
    } else {
      if(rows > 0) {
        rows -= 1
      }
      else {
        direction = down
        rows += 1
      }
    }
  }

  return result.map(_ => _.join('')).join('')
}
