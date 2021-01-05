import React, {useState, useEffect} from 'react';
import { isInSavedColors } from './fx/isInSavedColors';
import {useSpring, animated, config} from 'react-spring'
// import { delay } from 'q';
import copy from 'copy-to-clipboard';

// TODO: isInSavedColors() est demandé à chaque survol


const GOLDEN_RATIO = 1.61803398875;

const Card = (props) => {
  
  const {saveThisColor, savedColors, color} = props;
  const [hasCopied,setHasCopied] = useState(false)
  const [hovered,setHovered] = useState(false)

  useEffect(()=>{
    setHasCopied(false)
  }, [color])

  const cardSpring = useSpring({
    from: {
      transform: `scale(1) translateY(20px)`,
    },
    transform: hovered ? `scale(1) translateY(0)` : `scale(1) translateY(20px)`,
    position: 'relative',
    zIndex: hovered ? 2 : 1,
  })
  const titleSpring = useSpring({
    from: {
      position: 'absolute',
      width: '100%',
      bottom: '50%',
      textAlign: 'center',
      left: 0,
    },
    config: config.stiff,
    transform: hovered ? `scale(0.75) translateY(-150%)` : `scale(1) translateY(0%)`,
    opacity: hovered ? 0 : 1,
  })
  const detailsSpring = useSpring({
    from: {
      opacity: 0,
      color: 'black',
      textAlign: 'left'
    },
    opacity: hovered ? 1 : 0,
    transform: hovered ? 'translate3d(0,0,0)' : 'translate3d(0,33%,0)' ,
    // config: config.gentle,
    config: {mass: 1, tension: 430, friction:30},

    delay: hovered ? 200 : 0
  });
  const backSpring = useSpring({
    from: {
      paddingBottom: `${100/GOLDEN_RATIO}%`,
      borderRadius: 3,
      transform: `scale(3, 5)`
    },
    transform: hovered ? `scale(1, 1)` : `scale(3, 5)`,
    // config: config.default,
    config: {mass: 1, tension: 430, friction:30},
    delay: 50
  })
  const saveButtonSpring = useSpring({
    from: {
      position:"absolute", 
      right: 40,
      top: 40,
      border: 0,
      transform: 'translate3d(15px,-15px,0)',
    },
    transform: hovered ? `translate3d(0px,0px,0)` : `translate3d(15px,-15px,0)`,
    // opacity: hovered ? 1 : 0,
    config: {mass: 1, tension: 430, friction:30},

    delay: hovered ? 200 : 0,
  })

  return (
    <animated.article className='card'
      style={{
        // background: `${color.hex}`,
        background: 'white',
        flex: 1,
        padding: 15,
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
        ...cardSpring
      }}
      onMouseEnter={()=>setHovered(true)}
      onFocus={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      onBlur={()=>setHovered(false)}
      // TODO: Tester focus-within (https://github.com/ferdaber/react-focus-within ?)
    >
      <animated.button 
        className="back"
        style={{
          ...backSpring,
          background: `${color.hex}`,
          display: 'block',
          border: 0,
          width: '100%'
        }}
        onClick={() => {
          copy(color.name)
          setHasCopied(true)
        }}
      >
        <span>{ hasCopied ? 'Copied!': 'Copy'}</span>
      </animated.button>


      <animated.div
        style={{...titleSpring}}
      >
        <h4>{color.name}</h4>
        <small>{color.source}</small>
      </animated.div>

      <animated.div 
        
        style={{
          ...saveButtonSpring
        }}
      >
        <button onClick={() => saveThisColor(color)} >{ isInSavedColors(color, savedColors) ? '❤': '♡'}</button>
      </animated.div>

      <animated.div
        style={{
          ...detailsSpring, 
      }}
      >
        
        <h3 style={{marginTop: '1em', marginBottom: '0.25em'}}>{color.name}</h3>
        /{color.source}<br/>
        {color.hex}<br/>
        {/* <small>{ 100 - Math.ceil(color.distance) } %</small><br/> */}
        
      </animated.div>
      
    </animated.article>
  )
}

export default Card
