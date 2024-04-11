const longestPrefix = require('./Strings/longestPrefix');

test('longest prefix of ["flower","flow","flight"] is "fl"', () => {
    const strs = ["flower","flow","flight"]
    expect(longestPrefix(strs)).toBe('fl')
  } )