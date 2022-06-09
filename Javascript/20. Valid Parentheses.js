const dict = {
  '(': ')',
  '[': ']',
  '{': '}'
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let container = []
  for(let i = 0; i < s.length; i++) {
    if(s[i] === dict[container[0]]) {
      container.shift()
    } else {
      container.unshift(s[i])
    }
  }
  return container.length === 0
};
