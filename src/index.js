// for all types of data like array of numbers or arrays of alphabets we can sort them with one function only seperately they can be sorted, ek me digits or ek array me sare alphabets rahe toh if they are together then the logic messes up.

var alphaArr = ["John Doe", "Alex Doe", "Peter Doe", "Elon Doe"];
//var op = ["A", "b", "z", "m", "Z", "rohu", "a"];
var op1 = [3, 100, -1, -5, 34, 68, 494, 0, -6];
console.log(toSortNumbers(op1));
function toSortNumbers(Arr) {
  console.log(`${Arr.length} length`);
  for (var i = 0; i < Arr.length; i++) {
    if (Arr[i] > Arr[i + 1]) {
      var x = Arr[i];
      Arr[i] = Arr[i + 1];
      Arr[i + 1] = x;
      i = -1;
    }
  }

  return Arr;
}

console.log(alphaArr.sort((a, b) => a.localeCompare(b)));
