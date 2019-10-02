function scaleBalance(strArr) {
  let scale = JSON.parse(strArr[0]);
  let values = JSON.parse(strArr[1]);
  let left = scale[0];
  let right = scale[1];
  let difference = Math.floor(Math.abs(left - right));
  let returnValue = "Not Possible";
  let addLeft = values.map(e => {
    return e + left;
  });

  let addRight = values.map(e => {
    return e + right;
  });

  // Check if values array is empty
  if (values.length === 0) {
    returnValue = "No values";
  }

  // Check if equal at start
  if (left === right) {
    returnValue = "Not Possible";
  } else {
    // Balance scale
    addLeft.forEach(e => {
      addRight.forEach(f => {
        if (e === f) {
          if (addLeft.indexOf(e) > addRight.indexOf(f)) {
            returnValue = `${values[addRight.indexOf(f)]}, ${
              values[addLeft.indexOf(e)]
            }`;
          } else {
            returnValue = `${values[addLeft.indexOf(e)]}, ${
              values[addRight.indexOf(f)]
            }`;
          }
        }
      });
    });
  }

  // Check if difference between left and right are in the list of values
  values.forEach(e => {
    if (e === difference) {
      returnValue = `0, ${e}`;
    }
  });

  let arr = [];
  values.forEach(e => {
    if (e < difference) {
      arr.push(e);
      difference -= e;
    } else {
      if (e === difference) {
        arr.push(e);
        difference -= e;
      }
    }
  });

  return returnValue;
}

module.exports = scaleBalance;
