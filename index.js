function scaleBalance(strArr) {
  let regex = /[\[\],]+/g;
  let scale = strArr[0]
    .replace(regex, "")
    .split(" ")
    .map(e => parseInt(e));
  let values = strArr[1]
    .replace(regex, "")
    .split(" ")
    .map(e => parseInt(e))
    .filter(e => !Number.isNaN(e));
  let resultsArr = [];

  // Check if equal at start
  if (scale[0] === scale[1]) {
    return "Not Possible";
  }

  // Check if values array is empty
  if (values.length === 0) {
    return "No values";
  }

  return strArr.join("");
}

module.exports = scaleBalance;
