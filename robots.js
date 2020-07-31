const { input, printFinalPositions, checkInput } = require("./input")
const { isMovementOutOfBounds, isMovementForbidden } = require("./utils")

try {
  checkInput(input)
} catch (err) {
  if (err == "Error: Maximum value for any coordinate is 50") {
    console.log("Error: the maximum value for any coordinate is 50")
    return 0;
  }
  if (err == "Error: All instruction strings will be less than 100 characters in length") {
    console.log("Error: All instruction strings will be less than 100 characters in length")
    return 0;
  }
}


const forbiddenMovements = [];
let outOfBounds = false;


function processMovement(forbiddenMovements, initialPosition, newPosition) {
  if (isMovementForbidden(forbiddenMovements, initialPosition, newPosition)) {
    return initialPosition;
  } if (isMovementOutOfBounds(newPosition)) {
    forbiddenMovements.push([initialPosition, newPosition]);
    outOfBounds = true;
    return initialPosition;
  }
}

function move(position, movement) {
  const initialPosition = [...position];
  const newPosition = [...position];
  switch (movement) {
    case 'F':
      if (position[2] == 'N') {
        newPosition[1]++;
        const mov = processMovement(forbiddenMovements, initialPosition, newPosition);
        if (mov) {
          return mov;
        }
        return newPosition;
      } if (position[2] == 'E') {
        newPosition[0]++;
        const mov = processMovement(forbiddenMovements, initialPosition, newPosition);
        if (mov) {
          return mov;
        }
        return newPosition;
      } if (position[2] == 'S') {
        newPosition[1]--;
        const mov = processMovement(forbiddenMovements, initialPosition, newPosition);
        if (mov) {
          return mov;
        }
        return newPosition;
      } if (position[2] == 'W') {
        newPosition[0]--;
        const mov = processMovement(forbiddenMovements, initialPosition, newPosition);
        if (mov) {
          return mov;
        }
        return newPosition;
      }
      break;
    case 'R':
      if (position[2] == 'N') {
        position[2] = 'E';
      } else if (position[2] == 'E') {
        position[2] = 'S';
      } else if (position[2] == 'S') {
        position[2] = 'W';
      } else if (position[2] == 'W') {
        position[2] = 'N';
      }
      break;
    case 'L':
      if (position[2] == 'N') {
        position[2] = 'W';
      } else if (position[2] == 'E') {
        position[2] = 'N';
      } else if (position[2] == 'S') {
        position[2] = 'E';
      } else if (position[2] == 'W') {
        position[2] = 'S';
      }
      break;
  }
  return position;
}

const finalPositions = [];
let position = [];
let alternativePosition = [];
for (let i = 1; i < input.length; i++) {
  position = input[i][0];
  for (const j in input[i][1]) {
    const movement = input[i][1][j];
    if (!outOfBounds) {
      position = move(position, movement);
    } else {
      alternativePosition = [...position];
      alternativePosition.push('lost');
      break;
    }
  }

  if (outOfBounds) {
    finalPositions.push(alternativePosition);
  } else {
    finalPositions.push(position);
  }
  
  outOfBounds = false;
}

printFinalPositions(finalPositions)



