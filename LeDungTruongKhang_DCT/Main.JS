let arr = [7, 1, 4, 6, 5, 3, 9, 2, 2, 3];
function chuoi(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        result.push(arr[i], arr[j]);
        console.log(result);
      }
    }
  }
}
chuoi(arr);
