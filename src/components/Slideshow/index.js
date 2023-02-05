/* eslint-disable react-hooks/exhaustive-deps */
import './styles.css'
import { React, useState, useEffect } from 'react'
import images from '../../assets/images/jpeg/exports.js'
import Mask from '../Mask/index.js'

/*
- import array named images
- create a for loop that iterates through the array
- make the source for the img element === output of the for loop
- add delay timer to the for loop approx. 20s
  */

const Slideshow = () => {
  const [background, setBackground] = useState(images[0].img)
  const [count, setCount] = useState(0)

  // let count = 0

  function counter() {
    if (count < images.length - 1) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
    console.log(count + 1)
  }

  /*
useEffect takes in two arguments: 
  1. a function that it's going to execute upon change of its dependency array
  2. dependency array: the array(s) useEffect will watch waiting for a change in data
*/

  useEffect(() => {
    const intervalHandle = setInterval(counter, 15000)
    setBackground(images[count].img)
    return () => {
      clearInterval(intervalHandle)
      // console.log(images[count].img)
    }
  }, [
    count,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    counter,
  ])

  /*
  - This is able to change background image of ONE div per the interval timing, creating a loop
  - Impossible to use CSS transition on just * one * class (?)
  - Need 2 background image divs? 
  - two classes: one active, one inactive
    - <div className="active"></div> 
    - <div className="inactive"></div> 
  - after interval, divs swap classes
  - CSS transition with opacity 
  - inactive class to have opacity 0
  - active class to have opacity 1
    - transition: opacity 3s ease-in-out;
  
  How will the divs know which image to display?
  - possible to tie backgroundImage to div with specific className?




  */

  return (
    <>
      <Mask loaded={background ? true : false} />
      <div
        id="imageContainer"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* <img src={background} alt={background}></img> */}
        <h1 className="hero-title">FLASHJDN</h1>
        <h4 className="subtitle"> {images[count].location} </h4>
      </div>
    </>
  )
}

export default Slideshow
