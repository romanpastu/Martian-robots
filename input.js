/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/*
Sample input

5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL

*/

// converted input
const input = [
  [5, 3],
  [[1, 1, 'E'], ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']],
  [[3, 2, 'N'], ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L']],
  [[0, 3, 'W'], ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L']],
];

/*

Sample output
1 1 E
3 3 N LOST
2 3 S

*/

// converted output
/*

[
    [ 1, 1, 'E' ],
    [ 3, 3, 'N', 'lost' ],
    [ 2, 3, 'S' ]
]

*/

function checkInstructionLength(values) {
  let length = 0;
  for (let i = 1; i < values.length; i++) {
    length += values[i][1].length;
    if (length > 100) {
      throw new Error('All instruction strings will be less than 100 characters in length');
    }
  }
}

function checkInput(values) {
  if (values[0][0] > 50 || values[0][1] > 50) {
    throw new Error('Maximum value for any coordinate is 50');
  }
  checkInstructionLength(values);
}

function printFinalPositions(finalPositions) {
  for (const i in finalPositions) {
    let string = '';
    for (const j in finalPositions[i]) {
      string += `${finalPositions[i][j]} `;
    }
    console.log(string);
    string = '';
  }
}

module.exports = {
  input, printFinalPositions, checkInput,
};
