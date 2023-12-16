function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a['age'] - b['age']);
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if ((a % 2 === 0 && b % 2 === 1)) return 1;
    else if (a % 2 === 1 && b % 2 === 0) return -1;

    return a - b;
  })
}

function validAnagrams(s, t) {
  // Your code here
  if (t.length !== s.length) return false;

  let sChars = s.split('');
  let tChars = t.split('');

  sChars.sort();
  tChars.sort();

  for (let i = 0; i < sChars.length; i++) {
    if (sChars[i] !== tChars[i]) return false;
  }

  return true;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    const aStr = `${a}`;
    const bStr = `${b}`;

    if (aStr.length > bStr.length) return -1;
    else if (aStr.length < bStr.length) return 1;

    return a - b;
  })
}

function frequencySort(arr) {
  // Your code here
  const frequencies = {};

  for (let i = 0; i < arr.length; i++) {
    if (!frequencies[arr[i]]) {
      frequencies[arr[i]] = 0;
    }

    frequencies[arr[i]]++;
  }

  return arr.sort((a, b) => {
    if (frequencies[a] < frequencies[b]) return -1;
    else if (frequencies[a] > frequencies[b]) return 1;

    return b - a;
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
