/*
collect array's element to object with first letters as keys
and sorted words array as a value

Example:
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  let hash = {};
  for (let word of words) {
    let first = word[0];
    let values = hash[first] || []; 
    values.push(word);
    values.sort();
    hash[first] = values;
  }
  return hash;
}

/*
Write a function which receives object and list of keys
and returns object with only keys passed in arguments.
unknown keys are ignored

Example:
({name: 'John', age: 42}, 'name') yields {name: 'John'}
*/
export function only(obj, ...keys) {
  let result = {};
  for (let key of keys) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

/*
Function counts words in given text.
returns an object with word as key and it's frequence as value

Note: It should ignore punctuation marks and uppercase symbols

Example:
'Awesome! Does it work? It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  let result = {};
  text = text.toLowerCase();
  let words = text.match(/\w+/g);
  if (!words) {
    return result;
  }
  for (let word of words) {
    let count = result[word] || 0;
    count++;
    result[word] = count;
    
  }
  return result;
}

console.log(wordsCount(''));
console.log(wordsCount('test'));
console.log(wordsCount('test!'));
console.log(wordsCount('test?'));
console.log(wordsCount('test,'));
console.log(wordsCount('test.'));

/*
Write a function's body which create an object for user representation
It should contains method for password validation:
password is weak if it contains only lowercase letters or only uppercase

Example:
const user = createUser('root', 'topsecret')
user.login === 'root' // true
user.password === 'topsecret' // true
user.isWeakPassword() === true
user.password = 'topSecreT'
user.isWeakPassword() === false
*/

class User {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }

  isWeakPassword() {
    return !(/[a-z]/.test(this.password) && /[A-Z]/.test(this.password));
  }
}

export function createUser(login, password) {
  return new User(login, password);
}
