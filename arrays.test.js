const sum = require('./Arrays/1.BasicLoop');
const mergeStrings = require('./Arrays/mergeStr');




test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});




test('word1 + word2 equal word1word2', () => {
  const word1 = "abd"
  const word2 = 'hg'
  const word3 = word1 + word2
  expect(mergeStrings(word1, word2)).toBe(word3)
})

