function groupAnagrams(arr) {
  var aObj = {};
  var alen = arr.length;
  var res = [];
  var elem;
  for (var i = 0; i < alen; i++) {
    elem = arr[i].toLowerCase().split('').sort().join('');
    if (typeof aObj[elem] == 'undefined') {
      aObj[elem] = [arr[i]];
    } else {
      aObj[elem].push(arr[i]);
    }
  }

  for (var key in aObj) {
    if (!aObj.hasOwnProperty(key)) continue;
    if (aObj[key].length !== 0) {
      res.push(aObj[key]);
    }
  }

  return res;
}

var strArr = ["eat", "tea", "Tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strArr));