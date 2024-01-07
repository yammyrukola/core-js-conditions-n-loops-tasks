/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (
    (a === b && 2 * a > c) ||
    (a === c && 2 * a > b) ||
    (b === c && 2 * b > a)
  ) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';

  if (num >= 30) {
    res += 'XXX';
  } else if (num >= 20) {
    res += 'XX';
  } else if (num >= 10) {
    res += 'X';
  }

  const remainder = num % 10;
  switch (remainder) {
    case 1:
      res += 'I';
      break;
    case 2:
      res += 'II';
      break;
    case 3:
      res += 'III';
      break;
    case 4:
      res += 'IV';
      break;
    case 5:
      res += 'V';
      break;
    case 6:
      res += 'VI';
      break;
    case 7:
      res += 'VII';
      break;
    case 8:
      res += 'VIII';
      break;
    case 9:
      res += 'IX';
      break;
    default:
      break;
  }

  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const getWord = (digit) => {
    switch (digit) {
      case '-':
        return 'minus';
      case '.':
        return 'point';
      case ',':
        return 'point';
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return '';
    }
  };

  let res = '';
  let i = 0;
  while (numberStr[i] !== undefined) {
    res += i > 0 ? ' ' : '';
    res += getWord(numberStr[i]);
    i += 1;
  }

  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let length = 0;
  while (str[length] !== undefined) {
    length += 1;
  }

  let res = true;
  for (let i = 0; i < length / 2; i += 1) {
    if (str[i] !== str[length - i - 1]) {
      res = false;
      break;
    }
  }

  return res;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let res = -1;
  let i = 0;
  while (str[i] !== undefined) {
    if (str[i] === letter) {
      res = i;
      break;
    }
    i += 1;
  }

  return res;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  while (number % 10 >= 0) {
    if (number % 10 === digit) {
      return true;
    }
    number = Math.floor(number / 10);
    if (number === 0) return false;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const getSum = (start, end) => {
    let sum = 0;
    let i = 0;
    while (
      (end !== undefined && start + i <= end) ||
      (end === undefined && arr[start + i] !== undefined)
    ) {
      sum += arr[start + i];

      i += 1;
    }

    return sum;
  };

  let res = -1;
  let pos = 0;
  while (arr[pos] !== undefined) {
    if (getSum(0, pos) === getSum(pos, undefined)) {
      res = pos;
      break;
    }
    pos += 1;
  }

  return res;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const TO_RIGHT = 0;
  const TO_DOWN = 1;
  const TO_LEFT = 2;
  const TO_UP = 3;

  const m = [];
  for (let i = 0; i < size; i += 1) {
    m[i] = [];
  }

  let current = 1;
  let currentSize = size;
  let point = [0, 0];
  let circle = 0;

  while (current < size ** 2 + 1) {
    for (let dir = TO_RIGHT; dir <= TO_UP; dir += 1) {
      if (dir === TO_RIGHT) point = [circle, circle];
      if (dir === TO_DOWN) point = [circle, currentSize - 1 + circle];
      if (dir === TO_LEFT)
        point = [currentSize - 1 + circle, currentSize - 1 + circle];
      if (dir === TO_UP) point = [currentSize - 1 + circle, circle];

      for (let pos = 0; pos < currentSize - 1; pos += 1) {
        m[point[0]][point[1]] = current;
        switch (dir) {
          case TO_RIGHT:
            point[1] += 1;
            break;
          case TO_DOWN:
            point[0] += 1;
            break;
          case TO_LEFT:
            point[1] -= 1;
            break;
          case TO_UP:
            point[0] -= 1;
            break;
          default:
        }

        if (current > size ** 2) {
          return m;
        }
        current += 1;
      }

      if (currentSize === 1) {
        m[circle][circle] = current;
        return m;
      }
    }

    currentSize -= 2;
    circle += 1;
  }
  return m;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(valMatrix) {
  const matrix = valMatrix;
  let n = 0;
  while (matrix[n] !== undefined) {
    n += 1;
  }

  let start = 0;
  let end = n - 1;
  while (end - start > 1) {
    for (let i = 0; i <= end - start - 1; i += 1) {
      const temp = matrix[end - i][start];
      matrix[end - i][start] = matrix[end][end - i];
      matrix[end][end - i] = matrix[start + i][end];
      matrix[start + i][end] = matrix[start][start + i];
      matrix[start][start + i] = temp;
    }
    end -= 1;
    start += 1;
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(valArr) {
  function heapify(heapArr, n, i) {
    const arr = heapArr;
    let root = i;
    let largest;
    while (root > -100) {
      largest = root;
      const l = 2 * root + 1;
      const r = 2 * root + 2;

      if (l < n && arr[l] > arr[largest]) {
        largest = l;
      }

      if (r < n && arr[r] > arr[largest]) {
        largest = r;
      }

      if (largest !== root) {
        [arr[root], arr[largest]] = [arr[largest], arr[root]];
        root = largest;
      } else {
        break;
      }
    }
  }

  const arr = valArr;
  let n = 0;
  while (arr[n] !== undefined) {
    n += 1;
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i -= 1) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i -= 1) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(valStr, iterations) {
  let str = valStr;
  const n = str.length;
  const even = Math.floor(n / 2);

  for (let iter = 0; iter < iterations; iter += 1) {
    const resultArr = new Array(n);
    for (let i = 0; i < n; i += 1) {
      if (i % 2) {
        resultArr[even + Math.trunc(i / 2)] = str[i];
      } else {
        resultArr[i / 2] = str[i];
      }
    }

    let result = '';
    for (let i = 0; i < n; i += 1) {
      result += resultArr[i];
    }
    str = result;

    str = result;
    if (str === valStr) {
      iter = iterations - (iterations % (iter + 1)) - 1;
    }
  }

  return str;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(valNumber) {
  let number = valNumber;
  const arr = [];
  while (number > 0) {
    arr.unshift(number % 10);
    number = Math.floor(number / 10);
  }

  const n = arr.length;
  let current;
  for (let i = n - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      current = i - 1;
      break;
    }
  }

  const leftPart = arr.splice(0, current);
  const rightPart = arr;
  const boundary = rightPart[0];
  let swapEl = 1;
  for (let i = rightPart.length - 1; i >= 0; i -= 1) {
    if (rightPart[i] > boundary && rightPart[i] < rightPart[swapEl]) {
      swapEl = i;
    }
  }

  [rightPart[0], rightPart[swapEl]] = [rightPart[swapEl], rightPart[0]];
  let resultArr = [];
  resultArr = [...leftPart, ...rightPart.splice(0, 1), ...rightPart.sort()];

  let result = 0;
  for (let i = 0; i < n; i += 1) {
    result = result * 10 + resultArr[i];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
