function reverseStr(str) {
  return str.split("").reverse().join("");
}


function reverseWords(str) {
  return str.split(" ").map(reverseStr).join(" ");
}