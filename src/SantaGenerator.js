import { Utils } from "./Utils";

export class SantaGenerator {
  /**
   * Expand the giftable by 1 santa
   * @param {*} giftable the original relationship table
   * @returns a new table representing the modified table
   */
  static expandGiftable(giftable) {
    let newGiftable = giftable;
    const numOfSanta = giftable.length + 1;

    // Any existing santas can give gift to new one by default
    for (let i = 0; i < numOfSanta - 1; i++) {
      newGiftable[i].push(true);
    }

    // New santa can send gift to any existing santas by default
    newGiftable.push(Array(numOfSanta).fill(true));

    // New santa can not send/receive gift from himself
    newGiftable[numOfSanta - 1][numOfSanta - 1] = false;

    return newGiftable;
  }

  /**
   * @param {*} giftable the original relationship table
   * @param {*} index of the santa to be removed from the table
   * @returns a new table representing the modified table
   */
  static shrinkGiftable(giftable, index) {
    let newGiftable = giftable;

    // Remove row
    newGiftable.splice(index, 1);

    // Remove column
    for (let i = 0; i < newGiftable.length; i++) {
      newGiftable[i].splice(index, 1);
    }

    return newGiftable;
  }

  /**
   * Flip G(a,b) and G(b, a)
   * @param {*} a index of santa (a)
   * @param {*} b index of santa (b)
   */
  static flipGiftable(giftable, a, b) {
    let newGiftable = giftable;
    newGiftable[a][b] = !newGiftable[a][b];
    newGiftable[b][a] = !newGiftable[b][a];

    return newGiftable;
  }

  static shuffle(santas, giftable) {
    const isResultValid = (result) => {
      for (var i = 0; i < result.length; i++) {
        if (i === result[i]) {
          return false;
        }
      }
      return true;
    };

    let assignments;

    do {
      // Generate new pattern
      assignments = Utils.derangement(santas.length);
    } while (!isResultValid(assignments));

    // Assign recipient for each santa to the 'assigned' field
    for (let i = 0; i < santas.length; i++) {
      santas[i].assigned = assignments[i];
    }

    return [...santas];
  }
}
