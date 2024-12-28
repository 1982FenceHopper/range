function closestVal(n, direction, decimals) {
  const factor = Math.pow(10, decimals);
  const epsilon = Math.abs(n) * Number.EPSILON;
  const step = direction > n ? epsilon : -epsilon;
  let next = n + step;

  if (decimals == 0) {
    return Math.round(next);
  } else {
    return Math.round(next * factor) / factor;
  }
}

/**
 * Clamps a number within a closed range of x and y
 * @param {number} n - Number to process on
 * @param {number} x - Lower bound of range
 * @param {number} y - Upper bound of range
 * @returns
 */
function crange(n, x, y) {
  return Math.min(Math.max(n, x), y);
}

/**
 * Clamps a number within an open range of x and y based on number of decimals for each open ended bounds.
 * @param {number} n - Number to process on
 * @param {number} x - Lower bound of range
 * @param {number} y - Upper bound of range
 * @param {number} d - Number of decimals, default = 0
 */
function orange(n, x, y, d = 0) {
  let decimal = d;

  if (decimal < 0) {
    console.warn(
      "[RANGE_LIB]: A negative decimal was passed, so d is set to 0"
    );
    decimal = 0;
  }

  const closeMin = closestVal(x, y, decimal);
  const closeMax = closestVal(y, x, decimal);

  return Math.min(Math.max(n, closeMin), closeMax);
}

module.exports = { crange, orange };
