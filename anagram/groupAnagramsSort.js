const sortStr = str => str.split('').sort().join('');

const groupAnagrams = (strs) => {
  const anagramGroupObj = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = sortStr(strs[i]);
    if (!anagramGroupObj[sortedStr]) {
      anagramGroupObj[sortedStr] = [];
    }

    anagramGroupObj[sortedStr].push(strs[i]);
  }

  return Object.values(anagramGroupObj);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const output = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

console.log(groupAnagrams(strs));