/**
 * isInSavedColors(colorObj, this.state.savedColors)
 * return index position or false
 * 
 * @param {Object[]} colorObj - {name: 'name', hex : '#123456', source: 'source'}
 * @param {Object[]} savedColors - this.state.savedColors
 */

export const isInSavedColors = (colorObj, savedColors) => {

  const foundItem = savedColors.findIndex((item)=>{
    return (item.name === colorObj.name && item.hex === colorObj.hex && item.source === colorObj.source)
  })

  console.log('inInSavedColors', colorObj.name, (foundItem === -1))

  if (foundItem === -1) {
    return false
  } else {
    return foundItem
  }

}