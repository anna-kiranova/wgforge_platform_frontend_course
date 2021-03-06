/*
write a function's body that concat all passed strings to one and returns it
*/
export function concat(...strings) {
  return strings.join('');
}

/*
write a function's body that returns string
that contains element of initial strings with odd indexes

Example:
'abcd' -> 'ac'
'' -> ''
'test' -> 'ts'
*/
export function oddElements(string) {
  let result = [];
  let arr = string.split('');
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    }
  }
  let str = result.join('');
  return str;
}

/*
write a function's body that returns words count in passed string

Example:
'abcd' -> 1
'' -> 0
'foo bar' -> 2

Note: String has .split(separator) method where seprator is another string
*/
export function wordsCount(string) {
  if (!string) {
    return 0;
  }
  let arr = string.split(' ');
  return arr.length;
}
