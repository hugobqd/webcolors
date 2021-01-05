import DeltaE from 'delta-e';
import { getLab } from './getLAB';

/**
 * 
 * @param {Object[]} db - Array of color with {name: and hex:}
 * @param {*} color - A color that can be undestand by tinycolor
 * @param {number} length - length of retuned array, default: 0
 */

export const getClosestColors = (db, color, length = 0) => {

  const dbWithDistance = db.map((item) => (
    {...item, distance: (DeltaE.getDeltaE00(getLab(item.hex), getLab(color))) }
  ))

  dbWithDistance.sort(function (itemA, itemB) {
    return itemA.distance - itemB.distance;
  });

  if (length > 0) {
    return dbWithDistance.slice(0, length)
  } else {
    return dbWithDistance
  }

}