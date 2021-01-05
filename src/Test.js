import React from 'react';
import tinycolor from 'tinycolor2'

import { getClosestColors } from './fx/getClosestColors';
import DB_WEB from './db/web';


const LUM_LIMIT = .33
const DB_COLOR = DB_WEB

const Card = ({color, i}) => {
  return (
    <div style={{
      background: `${color.hex}`,
      flex: `${7/(i+1)}`,
      paddingTop: 40,
      paddingBottom: 40,
      overflow: 'hidden'
    }}>
      {color.name} 
      <small></small>
    </div>
  )
}

const Test = ({value}) => {

  let color = tinycolor(value);
  // console.table({
  //   getOriginalInput: color.getOriginalInput(),
  //   ok: color._ok,
  //   isValid: color.isValid(),
  //   toHexString: color.toHexString(),
  //   toString: color.toString("hex"),
  //   r: color._r,
  //   rgb: color.toRgb(),
  //   rgbString: color.toRgbString(),
  //   // name: color.toName(),
  //   isLight: color.isLight(),
  //   isDark: color.isDark(),
  //   getBrightness: color.getBrightness(),
  //   getLuminance: color.getLuminance(),
  //   random: tinycolor.random().toString("hex")
  // })

  const result = getClosestColors(DB_COLOR,color)

  return (
    <pre style={{
      color: color.getLuminance() >= LUM_LIMIT ? '#000' : '#FFF',
      background: color.toHexString(),

    }}>
      <h1 style={{
      background: color.toHexString(),
      padding:20,}}
      >
        Value: { color.toString() }
      </h1>
      <div style={{
        display: 'flex',
      }}>
        <Card color={ result[0] } i={0}></Card>
        <Card color={ result[1] } i={1}></Card>
        <Card color={ result[2] } i={2}></Card>
        <Card color={ result[3] } i={3}></Card>
      </div>

    </pre>
  )
}

export default Test