const frequencyString = str => {
  const charArr = [];

  const aCharCode = 'a'.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    const position = str[i].charCodeAt(0) - aCharCode;

    charArr[position] = (charArr[position] || 0) + 1;
  }

  let res = '';
  for (let j = 0; j < charArr.length; j++) {
    if (charArr[j]) {
      const char = String.fromCharCode(j + aCharCode);
      res += char + charArr[j];
    }
  }

  return res;
}

const groupAnagrams = (strs) => {
  const anagramGroupObj = {};
  for (let i = 0; i < strs.length; i++) {
    const frequencyStr = frequencyString(strs[i]);
    if (!anagramGroupObj[frequencyStr]) {
      anagramGroupObj[frequencyStr] = [];
    }

    anagramGroupObj[frequencyStr].push(strs[i]);
  }

  return Object.values(anagramGroupObj);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const output = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

console.log(groupAnagrams(strs));