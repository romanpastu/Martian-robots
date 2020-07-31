const { input } = require('./input');

function isMovementOutOfBounds(newPosition, input) {
  if (newPosition[0] > input[0][0] || newPosition[0] < 0 || newPosition[1] > input[0][1] || newPosition[1] < 0) {
    return true;
  }
  return false;
}

function isMovementForbidden(forbiddenMovements, initialPosition, newPosition) {
  function isArrayInArray(arr, item) {
    const item_as_string = JSON.stringify(item);
    const contains = arr.some((ele) => JSON.stringify(ele) === item_as_string);
    return contains;
  }
  const newMovement = [initialPosition, newPosition];

  if (isArrayInArray(forbiddenMovements, newMovement)) {
    return true;
  }
  return false;
}

module.exports = {
  isMovementOutOfBounds, isMovementForbidden,
};
