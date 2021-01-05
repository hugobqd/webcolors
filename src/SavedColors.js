import React, { Component } from 'react'


export default class SavedColors extends Component {
  
  render() {
    const {savedColors, deleteSavedColors} = this.props;
    
    return (
      <div>
        {savedColors.map((color,i)=>{
          return (
            <div style={{backgroundColor: 'white',padding: 3, color: 'black', fontSize: 12}} key={color.name+color.source}>
              <span style={{backgroundColor: color.hex, paddingLeft: '1em',color: 'black', fontSize: 12, marginRight: 10}}></span>
              {color.name}
              <button onClick={()=>deleteSavedColors(i)}>X</button>
            </div>
          )
        })}
        <button onClick={()=>deleteSavedColors('all')}>Delete all</button>
      </div>
    )
  }
}
