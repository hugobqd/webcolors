import React, {Fragment, Component} from 'react';
import tinycolor from "tinycolor2"
import { ChromePicker } from 'react-color';
import PALETTE_CSS from './db/css';
import PALETTE_MATERIAL from './db/material';
import PALETTE_CRAYON from './db/crayon';
import PALETTE_TAILWINDCSS from './db/tailwindcss';
import { getClosestColors } from './fx/getClosestColors';
import { isInSavedColors } from './fx/isInSavedColors';
import Card from './Card';
import MyCheckbox from "./Checkbox";
import SavedColors from './SavedColors';

// ***
// import 'antd/dist/antd.css'
import { Keyframes, animated } from 'react-spring/renderprops'
import delay from 'delay'

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [
    { 
      from: { 
        x: 110,
        a: 0
      }, 
      x: 0,
      a: 1,
      delay: 5
    }, { 
      x: 110, 
      a: 0,
      delay: 8 
    }
  ],
  // single items,
  open: { delay: 0, x: 0, a:1 },
  // or async functions with side-effects
  close: async call => {
    await delay(4)
    await call({ delay: 0, x: 110,a:0 })
  },
})


// Autres Picker
// https://github.com/jaames/iro.js
// https://github.com/jaames/iro.js/blob/master/docs/guide.md
// elrumordelaluz.github.io/coloreact


/**
 *  Init Settings :
 */

const LUM_LIMIT = .25
const RESULTS_LENGTH = 4
const INIT_COLOR = tinycolor.random().toHexString()
const SIDEBAR_WIDTH = 210
// Checkbox:
const PALETTES = [
  ["css", true], 
  ["crayon", false], 
  ["material", false],
  ["tailwindcss", false],
];

// Get localstorage data
let localStorageSavedSettings = localStorage.getItem('colorSavedSettings') ? JSON.parse(localStorage.getItem('colorSavedSettings')) : {};
// Make valueSafe tinycolor function again
if (localStorageSavedSettings.valueSafe) {
  localStorageSavedSettings.valueSafe = tinycolor(localStorageSavedSettings.valueSafe._originalInput)
}


/**
 *  Components  :
 */ 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueInput: INIT_COLOR,
      valueSafe: tinycolor(INIT_COLOR),
      valueInputOk: true,
      savedColors: [],
      settingPalette: PALETTES.reduce(
        (options, option) => ({
          ...options,
          [ option[0] ]: option[1]
        }),
        {}
      ),
      settingResultLength: RESULTS_LENGTH,
      ...localStorageSavedSettings,
      openSidebar: undefined //keyframes
    }
  }
  toggleSidebar = () => this.setState(state => ({ openSidebar: !state.openSidebar }))


  /**
   *  FX events :
   */ 

  inputChange = e => {
    const val = e.target.value
    this.setState({
      valueInput: val
    });
    this.processValue(val)
  }

  inputSubmit = e => {
    e.preventDefault();
    // const val = this.refs.input.value
    // this.testValue(val)
    /** 
     *  Est-ce que le submit est utile ?
     *  Peut-être : dans le cas d'un mauvais input: montrer erreur de format
     */ 
  }

  colorPickerChange = (color) => {
    console.log('colorPickerChange', color)
    this.processValue(color.hex) 
  };

  saveThisColor = (colorObj) => {
    let newColor = colorObj
    delete colorObj.distance
    const isSaved = isInSavedColors(colorObj, this.state.savedColors)

    if ( isSaved === false ) {
      this.setState(prev => ({
          savedColors: [ ...prev.savedColors, newColor ]
        }), () => localStorage.setItem( 'colorSavedSettings', JSON.stringify(this.state) )
      )
    } else {  
      this.deleteSavedColors(isSaved);
    }
  }

  deleteSavedColors = (val) => {
    if (val === 'all') {
      this.setState(prev => ({
        savedColors: []
      }), 
        () => localStorage.setItem( 'colorSavedSettings', JSON.stringify(this.state) )
      )
    } else if (typeof(val) === 'number') {
      let savedColors = this.state.savedColors
      savedColors.splice(val,1)
      this.setState(prev => ({
        savedColors: savedColors
      }), 
        () => localStorage.setItem( 'colorSavedSettings', JSON.stringify(this.state) )
      )
    }

  }

  // Checkbox 
  // https://github.com/fedosejev/checkboxes-in-react-16/

  createCheckbox = option => (
    <MyCheckbox
      label={option[0]}
      isSelected={this.state.settingPalette[option[0]]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option[0]}
    />
  );
  createCheckboxes = () => PALETTES.map(this.createCheckbox);
  // Fin Checkbox


  /**
   *  FX processing :
   */ 

  createPalette = () => {
    let palette = []

    if (this.state.settingPalette.css) {
      palette = [...palette, ...PALETTE_CSS]
    }
    if (this.state.settingPalette.material) {
      palette = [...palette, ...PALETTE_MATERIAL]
    }
    if (this.state.settingPalette.crayon) {
      palette = [...palette, ...PALETTE_CRAYON]
    }
    if (this.state.settingPalette.tailwindcss) {
      palette = [...palette, ...PALETTE_TAILWINDCSS]
    }
    return palette
  }


  processValue = (value) => {
    const valTiny = tinycolor(value)
    console.log('processValue', valTiny)

    if (valTiny._ok) {
      this.setState({ 
          valueSafe: valTiny, 
          valueInput: valTiny._originalInput,
          valueInputOk: true,
        }, () => localStorage.setItem( 'colorSavedSettings', JSON.stringify(this.state) )
      )  
    } else {
      this.setState(
        { valueInputOk: false,},
      ) 
    }

  }

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
        settingPalette: {
          ...prevState.settingPalette,
          [name]: !prevState.settingPalette[name]
        }
      }),
      () => localStorage.setItem( 'colorSavedSettings', JSON.stringify(this.state) )
    );

  };

  render() {
    const {valueSafe,valueInput,savedColors} = this.state
    const currentPalette = this.createPalette()
    const results = getClosestColors(currentPalette,valueSafe,RESULTS_LENGTH)
    
    console.log('results', results)

    const stateSidebar =
      this.state.openSidebar === undefined
        ? 'peek'
        : this.state.openSidebar
        ? 'open'
        : 'close'
    
    return (
      <div>
        
        <div className="App" style={{
          backgroundColor: valueSafe.toHexString(),
          color: (valueSafe.getLuminance()) >= LUM_LIMIT ? '#000' : '#FFF',
          height: '100vh', 
          display: 'flex', 
          flex: 1, 
          flexDirection: 'column', 
          justifyContent: 'space-between'
        }}>
          <button 
            onClick={this.toggleSidebar}
            style={{
              position: 'fixed',
              top: 30,
              right: 30,
              zIndex: 11
            }}
          >
              Favorites {savedColors.length > 0 && `(${savedColors.length})`} {this.state.openSidebar ? '☚' : '☛'}
          </button>
          <div style={{position: 'absolute'}}>
            <ChromePicker
              color={ valueSafe.toHexString() }
              onChange={ this.colorPickerChange }
            />
          </div>
  
          <form onSubmit={this.inputSubmit}>
            <input 
              style={{
                padding: '100px',
                fontSize:60,
                width: '100%',
                textAlign: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'inherit',
                fontWeight:100
              }}
              type="text" 
              ref="input" 
              value={valueInput}
              onChange={this.inputChange} 
            />
          </form>

          <section style={{display:'flex'}}>
            {results.map((result,i)=>{
              return <Card color={ results[i] } key={i} i={i} saveThisColor={this.saveThisColor} savedColors={savedColors}></Card>
            })}
          </section>

          <Sidebar native state={stateSidebar}>
            {({ x, a }) => (
              <animated.div
                className="sidebar"
                style={{
                  transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                  position:'fixed', 
                  right: 0, 
                  top:0,
                  height: '100%',
                  backgroundColor: 'white',
                  boxShadow: a.interpolate(a => `0 0 ${a * 1.5}rem 0px rgba(0, 0, 0, ${a * 0.25})`),
                  zIndex:10,
                  padding: 20,
                  paddingTop: 80,
                  color: '#000'
                }}>
                  <h4>Favorites :</h4>
                  <SavedColors 
                    savedColors={savedColors}
                    deleteSavedColors={this.deleteSavedColors}
                  />
                  <hr/>
                  <h4>Settings :</h4>
                  <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}
                  </form>
              </animated.div>
            )}
          </Sidebar>

        </div>
        <section style={{fontSize: 8, width: '25%'}}>
          <pre >
          {JSON.stringify(this.state, null, 1)}<br/>
          {'Result[0]: '+JSON.stringify(results[0])}
          </pre>
        </section>
      </div>

    );
  }
}

export default App;
