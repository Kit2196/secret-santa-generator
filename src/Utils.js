export class Utils {
  /**
   * Calculate the factorial for n
   *
   * @returns n!
   */
  static factorial(n) {
    return n > 1 ? this.factorial(n - 1) * n : 1;
  }

  /**
   * Generate a random integer between range
   *
   * @param {int} min
   * @param {int} max
   * @returns a random integer between min and max
   */
  static randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  /**
   * Generate a random derangement array
   *
   * Based on "Generating Random Derangements" by Martinez et. al
   * source: https://epubs.siam.org/doi/pdf/10.1137/1.9781611972986.7
   * @param {int} n the length of the desired derangement array
   * @return the resulting derangement array
   */
  static derangement(n) {
    let result = [...Array(n).keys()]; // init array: 0,1, 2, ...,n-1
    let mark = Array(n).fill(false); // init: all false

    const D = (n) => (Utils.factorial(n) + 1) / Math.E;

    let i = n; // current index
    let u = n;

    while (u >= 2) {
      if (!mark[i - 1]) {
        do {
          var j = Utils.randomInt(1, i - 1);
        } while (mark[j - 1]); // Until !mark[j]

        // swap A[i] and A[j]
        [result[i - 1], result[j - 1]] = [result[j - 1], result[i - 1]];

        let p = Math.random();
        if (p < ((u - 1) * D(u - 2)) / D(u)) {
          mark[j - 1] = true;
          u--;
        }
        u--;
      }
      i--;
    }

    return result;
  }
}
